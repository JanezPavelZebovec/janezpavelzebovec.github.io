---
title: Vodič skozi namestitev Linuxa
date: 2026-05-11
description: Namestitev Linux Debiana, kot ga uporabljam jaz sam
keywords: Linux, namestitev operacijskega sistema
author: Janez Pavel Žebovec
---

# Vodič skozi namestitev uporabniškega okolja na Linux Debianu

Nekatere moje stare nastavitvene in druge datoteke Linuxa se še nahajajo na [Codebergu: My Linux Configs](https://codeberg.org/JanezPavelZebovec/My_Linux_configs). Sicer pa je tu seznam najnovejših datotek, ki so na tem spletišču:

- etc/systemd/system/
    - [log-halt.service](/moj_linux/etc/systemd/system/log-halt.service)
    - [log-poweroff.service](/moj_linux/etc/systemd/system/log-poweroff.service)
    - [log-reboot.service](/moj_linux/etc/systemd/system/log-reboot.service)
    - [log-startup.service](/moj_linux/etc/systemd/system/log-startup.service)
- home/janezpavel/
    - .config/
        - [lf/lfrc](moj_linux/home/janezpavel/.config/lf/lfrc)
        - matplotlib/stylelib/
            - [a4leze.mplstyle](moj_linux/home/janezpavel/.config/matlpotlib/stylelib/a4leze.mpstyle)
            - [a4pokonci.mplstyle](moj_linux/home/janezpavel/.config/matlpotlib/stylelib/a4pokonci.mpstyle)
            - [fpr.mplstyle](moj_linux/home/janezpavel/.config/matlpotlib/stylelib/fpr.mpstyle)
            - [latex.mplstyle](moj_linux/home/janezpavel/.config/matlpotlib/stylelib/latex.mpstyle)
            - [rof.mplstyle](moj_linux/home/janezpavel/.config/matlpotlib/stylelib/rof.mpstyle)
        - [sxhkd/sxhkdrc](moj_linux/home/janezpavel/.config/sxhkd/sxhkdrc)
        - [vim/vimrc](moj_linux/home/janezpavel/.config/vim/vimrc)
        - [mimeapps.list](moj_linux/home/janezpavel/.config/mimeapps.list)
    - .local/bin/
        - [johm](/moj_linux/home/janezpavel/.local/bin/johm)
        - [namesti-usb](/moj_linux/home/janezpavel/.local/bin/namesti-usb)
        - [posnetki](/moj_linux/home/janezpavel/.local/bin/posnetki)
        - [raba](/moj_linux/home/janezpavel/.local/bin/raba)
        - [raba-izbira](/moj_linux/home/janezpavel/.local/bin/raba-izbira)
        - [raba-statistika](/moj_linux/home/janezpavel/.local/bin/raba-statistika)
        - [status-bar](/moj_linux/home/janezpavel/.local/bin/status-bar)
        - [ugasni](/moj_linux/home/janezpavel/.local/bin/ugasni)
    - viri/
        - [dwm/config.h](/moj_linux/home/janezpavel/viri/dwm/config.h)
        - slock/
            - [config.h](/moj_linux/home/janezpavel/viri/slock/config.h)
            - [slock.c](/moj_linux/home/janezpavel/viri/slock/slock.c)
        - slstatus/
            - [config.h](/moj_linux/home/janezpavel/viri/slstatus/config.h)
            - [Makefile](/moj_linux/home/janezpavel/viri/slstatus/Makefile)
            - [components/raba.c](/moj_linux/home/janezpavel/viri/slstatus/raba.c)
        - [st/config.h](/moj_linux/home/janezpavel/viri/st/config.h)
    - [.bashrc](/moj_linux/home/janezpavel/.bashrc)
    - [.profile](/moj_linux/home/janezpavel/.profile)
    - [.xinitrc](/moj_linux/home/janezpavel/.xinitrc)

Tukaj so navedeni koraki, po katerih prideš do skoraj enakega okolja kot je moje:

## Ustvarjanje zagonskega ključka in dostop do zagonskega *menija*

- [Debian.org](https://www.debian.org/) > [Other downloads](https://www.debian.org/distrib/) > [small installation image](https://www.debian.org/distrib/netinst) > prenesi **amd64**. S tem si prenesil datoteko ** \*.iso**
- Ustvari zagonski ključek (ang. *bootable flash USB*) s to datoteko. V ta namen na Windowsu uporabi npr. [Rufus](https://rufus.ie/sl/) ali [Balena Etcher](https://etcher.balena.io/).
- V programu izberi datoteko \*.iso in napravo (najpogosteje je to ključek USB), ki jo boš uporabil za nameščanje. Pri tem bo izbrisano vse, kar je bilo prej na tej napravi (npr. USB)
- Zaženi računalnik in pritiskaj **F12** ali **F9** (odvisno od računalnika, lahko je tudi kaj tretjega, pogosto pa piše, kaj naj bi pritiskal)
- Odpre se zagonski *meni*, kjer izbereš svojo zagonsko napravo (ključek USB)

## Namestitev *operacijskega sistema*

Izberi **Graphical install** ali **Install**

- Jezik nastavi na angleščino (čeprav je na voljo tudi v slovenščini), ker je tako mnogo lažje razhroščevati morebitne napake
- Državo lahko izbereš svojo (*Slovenia*, predvidevam)
- Tipkovnico izbereš tako kot jo imaš (*Slovenian*, predvidevam)
- Izberi *hostname*, kar je ime tvoje naprave (kot bo vidno v omrežju in tebi)
- Ime domene (*Domain name*) pusti prazno (razen če vzpostavljaš strežnik – pa tudi v tem primeru se da to nasataviti kasneje)
- Geslo skrbnika (*Root password*) pusti prazno, če hočeš biti edini uporabnik in s pravicami skrbnika (*root*a)
- Izberi svoje uporabniško ime (*Full name for the new user*)
- Izberi geslo (tega novoustvarjenega uporabnika, ki bo imel skrbniške pravice, če nisi predhodno izbral gesla skrbnika)
- *Partitioning method* izberi *Guided – use entire disk*, če hočeš imeti na napravi le Linux (ostale podatke na disku bo izbrisalo!)
- Pazljivo izberi pravi disk, na katerega boš namestil Linux (da ne izbereš recimo zagonskega ključka, ker bo potem Linux namestilo na ključek)
- Izberi ločena *particija* za ** \home** (to pomeni, da ločiš svoje datoteke – hranjene v \home – od datotek operacijskega sistema, ki jih praviloma ne urejaš neposredno)
- Potrdi
- Zdaj bo namestilo *operacijski sistem*, ter preneslo in maestilo vse potrebne *pakete/programe*
- Zavrni *Scan extra installation media*, če nočeš namestiti Linuxa na dodatno napravo
- Izberi svojo državo za *archive mirror*
- Izbereš lahko privzet strežnik (*archive mirror*) *deb.debian.org* za prejem posodobitev, razen če veš, kjer ti je najbljižje, oz. je zate najhitrejši
- *HTTP proxy* pusti prazno
- Prikaže se seznam razpoložljivih uporabniških vmesnikov (GNOME, Xfce, GNOME Flashback, KDE Plasma, Cinnamon, MATE, LXDE, LXQt) oz. spletni/SSH strežnik. Odizberi privzeto izbran uporabniški vmesnik GNOME in *Debian desktop environment*, ker bomo v nadaljevanju namestili DWM (če pa tega nočeš, se naše poti tu razidejo in je nadaljevanje Vodiča skoraj brezpredmetno) in pusti izbrano *standard system utilities*
- Če si izbral katerega izmed uporabniških vmesnikov, se bo zdaj prenesel
- *Install the GRUB boot loader* potrdi (to je zagonski *meni*)
- Izberi napravo, kamor želiš namestiti GRUB (to je skoraj zagotovo disk naprave, na katero trenutno nameščaš Linux) – običajno **/dev/sda** ali **/dev/vda**
- Namestitev Linuxa je končana, nadaljuj na ponovni zagon

Zagon novega *operacijskega sistema*:

- Ob ponovnem zagonu v zagonskem *meniju* izberi **Debian GNU/Linux**
- Zdaj si v Linuxu brez uporabniškega vmesnika (ker ga moramo še namestiti, poleg še nekaterih drugih zadev)
- Prijavi se, kot zahtevano, z uporabniškim imenom in geslom, ki si ju nastavil

## Urejanje *operacijskega sistema*

- `sudo apt update` – posodobi seznam nameščenih *paketov programov*
- `sudo apt install` ... – namesti orodje ...
    - `xorg` – namesti strežnik X
    - `xinit` – *program*, ki se izvede ob zagonu; lahko tudi nastavimo, kaj vse naj se še zažene ob zagonu *sistema*
    - `git` – [Git](https://git-scm.com/), orodje za upravljanje z izvorno *kodo* (tako tudi prenos datotek s spletišč kot SO GitHub, GitLab in Codeberg)
    - `curl` – [Curl](https://curl.se/), orodje za en izmed načinov prenosa datotek s spleta
    - `make` – program za "izgradnjo", prevajanje orodij iz "nastavitvenih datotek" v *binarne* za uporabo
    - `build-essential` – namesti potrebne pakete za izgradnjo z ukazom `make`
    - `network-manager` – orodje za upravljanje z omrežjem
- `sudo systemctl start NetworkManager` – zažene NetworkManager
- `sudo systemctl enable NetworkManager`
- `nmcli device wifi connect ime_omrežja password geslo_omrežja` – tako se lahko zdaj povežeš tudi na na brezžično omrežje (izbirno)

### Nameščanje Sucklessovih orodij iz vira

- `mkdir viri` – ustvari *mapo*, v katero bomo shranili programe, prenešene iz vira
- `cd viri` – premakni se v to *mapo*
- `git clone` ... – prenese zadevo (*repozitorij*) s spleta
    - `https://git.suckless.org/dwm` – [Dynamic Windows Manager (DWM)](https://dwm.suckless.org/), upravitelj oken
    - `https://git.suckless.org/dmenu` – [Dynamic Menu (DMenu)](https://tools.suckless.org/dmenu/), orodna (*statusna*) vrstica
    - `https://git.suckless.org/st` – [Simple terminal (ST)](https://st.suckless.org/), *terminal*
    - `https://git.suckless.org/slock` – [Simple X display locker (SLock)](https://tools.suckless.org/slock/), zaklenjen zaslon
    - `https://git.suckless.org/slstatus` – [SLStatus](https://tools.suckless.org/slstatus/), prikazovalnik stanja v orodni vrstici, kot je ura, *baterija*, omrežna povezava, ... (če ne ustvariš kar svojega)
    - `https://git.suckless.org/surf` – [Surf](https://surf.suckless.org/), spletni brskalnik

**Nameščanje orodij**:

- `sudo apt install` ... – namesti odvisnosti za DWM (morda te potrebujeta tudi ST in Dmenu, ker zanju ne potrebujemo dodatnih odvisnostih) ...
    - `libx11-dev` – za osnovno sporazumevanje s strežnikom X
    - `libxft-dev` – za prikaz pisav
    - `libxinerama-dev` – za podporo več zaslonov
    Morda je dobro imeti še (tega sam še nisem potreboval):
    - `libxrandr-dev` – za dinamično spreminjanje ločljivosti in usmeritve zaslona
    - `libxcb-res-dev` – omogoča dostop do določenih *sistemskih* podatkov za npr. *statusno* vrstico
- `sudo apt install libxrandr-dev` –  dodatna odvisnost za Slock
- `cd ~/viri/ime_programa/` – pojdi v mapo prenešenega orodja
- prilagodi nastavitveno datoteko **config.h** svojim željam (to lahko storiš tudi kasneje in ponoviš sledeči korak)
- `sudo make clean install` – pretvori orodje v uporabni *binarni* zapis in namesti orodje

### Zagon *sistema*

- `echo "exec dwm" > ~/.xinitrc` – v nastavitveno datoteko [**~/.xinitrc/**](/moj_linux/home/janezpavel/.xinitrc) zagonskega *programa* doda vrstico, ki zažene DWM ob zagonu strežnika X
- `startx` – zažene strežnik X (torej tudi DWM, a le, če si pred tem ustrezno uredil **~/.xinitrc**
- terminal ST lahko zdaj odpreš z bližnjico **Shift+Alt+Enter**

### Tipkovnica

Zdi se mi, da če si izbral pravo tipkovnico med postopkom nameščanja *operacijskega sistema*, bi moral imeti nastavljeno že pravo tipkovnico (?; vsaj jaz ob zadnji namestitvi z njo nisem imel težav), sicer pa je postopek tak (morda je treba namestiti še kakšen *program*):

- `sudo dpkg-reconfigure keyboard-configuration` – zaženi programček za nastavitev tipkovnice
    - izberi *model* svoje tipkovnice
    - izberi slovensko tipkovnico "*Slovenian*"
    - izberi *Default* (privzeto) tipko za **AltGr**
    - za *Compose key* pa *Right Alt (AltGr)* (ali pa nič, če ne rabiš)
- `sudo systemctl restart keyboard-setup.service` – znova zaženeš *sistem* za uporabo tipkovnice
- nastavi slovensko tipkovnico v terminalu s `setxkbmap si`in to dodaj v **~./xinitrc**, da se ob zagonu vedno nastavi prava tipkovnica

### Čas

- `timedatectl` – izpiše podatke o nastavljenem časovnem pasu, oz. trenutnem času
- `sudo timedatectl set-timezone Europe/Ljubljana` – nastavi časovni pas na Slovenijo
- trenutni čas lahko bolj strnjeno preveriš tudi z `date`

### Zunanji pogoni

- `sudo apt install udisks2` – namesti udisksctl za upravljanje z USB-ji
- `udisksctl mount -b /dev/sda1` – priključi napravo (najpogostje je ime naprave *sda1*, kot v tem primeru, oz. *sda2* itd. če je naprav več, oz. *sdb1*)
- `udisksctl unmount -b /dev/sda1` – varno izvrže napravo

Za nekoliko bolj priročno uporabo zunanjih pogonov:

- `mkdir -p ~/usb` – ustvari *mapo* usb v domači mapi
- `ln -s /media/janezpavel ~/usb` – ustvari simbolno povezavo med *mapo*, kamor zgornji ukaz priklaplja naprave in novo ustvarjeno *mapo* v domači *mapi*

### Zvok

- `sudo apt install` ...
    - `alsa-utils`
    - `pulseaudio`
    - `pulseaudio-utils` – (je tale sploh res potreben?)
    - `pulsemixer` – orodje za uravnavanje glasnosti, izbiranje izhodov)
- `pulseaudio --start`

Lahko ne uporablja želenih zvočnih *kartic* (izhodov; značilno se to zgodi, ko na HDMI priključimo dodaten zaslon z lastnimi zvočniki). To rešimo takole:

- `pactl list short sinks` – izpiše seznam izhodov
- `pactl set-default-sink ime_s_seznama.analog-stereo` – nastavi zvočno kartico vgrajenih zvočnikov, oz. ne zvočnikov priključenega zaslona (je to vedno *.analog-stero*?). Tako potem delujejo tudi slušalke (ker delujejo na zvočni *kartici* računalnika, ne povezanega zaslona).

### Odstranitev nadležnega piskanja

Za piskanje je odgovoren *modul* **pcspkr**.

- `sudo rmmod pcspkr` – onemogoči ga začasno (do ponovnega zagona *sistema*)
- `echo "blacklist pcspkr" | sudo tee /etc/modprobe.d/nobeep.conf` – onemogoči piskanje za vedno (tudi po ponovnem zagonu *sistema*)- to še ne onemogoči piskanja v trenutni seji (za to uporabi zgornji ukaz), ampak šele ob ponovnem zagonu
    - enakovredno: v datoteko [**/etc/modprobe.d/nobeep.conf**](/moj_linux/etc/modprobe.d/nobeep.conf) dodaj `blacklist pcspkr`
- `lsmod | grep pcspkr` – preveri, če je *modul* trenutno dejaven/omogočen

### Sistemski temni način

Da lahko v programih nastavimo *sistemsko* privzeto temo (v našem primeru temno), jim moramo to nekako povedati. To storimo s sledečima datotekama:

- `mkdir -p ~/.config/gtk-3.0`
- `mkdir -p ~/.config/gtk-4.0`
- `printf "[Settings]\ngtk-application-prefer-dark-theme=1\n" > ~/.config/gtk-3.0/settings.ini`
- `printf "[Settings]\ngtk-application-prefer-dark-theme=1\n" > ~/.config/gtk-4.0/settings.ini`

### Lastne bližnjice

- `sudo apt install sxhkd` – namesti program za dodajanje lastnih *sistemskih* bližnjic
- `sxhkd &` – zažene SXHKD; najlepše je to dodati v [**~/.xinitrc/**](/moj_linux/home/janezpavel/.xinitrc) (nekam pred `exec dwn`, da se zažene že samodejno ob zagonu sistema)
- `mkdir -p ~/.config/sxhkd/` – ustvari *mapo* za nastavitvene datoteke SXHKD
- `touch ~/.config/sxhkd/sxhkdrc` – ustvari datoteko [**sxhkdrc**](/moj_linux/home/janezpavel/.config/sxhkd/sxhkdrc) za določanje lastnih bližnjic
- `pkill -usr1 -x sxhkd` – s tem po urejanju nastavitvene datoteke ponovno zaženeš SXHKD (ne da bi znova zagnal ves *sistem*), da spremembe stopijo v veljavo


### Posnetki zaslona

- `sudo apt install imagemagick xclip`– programa potrebna za slikanje zaslona

### Ploščica na dotik

- `sudo apt install xinput`
- `xinput --set-prop 'MSFT0001:00 06CB:CE2D Touchpad' 'libinput Tapping Enabled' 1` – omogoči klikanje z dotikom (*tapom*)
- `xinput --set-prop 'MSFT0001:00 06CB:CE2D Touchpad' 'libinput Natural Scrolling Enabled' 1` – drsenje v pravo smer s ploščico (drs gor premakne stran dol)
- zgornja ukaza je smiselno dodati v ~/.xinitrc, da se to nastavi samodejno ob vsakem zagonu

### Orodja za vsakdanjo rabo

- `sudo apt install` ...
    - `vim` – [Vim](https://www.vim.org/), urejevalnik golega besedila ([na GitHubu](https://github.com/vim/vim))
    - `lf` – [LF](https://github.com/gokcehan/lf), raziskovalec shrambe ([na GitHubu](https://github.com/gokcehan/lf), izpeljanka [Rangerja](https://ranger.fm/))
    - `mpv` – [MPV](https://mpv.io/), predvajalnik posnetkov
    - `vlc` – [VLC](https://www.videolan.org/vlc/), predvajalnik posnetkov
    - `zathura` – [Zathura](https://pwmt.org/projects/zathura/), ogledovalnik PDF ([na GitHubu](https://github.com/pwmt/zathura))
    - `nsxiv` – [NSXIV](https://codeberg.org/nsxiv/nsxiv), ogledovalnik slik 
    - `simple-scan` – *skeniranje*
    - `inkscape` – [Inkscape](https://inkscape.org/), urejevalnik SVG
    - `gimp` – [GIMP](https://www.gimp.org/), urejevalnik slik
    - `sc-im` – [SC-IM](https://github.com/andmarti1424/sc-im), preprost urejevalnik preglednic
    - `ncmpcpp` – [NCMPCPP](https://github.com/ncmpcpp/ncmpcpp), poslušanje glasbe (po *avtorjih*, *albumih*, seznamih predvajanja, ...)

#### Brskalnik Brave

Ker [Brava](https://brave.com/) ni v uradni knjižnici Debiana, je treba dodati povezavo do Bravevove knjižnice (glej tudi [*Installing Brave on Linux – Debian, Ubuntu, Mint*](https://brave.com/linux/#debian-ubuntu-mint)):

- `sudo curl -fsSLo /usr/share/keyrings/brave-browser-archive-keyring.gpg https://brave-browser-apt-release.s3.brave.com/brave-browser-archive-keyring.gpg`
- `sudo curl -fsSLo /etc/apt/sources.list.d/brave-browser-release.sources https://brave-browser-apt-release.s3.brave.com/brave-browser.sources`
- `sudo apt update`
- `sudo apt install brave-browser`

Morda deluje tudi tole (?)
 
- `curl -fsS https://dl.brave.com/install.sh | sh`

#### Dodatna orodja

- `sudo apt install` ...
    - `pandoc` – [Pandoc](https://pandoc.org/), pretvornik *dokumentov*
    - `abook` – [ABook](https://abook.sourceforge.io/), imenik/urejevalnik stikov
    - `calcurse` – [CalCurse](https://calcurse.org/) ([na GitHubu](https://github.com/lfos/calcurse)), *koledar*
    - `lftp` – [LFTP](https://lftp.yar.ru/), prenos datotek med napravami z različnimi *protokoli* (FTP, FTPS, SFTP, HTTP, HTTPS, BitTorrent, FISH)
    - `sshpass`
    - `htop` – [HTOP](https://htop.dev/), *statistika procesov sistema*
    - `fastfetch` – [FastFetch](https://github.com/fastfetch-cli/fastfetch), podatki o *sistemu* v *terminalu*
    - `solvespace` – [Solvespace](https://solvespace.com/), urejevalnik 3R (*3D*; [na GitHubu](https://github.com/solvespace/solvespace))
    - `fontforge` – [GontForge](https://fontforge.org/), urejevalnik pisav [na GitHubu](https://github.com/fontforge/fontforge)
    - `josm` – [JOSM](https://josm.openstreetmap.de/), urejevalnik OpenStreetMap
    - `gramps` – [Gramps](https://gramps-project.org/), rodoslovno orodje

##### Musescore

[Musescore](https://musescore.org/) je orodje za pisanje notnih zapisov

Debian ima precej staro različico, zato je bolje [prenesti AppImage](https://musescore.org/en/download) z Musescorove uradne strani.

- prenesi/shrani jo v ~/.local/bin/
- po želji preimenuj privzeto ime oblike *MuseScore-Studio-4.6.5.253511702-x86_64.AppImage* v *MuseScore.AppImage*, da ti ob posodobitvah ni treba spreminjati poti v .desktop, če jo imaš nastavljeno (preneseš novo različico in jo prav tako preimenuješ, staro pa izbrišeš)
- `chmod +x ~/.local/bin/MuseScore.AppImage` – naredi datoteko izvršljivo
- `~/.local/bin/MuseScore-4.4.2.AppImage` da poženeš orodje, oz. `~/.local/bin/MuseScore.AppImage install`, če želiš, da samodejno ustvari še datoteko ~/.local/share/applications/MuseScore.desktop, navodilno datoteko in *ikone*

##### NeoMutt

- `sudo apt install neomutt isync msmtp pass curl ca-certificates gettext` – Neomutt in njegove odvisnosti
    - Izpisalo se bo vprašanje, ali želiš omogočiti *profil* AppArmor za msmpt, kar je priporočeno potrditi.
- `sudo apt install notmuch lynx abook urlview` – priporočeni programi za zraven
- `gpg --full-generate-key` – ustvari ključ GPG
    - izberi privzeto vrsto: ECC (*sign and encrypt*; 9)
    - izberi privzeto krivuljo (*Curve 25519*, 1)
    - izberi privzeti čas poteka: ne poteče (*key does not expire*; 0)
    - vpraša te po imenu
    - vpraša te po el. naslovu
    - izbereš lahko še neko opombo ključa
    - potrdi izbire z **O**
    - zdaj ustvariš geslo za ta ključ
    - ključ je ustvarjen; lahko preveriš seznam svojih ključev z `gpg --list-secret-keys`
- `pass init moj@elektronski.naslov`
- `cd ~/viri/`
- `git clone https://github.com/LukeSmithxyz/mutt-wizard`
- `cd mutt-wizard`
- `sudo make install`
- `mw -a moj@elektronski.naslov` – dodaj elektronski naslov

#### Programski jeziki

##### Python

`sudo apt install pyton3` – namesti osnovni *interpretator* [Pythona](https://www.python.org/)

Knjižnice:

- `sudo apt install` ...
    - `python3-pandas` – [Pandas](https://pandas.pydata.org/), obdelava seznamov/preglednic podatkov
    - `python3-matplotlib` – [Matplotlib](https://matplotlib.org/), risanje grafov
    - `python3-uncertainties` – [Uncertainties](https://uncertainties.readthedocs.io/), računanje z negotovostmi
    - `python3-scipy` – [SciPy](https://scipy.org/), znanstveno računanje

##### Latex

[Latex](https://www.latex-project.org/) je označevalni jezik za pripravo *dokumentov* (zlasti znanstvenih)

- `sudo apt install` ...
    - `texlive-latex-base` – osnovni Latex
    - `texlive-latex-extra` – razširitev osnovnega Latexa
    - `texlive-fonts-recommended` – paket priporočenih pisav
    - `texlive-lang-european` – evropski jezikovni paket
    - `texlive-science` – znanstveni paket
    - `cm-super` – nek paket pisav, med drugim lahko potem uporabljaš LaTex v grafih Matplotlib
    - `dvipng`

#### *Live-server*

- `sudo apt install nodejs npm`

#### Izbirnik barv na zaslonu

- potrebujemo [SXCS](https://codeberg.org/NRK/sxcs/) ([tudi na GitHubu](https://github.com/N-R-K/sxcs)):
    - `cd ~/viri/` – prenesli ga bomo v **viri**
    - `git clone https://codeberg.org/NRK/sxcs.git` – prenese SXCS s Codeberga
    - `cd ~/viri/sxcs/` – v *mapo* *programa*
    - `cc -o sxcs sxcs.c -O3 -s -l X11 -l Xrender` – izgradimo orodje/*program*
    - `sudo install -Dm755 sxcs /usr/local/bin/sxcs` – namestimo orodje na ustrezno mesto
    - `sudo install -Dm644 sxcs.1 /usr/local/share/man/man1/sxcs.1` – namestimo navodila na ustrezno mesto
    - `sudo mandb` – lahko še takoj osvežimo zbirko navodil
    - če zdaj poženemo orodje v *terminalu* (`sxcs`), lahko *klikamo* z miško naokoli in se v *terminalu* izpisujejo barve *poklikanih* točk

### Uporaba lastnih *skript*

- Na konec [**~/.profile**](/moj_linux/home/janezpavel/.config) dodaj to vrstico: `export PATH="$HOME/.local/bin:$PATH"`
- Vse mape, ki so v PATH lahko preveriš z `echo $PATH`
- Skripte dodaj v mapo **~/.local/bin/** in jih naredi izvršljive: `chmod +x ime-skripte`

#### Beleženje uporabe računalnika

- Dodaj datoteko [~/.local/bin/raba](/moj_linux/home/janezpavel/.local/bin/raba).
- Naredi datoteko izvršljivo: `sudo chmod +x ~/.local/bin/raba`.

Ta *programček* sprejme *argument* in v ~/uporaba.csv doda vrstico s časom v UTC in imenom dogodka (ki ga dobi iz podanega *argumenta*). Sprejme lahko še drugi *argument*, ki je kot opomba (če ta opomba vsebuje vejice, naj bo obdana z narekovaji).

Primer: ukaz `raba startup` zapiše dogodek v obliki `2026-05-03T12:38:00Z,startup,`

#### Zagon in zaustavitev *sistema*

V /etc/systemd/system/ dodaj:

- [log-halt.service](/moj_linux/etc/systemd/system/log-halt.service)
- [log-poweroff.service](/moj_linux/etc/systemd/system/log-poweroff.service)
- [log-reboot.service](/moj_linux/etc/systemd/system/log-reboot.service)
- [log.startup.service](/moj_linux/etc/systemd/system/log-startup.service)

V vsaki teh datotek je bistvena vrstica

    ExecStart=/home/uporabnik/.local/bin/raba argument

(kjer je *argument* ustrezen *halt, poweroff, reboot* ali *startup*), ki požene **raba** z ustreznim *argumentom*

##### Zaklepanje in odklepanja

Za zaklenjen zaslon uporabljamo SLock.

V [~/viri/slock/slock.c](/moj_linux/home/janezpavel/viri/slock/slock.c) takoj za

	/* did we manage to lock everything? */
	if (nlocks != nscreens)
		return 1;

dodaj

    if (fork() == 0) {
        execl("/home/uporabnik/.local/bin/raba",
              "raba",
              "lock",
              (char*)NULL);
    }

Tako ob po zaklepanju zaslona poženem *program* **raba** z *argumentom* "lock". Za beleženje odklepanja takoj za

	/* everything is now blank. Wait for the correct password */
	readpw(dpy, &rr, locks, nscreens, hash);

dodaj

    if (fork() == 0) {
        execl("/home/uporabnik/.local/bin/raba",
              "raba",
              "unlock",
              (char*)NULL);
    }

Tako po pravilno vnešenem geslu in torej odklepu požene **rabo** z *argumentom* "unlock".

##### Prikazovanje trenutne rabe

Dodaj [~/viri/slstatus/components/raba.c](/moj_linux/home/janezpavel/viri/slstatus/components/raba.c).

### Pošiljanje GIT

`git config --global user.name "MojeUporabniskoIme"` – nastavi *globalno* uporabniško ime za GIT
`git config --global user.email "moj.naslov@domena.si"` – nastavi *elektronski* *globalni* naslov za GIT

Če imaš oddaljene *repozitorije* z različnimi uporabniškimi imeni in/ali *elektronskimi* naslovi, ne uporabi oznake `--global`, ampak ime/naslov nastavi v mapi izbranega *lokalnega repozitorija*.

`git remote add github git@github.com:USER/REPO.git` / `git remote add codeberg git@codeberg.org:USER/REPO.git` – doda vzdevek oddaljenega *repozitorija* na GitHub/Codeberg, ker je "USER" uporabniško ime in "REPO" ime *repozitorija* 
`git remote rename origin github` – spremeni vzdevek oddaljenega *repozitorija*
- `git status` – če ta ukaz izvedeš v *repozitoiju projekta*, izpiše trenutno stanje gita za ta *projekt*

Preverjanje:

- `git config --global user.name` – preveri nastavljeno uporabniško ime za git
- `git config --global user.email` – preveri nastavljen *elektronski* naslov
- `ssh -T git@github.com` / `ssh -T git@codeberg.org` – preveri dostop SSH do GitHuba/Codeberga
- `git ls-remote ime-repozitorija` – preverjanje dostopa do oddaljenega *repozitorija*

### Eduroam

- prenesi nameščevalnik Eduroam za Linux za svoje učilišče
- `sudo apt install python3-dbus` – prenesi D-Bus, ki ga nameščevalnik Eduroam zahteva (oz. ga bo, če ga ne namestiš)
- `python3 eduroam-linux-blablabla.py` – poženi prenešeni nameščevalnik
- vnesi uporabniško ime in geslo – in namestitev je uspela: zdaj naj bi se lahko povezal na omrežje Eduroam brez vpisa kakršnegakoli gesla

### Prilagajanje orodij

(Glej tudi nastavitvene datoteke [na Codebergeu](https://codeberg.org/JanezPavelZebovec/My_Linux_configs), tu bom namreč pokril le nekatere bolj *tehnične* nastavitve, ne pa tudi slogovnih.)

**Uporaba *patchev*** (predvsem za Sucklessova orodja, oz. orodja nameščena iz vira):

- *patche* za določeno orodje shrani v **~/viri/orodje/patches/**
- Premakni se v *mapo* orodja
- `patch -p1 < patches/ime_patcha.diff` – datoteke orodja spremeni po navodilih iz datoteke *.diff*
- Če se kaj ponesreči (javi napako, da ni bilo mogoče uporabiti določenih *patchov*), praviloma shrani spodletele poskuse v **datoteka.c.rej**. Nato je treba sprmembe opraviti ročno po navodilih v slednji datoteki.
- `cp config.def.h config.h`
- `sudo make clean install` – treba je ponovno "izgraditi" orodje in ga spremenjenega namestiti

Uporabni *patchi*:

- **ST**:
    - [**Gruvbox**](https://st.suckless.org/patches/gruvbox/) – lepa barvna *tema*
    - [**Scrollback**](https://st.suckless.org/patches/scrollbacko/)
        - [st-scrollback-0.9.2.diff](https://st.suckless.org/patches/scrollback/st-scrollback-0.9.2.diff) – glavni del *scrollbacka*
        - [st-scrollback-reflow-0.9.1.diff](https://st.suckless.org/patches/scrollback/st-scrollback-reflow-0.9.2.diff) – za pričakovano obnašanje ob spreminjanju okna terminala: preširoke vrstice se prelomijo v novo vrstico, se ne odrežejo
        - [st-scrollback-mouse-0.9.2.diff](https://st.suckless.org/patches/scrollback/st-scrollback-mouse-0.9.2.diff) – drsenje po vsebini z koleščkom miške (**Shift+ScrollUp**/**Shift+ScrollDown**)
- **SLock**:
    -[**Message**](https://tools.suckless.org/slock/patches/message/) – sporočilo na zaklenjenem zaslonu

#### VIM

- `sudo apt install vim-gtk3` – to je VIM z razširjenimi zmogljivostmi, za nas je bistveno odložišče (*kopiranje*/lepljenje iz VIM-a v druge programe in obratno) in uporaba miške; s tem sicer dobimo tudi nepotrebni *grafični* urejevalnik GVIM, a je to vseeno najboljša možnost
- `mkdir -p ~/.config/vim` – ustvari mapo za nastavitvene datoteke VIM-a
- `touch ~/.config/vim/vimrc` – ustvari nastavitveno datoteko [**vimrc**](/moj_linux/home/janezpavel/.config/vim/vimrc)
- `curl -fLo ~/.config/vim/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim` – namesti [vim-plug](https://github.com/junegunn/vim-plug) za vtičnike v VIM-u

##### Gruvbox za VIM

[Gruvbox](https://github.com/morhetz/gruvbox), barvna tema Pavla Pertseva [za VIM](https://www.vim.org/scripts/script.php?script_id=4349)

Na začetek datoteke [**~/.vimrc**](/moj_linux/home/janezpavel/.config/vim/vimrc) dodaj:

```sh
call plug#begin('~/.config/vim/plugged')
Plug 'morhetz/gruvbox'
call plug#end()

syntax on
set background=dark
colorscheme gruvbox
```

Nato v odprtem VIM-u izvedi:

- `:source %` – da stopijo spremembe **vimrc** v veljavo
- `:PlugInstall` – namesti vtičnike, navedene v **vimrc**

#### DWM

V [**~/viri/dwm/config.h**](/moj_linux/home/janezpavel/viri/dwm/config.h):

- spremeni `static const int resizehints = 1;` v `static const int resizehints = 0;`
- spremeni `#define MODKEY Mod1Mask` v `#define MODKEY Mod4Mask`, da je glavna tipka bližnjic **Super**, ne **Alt**
- spremeni `{ MODKEY, XK_p, spawn, {.v = dmenucmd } },` v `{ MODKEY, XK_a, spawn, {.v = dmenucmd } },`, da *menijsko* vrstico odpreš z bližnjico **Super+a** namesto **Super+p**, ki je nepriročna
- opredeli novo barvo `static const char col_border[] = "#fca503";` in nato spremeni v `[SchemeSel] = { col_gray4, col_cyan, col_border },`, da je obroba *aktivnega* okna bolj vidno obrobljena (oranžna namesto privzete modre)

#### LF

- `mkdir -p ~/.config/lf/` – ustvari *mapo* za nastavitveno datoteko
- `touch ~/.config/lf/lfrc` – ustvari nastavitveno datoteko [**lfrc**](/moj_linux/home/janezpavel/.config/lf/lfrc) za LF

---

## Še za narediti

- [Gökçehan Kara (gokcehan): LF](https://github.com/gokcehan/lf) (GitHub) 
    - [predogled slik](https://github.com/gokcehan/lf/wiki/Previews#full-preview-with-image-support) 
- Mutt / Neomutt
- Tor, firefox 
- Thunderbird
- FreeCAD
- Blender
- Libreoffice
- [QGIS](https://qgis.org/)

---

# Namestitev strežnika na Linux Debianu

Vsi koraki razen "zadnjega" so enaki.
V *Software Selection* (med zadnjimi koraki) naj bosta izbrana le *Standard System Utilities* in *SSH server*. Za strežnik namreč ne potrebuješ namitnega okolja.

Po prvem zagonu novega *operacijskega sistema*:

- `sudo apt update && sudo apt upgrade`
- `sudo apt install htop` – nenujen program za pregled procesov, ki tečejo trenutno na računalniku
- `sudo apt install screenfetch` – nenujen program za pregled osnovnih lastnosti računalnika (OS,*kernel*, število nameščenih paketov, *disk*, CPU, GPU, RAM)
- `sudo apt install nginx` – namesti strežnik
    - `sudo systemctl enable nginx` – omogoči samodejni zagon strežnika ob zagonu operacijskega sistema
    - `sudo systemctl status nginx` – izpiše stanje strežnik (npr. ali teče / je omogočen)
- `sudo apt install ufw` – namesti požarni zid
    - `sudo ufw enable` – omogoči požarni zid
    - `sudo ufw status` – izpiše stanje požarnega zidu
    - `sudo ufw allow ssh` – dovoli SSH (*Secure Shell*, vrata 22; omogoči oddaljeno upravljanje strežnika)
    - `sudo ufw allow http` – dovoli HTTP (*HyperText Transfer Protocol*, vrata 80; protokol za nešifriran prenos spletnih strani)
    - `sudo ufw allow https` – dovoli HTTPS (*HTTP Secure*, vrata 443; šifriran/varen HTTP)
- `hostname -I` – izpiše naslove IP (IPv4 in IPv6; običajen IP je oblike *000.000.0.00* in je na začetku izpisa)
- `ssh up-ime@naslov-ip` oz. `ssh up-ime@ime-naprave` – tako se lahko povežeš s strežnikom z oddaljenega računalnika (recimo osebnega), zahtevalo bo geslo strežnika
- `sudo apt install git` – namesti git
- `git clone https://github.com/K0p1-Git/cloudflare-ddns-updater.git` – prenese program za posodabljanje dinamičnega IP-ja
- `cp cloudflare-template.sh cloudflare.sh` – podvoji predlogo programa in izpolni potrebna polja v novi datoteki
- `sudo apt install curl` – namesti curl (potrebuje ga program zgoraj)
- `./cloudflare.sh` – zaženi program
- `crontab -e` – uredi crontab (program za sinhronizacijo)
    - na konec datoteke ddodaj `*/1 * * * * /bin/bash /user/cloudflare.sh`, shrani in zapri
- `systemctl restart cron` – ponovno zažene cron

Še nekaj uporabnih ukazov:

- `nslookup moja-domena`
