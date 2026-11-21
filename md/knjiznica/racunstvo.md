---
title: Računstvo
date: 2026-11-19
description: računska teorija, enačbe
keywords: računstvo, matematika, algebra, logika
author: Janez Pavel Žebovec
---

\require{color}

# Računstvo

## *Logika*

*Logični operatorji*:

| znamenje | ime | pomen |
| --- | --- | --- |
| $$\neg$$ | ne (*negacija*) | obrne resničnost izjave |
| $$\lor$$ | ali (*disjunkcija*) | ena izmed izjav ali obe izjava sta resnični |
| $$\land$$ | in (*konjunkcija*) | obe izjavi sta resnični |
| $$\implies$$ | torej / če A, potem B | če je prva izjava resnična, je tudi druga |
| $$\iff$$ | če in samo če A, potem B | če in samo če je prva izjava resnična, je tudi druga |
| $$=$$ $$\Leftrightarrow$$ | enakost | izjavi sta enaki, enakovredni |
| $$\neq$$ | neenakost | izjavi nista enaki, enakovredni |
| $$\equiv$$ | čista enakost | izjavi sta natanko enaki |
| $$\approx$$ | približna enakost | izjavi sta približno enaki |
| $$\sim$$ | podobnost | izjavi sta podobni |

| $A$ | $B$ | $\neg A$ | $A \land B$ | $A \lor B$ | $A \implies B$ | $A \iff B$ |
| --- | --- | --- | --- | --- | --- | --- |
| P | P | N | P | P | P | P |
| P | N | N | N | P | N | N |
| N | P | P | N | P | P | N |
| N | N | P | N | N | P | P |

## Množice

*Operatorji* za računanje z množicami:

| znamenje | ime | pomen |
| --- | --- | --- |
| $$\cap$$ | presek | *elementi*, ki so v obeh množicah |
| $$\setminus$$ | razlika | *elementi*, ki so v prvi, a ne tudi v drugi množici |
| $$\cup$$ | *unija* | *elementi*, ki so v eni in/ali drugi množici |
| $$\times$$ | *kartezično* množenje | množica vseh možnih *kombinacij elementov* množic |

Razmerja med množicami:

| znamenje | ime | pomen | zanikano |
| --- | --- | --- | --- |
| $$\subset$$ | *podmnožica* | vsi *elementi* prve množice so tudi v drugi | $$\not\subset$$ |
| $$\in$$ | v / je del | *element* / prva množica je v/del druge množice | $$\notin$$ |

Prazno množico označimo z $\emptyset$ ali ${}$.
Za množici rečemo, da sta *disjunktni*, če velja $A \cap B = \emptyset$.

Če nas zanimajo le podmnožice vnaprej izbrane množice, to množico imenujemo
*univerzum* in označimo z $U$. Potem lahko uporabimo *komplement*
$^{\complement}$:
$$A^{\complement§ = U \setminus A = {a \subset U; a \notin A}$$

<div class="zakon">
**De Morganova zakona**
$$ \bigcup_{j \in J} A_j^{\complement} = \left( \bigcap_{j \in J} A_j \right)^{\complement} $$
$$ \bigcap_{j \in J} A_j^{\complement} = \left( \bigcup_{j \in J} A_j \right)^{\complement} $$
</div>

**Potenčna množica** množice A je množica njenih podmnožic, vključno s prazno
množico.  Če imamo množico A = {a, b, c, ... }, je potenčna množica te množice:

P(A) = {{}, {a}, {b}, {c}, ..., {ab}, {ac}, {bc}, ..., {abc}, ...}

Moč takšne potenčne množice, kjer je *n* število elementov v množici, je:

$$ m(\mathcal{P}(A)) = \binom{n}{0} + \binom{n}{1} + \binom{n}{2} + ... + \binom{n}{n} = 2^n $$

**Števnost množic**: množica je števna, če lahko njene gradnike razporedimo v
vrsto, oz. jih naštejemo (četudi jih je neskončno mnogo).

- Množica A je števna, če in samo če obstaja *injektivna funkcija* $A \to
  \mathbb{N}$.
- Neprazna množica A je števna, če in samo če obstaja *surjektivna funkcija*
  $\mathbb{N} \to A$.

*Kartezični produkt* končno mnogo števnih množic je števna množica.

### Množice števil

$$ \href{#Naravna_stevila}{\mathbb{N}} < \href{#Cela_stevila}{\mathbb{Z}} < \href{#Razlozna_stevila}{\mathbb{Q}} < \href{#Stvarna_stevila}{\mathbb{R}} < \href{#Dvojna_stevila}{\mathbb{C}} $$

Računamo lahko v različnih množicah števil - to je stvar izbire. Tako lahko
račun v neki množici nima rešitve (ki jo hočemo v tej množici), ima pa jo v neki
drugi množici, vendar nas ta rešitev ne zanima, zato razglasimo, da račun v
izbrani množici nima rešitve (tako je običajno npr. s koreni negativnih števil).

- zgornja meja množice je vsako število, od katerega so vsa števila v množici
  manjša
- spodnja meja množice je vsako število, od katerega so vsa števila v množici
  večja
- najmanjša/natančna zgornja meja – *supremum*
- največja/natančna spodnja meja – *infimum*
- če je *supremum* v množici, je imenovan tudi največji *element* / *maksimum*
- če je *infimum* v množici, je imenovan tudi najmanjši *element* / *minimum*

#### Naravna števila

To so (*pozitivna* cela) števila s katerimi (običajno) štejemo. Množica je števno neskončna.

$$ \mathbb{N} = \{ 1, 2, 3, 4, 5, 6, ... \} $$

<div class="zakon">
**Peanovi *aksiomi*** (nabor osnovnih lastnosti naravnih števil):

1. 1 je naravno število.
2. Vsako naravno število $n$ ima svojega natanko določenega naslednika, ki ga
   označimo z $n^+$.
3. Različni naravni števili imata različna naslednika.
4. 1 ni naslednik kakšnega naravnega števila.
5. Če je $A$ podmnožica množice naravnih števil, če je $1 \in A$ in če za vsak
   $n \in A$ velja $n^+ \in A$, potem so v množici $A$ vsa naravna števila.
</div>

#### Cela števila

To so naravna števila, število 0 in nasprotne vrednosti naravnih števil -
*negativna* cela števila (0, 1, -1, 2, -2, 3, -3, ...). Množica je števno
neskončna.

$$ \mathbb{Z} = - \mathbb{N} \cup \{0\} \cup \mathbb{N} = \{ ..., -2, -1, 0, 1,
2, ... \} \subset \mathbb{R} $$

#### Razložna števila
(*racionalna* števila)

To so števila, ki jih lahko izrazimo kot razmerje dveh celih števil, oz.
predstavimo z ulomki (npr. 0, 1, -1, 1/3, -1/3, ...). Množica je števno
neskončna.

$$ \mathbb{Q} = \{ \frac{k}{n} \in \mathbb{R}; k \in \mathbb{Z}, n \in
    \mathbb{N} \} \subset \mathbb{R} $$

#### Nerazložna števila
(*iracionalna* števila)

To so števila, ki jih ni mogoče izraziti kot razmerje dveh celih števil, oz.
predstaviti z ulomki (npr. $\sqrt{2}$, π, e, ...).

#### Stvarna števila
(*realna* števila)

To so števila, ki jih lahko predstavimo na običajni številski premici (npr. 0,
1, -1, 1/3, -1/3, π, $\sqrt{2}$, ...). Množica je neštevno neskončna.

**Osnovne lastnosti (*aksiomi*) stvarnih števil**:

Osnovne lastnosti, ki govorijo o seštevanju (množici, ki jih izpolnjuje, pravimo
**Abelova *grupa*** za seštevanje):

1. (družilnost) Za vse $x, y, z \in \mathbb{R}$ velja $x + (y + z) = (x + y) + z$.
2. (zamenljivost) Za vse $x, y, \in \mathbb{r}$ velja $ x + y = y + x$.
3. (*nevtralni* člen) Obstaja takšno število $0 \in \mathbb{R}$, da
   za vsak $x \in \mathbb{R}$ velja $x + 0 = 0 + x = x$.
4. (nasprotno število) Za vsak $x \in \mathbb{R}$ obstaja takšno število $-x \in \mathbb{R}$, da
   velja $x + (-x) = (-x) + x = 0$ (to pomeni, da lahko opredelimo *operacijo*
   odštevanja in sicer s predpisom $y - x = y + (-x) \in \mathbb{R}$).

Naslednje štiri lastnosti govorijo o množenju (množici, ki jih izpolnjuje,
pravimo **Abelova *grupa*** za množenje – $\mathbb{R}$ z 0, niso, ker 0 nima
obratne vrednosti):

5. (družilnost) Za vse $x, y, z \in \mathbb{R}$ velja $x \cdot (y \cdot z) = (x \cdot y)
   \cdot z$.
6. (zamenljivost) Za vse $x, y \in \mathbb{R}$ velja $x \cdot y = y \cdot x$.
7. (*nevtralni* člen) Obstaja takšno število $1 \in \mathbb{R}$, da za vsak $x
   \in \mathbb{R}$ velja $x \cdot 1 = 1 \cdot x = x$.
8. (obratno/recipročno število) Za vsak $x \in \mathbb{R} \setminus \{0\}$ obstaja takšno
   število $x^{-1} \in \mathbb{R}$, da velja $x \cdot x^{-1} = x^{-1} \cdot x =
   1$ (tako lahko opredelimo *operacijo* deljenja, in sicer s predpisom $y/x =
   \frac{y}{x} = y \cdot x^{-1} \in \mathbb{R}$.

Tretja skupina povezuje seštevanje in množenje:

9. Velja $1 \neq 0$.
10. (razčlenljivost) Za vse $x, y, z \in \mathbb{R}$ velja $x \cdot (y + z) = (x \cdot y) + (x
    \cdot z)$.

Množicam, opremljenim z dvema *operacijama*, ki zadoščata lastnostim 1–10,
pravimo (zamenljivostni/*komutativen*) **obseg** <span class="zgled">(npr. še
[razložna](#Razlozna_stevila) in [dvojna](#Dvojna_stevila)
števila)<span>.

Četrta skupina se nanaša na *pozitivna* števila:

11. Velja $0 \notin \mathbb{R}^+$; za poljubno *realno* število $x \in \mathbb{R}
    \setminus \{0\}$ pa je bodisi $x \in \mathbb{R}^+$ ali pa $-x \in
    \mathbb{R}^+, ne pa oboje.
12. Za vsa *realna* števila $x, y \in \mathbb{R}^+$ velja $x + y \in
    \mathbb{R}^+$ in $x \cdot y \in \mathbb{R}^+$.

Množice, za katere veljajo lastnosti 1–12, so t.i. **urejeni obsegi**.

Zadnja lasnost *realnih* števil se imenuje **Dedekindov *aksiom***:

13. Vsaka neprazna navzgor omejena podmnožica *realnih* števil ima najmanjšo
    zgornjo mejo.

*Aksiomom* 1–13 zadošča, do preimenovanja natančno, le en urejen obseg – obseg
*relanih* števil.

#### Dvojna števila
(*kompleksna* števila)

Dvojna števila imajo stvarni del (*realno komponento*) $a$ in umišljeni del
(*imaginarno komponento*) $b \mathrm{i}$. Dvojna števila so (*komutativen*)
obseg, ne pa tudi urejen obseg.

$$ \mathbb{C} = \mathbb{R} \times \mathbb{R} = \{ (a, b); a, b \in \mathbb{R} \} $$
$$ \mathbb{C} = \left\{a + b\mathrm{i}; (a, b \in \mathbb{R} ) \land (\mathrm{i}^2 = -1 \Leftrightarrow \sqrt{-1} = \sqrt{\mathrm{i^2}})\right\} $$
$$ \mathrm{i} = \sqrt{-1} = \sqrt{-} = (0, 1) $$

Iz tega sledi *cikel*: $i$, $i^2 = -1$, $i^3 = -i$, $i^4 = i$.

$$ (a, b) + (a', b') = (a + a', b + b') $$
$$ (a, b) \cdot (a', b') = (aa' - bb', ab' + ba') $$

$$ {\lvert z \rvert}^2 = a^2 + b^2 $$

$\overline{z}$ je *konjugirana* vrednost dvojnega števila
$$ \overline{z} = a - \mathrm{i} b $$
$$ z \overline{z} = {\lvert z \rvert}^2 $$

$$ \phi = \arctan \left( \frac{b}{a} \right) $$

***Polarni* zapis**

$$ z = \lvert  z \rvert (\cos \phi + \mathrm{i} \sin \phi) $$

Eulerjeva enačba:
$$ \mathrm{e}^{\mathrm{i} \phi} = \cos(\phi) + \mathrm{i} \sin(\phi) $$

Eulerjev zapis dvojnega števila:

$$ z = \lvert z \rvert \mathrm{e}^{\mathrm{i} \phi} $$
$$ \overline{z} = \lvert z \rvert \mathrm{e}^{- \mathrm{i} \phi} $$

Če velja $z = \lvert z \rvert e^{\mathrm{i} \phi}$ in $w = \lvert w \rvert e^{\mathrm{i} \psi}$, potem:
<div class="izpeljava">
$$ z w
    = \lvert z \rvert \mathrm{e}^{\mathrm{i} \phi} \lvert w \rvert
        \mathrm{e}^{\mathrm{i} \psi}
    \\ = \lvert z \rvert \lvert w \rvert (\cos \phi + \mathrm{i} \sin \phi) (\cos
        \psi + \mathrm{i} \sin \psi)
    \\ = \lvert z \rvert \lvert w \rvert (\cos \phi \cos \psi - \sin \phi \sin \psi
        + \mathrm{i} \cos \phi \sin \psi + \mathrm{i} \sin \phi \cos \psi)
    \\ = \lvert z w \rvert (\cos(\phi + \psi) + \mathrm{i} \sin(\phi + \psi))
    \\ = \lvert z w \rvert \mathrm{e}^{\mathrm{i} (\phi + \psi)} $$
</div>
$$ z w = \lvert z w \rvert \mathrm{e}^{\mathrm{i} (\phi + \psi)}$$

De Moivrova enačba:

$$ z^n = {\lvert  z \rvert}^n (\cos n \phi + \mathrm{i} \sin n \phi)
    = {\lvert z \rvert}^n \mathrm{e}^{\mathrm{i} n \phi} $$

**Koreni dvojnih števil**:

<div class="izpeljava">
$$ \lvert z \rvert ^n \mathrm{e}^{\mathrm{i} n \phi}
    = \lvert w \rvert \mathrm{e}^{\mathrm{i} \psi}
    \\ \implies \lvert z \rvert = \sqrt[n]{\lvert w \rvert},
    \phi = \frac{\psi}{n} + \frac{2 k \pi}{n}
    \\ \implies z_k = \sqrt[n]{\lvert w \rvert} \mathrm{e}^{\mathrm{i}
    (\psi / n + 2 k \pi / n)}, k \in \{ 0, 1, 2, 3, ..., n - 1 \} $$
</div>

$n$-ti koren neničelnega dvojnega števila ima torej natanko $n$ rešitev, ki jim
pravimo $n$-ti koreni dvojnega števila; ti v ravnini dvojnih števil tvorijo
oglišča navideznega pravilnega $n$-kotnika s središčem v izhodišču.

## Računske *operacije*

*Operacije* imajo lahko sledeče lastnosti:

- **zamenljivost**, zakon o zamenjavi
    (*komutativnost*; <span class="zgled">npr. $a+b = b+a$, $A \cup B = B \cup A$</span>),
- **družilnost**, zakon o združevanju (*asociativnost*; <span class="zgled">npr. $(a+b)+c =
  a+(b+c)$, $(A \cup B) \cup C = A \cup (B \cup C)$</span>),
- **razčlenljivost**, zakon o razčlenitvi (*distributivnost*; <span class="zgled">npr. $(a+b)c = ac
  + bc$, $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$</span>),
- **povratnost** (*refleksivnost*; <span class="zgled">npr. $a \parallel a$</span>),
- **vzajemnost** (*simetričnost*; <span class="zgled">npr. $a \parallel b \iff b \parallel a$</span>),
- **prehodnost** (*tranzitivnost*; <span class="zgled">npr. $a \parallel b \land b \parallel c \iff
  a \parallel c$</span>),
- **nespremenljivost** (*idempotenca*; <span class="zgled">npr. $A \cup A = A$</span>),
- ***absorbcija*** (<span class="zgled">npr. $A \cup (A \cap B) = A$ - *absorbcija* unije glede na
  presek</span>),

## Kombinatorika

Verjetnost sestavljenega dogodka je zmnožek verjetnosti posameznih dogodkov.

### Razvrstitve (*permutacije*)

To so razporedbe *n* različnih *elementov* na *n* mest.

$$ P_n = n! $$

Pri razvrstitvah z *r* ponovitvami posameznih *elementov* ne upoštevamo različnih razvrstitev enakih predmetov (možnih razvrstitev je *r!*):

$$ P_n^{r_1, r_2, r_3, ... , r_k} = \frac {n!}{r_1! r_2! r_3! ... r_k!} $$

Pri krožni razvrstitvi ne upoštevamo možnih zasukov enake razporedbe (če ne
razlikujemo mest te krožne razvrstitve):

$$ P_n = \frac {n!}{n} = (n-1)! $$

### Različice (*variacije*)

To so razporedbe *n* predmetov na *r* mest.

Če se *elementi* ne smejo ponavljati (na voljo imaš le različne *elemente*):

$$ V_n^r = \frac {n!}{(n-r)!} $$

Če se *elementi* lahko ponavljajo (uporabiš lahko večkrat enake *elemente*):

$$ ^{(p)}V_n^r = n^r $$

### Izbori (*kombinacije*)

To so izbori *r* *elementov* iz množice z *n* elementi. Pri tem vrstni red ni
pomemben, zato je to pravzaprav število različic (*variacij*), deljeno s
številom možnih razvrstitev *elementov* posamezne različice.

$$ C_n^r = \frac {V_n^r}{r!} = \binom {n}{r} $$

## Verjetnost

*Statistično*/*empirično* se verjetnost dogodka *P(A)* lahko opredeli kot
število, pri katerem se ustali *relativna* pogostost dogodka A pri velikem
številu ponovitev poskusa:

$$ P(A) = \lim_{n \to \infty} f'(A) $$

*Relativna* pogostost dogodka A se izračuna kot pogostost dog. A *f(A)* na
število ponovitev poskusa *n*:

$$ f'(A) = \frac {f(A)}{n} $$

Običajno se verjetnost opredeli kot št. ugodnih izidov *m* za dogodek na št.
vseh izidov *n*:

$$ P(A) = \frac {m}{n} $$

Za *elementarni* dogodek v popolnem *sistemu* dogodkov (kjer so vsi dog. enako
verjetni) je ta verjetnost $P(E) = \frac {1}{n}$.

## Zaporedja

Če je $a_n$ zaporedje s *pozitivnimi* členi, velja, da če sta zaporedji
$\frac{a_{n+1}}{a_n}$ in $\sqrt[n]{a_n}$ *konvergentni*, je:
$$ \lim_{x \to 0} \sqrt[n]{a_n} = \lim_{x \to 0} \frac {a_{n+1}}{a_n} $$

### *Aritmetično* zaporedje

Splošni člen: $$ a_n = (n - 1)d $$
Vsota zaporedja: $$ S_n = \frac{n}{2} (a_1 + a_n) = \frac{n}{2} ( 2a_1 + a_n) $$

### *Geometrijsko* zaporedje

Splošni člen: $$ a_n = a_1 k^{n-1} $$
Vsota zaporedja: $$ S_n = a_1 \frac {k^n -1}{k - 1} $$

V primeru, da pa velja $k = 1$:
$$ S_n = n a_1 $$

#### Neskončna *geometrijska* vrsta

- $|k| < 1$ - *konvergentno* zaporedje, vsota neskončnega zaporedja je končna;

- $|k| \ge 1$ - *divergentno* zaporedje, vsota neskončnega zaporedja je neskončna

### Številske vrste

Da vrsta *konvergira*, morajo njeni členi *konvergirati* proti 0.

$$ |k| < 1; \lim_{n \to \infty} S_n = \sum_{i=1}^{\infty} a_1 k^{i-1} = \frac{a_1}{1-k} $$
$$ a + ak + ak^2 + ak^3 + ... = \frac{a}{a-k}; \lvert k \rvert < 1 $$
$$ \sum_{n=1}^{\infty} \frac{1}{n} = \infty $$
$\sum_{n=1}^{\infty} \frac{1}{n^r}$ za $r > 1$ *konvergira*

#### Pogoji za *konvergenco* / *divergenco*

Za vrsto z ne nujno *pozitivnimi* členi velja:

- vrsta *konvergira absolutno*, če *konvergira* $\sum \lvert a_n \rvert$
- vrsta *konvergira* pogojno, če *konvergira*, a ne *absolutno*
    - Primer: *alternirajoča* vrsta:
        - Leibnizev pogoj: če *absolutne* vrednosti členov padajo proti nič, je vrsta *konvergenta*

##### Primerjalni pogoj

$\sum a_n$ in $\sum b_n$ sta vrsti s *pozitivnimi členi* in velja $a_n \leq b_n$. Potem za vse $n$ od nekod dalje velja:

- če je $\sum b_n$ *kovergentna*, potem je tudi $\sum a_n$ *kovergentna*
- če je $\sum b_n$ *divergentna*, potem je tudi $\sum a_n$ *divergentna* 

##### Količniški pogoj

$\sum a_n$ je vrsta s *pozitivnimi* členi in obstaja $D = \lim_{n \to \infty} \frac{a_{n+1}}{a_n}$

- $D < 1$: vrsta je *konvergentna*
- $D > 1$: vrsta je *divergentna*
- $D = 1$: vrsta je ali *konvergentna* ali *divergentna*

##### Korenski pogoj

$\sum a_n$ je vrsta s *pozitivnimi* členi, obstaja $C = \lim_{n \to \infty} \sqrt[n]{a_n}$

- $C < 1$: vrsta je *konvergentna*
- $C > 1$: vrsta je *divergentna*
- $C = 1$: vrsta je *konvergentna* ali *divergentna*

##### Raabejev pogoj

Ta pogoj je lahko uporaben, če data količniški in korenski 1.

$\sum a_n$ je vrsta s pozitivnimi členi in obstaja

$$ R = \lim_{ n \to \infty} n \left( \frac{a_n}{a_{n+1}} - 1 \right) $$

- $R > 1$: vrsta je *konvergentna*
- $R < 1$: vrsta je *divergentna*
- $R = 1$: vrsta je *konvergentna* ali *divergentna*

## Dvočlenik
(*Binom*)

Dvočlenik je $a+b$.

### Dvočlenski izrek (*binomski* izrek)

Dvočlensko znamenje je $\binom {n}{r}$.

$$ (a+b)^n = \binom{n}{0} a^n b⁰ + \binom{n}{1} a^{n-1} b^1 + \binom{n}{2} a^{n-2} b^2 + \binom{n}{3} a^{n-3} b^3 + ... + \binom {n}{n} b^n a^0 = \sum_{r=0}^{n} \binom {n}{r} a^{n-r} b^r $$

Splošni člen dvočlenskega izreka je torej:
$$ \binom {n}{r} a^{n-r} b^r$$

Nekaj pravil za računanje z dvočlenskim znamenjem:

$$ \binom {n}{r} = \binom {n}{n-r} $$
$$ \binom {n}{0} = \binom {n}{n} = 1 $$
$$ \binom {n}{r} + \binom {n}{r+1} = \binom {n+1}{r+1} $$

## *Funkcije*

*Funkcija*/preslikava $f$ *elementu* iz vhodne množice $A$ (*domena* / *definicijsko območje*) priredi natanko en *element* v izhodni množici $B$ (*kodomena*):
$$ f: A \to B $$
Oziroma preslika *element* $a \in A$ v *element* $f(a)$:
$$ f: a \to f(a) $$
Zato $f(a)$ imenujemo tudi slika *elementa* $a$ vzdolž *funkcije* $f$, pa tudi vrednost *funkcije* $f$ v *elementu* $a$.

Dve *funkciji* sta enaki, če imata enaki *domeni*, enaki *kodomeni* ter enak
predpis.

$$ \mathrm{Graf}(f) = \{ (a, b) \in A \times B; b = f(a) \} \subset A \times B $$

*Funkcija* je lahko:

- soda: $f(-x) = f(x)$,
- liha: $f(-x) = -f(x)$;
- injektivna (nobena vrednost y se ne ponovi): $x_1 \neq x_2 \implies f(x_1) \neq f(x_2)$;
- surjektivna (slika je enaka kodomeni, oz. zaloga funkcije so vsa stvarna števila): $\mathrm{Im}(f) = Y$, $\mathrm{Z}_f = \mathbb{R}$;
- bijektivna: injektivna in surjektivna;

Enačbo funkcije lahko podamo v več oblikah:

- razvita (*eksplicitna*): $y = kx + n$ - razberemo smerni količnik $k$ in začetno vrednost $n$,
- nerazvita (*implicitna*): $ax + by + c = 0$ - enačeno z nič,
- odsekovna (*segmentna*): $\frac{x}{m} + \frac{y}{n} = 1$ - razberemo ničlo $m$ in začetno vrednost $n$,
- razcepna/ničelna: $y = a(x - x_1)(x - x_2)(x - x_3)...$ - ničle $x_1, x_2, x_3$, ...,
- temenska
    - kvadratne funkcije: $y = a(x - p)^2 + q$ - teme T(p, q)

V nerazviti obliki lahko zapišemo enačbe vseh funkcij, v ostalih dveh pa ne - v razviti ne moremo zapisati navpičnih funkcij.

Računanje s funkcijami:
$$ (f \pm g)(x) = f(x) \pm g(x) $$
$$ (f \cdot g)(x) = f(x) \cdot g(x) $$
$$ \left( \frac{f}{g} \right) (x) = \frac{f(x)}{g(x)}; g(x) \neq 0 $$

Za kot, pod katerim funkcija seka os x velja $\tan \varphi = k$.
Kot med dvema funkcijama v presečišču:
$$ \tan \varphi = \left| \frac {k_1 - k_2}{1 + k_1 k_2} \right| $$

***Inverzna* funkcija** $f^{-1}(Y)$ (vrne prasliko / *inverzno* sliko):
$$ f: X \to Y \iff f^{-1}: Y \to X $$
Prasliko $f^{-1}(\{y\})$ imenujemo tudi vlakno.

**Sestavljena funkcija** (*kompozitum funkcije*):
$$ (g \circ f)(x) = g(f(x)) \neq (f \circ g)(x) $$
*Kompozicija* dveh funkcij je opredeljena le za primer, da je *kodomena* prve
funkcije enaka *domeni* druge funkcije.

***Identična funkcija***:
$$ \mathrm{id}(a) = a $$

**Zožitev** (*restrikcija*) *funkcije* na neko množico: $(f|_X)(a)$

**Vložitev** (*inkluzija*) množice X  (podmnožica v A) v množico A:
$\mathrm{inc}_{X, A}: X \to A$

**Inverzi** za primer $f: A \to B$:

- levi inverz $f$ je $g: B \to A$, če velja $g \circ f = \mathrm{id}_A$
- desni inverz $f$ je $h: B \to A$, če velja $f \circ h =
  \mathrm{id}_B$
- (obojestranski) inverz $f$ je, če je hkrati levi in desni inverz

$$ (f^{-1})^{-1} = f $$

- Če je funkcija $f: A \to B$ je injektivna in je $A \neq \emptyset$, potem ima
  funkcija $f$ levi inverz.
- Če ima funkcija f levi inverz, potem je injektivna.
- Funkcija f je surjektivna, če in samo če ima desni inverz.
- Funkcija f je bijektivna, če in samo če je obrnljiva.

### Linearna funkcija

$$ f(x) = kx + n $$
$$ k = \frac{\Delta y}{\Delta x} = \frac{y_2 - y_1}{x_2 - x_1} = \tan \alpha $$

### Potenciranje

Pravila za računanje s potencami:
$$ a^0 = 1 $$
$$ a^m \cdot a^n = a^{m + n} $$
$$ \frac{a^m}{a^n} = a^{m - n} $$
$$ (a^m)^n = a^{mn} $$
$$ a^{-n} = (\frac{1}{a})^n $$

Potence, ki so ulomki, lahko izrazimo tudi s koreni:
$$ a^{\frac{m}{n}} = \sqrt[n]{a^m} $$

#### Kvadratna funkcija

- $f(x) = ax^2 + bx + c; a \neq 0$;
- temenska oblika: $f(x) = a(x - p)^2 + q$, teme T(p, q);
- razcepna/ničelna oblika: $f(x) = a(x - x_1)(x - x_2)$, ničli $x_1$ in $x_2$;

$$ x_{1, 2} = \frac{-b \pm \sqrt{D}}{2 a} $$
$$ D = b^2 - 4 a c $$
$$ p = - \frac{b}{2 a} = \frac{x_1 + x_2}{2} $$
$$ q = f(p) = - \frac{D}{4a} $$

Vietovi enačbi (z ničlama $x_1$ in $x_2)$:
$$ x_1 + x_2 = -\frac{b}{a} $$
$$ x_1 \cdot x_2 = \frac{c}{a} $$

### Logaritem

Logaritem je obratna funkcija potenciranja.

$$ \log_a x = b \iff a^b = x $$

$$ \log_a 1 = 0 $$
$$ \log_a a = 1 $$

Pravila za računanje z logaritmi:

$$ \log_a(u \cdot v) = \log_a u + \log_a v $$
$$ \log_a \left( \frac{u}{v} \right) = \log_a u - \log_a v $$
$$ \log_a u^v = v \cdot \log_a u $$
$$ \log_a u = \frac{\log_b u}{\log_b a} $$

### Kotne funkcije

| fun. \\ kot | $$ 0 $$ | $$ 30 ° = \frac{\pi}{6} \approx 0,5 $$ | $$ 45 ° = \frac{\pi}{4} \approx 0.8 $$ | $$ 60 ° = \frac{\pi}{3} \approx 1,0 $$ | $$ 90 ° = \frac{\pi}{2} \approx 1,6 $$ |
| --- | --- | --- | --- | --- | --- |
| sin | $$ 0 $$ | $$ \frac{1}{2} $$ | $$ \frac{\sqrt{2}}{2} $$ | $$ \frac{\sqrt{3}}{2} $$ | $$ 1 $$ |
| cos | $$ 1 $$ | $$ \frac{\sqrt{3}}{2} $$ | $$ \frac{\sqrt{2}}{2} $$ | $$ \frac{1}{2} $$ | $$ 0 $$ |
| tan | $$ 0 $$ | $$ \frac{\sqrt{3}}{3} $$ | $$ 1 $$ | $$ \sqrt{3} $$ |  |
| cot |  | $$ \sqrt{3} $$ | $$ 1 $$ | $$ \frac{\sqrt{3}}{3} $$ |$$ 0 $$ |

$$ \sin^2 x + \cos^2 x = 1 $$
$$ \sin(x + y) =\sin x \cos y + \cos x \sin y$$
$$ \cos(x + y) = \cos x \cos y - \sin x \sin y $$
$$ \cos^2 x = \frac{1 + \cos 2x}{2} $$

#### *Hiperbolične*

$$ \sinh x = \frac{\mathrm{e}^x - \mathrm{e}^{-x}}{2} $$
$$ \cosh x = \frac{\mathrm{e}^x + \mathrm{e}^{-x}}{2} $$
$$ \tanh x = \frac{\mathrm{e}^x  \mathrm{e}^{-x}}{\mathrm{e}^x + \mathrm{e}^{-x}} $$

$$ \cosh^2x - \sinh^2x = 1 $$
$$ \sinh (x + y) = \sinh x \cosh y + \cosh x \sinh y $$
$$ \cosh (x + y) = \cosh x \cosh y + \sinh x \sinh y $$
$$ \tanh (x + y) = \frac{\tanh x \tanh y}{1 + \tan x \tan y} $$

### Limita

Računanje z limitami:

$$ \lim_{n \to \infty} (a_n \pm b_n) = \lim_{n \to \infty} a_n \pm \lim_{n \to \infty}b_n $$
$$ \lim_{n \to \infty} (a_n \cdot b_n) = \lim_{n \to \infty} a_n \cdot \lim_{n \to \infty}b_n $$
$$ \lim_{n \to \infty} \left( \frac{a_n}{b_n} \right) = \frac{\lim_{n \to \infty} a_n}{\lim_{n \to \infty}b_n} $$
$$ \lim_{n \to \infty} (c \cdot a_n) = c \cdot \lim_{n \to \infty}a_n; c \in \mathbb{R} $$

Limita in druge funkcije:

$$ \lim_{n \to \infty} f(a_n) = f \left( \lim_{n \to \infty} (a_n) \right) $$
$$ \lim_{n \to \infty} f(a_n^{b_n}) = \mathrm{e}^{\lim_{n \to \infty} (a_n - 1) b_n} $$

**L'Hospitalovo pravilo**: Naj bosta funkciji $f$ in $g$ odvedljivi na neki okolici točke $x_0$ (ne nujno v $x_0$) in naj gresta obe hkrati proti 0 ali pa obe hkrati proti $\pm \infty$ pri $x \to x_0$. Če obstaja limita $\lim_{x \to x_0} \frac{f'(x)}{g'(x)}$, obstaja tudi njen enaka limita $\lim_{x \to 0} \frac{f(x)}{g(x)}$.

Osnovne limite:

$$ \lim_{n \to \infty} C = C $$
$$ \lim_{n \to \infty} \frac{1}{n} = 0 $$
$$ \lim_{n \to \infty} a^n = \begin{cases}
    0; -1 < a < 1 \\
    \infty; a > 1 \\
    1; a = 1
\end{cases} $$
$$ \lim_{n \to \infty} \left( 1 + \frac {r}{n} \right)^n = e^r; r \in \mathbb{R} $$
$$ \lim_{x \to \infty} {\left( 1 + f(x) \right)}^{\frac{1}{f(x)}} = e $$
$$ \lim_{x \to 0} \frac {\sin x}{x} = 1; \lim_{x \to \infty} \frac {\sin x}{x} = 0 $$ 
$$ \lim_{x \to \infty} \sqrt[x]{x^r} = \lim_{x \to \infty} x^{\frac{r}{x}} = 1 $$

### Odvod in integral

Odvod funkcije je funkcija naklonov te funkcije. Opredelitev odvoda:

$$ f'(x) = \lim_{h \to 0} \frac {f(x + h) - f(x)}{h} $$

**Langrangeev izrek**: če je zvezna funkcija $f: [a, b] \rightarrow \mathbb{R}$ odvedljiva na intervalu (a, b), obstaja $c \in (a, b)$, za katerega velja:

$$ \frac{f(b) - f(a)}{b - a} = f'(c) $$

Integral je obratna funkcija odvoda.

V spodnji preglednici so neosnovni (oz. *bolj* neosnovni) integrali sivo obarvani.

| $$ \boldsymbol {f(x)} $$ | $$ \boldsymbol {f'(x)} $$ | $$ \boldsymbol {\int f(x) \mathrm{d}x} $$ |
| --- | --- | --- |
| $$ a $$ | $$ 0 $$ | $$ ax + C $$ |
| $$ \textcolor{grey} {1} $$ | $$ \textcolor{grey} {0} $$ | $$ \textcolor{grey} {x + C} $$ |
| $$ a x $$ | $$ a $$ | $$ \textcolor{grey} {a \frac {x^2}{2}+C} $$ |
| $$ \textcolor{grey} {x} $$ | $$ \textcolor{grey} {1} $$ | $$ \textcolor{grey} {\frac {x^2}{2}+C} $$|
| $$ x^r $$ | $$ rx^{r-1} $$ | $$ \frac {x^{r+1}}{r+1} + C $$ |
| $$ x^x $$ | $$ x^x (ln x + 1) $$ | |
| $$ x^{-1} $$ | $$ \textcolor{grey} {-x^{-2}} $$ | $$ \ln |x| + C $$ |
| $$ a^x $$ | $$ a^x \ln a = \frac {a^x}{log_a \mathrm{e}} $$ | $$ \frac {a^x}{lna} + C $$ |
| $$ \textcolor{grey} {e^x} $$ | $$ \textcolor{grey} {\mathrm{e}^x} $$ | $$ \textcolor{grey} {\mathrm{e}^x + C} $$ |
| $$ \mathrm{e}^{a x} $$ | $$ a e^{a x} $$ | $$ \frac {\mathrm{e}^{a x}}{a} + C $$ |
| $$ \log_a x $$ | $$ \frac {1}{x \ln a} = \frac {\log_a \mathrm{e}}{x} $$ | |
| $$ \textcolor{grey} {ln x} $$ | $$ \textcolor{grey} {\frac {1}{x}} $$ | |
| $$ \sin x $$ | $$ \cos x $$ | $$ - \cos x + C $$ |
| $$ \sin a x $$ | $$ \textcolor{grey} a \cos a x $$ | $$ -\frac {1}{a} \cos a x + C $$ |
| $$ \cos x $$ | $$ - \sin x $$ | $$ \sin x + C $$ |
| $$ \cos a x $$ | $$ \textcolor{grey} - a \sin a x $$ | $$ \frac {1}{a} \sin a x + C $$ |
| $$ \tan x $$ | $$ \frac {1}{cos^2x} $$ | |
| $$ \frac {1}{\cos^2 x} $$ | | $$ \tan x + C $$ |
| $$ \cot x $$ | $$ - \frac {1}{\sin^2 x} $$ |
| $$ \frac {1}{\sin^2 x} $$ | | $$ - \cot x + C $$ |
| $$ \arcsin x $$ | $$ \frac {1}{\sqrt {1 - x^2}} $$ | |
| $$ \frac {1}{\sqrt {1 - x^2}}$$ | | $$ \arcsin x + C $$ |
| $$ \arccos x $$ | $$ - \frac {1}{\sqrt {1 - x^2}} $$ | |
| $$ \arctan x $$ | $$ \frac {1}{1 + x^2} $$ | |
| $$ \frac {1}{x^2 + 1} $$ | | $$ \arctan x + C $$ |
| $$ \frac {1}{x^2 + a^2} $$ | | $$ \frac {1}{a} \arctan \frac {x}{a} + C $$ |
| $$ \operatorname{arccot} x $$ | $$ - \frac {1}{1 + x^2} $$ | |

Pravila za računanje z integrali:
$$ \int \bigl( f(x) + g(x) \bigr) \mathrm{d}x = \int f(x) \mathrm{d} x + \int g(x) \mathrm{d} x $$
$$ \int k \cdot f(x) \mathrm{d} x = k \int f(x) \mathrm{d} x $$

Integracija po delih:

$$ \int u v' = u v - \int v u' $$

Prostornina telesa vrtenine zvezne funkcije $f$ okoli osi x:

$$ V = \pi \int_a^b f(x)^2 \mathrm{d}x $$

Površina vrtenine:

$$ P = 2 \pi \int_{x_1}^{x_2} f(x) \sqrt{1 + f'(x)^2} dx $$

Ploščina lika med krivuljama je določeni integral zgornjega roba lika *minus* spodnji rob lika (včasih se bolj splača *integrirati* po osi y namesto po x).

Ploščina lika, omejenega s krivuljo v polarnih koordinatah:

$$ S = \frac{1}{2} \int_{\phi_1}^{\phi_2} r^2 d \phi $$

### Taylorjeva vrsta

Za izračun vrednosti $n$-krat odvedljivega veččlenika (*polinoma*) v okolici točke $a$:

$$ T_n f(x; a) = f(a) + f'(a) (x - a) + \frac{f''(a)}{s!} (x - a)^2 + ... + \frac{f^{(n)} (a)}{n!} (x - a)^n $$

## Stožnice

Stožnice se tako imenujejo zato, ker jih lahko dobimo s presekom dvojnega stožca z ravnino. Stožnice so krivulje II. reda.

$$ Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0 $$

Za stožnice velja, da je vsaj eden od količnikov A, B, C ni enak 0. $B = 0$

- $A=C$ - krožnica;
- $A C > 0$ (A in C sta enako predznačena in nista enaka 0) - elipsa
- $A C < 0$ (A in sta sta različno predznačena in nista enaka 0) - hiperbola;
- $A = 0$ ali $C = 0$ - parabola

Izsrednost je razdalja posameznega od dveh gorišč od središča:¸

- *linearna* izsrednost e (*absolutna* vrednost);
- *numerična* izsrednost ε (*relativna* na polos izsrednosti, oz. na polos, na kateri ležita gorišči, oz. na realno polos)

Izsrednost je lahko:

- vodoravna, gorišči sta na osi x: $a > b$:
$$e^2 = a^2 - b^2$$
$$ε = \frac{e}{a}$$
- navpična, gorišči sta na osi y: $a < b$
$$e^2 = b^2 - a^2$$
$$ε = \frac{e}{b}$$

Središče *S(p, q)*, polmer *r*, x-polos *a* in y-polos *b*.

### Krožnica

$$ (x-p)^2 + (y-q)^2 = r^2 $$

### Elipsa

$$ \frac {(x-p)^2}{a^2} + \frac {(y-q)^2}{b^2} = 1 $$

### Hiperbola

$$ \frac{(x - p)^2}{a^2} - \frac{(y - q)^2}{b^2} = \pm 1 $$

- za $+1$ je $a$ realna polos in $b$ imaginarna polos; temeni in gorišči sta na x-osi; lahko zapišemo kot:
$$ \frac{(x - p)^2}{a^2} - \frac{(y - q)^2}{b^2} = 1 $$

- za $-1$ je ravno obratno - $a$ je imaginarna in $b$ relna polos; temeni in gorišči sta na y-osi; lahko zapišemo kot:
$$ - \frac{(x - p)^2}{a^2} + \frac{(y - q)^2}{b^2} = 1 $$

### Parabola

- navpična vodnica $(- \frac{p}{2}, b)$: $$ (y - b)^2 = 2p(x - a)$$
- vodoravna vodnica $(a, - \frac{p}{2})$: $$ (x - a)^2 = 2p(y - b)$$

Teme parabole: (a, b).

## Prostoroslovje
(*geometrija*)

Tetivnemu liku lahko očrtamo krožnico tako, da so vsi njegovi koti na krožnici.

Za tetivni štirikotnik (to je le *trapez*) velja, da sta nasprotna kota sokota.

### Koti

#### Radian

Radian je opredeljen kot kót loka na krožnici dolžine polmera iste krožnice. Torej je obseg kroga $2 \pi$ radianov, oz. $2 \pi$ polmerov.
$$ 180 ° = \pi $$

### Trikotnik

Trikotnik z oglišči $A(x_1), B(x_2, y_2), C(x_3, y_3)$, s stranicami *a, b, c*.

$$ S = \frac {1}{2} \left| (x_2 - x_1)(y_3 - y_1) - (x_3 - x_1)(y_2 - y_1) \right| $$

$$ S = \frac{a v_a}{2} = \frac{ab \sin \gamma}{2} $$

$$ s = \frac {a+b+c}{2} $$

$$ R_{\text{očrtan.}} = \frac{abc}{4 S} $$
$$ r_{\text{včrtan.}} = \frac{S}{s} $$

Heronova enačba za ploščino trikotnika:
$$ S = \sqrt{s (s - a)(s - b)(s - c)} $$

Kosinusni izrek:
$$ a^2 = b^2 + c^2 - 2bccos \alpha $$

Sinusni izrek:
$$ \frac{a}{\sin \alpha} = \frac{b}{\sin \beta} = \frac{c}{\sin \gamma} = 2R_{\text{očrtan.}} $$

#### Pravokotni trikotnik

Pitagorov izrek:
$$ h^2 = k_1^2 + k_2^2 $$

Če je $S$ središče krožnice, na kateri ležijo točke $A$, $B$ in $C$:

- obodni kot je $\angle{ACB}$,
- središčni kot je $\angle{ASB}$,

Središčni kot je dvakratnik obodnega.

Talesov izrek: obodni kot nad premerom krožnice je pravi; oz. razdalja med
razpoloviščem *hipotenuze* in nasprotnim ogliščem je vedno polovica
*hipotenuze*.

### *Paralelogram*

Štirikotnik s paroma (nasprotnimi) vzporednimi stranicami.

$$ S = a v_a = ab \sin \alpha $$

### *Deltoid*

Štirikotnik s paroma skladnimi soležečimi stranicami.

$$ S = \frac{e f}{2} $$

### Krogla

Površina krogle je enaka plašču valja, visokega in širokega za premer krogle.

$$ P = 2 \pi r \cdot 2 r = 4 \pi r^2 $$
$$ V = \frac {4 \pi r^3}{3} $$

## *Vektorji*

*Bazni vektorji* v
$\mathbb{R}^3$ tvorijo *bazo koordinatnega* prostora, morajo biti *linerano*
neodvisni (enega ne moremo izraziti z ostalimi). Običajno se jih označeni z $\vec{i}$, $\vec{j}$ in $\vec{k}$ in
običajno se uporablja t.i. *standardna baza*, kjer so pravokotni drug na
drugega:
$$ \vec{i} = (1, 0, 0), \vec{j} = (0, 1, 0), \vec{k} = (0, 0, 1) $$

$$\vec{a} = (a_1, a_2, a_3)
    = \begin{bmatrix} a_1 \\ a_2 \\ a_3 \end{bmatrix}
    = a_1 \vec{i} + a_2 \vec{j} + a_3 \vec{k} $$

Seštevanje/odštevanje *vektorjev*: po delih (*komponentah*)
$$ \vec{u} + \vec{v} = (u_1 + v_1, u_2 + v_2, u_3 + v_3) $$

Množenje/deljenje *vektorjev* s *skalarjem*: po delih
$$ \alpha \vec{v} = (\alpha v_1, \alpha v_2, \alpha v_3) $$

### *Skalarni produkt*

*Skalarni produkt* $\vec{u} = (u_1, u_2, u_3)$ in $\vec{v} = (v_1, v_2, v_3)$
$$ \vec{u} \cdot \vec{v} = u_1 v_1 + u_2 v_2 + u_3 v_3 \in \mathbb{R} $$
Za kot $\phi$ med *vektorjema* $\vec{u}$ in $\vec{v}$ velja:
$$ \cos \phi = \frac{\vec{u} \cdot \vec{v}}
    { \lvert \vec{u} \rvert \lvert \vec{v} \rvert }
    \\ \implies \vec{u} \cdot \vec{v} =
    \lvert \vec{u} \rvert \lvert \vec{v} \rvert \cos \phi $$
Iz zgornje enačb sledi, da je kot med *vektorjema*:
- oster, če velja $\vec{u} \cdot \vec{v} > 0$
- top, če velja $\vec{u} \cdot \vec{v} < 0$
- pravi, če velja $\vec{u} \cdot \vec{v} = 0$

***Absolutna* vrednost / dolžina**:
$$ \lvert v \rvert = \sqrt{\vec{v} \cdot \vec{v}}
    = \sqrt{v_1^2 + v_2^2 + v_3^2} \in \mathbb{R} $$

### *Vektorski produkt*

*Vektorski produkt* prestavlja ploščino paralelograma, ki ga zmnožena
*vektorja* oklepata. Smer zmnožka je odvisna od zaporedja množenja in pri tem
velja desno pravilo (tudi "pravilo desnega vijaka, ki pomeni, da če prvi
*vektor* zasučemo okoli skupnega izhodišča proti drugemu *vektorju*, se vijak
zavrti v smer *vektorja* zmnožka).

$$ \vec{a} \times \vec{b}
    = \mathrm{det} \left( \begin{bmatrix}a_1 & b_1\\a_2 & b_2\\a_3 & b_3\end{bmatrix} \right)
    \\ = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \end{vmatrix}
    = \begin{vmatrix} a_2 & a_3 \\ b_2 & b_3 \end{vmatrix} \vec{i} -
    \begin{vmatrix} a_1 & a_3 \\ b_1 & b_3 \end{vmatrix} \vec{j} +
    \begin{vmatrix} a_1 & a_2 \\ b_1 & b_2 \end{vmatrix} \vec{k}
    \\ = a_2 b_3 \vec{i} + a_3 b_1 \vec{j} + a_1 b_2 \vec{k} - a_3 b_2 \vec{i} - a_1 b_3 \vec{j} - a_2 b_1 \vec{k}
    = (a_2 b_3 - a_3 b_2) \vec{i} + (a_3 b_1 - a_1 b_3) \vec{j} + (a_1 b_2 - a_2 b_1) \vec{k} $$

Za *bazne vektorje* velja
$$ \vec{i} \times \vec{j} = \vec{k}
    \\ \vec{j} \times \vec{k} = \vec{i}
    \\ \vec{k} \times \vec{i} = \vec{j} $$
torej da je *vektorski pridukt* dveh *baznih vektorjev* tretji *bazni
vektor*. Ampak morata biti v pravem vrstnem redu ($i$, $j$, $k$, $i$, $j$,
...) – velja namreč pravilo desnega vijaka:
$$ \vec{i} \times \vec{k} = -\vec{j} $$

Lastnosti računanja z *vektorskim produktom*:

- $\vec{v} \times \vec{v} = \vec{0}$
- (*antikomutativnost*) $\vec{u} \times \vec{v} = -(\vec{v} \times \vec{u})$
- (razčlenljivost) $\vec{u} \times (\vec{v} + \vec{w})
    = \vec{u} \times \vec{v} + \vec{u} \times \vec{w}$
- (razčlenljivost) ($\vec{u} + \vec{v}) \times \vec{w}
    = \vec{u} \times \vec{w} + \vec{v} \times \vec{w}$
- (*homogenost*) $\alpha (\vec{u} \times \vec{v}) = (\alpha \vec{u}) \times \vec{v}
    = \vec{u} \times (\alpha \vec{v})$
- $\vec{u} \cdot (\vec{u} \times \vec{v})
    = \vec{v} \cdot (\vec{u} \times \vec{v}) = 0$
- $\vec{u} \cdot (\vec{v} \times \vec{w})
    = (\vec{u} \times \vec{v}) \cdot \vec{w}$
- (nedružilnost / *neasociativnost*) $\vec{u} \times (\vec{v} \times \vec{w})
    = (\vec{u} \cdot \vec{w}) \vec{v} - (\vec{u} \cdot \vec{v}) \vec{w}$
- (Jacobijeva *identiteta*)
    $\vec{u} \times (\vec{v} \times \vec{w})
        + \vec{v} \times (\vec{w} \times \vec{u}) 
        + \vec{w} \times (\vec{u} \times \vec{v}) = \vec{0}$
- za neničelna *vektorja*:
    $\lvert \vec {u} \times \vec{v} \rvert
        = \lvert \vec{u} \rvert \lvert \vec{v} \rvert \sin \phi$

### *Vektorski* prostori

*Vektorji* tvorijo ogrodje prostora, če lahko vsak *vektor* v tem prostoru
izrazimo kot njihovo *linearno kombinacijo*.

*Baza* prostora je tako ogrodje prostora, da so *linearne kombinacije* vseh
*vektorjev* enolične (vsak *vektor* je moč izraziti le z eno *linearno
kombinacijo*).

## *Matrike*

*Matrika* je orodje s katerim lahko med drugim računamo *linearne* enačbe,
predstavimo in računamo s preslikavami, oz. prostorskimi *transformacijami*
različnih števil razsežnosti.

**Vrste *matrik***:

- **Ničelna**: vsi členi so enaki nič
- ***Identična***: *diagonala*/prekotnica *matrike* je v vseh členih enaka 1,
  ostali členi so 0. Vedno je tudi kvadratna.
$$ \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix} $$
  V primeru preslikave je to
  *nevtralni element* pri sestavljenih (*kompozitnih*) preslikavah, saj ne
  spremeni ničesar.
$$ IA = AI = A $$
- ***diagonalna*** (prekotniška): vsi členi izven prekotnice (*diagonale*) so
  enaki nič
$$ \begin{bmatrix} a_1 & 0 & 0 & 0 \\ 0 & a_2 & 0 & 0 \\ 0 & 0 & a_3 & 0 \\ 0 & 0 & 0 & a_4 \end{bmatrix} $$
- ***antidiagonalna***: (nasprotno prekotniška) vsi členi izven nasprotne
  prekotnice (*diagonale*) so enaki nič
- **Zgornje trikotna**: vsi neničelni členi so nad prekotnico (*diagonalo*),
  členi pod prekotnico so enaki nič

### Pravila za računanje z *matrikami*

- **Seštevanje/odštevanje**: po *komponentah* (*matriki* morata biti torej
  enake oblike / velikosti)
- **Množenje s *skalarjem*** (oz. matrika velikosti 1x1): po *komponentah*
- **Množenje *matrik*** – št. stolpcev prve *matrike* mora ustrezati št. vrsic
  druge *matrike*; ne velja zamenljivost / *komutativnost*, velja pa
  družilnost / *asociativnost*:
$$ \begin{bmatrix}a & b & c\\d & e & f\end{bmatrix} \begin{bmatrix}g & h\\i & j\\k & l\end{bmatrix} = \begin{bmatrix}ag + bi + ck & ah + bj + cl\\dg + ei + fk & dh + ej + fl\end{bmatrix} $$
    $$ c_{i, j} = \sum_{k=1}^n a_{ik} b_{kj} $$
    *Matrični produkt* dveh neničelnih *matrik* je lahko tudi enak nič.
- ***transpozicija***: stolpci postanejo vrstice in vrstice stolpci

### *Funkcije matrik*

**Komutator** kvadratnih matrik $A, B \in \mathbb{C}^{n \times n}$:
$$ [A, B] = AB - BA $$

**Sled** (ang. *trace*) je vsota prekotniških (*diagonalnih*) členov:
$$ \mathrm{tr} (A) = A_{11} + A_{22} + ... + A_{nn} $$
$$ \mathrm{tr} (A + B) = \mathrm{tr} (A) + \mathrm{tr} (B) $$
$$ \mathrm{tr} (AB) = \mathrm{tr} (BA); A, B \in \mathbb{C}^{n \times n} $$
$$ \mathrm{tr} (\lambda A) = \lambda \mathrm{tr} (A); \lambda \in \mathbb{C}; A \in \mathbb{C}^{n \times n} $$

### Reševanje *linearnih* enačb z *matrikami*

***Dimenzija*** prostora rešitev *homogenega sistema linearnih* enačb je enaka
razliki med številom vrstic in njenim *rangom* ($k = n - \mathrm{rang}(A)$).
Spremenljivke, ki nimajo *pivota*, vzamemo za *parameter*.

Homogen *sistem* (kjer so vse vrstice enake 0) pa je pravzaprav podvrsta
*nehomogenega*, kjer moramo *matriko* zgolj zapisati v razširjeni obliki, in je
rešljiv le takrat, ko je $\mathrm{rang}(A) = \mathrm{rang}(A:b)$

Postopek reševanja *nehomogenih linearnih* enačb:

- zapišemo *matriko* količnikov in jo prevedemo v VKF
- spremenljivke, ki nimajo pivotov v VKF, vzamemo za proste spremenljivke
  (*parametre*)
- zapišemo poenostavljen *sistem* enačb in ostale spremenljivke izrazimo s
  prostimi spremenljivkami

<div class="zgled">
Primer:

$$ x - 2y + 3z - 4u = 4 \\ y - z + u = -3 \\ x + 3y - 3u = 1 $$
$$ \left[\begin{array}{cccc|c} 1 & -1 & 3 & -4 & 4\\0 & 1 & -1 & 1 & -3\\1 & 3 & 0 & -3 & 1\end{array}\right] \to \left[\begin{array}{cccc|c} 1 & -2 & 3 & -4 & 4\\0 & 1 & -1 & 1 & -3\\0 & 0 & 1 & -2 & 6\end{array}\right] $$
Tako dobimo poenostavljen *sistem* enačb:
$$ x - 2y + 3z - 4u = 4 \\ y -z + u = -3 \\ z - 2u = 6 $$
$u$ vzamemo za *parameter*, ker nima pivota:
$$ x = -8 \\ y = 3 + u \\ z = 6 + 2 u $$
$$ r(u) (x, y, z, u) = (-8, 3 + u, b + 2 u, u) = (-8, 3, 6, 0) + u (0, 1, 2, 1) = \vec{r_0} + \vec{s} $$
kjer je $\vec{r_0}$ začetna točka na premici in $\vec{s}$ smerni *vektor* premice.
</div>

Ali dani *vektorji* tvorijo ogrodje [*vektorskega* prostora](Vektorski_prostori)
$\mathbb{R}^n$, ugotovimo tako, da

1. *vektorje* zložimo v stolpce *matrike* A
2. to *matriko* A pretvorimo v [VKF](#Vrsticna_kanonicna_forma)
3. Če je $\mathrm{rang}(A) = n$, dani *vektorji* tvorijo ogrodje; *vektorji*, ki
   imajo pivote, tvorijo *bazo*

### Inverz matrike

Če *matriko* razumemo/razlagamo kot
[*transformacijo*](#Linearne_transformacije), je *inverz matrike* obratna
*transformacija*.

$$ A^{-1} A = A A^{-1} = I_n; A, A^{-1} \in \mathbb{C}^{n \times n}; \mathrm{det}(A) \neq 0 $$

*Inverz* $A^{-1}$ lahko izračunamo:

- z enačbo $A X = I$, kjer je X iskani *inverz*, I pa *identična matrika*
- z [Gaussovim *algoritmom*](#Gauss_Jordanova_eliminacija)

*Inverz diagonalne matrike*: po *komponentah*

$$ \begin{bmatrix} A & 0 \\ 0 & C \end{bmatrix}^{-1} = \begin{bmatrix}A^{-1} & 0 \\ 0 & C^{-1} \end{bmatrix} $$

### Gauss-Jordanova *eliminacija*

Z njo pridemo do *inverza matrike* (če ta obstaja, sicer se postopek ne izide).

- najprej zapišemo razširjeno *matriko* $\begin{bmatrix} A & I \end{bmatrix}$
- z vrstičnimi *operacijami* razširjeno *matrikp* prevedemo v obliko $\begin{bmatrix} I & A^{-1} \end{bmatrix}$


***Elementarne* vrstične *operacije***, ki jih lahko uporabimo (pri tem v resnici množimo enačbo $A X = I$ z leve z ustreznimi *matrikami*):

- $i$-to vrstico pomnožimo z neničelnim številom $\alpha$ oz. to pomeni, da celotno *matriko* z leve pomnožimo z *matriko*
    $$ \begin{pmatrix}
    1   &       &   &       &   &       &   \\
        &\ddots &   &       &   &       &   \\
        &       & 1 &       &   &       &   \\
        &       &   &\alpha &   &       &   \\
        &       &   &       & 1 &       &   \\
        &       &   &       &   &\ddots &   \\
        &       &   &       &   &       & 1 \\
    \end{pmatrix} $$

- $i$-ti vrstici prištejemo $\beta$-kratnik $j$-te vrstice
    <div class="zgled">
    Da drugi vrstici *matrike* $A$ prištejemo $\beta$-kratnik prve vrstice:
    $$ \begin{bmatrix} 1 & 0 & 0 \\ \beta & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} A X = \begin{bmatrix} \end{bmatrix} I $$
    </div>

- zamenjamo $i$-to in $j$-to vrstico

### Vrstična *kanonična forma*

- v vsaki vrstici je prvo neničelno število 1 (to je tudi t. i. *pivot*)
- v dani vrstici je prva 1 desno od prve 1 v vrstici nad njo
- od nekod dalje so lahko vrstice ničelne

<div class="zgled">
Primer:
$$ \begin{bmatrix} 0 & 0 & 1 & a & b & c \\ 0 & 0 & 0 & 0 & 1 & d \\ 0 & 0 & 0 & 0 & 0 & 0 \end{bmatrix} $$
</div>

*Matriko* lahko pretvorimo v VKF z uporabo vrstičnih *operacij* [Gauss-Jordanove *eliminacije*](#Gauss_Jordanova_eliminacija).

***Rank matrike*** je po svoji opredelitvi enak številu njenih *pivotov* v vrstični *kanonični formi* (VKF).

### Determinanta matrike

*determinanta* predstavlja tudi količnik, za katerega se spremeni ploščina (*vektorski produkt*), če matriko vzamemo kot *transformacijo*. Če je *determinanta negativna*, je to zato, ker sta se *bazna vektorja* pri *transformaciji* zamenjala.
$$ \mathrm{det} \left( \begin{bmatrix}a & b\\c & d\end{bmatrix} \right) = ad - bc $$
$$ \mathrm{det} \left( \begin{bmatrix}a & b & c\\d & e & f\\g & h & i\end{bmatrix} \right) = aei + bfg + cdh - ceg - bdi - afh $$
$$ \mathrm{det} (A) = \sum_{\sigma \in \mathrm{Sym(n)}} \mathrm{sgn} (\sigma) A; A \in \mathbb{C}^{n \times n} $$
$$ \begin{bmatrix}a_1\\a_2\\a_3\end{bmatrix} \times \begin{bmatrix}b_1\\b_2\\b_3\end{bmatrix} = \mathrm{det} \left( \begin{bmatrix}\vec{i} & a_1 & b_1\\\vec{j} & a_2 & b_2\\\vec{k} & a_3 & b_3\end{bmatrix} \right) = \vec{i}(a_2b_3 - a_3b_2) + \vec{j}(a_3b_1 - a_1b_3) + \vec{k}(a_1b_2 - a_2b_1) $$

Za izračun *determinante* lahko uporabimo tudi Gaussovo *metodo/algoritem*:

- če vrstici prištejemo večkratnik druge vrstice, se *determinanta* ne spremeni
- če vrstico pomnožimo s $k$, se *determinanta* pomnoži s $k$.
- če zamenjamo dve vrstici, se spremeni preznak *determinante*
- iste *operacije* lahko uporabimo tudi na stolpcih

*Determinanta* zgornje trikotne *matrike* je vedno zmnožek prekotniških členov (ker je zmnožek vseh ostalih prekotnic enak nič). Zato je dovolj, da z Gaussovim *algoritmom matriko* poenostavimo le do zgornje trikotne oblike.

Če ima *matrika* veliko ničel, se splača uporabiti **razvoj po stolpcu ali vrstici**. 

**Izračun *determinante* po vrstici/stolpcu**: splača se, kada je v *matriki* veliko ničel; ta pristop *determinanto* $n \times n$ prevede na $(n - 1) \times (n - 1)$.

Po $i$-ti vrstici:
$$ \mathrm{det}(A) = \sum_{j=1}^n a_{i j} \mathrm{co}_{i j}(A) $$
Po $i$-tem stolpcu:
$$ \mathrm{det}(A) = \sum_{i=1}^n a_{j i} \mathrm{co}_{j i}(A) $$

### Računanje *linearnih* enačb z *matrikami*

*Dimenzija* prostora (število prostih spremenljivk / *parametrov*) je $k = n - \mathrm{rang}(A)$.

### Cramerjevo pravilo za izračun *inverza matrike*

Splača se ga uporabiti v nekaterih teoretičnih izpeljavah, v *praktičnih* primerih pa predvsem za $n = 1$ in $n = 3$.

$$ A^{-1} = \frac{1}{\mathrm{det}(A)} \mathrm{co}(A)^{T} $$
*Kofaktor* $\mathrm{co}(A)$ dobimo tako, da izračunamo *kofaktorje* po vseh vrsticah in stolpcih.

Enačba za *matriko* $2 \times 2$:
$$ \begin{bmatrix} a & b \\ c & d \end{bmatrix}^{-1} = \frac{1}{a d - b c} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix} $$

### *Linearne transformacije*

*linearna transformacija* preoblikuje *koordinatni* prostor tako, da ohrani *koordinatno* mrežo (prejšnje navpičnice, vodoravnice in poševnice) ravne, vzporedne in enakomerno razmaknjene, ter ne premakne izhodišča. Opišemo jo lahko s preprosto *matriko*, ki nam pravzaprav pove *koordinate transformiranih baznih vektorjev* v *netransformiranem* prostoru. Če torej *matriko*/*vektor* množimo s to *transformacijsko matriko*, dobimo *transformirano matriko*/*vektor*.

$$ \vec{i} \to (a\vec{i}, c\vec{j});\, \vec{j} \to (b\vec{i}, d\vec{j}) $$
$$ \begin{bmatrix}x\\y\end{bmatrix} \to \begin{bmatrix}a & b\\c & d\end{bmatrix} \cdot \begin{bmatrix}x\\y\end{bmatrix} = \begin{bmatrix}ax & by\\cx & dy\end{bmatrix} $$

Preslikava je *linearna*, če velja, da je

- *homogena*: $T(\alpha \gamma) = \alpha T(\gamma); \alpha \in \mathbb{R}; \gamma \in V$
- *aditivna*: $T(\gamma + \omega) = T(\gamma) + T(\omega); \gamma, \omega \in V$

Vsaka *linearna* preslikava je določena s slikami *baznih vektorjev*.

***Kompozicija transformacij*** (več zaporednih – zaporedje je pomembno) = zmnožek njihovih *transformacijskih matrik* (zaporedje v levo):
$$ f(x) = \begin{bmatrix}a & b\\c & d\end{bmatrix}; g(x) = \begin{bmatrix}e & h\\l & m\end{bmatrix} $$
$$ f(g(x)) = \begin{bmatrix}a & b\\c & d\end{bmatrix} \left( \begin{bmatrix}e & h\\l & m\end{bmatrix} \begin{bmatrix}x\\y\end{bmatrix} \right) = \left( \begin{bmatrix}a & b\\c & d\end{bmatrix} \begin{bmatrix}e & h\\l & m\end{bmatrix} \right) \begin{bmatrix}x\\y\end{bmatrix} $$

***Determinanta transformacijske matrike*** nam pove, za kakšen količnik se spremeni ploščina/prostornina ob *transformaciji*. Če je *determinanta negativna*, to pomeni, da se je *vektor normale* ploščine obrnil (zamenjal predznak), kar se zgodi, če "zamenjamo " *bazna vektorja* med sabo.

<div class="zgled">
Primer zasuka dvorazsežnostnega prostora okoli $(0, 0)$ za kot $\phi$:
$$ R_\phi = \begin{bmatrix} \cos \phi & - \sin \phi
\\ \sin \phi & \cos \phi \end{bmatrix} $$
</div>

### Preslikave med *vektorskimi* prostori

- ***unitarna matrika***: $A^* A = A A^* = I_n$

### *Linearne* preslikave

Preslikava je lahko:

- *monomorfizem*: je *injektivna* (vsak *vektor* slika v svoj *vektor*, nobenih
  *vektorjev* ne slika v isti *vektor*), jedro *monomorfne linearne* preslikave
  vsebuje le ničelni *vektor* ($\mathrm{ker}(T) = {{0}}$)
- *epimorfizem*: je *surjektivna* (slika preslikave je enaka celotnemu prostoru,
  v katerega slikamo)
- *izomorfizem*: je *injektivna* in *surjektivna*, torej *bijektivna* Prostora
  sta *izomorfna*, če med njima obstaja kak *izomorfizem*. To je *ekvivalenčna
  relacija*.

#### Jedro *matrike*

Jedro (imenovan tudi ničelni prostor ali *kernel*) je množica vseh *vektorjev*
$x$, za katere velja
$$ A x = 0 $$
Postopek računanja jedra *matrike*:

1. Poenostavitev *matrike* $A$ z [Gaussovo *eliminacijo*](#Gauss_Jordanova_eliminacija)
   v zgornje trikotno obliko (da dobimo *nekolinearne bazne* vektorje
   podprostora jedra)
2. Določitev prostih spremenljivk: če je število stolpcev večje od *ranka
   matrike*, se za proste spremenljivke uvede *parametre* (npr. $t$, $s$)
3. Zapis enačbe $A x = 0$
4. Zapis rešitve s *parametri*

<div class="zgled">
Primer:
$$ A = \begin{bmatrix} 1 & 2 \\ 2 & 4 \end{bmatrix} $$

1. $$ A \approx \begin{bmatrix} 1 & 2 \\ 0 & 0 \end{bmatrix} $$
2. $\mathrm{rang}(A) = 1$, torej naj bo spremenljivka $y$ prosta
3. $$ A x = 0 $$
    $$ 1x + 2y = 0 $$
    $$ 0x + 0y = 0 $$
4. $$ x = - 2y $$
    $$ x = \begin{bmatrix} x \\ y \end{bmatrix} = (x, y) = (- 2y, y) = y (-2, 1) $$
</div>

#### Lastni *vektorji* in lastne vrednosti

Lastni *vektorji* so tisti, ki ob *transformaciji* ostanejo na svoji ogrinjači
in se zgolj raztegnejo/skrčijo za svojo lastno rednost. Ostali *vektorji* v
prostoru se premaknejo (razmerje med njihovimi *koordinatami* se spremeni). Če
je katera izmed njegovih lastnih vrednosti *negativna*, se tak *vektor* tudi
preslika čez svoje izhodišče (a ostane na svoji ogrinjači).

Za sukanje v treh razsežnostih so lastni *vektorji* osi tega sukanja (če gre
samo za sukanje, morajo biti lastne vrednosti enake 1).

Število $\lambda$ je lastna vrednost za $A$, če obstaja tak neničeln *vektor*
$\vec v \in \mathbb{C}^n$, da je
$$ A \vec v = \lambda \vec v $$
Tak *vektor* $\vec v$ imenujemo lastni *vektor* za A pri lastni vrednosti
$\lambda$.

$$ A \vec v = \lambda \vec v = (\lambda I) \vec v 
\implies (A - \lambda I) \vec v = \vec 0
\\\implies p_K = \mathrm{det}(A - \lambda I) = 0 $$
$p_K$ je t.i. *karakteristični polinom*, katerega ničle ustrezajo lastnim
vrednostim.

Število $\lambda$ je lastna vrednost za $A$ natanko tedaj, ko velja
$$ \mathrm{ker}(A - \lambda I ) \neq 0 $$
Če je $\lambda$ lastna vrednost za $A$, potem je *vektorski* podprostor
$\mathrm{ker}(A - \lambda I)$ lastni podprostor za A pri lastni vrednosti
$\lambda$

***Diagonalna matrika*** ima neničelne člene le na svoji *diagonali*, kar
pomeni, da je *transformacija*, za katero so vsi *bazni vektorji* lastni
*vektorji* s svojimi lastnimi vrednostmi, ki so kar *diagonalni* členi.

Podobno kot za *diagonalne matrike* velja tudi za *bločno diagonalne*, kjer
*determinanta* vsakega *bloka* ustreza eni lastni vrednosti (če je lastna
vrednost *kompleksna*, nastopa v *konjugiranem* paru znotraj istega *bloka*?).
vsak *blok* na *diagonali*

Zaradi lepih lastnosti lastnih *vektorjev* je lahko zelo priročno, če za *bazne
vektorje* vzamemo lastne *vektorje*. Vendar to lahko storimo le, če imamo dovolj
nevzporednih (*nekolinearnih*) *vektorjev* za *bazo* prostora.

<div class="zgled">
Če sta naša lastna *vektorja* $a = (1, 0)$ in $b = (-1, 1)$, potem *bazo*
prostora spremenimo tako:
$$ \begin{bmatrix} 1 & -1 \\ 0 & 1 \end{bmatrix}^{-1} A \begin{bmatrix} 1 & -1
\\ 0 & 1 \end{bmatrix}^{-1} $$
Iz tega potem dobimo *diagonalno matriko*, z *diagonalnimi* členi, ki so hkrati
tudi lastne vrednosti *baznih* vektorjev.  Tej novi *bazi* prostora pravimo
lastna *baza*.
</div>

# Zunanje povezave in viri

- [3Blue1Brown: Essence of linear algebra](https://www.youtube.com/playlist?app=desktop&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab) (YouTube)
