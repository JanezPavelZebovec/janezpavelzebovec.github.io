import csv
import copy
import re
from pathlib import Path
from lxml import etree

SVGNS = "http://www.w3.org/2000/svg"

BARVE = {
    "N": "#00ff00",
    "V": "#ff0000",
    "I": "#00007d",
}
PRIVZETA_BARVA = "#007dff"

with open("prijemi.csv", "r", newline="", encoding="UTF-8") as PRIJEMI:
    prijemi = list(csv.reader(PRIJEMI))[1:]

kl_drevo = etree.parse("klarinet.svg")

#os.makedirs("slike_prijemov", exist_ok=True)
mapa = Path("slike_prijemov")
mapa.mkdir(exist_ok=True)
for datoteka in mapa.glob("*.svg"):
    datoteka.unlink() # Izbrišemo vse datoteke SVG, ki so v mapi že od prej

def primi(gradnik, barva):
    slog = gradnik.get("style", "")
    if re.search(r"fill:[^;]*", slog):
        slog = re.sub(r"fill:[^;]*", f"fill:{barva}", slog)
    else:
        slog += f";fill:{barva}"
    gradnik.set("style", slog)

ime_prej = ""

seznam = open(f"seznam_prijemov.html", "a", encoding="UTF-8")
seznam.truncate(0)
    
prvi = True
for v in prijemi:
    if len(v) < 2:
        continue
    ime = v[0]
    tipke = v[1].split("-")

    if not tipke:
        print(f"Opozorilo: prijem za {ime} ni vpisan. Preskočeno.")
        continue

    if ime == ime_prej:
        stevec_ime += 1
    elif ime != ime_prej:
        stevec_ime = 0
        if not prvi:
            seznam.write("</div>\n")
        prvi = False
        seznam.write(f"<div id='{ime}'>\n")
    ime_prej = ime

    kl2_drevo = copy.deepcopy(kl_drevo) # ustvarimo dvojnik klarineta
    kl2_koren = kl2_drevo.getroot()

    if tipke != [""]:
        for t in tipke:
            barva = BARVE.get(t[0], PRIVZETA_BARVA)
            if t[0] in BARVE:
                t = t[1:]

            tipka = kl2_koren.xpath(f".//*[@id='T{t}']")
            if not tipka:
                print(f"Opozorilo: tipke T{t} ni bilo mogoče najti ({ime})")
                continue
            primi(tipka[0], barva)

    ime_slike = ime.replace(" ", "_").replace("/", "-")
    ime_datoteke = "slike_prijemov/" + ime_slike + "-" + str(stevec_ime) + ".svg"

    seznam.write(f"<image src='{ime_datoteke}' alt='{ime} - {stevec_ime}' />\n")

    kl2_drevo.write(ime_datoteke, xml_declaration=True, encoding="UTF-8")

seznam.close()
