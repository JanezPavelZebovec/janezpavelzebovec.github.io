---
title: Naravoslovje
date: 2026-07-08
description: Naravni zakoni
keywords: naravoslovje, fizika
author: Janez Pavel Žebovec
---

# Naravoslovje

Okolica mora z neko silo delovati na telo, da to telo z neko *maso* spravi v (ali vpliva na) gibanje.

## Opazovalni *sistemi*

***Inercialni* opazovalni *sistemi*** se gibljejo premo in enakomerno drug proti/od drugemu/ga, ne pospešujejo.

### Galilejevski *sistemi*

Galilejeve *transformacije* veljajo za nepospešene (*inercialne sisteme*), ter pri majhnih hitrostih (pomeni, da ne blizu svetlobni hitrosti, kjer jih nadomestijo druge *transformacije* – Lorentzeve?).

$$ \vec r = \vec r' + \vec r_0 \implies \vec r' = \vec r - \vec r_0 $$
$$ \vec r' = \vec r + \vec r_0' \implies \vec r = \vec r' - \vec r_0' $$

$$ \vec r' = \vec r - \vec r_0
    \implies \frac{\d \vec r'}{\d t} = \frac{\d \vec r}{\d t} - \frac{\d \vec r_0}{\d t}
    \implies \vec v' = \vec v - \vec v_0 $$

Pospeški so v vseh *inercialnih sistemih* enaki (ker en *sistem* ne pospešuje v primerjavi z drugim).

$$ \vec a' = \vec a - \vec a_0 = \vec a $$

### Pospešeni *sistemi*
(*Neinercialni sistemi*)

Če opazovalni *sistem* pospešuje, ima torej *sistemski* pospešek, se pojavi *sistemska* sila.
$$ \vec a' = \vec a - \vec a_{sis.} $$

#### Coriolisov pojav

Do Coriolisovega pojava pride v vrtečem se (torej pospešenem) *sistemu*. Imenujemo ga tudi *Coriolisova sila* po navidezni sili, ki pridi v poštev pri računanju v takšnih *sistemih*.

$$ \vec F_{Co} = - 2 m (\vec \omega \times \vec v) $$

## Sile

Sila je učinek/vpliv okolice, teles v okolici na drugo telo. V [galilejevskih (*inercialnih*) opazovalnih *sistemih*](#Galilejevski_sistemi) ni "skrivnostnih" sil brez določenega telesa – vsaka sila ima svoje izvorno telo (v pospešenih *sistemih* imamo še *sistemski* pospešek, ki povzroča navidezno *sistemsko silo*).

<div class="zakon">
**Newtonovi zakoni** (veljajo le v galilejevskih opazovalnih *sistemih*):

1. **Če je vsota učinkov okolice (sil) enaka nič, telo miruje ali se giblje premo in enakomerno**
    $$ \sum_{i} \vec F_i = 0 \implies \vec a = 0 $$
    Bolj splošno: Če je vsota sil na telo enaka nič, je mogoče najti [opazovalni *sistem*](#Opazovalni sistemi), v katerem se telo giblje premo in enakomerno.
2. **Pospešek je sorazmeren s silo in ima smer sile** (vzročna zveza: vzrok sila $\to$ posledica gibanje)
    $$ \sum_{i} \vec F_i = m \vec{a} $$
3. **Če deluje prvo telo na drugo z neko silo, deluje drugo telo na prvo z nasprotno enako silo**
    $$ \vec F_{1,2} = - \vec F_{2,1} $$
</div>

*Masa* je lastnost telesa, da se upira pospešovanju – vztrajnost (*inercija*). Teža je sila okolice, sorazmerna z *maso* (težnostni pospešek je neodvisen od *mase*).

Težišče:
$$ \vec r^* = \frac{\sum m_i \vec r_i}{\sum m_i} = \frac{\int \d m \vec r}{\int \d m}; M = \int \d m $$
Drugi Newtonov zakon za gibanje težišča: težišče v gibanje spravijo le zunanje sile
$$ \sum \vec F_{zun.} = M \vec a*
Notranje sile ne opravljajo dela, če je telo togo.

| | |
| --- | --- |
| lepenje (ob mirovanju) | $$ F_{l, max} = k_l F_N $$ |
| trenje (ob gibanju) | $$ F_{tr} = k_{tr} F_N $$ |
| količnik trenja/lepenja | $$ k_l \geq k_{tr} $$ |
| Hookov zakon | $$ \vec F_{vzmet} = -k_{vzmeti} \vec{x} $$ |

$$ g(r) = g \frac{r_z^2}{r^2} $$
$$ F = G \frac{m_1 m_2}{r^2} $$
$$ \frac{r^3}{t_0^2}  = \text{stalno} $$

$$ F = k x $$
$$ F_tr = k_tr F_n $$
$$ \vec{F} = m \vec{a} $$
$$ \vec{G} = m \vec{v} $$
$$ \vec{F} \Delta t = \Delta \vec{G} $$
$$ M = r F \sin \alpha $$
$$ \Delta p = \rho g h $$

$$ F = p S $$
$$ F_v = \rho_{\text{tek.}} g V $$
$$ \Delta p = \rho g h $$

## *Mehanika*

- Opis gibanja: *kinematika*
- Napoved gibanja: *dinamika*

$$ x = x_0 + v_0 t + \frac {a t^2}{2} $$
$$ v = v_0 + a t $$
<div class="izpeljava">
$$ a = \frac{\d v}{\d t} = \frac{\d v \d x}{\d x \d t} = v \frac{\d v}{\d x} $$
$$ \int_{v_0}^v v \d v = \int_{x_0}^x a \d x
    \implies \frac{1}{2} (v^2 - v_0^2) = a (x - x_0) $$
</div>
$$ v^2 = v_0^2 + 2 a (x - x_0) $$

Povprečna hitrost na časovnem odseku:
$$ \overline{\vec v} = \frac{\Delta \vec r}{\Delta t} $$

Za razliko od povprečne hitrosti se prava hitrost nanaša na trenutek, ko gre časovni odsek proti nič:
$$ \vec v = \lim_{\Delta t \to 0} \frac{\Delta \vec r}{\Delta t} = \frac{\d \vec r}{\d t} $$
$$ \vec v = (v_x, v_y, v_z) = \left( \frac{\d x}{\d t}, \frac{\d y}{\d t}, \frac{\d z}{\d t} \right) $$

Podobno velja tudi za pospešek in vse nadaljne časovne odvode poti:
$$ \overline{\vec a} = \frac{\Delta \vec v}{\Delta t} $$
$$ \vec a = \lim_{\Delta t \to 0} \frac{\Delta \vec v}{\Delta t} = \frac{\d \vec v}{\d t} $$
$$ \vec a = \left( \frac{\d v_x}{\d t}, \frac{\d v_y}{\d t}, \frac{\d v_z}{\d t} \right)
    = \left( \frac{\d^2 x}{\d t^2}, \frac{\d^2 y}{\d t^2}, \frac{\d^2 z}{\d t^2} \right) $$

Pospešek, ki je vzporeden hitrosti, zgolj spreminja velikost hitrosti, nevzporeden pospešek pa tudi spreminja smer.
$$ \sin \d \phi = \frac{| \vec a | \d t}{| \vec v |} \implies \d \phi = \frac{a}{v} \d t \implies a = \frac{\d \phi}{\d t} v = \omega v $$

| | |
| --- | --- |
| položajni *vektor* | $$ \vec r = \vec r_0 + \int_{t_z}^{t_k} \vec v \d t + \int_{t_z}^{t_k} \vec a \frac{t^2}{2} $$ |
| pot [$m$] | $$ s = \int_{\vec r_z}^{\vec r_k} \lvert \d \vec r \rvert = \int_{\vec r_z}^{\vec r_k} \d s $$ $$ \d s^2 = \d x^2 + \d y^2 + \d z^2 $$ |
| hitrost (spreminja *vektor* položaja) [$\frac{m}{s}$] | $$ \vec v = \vec r '(t) = \frac{\d \vec r}{\d t} = \vec v_z + \int_{t_z}^{t_k} \vec a \d t $$ $$ \vec v^2 = \vec v_0^2 + \int_{t_z}^{t_k} 2 \vec a \d x $$ $$ \overline{\vec v} = \frac{\Delta \vec{r}}{\Delta t} $$ |
| pospešek (spreminja smer in velikost hitrost) [$\frac{m}{s^2}$] | $$ \vec a = \vec v '(t) = \frac{\d \vec v}{\d t} $$ $$ \overline{\vec a} = \frac{\Delta \vec v}{\Delta t} $$ |

### Navor

$$ \vec M = \vec r \times \vec F = m \vec \alpha r^2 = J \vec \alpha $$

## *Energije*

<div class="zakon">
**Zakon o ohranitvi *energije***: V zaprtem *sistemu* se *energija* ohranja; ne more nastati iz nič ali izginiti v nič, lahko pa se pretvarja iz ene vrste *energije* v drugo.
</div>

$$ A = \Delta W_k + \Delta W_p + \Delta W_{pr} + ... $$
$$ A = - p \Delta V $$

| | |
| --- | --- |
| delo (sprememba *energije*) [$\frac{kg m^2}{s^2} = Nm = J$] | $$ A = \vec{F} \vec{s}  = F s \cos \varphi = \Delta W $$ |
| moč [$\frac{J}{s} = W$] | $$ P = \frac{\d A}{\d t} $$ $$ \overline{P} = \frac{A}{\Delta t} $$ |

$$ P = \frac{\d A}{\d t} = \frac{\d F s}{\d t} = F \frac{\d s}{\d t} = F v $$

$W = W_k + W_p = M_Z \frac{v^2}{2} - G \frac{M_S M_Z}{r}$ (npr. v osončju):

- $W < 0$: vezan *sistem* (*elipsa*)
- $W = 0$ (*parabola*)
- $W > 0$: prost *sistem* (*hiperbola*)

### *Kinetična energija*

*Kinetična energija* je lastnost gibajočega se telesa.

<div class="izpeljava">
$$ \Delta W_k = A = \int_{\vec r_1}^{\vec r_2} \vec F \d \vec r
    = \int_{\vec r_1}^{\vec r_2} m \vec a \d \vec r
    = \int_{\vec r_1}^{\vec r_2} m \frac{\d \vec v \d \vec r}{\d t \d t}
    = m \int_{\vec v'}^{v} \vec v \d \vec v
    = m \int \vec v \d \vec v
    = m \int \left( v_x \d v_x + v_y \d v_y + v_z \d v_z \right)
    = \frac{1}{2} m \left( v_x' + v_y' + v_z' \right) \Big|_{v'}^{v} = \frac{1}{2} m v^2 \Big|_{v'}^{v}
    = \frac{1}{2} m (v^2 - v'^2) $$
</div>
$$ W_k = \frac {m v^2}{2} $$

### *Potencialna* težnostna *energija*

*Potencialna energija* ima naravno izhodišče ($W_{p, g} = 0$) neskončno daleč stran, kjer gre teža proti nič ($r_1 \rightarrow \infty$):

$$ \vec F_g = -G \frac{m_1 m_2}{r^2} \frac{r_{1,2}}{r} $$
<div class="izpeljava">
$$ W_{p, g} = - A_g
    = - \int_{\vec r_1}^{\vec r_2} \vec F_g \cdot d\vec{r}
    = - \int_{r_1}^{r_2} \left(- \frac{G m_1 m_2}{r^2} \right) \frac{r_{1,2}}{r} dr
    = \int_{r_1}^{r_2} \frac{G m_1 m_2}{r^3} r dr
    = - \frac{G m_1 m_2}{r} \Big|_{r_1}^{r_2}
    = - \frac{G m_1 m_2}{r_2} $$
</div>
$$ W_{p, g} = - \frac{G m_1 m_2}{r_2} $$

Za "ravno Zemljo" ($\Delta h << r_Z$) – izhodišče je po dogovoru na ničelni nadmorski višini:
$$ g = \frac{G M_Z}{r_Z^2} $$
$$ W_{p, g} = m g h $$
$$ \Delta W_{p, g} = \int_{z_0}^z m g \d z = m g (z - z_0) $$

### *Potencialna* prožnostna *energija*

Izhodišče je v ravnovesni legi ($x = 0$).

<div class="izpeljava">
$$ \Delta W_{pr} = -A_{vzmeti} = - \int_{x'}^x F x \d x = \int_{x'}^{x} k x \d x = \frac{1}{2} k (x^2 - x'^2) = \frac{1}{2} k x^2 $$
</div>
$$ \Delta W_{pr} = \frac{1}{2} k x^2 $$

### *Entalpija*

$$ H = W_n + p V $$
$$ \Delta H = \Delta W_n + p \Delta V $$

## Gibalna količina

V nasprotju z *energijami* je gibalna količina *vektor*.

$$ \vec G = m \vec v $$
$$ \vec F = m \vec a = m \frac{\d \vec v}{\d t} = \frac{\d (m \vec v)}{\d t} = \frac{\d \vec G}{\d t} $$
<div class="izpeljava">
$$ \int_{t'}^{t} \vec F \d t = \int_{t'}^t \frac{\d \vec G}{\d t} \d t = \vec G \Big|_{t'}^t = \vec G - \vec G' = \Delta \vec G $$
</div>
$$ \int_{t'}^{t} \vec F_{zun.} \d t = \Delta \vec G = m \Delta \vec v $$
Gibalna količina zaprtega *sistema* se ohranja (če ni pretvorb *energij*), spremenijo jo lahko le zunanje sile (torej se lahko spremeni le, če *sistem* ni zaprt), ker se notranje sile med sabo izničijo..

- Neprožni trk: ohranja se gibalna količina, *kinetična energija* se ne ohranja
- Prožni trk: ohranjata se gobalna količina in *kinetična energija*

## *Termodinamika*

*Temperatura* je *termodinamska* spremenljivka, toplota pa ne. Toplota je način prehajanja *energije*, vrsta dela.

Povprečna *kinetična energija molekul*:
$$ p = \frac{2}{3} \frac{N}{V} < W_{k1} > $$

*Kinetična* opredelitev *temperature*:
$$ < W_{k 1} > = \frac{3}{2} k_B T $$

<div class="zakon">
***Termodinamski* zakoni**:

0. Če je *termodinamski sistem* A v ravnovesju z B in B v ravnovesju z C, potem je A v ravnovesju z C (**zakon o prenosljivosti *termodinamskega* ravnovesja**). $$ A \sim B \wedge B \sim C \Rightarrow A \sim C $$
1. Iz zakona o ohranitvi *energije* sledi, da je sprememba *energije* sistema enaka vsoti dovedene/oddane toplote in dovedenega/oddanega dela (***energijski* zakon**): $$ \d W = \mathrm{đ} Q + \mathrm{đ} A $$
2. [*Entropija*](#Entropija) je pri vsaki izmenjavi toplote večja od nič (***entropijski* zakon**): $$ \Delta S \ge \oint \frac{\mathrm{đ} Q}{T} \ge 0 $$
3. Sprememba *entropije* je pri *absolutni* ničli enaka nič (**Nernstov izrek**): $$ \Delta S (T = 0 K) = 0 $$
</div>

$$ \Delta W_n = Q_{stalna V} = m c_V \Delta T $$
<div class="izpeljava">
$$ Q_{stalen p} = \Delta W_n - A = m c_V \Delta T + \int{p \d V} = m c_V \Delta T + p (V_2 - V_1) = m c_V \Delta T + \frac{m}{M} R \Delta T = m c_p \Delta T $$
</div>
$$ Q = m c_p \Delta T $$

Za popolni plin velja:
$$ c_p - c_V = \frac{R}{M} $$

Splošna plinska enačba:
$$ \frac{p V}{T} = \mathrm{stalnica} = N k_B = \frac{m}{M} N_A k_b = \frac{m}{M} R $$
$$ p V = n R T = \frac{m}{M} R T $$

| | enačba stanja | toplota | delo | $$\Delta W_n$$ |
| --- | --- | --- | --- | --- |
| stalen $p$ | $$ \frac{V}{T} $$ | $$ Q = \Delta H = m c_p \Delta T $$ | $$ - p \Delta V $$ | $$ m c_V \Delta T $$ |
| stalna $V$ | $$ \frac{p}{T} $$ | $$ Q = \Delta W_n = m c_V \Delta T $$ | / | $$ m c_V \Delta T; \Delta W_n = Q_{stalna V} $$ |
| stalna $T$ | $$ p V $$ | $$ Q = - A = \frac{m}{M} R T \ln(\frac{V}{V'}) $$ | $$ A = - \int{p \d V} = - p_0 V_0 \int{\frac{\d V}{V}} = \frac{m}{M} R T \ln(\frac{V}{V'}) $$ |

$$ \frac{\Delta l}{l} = \alpha \Delta T $$
$$ \frac{\Delta V}{V} = \beta \Delta T $$

- $\alpha$ – *lienarni* količnik dolžinskega raztezka
- $\beta$ – *linearni* količnik prostorninskega raztezka

$$ \beta = 3 \alpha $$

### *Entropija*

*Entropija* je *termodinamična* količina  neurejenosti, naključnosti, nepovratnosti. V zaprtem *sistemu* se vedno povečuje.

$$ \d S \geq \frac{\mathrm{đ} Q}{T} $$
$$ \Delta S \geq \int{ \frac{\mathrm{đ} Q}{T} } $$

## Vrtenje

Kot $\phi$ ni *vektor*, je pa *vektor* njegov *diferencial* $\vec{d \phi}$.

| | |
| --- | --- |
| kot [rd] | $$ \phi = \frac{l}{r} $$ $$ \phi = \phi_0 + \omega_0 t + \frac{\alpha}{2} t^2 $$ |
| kotna hitrost [$\frac{1}{s}$] | $$ \vec \omega = \vec \phi '(t) = \frac{\vec {\d \phi}}{dt} $$ $$ \overline \omega = \frac{\Delta \phi}{\Delta t} = \frac{2 \pi}{t_o} = 2 \pi \gamma = \omega_0 + \alpha t $$ |
| kotni pospešek [$\frac{1}{s^2}$] | $$ \vec \alpha = \vec \omega '(t) = \frac{\vec {\d \omega}}{\d t} $$ $$ \overline{\alpha} = \frac{\Delta \omega}{\Delta t} $$ |
| *frekvenca* [Hz] | $$ \gamma = \frac{N}{\Delta t} = \frac{1}{t_o} $$ |

Sredobežni (*centripetalni*) pospešek, ki sploh povzroča kroženje:
$$ a_r = \omega v = \frac{v_0^2}{r} = - \omega^2 r $$

Obodna hitrost:
$$ \vec{v} = \frac{\d \vec{r}}{\d t} = r \frac{\vec{\d \phi}}{\d t} = \vec r \times \vec{\omega} $$

Obodni pospešek:
$$ \vec{a_t} = \frac{\vec{\d v}}{\d t} = r \frac{\vec{\d \omega}}{t} = \vec r \times \vec{\alpha} $$

Coriolisova sila:
$$ \vec F_{Coriolis} = -2 m (\vec{\omega} \times \vec{v}) $$

<div class="zakon">
Keplerjevi zakoni:

1. Tiri planetov so *elipse*, Sonce je v gorišču.
2. Ploščinska hitrost *planetov* je stalna.
3. $\frac{r^3}{t_0^2}$ = stalno
</div>

Vztrajnostni *moment* [$kg m^2$] je porazdelitev *mase* glede na os vrtenja:
<div class="izpeljava">
$$ W_{k, rot} = \frac{1}{2} \sum_i m_i v_i^2 = \frac{1}{2} \int \d m v^2 = \frac{1}{2} \int \d m r^2 \omega^2 = \frac{1}{2} \omega^2 \int \d m r^2 = \frac{1}{2} J \omega^2 $$
</div>
$$ W_{k, rot} = \frac{1}{2} J \omega^2 $$
$$ J_{točka, cev} = m r^2 $$
$$ J_{valj} = \frac{1}{2} m r^4 $$
$$ J_{krogla} = \frac{2}{5} m r^2 $$

Steinerjev izrek: če je težišče telesa izmaknjeno od osi vrtenja, je vztrajnostni *moment* telesa enak vsoti tistega, ki bi bil, če bi bila os v težišču in tistega, če telo vzamemo kot točko (težišče) ki kroži na neki razdalji os osi:
$$ J = J^* + m r^2 $$

$$ A = \Delta W_k = \frac{1}{2} J (\Delta \omega)^2 = \int \vec M \vec{\d \phi} $$
$$ P = \frac{\d A}{\d t} = \frac{\vec M \vec{\d \phi}}{\d t} = \vec M \vec \omega $$
$$ \vec M = J \vec \alpha $$

Vrtilna količina je gibalna količina porazdeljena po vrtečem se telesu:
$$ \vec \Gamma = \vec r \times \vec G = \int \d m \vec r \times \vec v = J \vec \omega $$
$$ \vec M = \vec r \times \vec F = \vec r \times \frac{\d \vec G}{\d t} = \frac{\d \vec \Gamma}{\d t} $$
$$ \vec \Gamma = \vec \Gamma_{tirna} + \vec \Gamma_{lastna}^* $$
$$ \vec \Gamma_{tirna}^* = \int \d m \vec r_T \times \vec v_T $$
$$ \sum \vec r^* \times \vec F_{zun} = \vec r^* \times \sum \vec F_{zun} $$

## Ravnovesje

- *labilno* r. (npr. na vrhu hriba)
- *indiferentno* r. (npr. na ravnini)
- *stabilno* r. (npr. na dnu doline)

## *Deformacije*

| | |
| --- | --- |
| napetost, prožnostni *modul*, *deformacija* (?) | $\frac{\vec F}{\vec S} = k \frac{\vec F}{\vec S}$ |
| nateg (prožnost E [$\frac{N}{m^2}$)| $\frac{F_x}{S_x} = E \frac{\Delta x}{\d x}$ |
| strižna *deformacija* | $\frac{F_y}{S_x} = G \frac{\Delta y}{\d x}$ |
| vsestransko stiskanje (stisljivost $\chi$ [$\frac{m^2}{N}$]) | $\frac{F}{S} = K \frac{\Delta V}{V} = - K \chi \Delta p$ |
| Pasonov količik | $\frac{\Delta y}{\d y} \frac{\Delta z}{\d z} = - \mu \frac{\Delta}{\d x}$ |

$$ K = \frac{E}{3 (1 - 2 \mu} $$
$$ G = \frac{E}{2 (1 + \mu)} $$

Vzvoj (*torzija*; npr. zvijanje palice okoli njene osi):
$$ M = - D \phi $$
$$ D = \frac{1}{2} \pi G \frac{R_0^4}{l} \left[ \frac{N m^4}{m^2 m} = N m \right] $$

## Nihanje

$$ \gamma = \frac{N}{\Delta t} = \frac{1}{t_0} $$
$$ \omega = \frac{2 \pi}{t_0} = 2 \pi \gamma $$

$$ x(t) = A \sin (\omega t + \delta) $$
$$ v(t) = \frac{\d x}{\d t} = v_0 \cos (\omega t + \delta) = \omega A cos(\omega t + \delta) $$
$$ a(t) = \frac{\d v}{\d t} = a_0 \sin (\omega t + \delta) = - \omega^2 A \sin (\omega t + \delta) = - \omega^2 x(t) $$

$$ F = m a = -m \omega^2 x = - k x $$
$$ W = W_k + W_p = \frac{1}{2} m \omega^2 \left( \cos^2 (\omega t + \delta) + \sin^2 (\omega t + \delta) \right) = \frac{1}{2} m \omega^2 $$

Matematično nihalo:
$$ \omega_0 = \sqrt{\frac{g}{l}} $$

Vzmetno nihalo:
$$ \omega_0 = \sqrt{\frac{k}{m}} $$

Vzvojno nihalo:
$$ \omega_0 = \sqrt{\frac{D}{J}} $$

### Dušeno nihanje

$$ W = W_0 \mathrm{e}^{-2 \beta t} $$
$$ \omega '^2 = \omega^2 - \beta^2 $$

- nad*kritično* dušenje: $\beta > \omega$
    $$ s = s_0 \mathrm{e}^{- \beta t} \cosh (\omega t + \delta) $$
- *kritično* dušenje: $\beta = \omega$
    $$ s = s_0 \mathrm{e}^{- \beta t} + s_2 t \mathrm{e}^{- \beta t} $$
- pod*kritično* dušenje: $\beta < \omega$
    $$ s = s_0 \mathrm{e}^{- \beta t} \cos (\omega t + \delta) $$

### Vsiljeno nihanje

$$ \tan \delta = \frac{2 \beta \omega}{\omega_0^2 - \omega^2} $$

## Tekočine

Tlak [$\frac{N}{m^2} = Pa$]:
$$ p = \frac{\d F}{\d S} $$

*Hidravlika*:
$$ \frac{F_2}{F_1} = \frac{S_2}{S_1} $$

Vzgon – nasprotno enak teži izpodrinjene tekočine:
$$ \Delta p = \rho  g h $$
$$ \vec F_{vzg} = \int p_{hidrostat.} \d \vec S $$

Bernoullijeva enačba:
$$ A_{tek.} = - \Delta p V = \Delta W_k + \Delta W_pg = \rho V \Delta (\frac{v_2}{2} + \rho V g \Delta h $$
$$ \frac{1}{2} \rho v_1^2 + \rho g h_1 + p_1 = stalno $$

$$ \frac{S_1}{S_2} = \frac{v_1}{v_2} $$

*Gradient* hitrosti zaradi strižnih sil:
$$ \frac{F}{S} = \eta \frac{\d v_y}{\d x}

Upor:

- *linerani* zakon (Stokes): $F_u^{(1)} = 6 \pi R \eta v$
- kvadratni zakon: $F_u^{(2)} = \frac{1}{2} \rho v^2 \pi R^2 C_u$

### *Laminarni* in *turbolentni* tok

Reynoldsovo število:
$$ {Re} = \frac{\rho}{\eta} 2R v $$

- ${Re} < 0.1$: *laminaren* tok, *linearni* zakon upora
- $0,1 < {Re} < 10^3$: mešani tok
- $10^3 < {Re}$: *turbolentni* tok, kvadratni zakon upora

## *Elektrika*

V *mikrosvetu* je težnost zanemarljiva v primerjavi z *električno* silo.

***Električno* polje** [N/As = V/m] – **Coulombov zakon**:
$$ \vec E_{\mathrm{toč.}} (\vec{r}) = \frac{e}{4 \pi \epsilon_0 r^2} \frac{\vec{r}}{|r|} $$
$$ \vec E_{\mathrm{porazd.}} = \int{ \vec{\d E} } = \int{ \frac{\d e}{4 \pi \epsilon_0 \vec{r}^2} } $$
$$ \vec{E} (\vec{r}) = \sum{\vec{E_i} (\vec{r})} $$

Enačba za ***električno* silo** je na moč podobna enačbi za težo, $\vec{F_g} (\vec{r}) = m \vec{g} (\vec{r})$, kjer imamo *maso* v težnostnem polju.
$$ \vec{F_e} (\vec{r}) = e \vec{E} (\vec{r}) $$

*Električna* sila je *konzervativna* sila:
$$ \oint e \vec{E} \d \vec{s} = 0 = A_e $$

***Električni dipolni moment***, kjer je $d$ razdalja med *poloma*, oz. nasprotnima nabojema:
$$ \vec{p_e} = e d $$

$$ \vec{M_e} = e \vec{E} d \sin(\theta) = \vec{p_e} \times \vec{E} $$
$$ W_e = - A_e = - \int{ \vec{p_e} \times \vec{E} \vec{\d \theta} } = - \int{ p_e E \sin(\theta) \d \theta } = p_e E \cos(\theta) = - \vec{p_e} \vec{E} $$

Gostota *el.* naboja po dolžini, površini in prostornini:
$$ \lambda = \frac{\d e}{\d l}; \sigma = \frac{\d e}{\d S}; \rho_e = \frac{\d e}{\d V} $$
$$ \vec E_{\mathrm{vodnik}} (\vec r)  = \frac{\lambda}{2 \pi \epsilon_0 \vec r}; r << l $$
$$ E_{\mathrm{plošča}} = \frac{\sigma}{2 \epsilon_0} $$

***Električni* pretok** [As]:
$$ \phi_e = \epsilon_0 \int{ \vec{E} \vec{\d S}} $$

<div class="zakon">
**Gaussov zakon**: Če preštejemo vse silnice, dobimo objeti naboj:
$$ \epsilon_0 \oint{ \vec{E} \vec{\d S} } = e $$
</div>

- Primer za kroglo, v sredini katere je naboj: 
    $$ \epsilon_0 \oint{ \vec{E} \vec{\d S} } = \epsilon E(r) 4 \pi r^2 = e $$
- Primer za ploščo:
    $$ \epsilon_0 \oint{ \vec{E} \vec{\d S} } = \epsilon_0 2 E \d S = \sigma \d S = \d e $$ 

***Električna* napetost** med dvema točkama [J/As = V] je razlika med *el.* potencialoma:
$$ W_{\mathrm{p, e}} = - A_e = - \int{ \vec{F} \vec{\d s} } = \int{ e \vec{E} \vec{\d s} } \implies - \int_{\vec r'}^{\vec r} \vec{E} \vec{\d s} = U (\vec{r}, \vec{r'}) $$
$$ W_{\mathrm{p, e}} = e U $$

*Skalarno* polje *električnega potenciala*:
$$ V(\vec{r}) = - \int_{-\infty}^{\vec r} \vec{E} \vec{\d s} $$
$$ W_{\mathrm{p, e}} (\vec{r}) = e V(\vec{r}) $$

Za točkast naboj:
$$ V_{\mathrm{točk.}}(\vec r) = \frac{e}{4 \pi \epsilon_0 r} $$

### Snov v *električnem* polju

Snovi lahko ločimo po gibljivosti *električnega* naboja:

- ***Superprevodniki***: upor je po opredelitvi ničen

- **Prevodniki** (kovine): naboji se prosto gibljejo po snovi (*dipol makroskopskih* velikosti)
    V *kondenzator* vstavimo plošče prevodnika: naboj v prevodniku se prerazporedi, tako da se na strani prevodnika pri *pozitivno* nabitem delu *kondenzatorja* naberejo *elektroni* – tako dobimo dva nova "*kondenzatorja*" z manjšim razmikom
    $$ U_C = \frac{e (d - d_p)}{\epsilon_0 S} $$

- **Polprevodniki**

- ***Izolatorji* / *dielektriki***
    - *polarni*: trajen *dipolni moment*
    - *nepolarni*: brez trajnega *dipolnega momenta*, dobi ga / je *induciran* v *el.* polju
        
    *Dielektričnost* $\epsilon \in [1, \infty)$: pove, koliko se snov (*dielektrik*) odzove na zunanje *el.* polje ($\epsilon$ *vakuma* je 1, prevodnika pa $\infty$)
    Gaussov zakon popravljen za *dielektrike*:
    $$ \epsilon_0 \oint \epsilon \vec E \vec{\d S} = \oint \vec D \vec{\d S} = e $$
    Gostota *el.* polja:
    $$ \vec D = \epsilon \epsilon_0 \vec E = \epsilon_0 \vec E + \vec P $$
    *Polarizabilnost*(0 za vakum, proti $\infty$ za prevodnike):
    $$ \vec P = (\epsilon - 1) \epsilon_0 \vec E $$
    Povsod, kjer nastopa $\epsilon_0$, se ga pomnoži z $\epsilon$. 

V *polarnem dielektriku el.* polje *dipole* uredi/usmeri, v *nepolarnem* pa jih *influencira*, zato pri obeh vrstah lahko govorimo o isti *dielektrični* stalnici.

*Polarizacija* kot prostorninska gostota *dipola*:
$$ \frac{e_R}{S} = \frac{N}{V} p_e $$

Navor *el.* polja na *dipol*:
$$ \vec M = \vec{p_e} \times \vec E $$
$$ E_e = - \vec{p_e} \vec E $$

Praviloma višja, kot je *temperatura* snovi, bolj se delci (*dipoli*) gibljejo in večja je *dielektričnost* snovi, saj je potrebne manj *energije*, da se *dipoli* poravnajo z *el.* poljem.

### *Elektrodinamika*

***Električni* tok** [A] je hitrost prehajanja naboja, a ni *vektor*
$$ I = \frac{\d e}{\d t} = \rho_e v S $$

*Električni* tok je vedno *laminaren*.

Gostota *el.* toka:
$$ \vec{j_e} = \frac{I}{S} = \rho_e \vec v = e w_e <\vec v>; w_e = \frac{N_+ - N_-}{V} $$

*Elektroni* se v npr. navadnih žicah gibljejo zelo počasi (~ $10^{-4} \frac{m}{s}$), se pa motnja širi s približno svetlobno hitrostjo. Poleg hitrosti pa imajo *elektroni* še neko *temperaturo*, kar doprinese k hitrostni širjenja motnje.

<div class="zakoN">
**Ohmov zakon** [$\Omega$]:
$$ U = R I $$
</div>
$$ R = \zeta \frac{l}{S} $$
$$ j = \frac{\d I}{\d S}; \frac{U}{l} = E \implies \frac{\vec E}{\zeta} = \sigma \vec E $$
$\zeta$ je *specifični* upor/upornost [$\Omega m$]

#### *Električni* krogi

Tok po celotnem *el.* krogu je stalen, ker se *elektroni* ne izgubljajo.

Vsota napetosti po krogu je enaka nič:
$$ \oint \vec E \vec{\d s} = 0 \implies \sum_i U_i = 0 $$

Napetost na porabniku je enaka $U = - I R$.

$$ P = \frac{\d A_e}{\d t} = \frac{U \d e}{\d t} = U I = - I^2 R $$

<div class="zakon">
**Kirchhoffova zakona**:

1. Vsota tokov v vozlišču *el.* toka je enaka nič, oz. vsota pritekajočih tokov je enaka vsoti odtekajočih
    $$ \sum_{vozlišče} I_i = 0 $$
2. V sklenjeni tokovni zanki je vsota napetosti po vseh gradnikih kroga enaka nič
    $$ \sum_{krog} U_i = 0 $$
</div>

### *Kondenzator*

*Kondenzator* deluje kot hranilnik naboja, oz. v tokokrogu kot "prožnost"

- ploščati (kjer je $d$ razmak med ploščama in $S$ njuna ploščina):
    $$ E_C = \frac{\sigma}{2 \epsilon_0}$$
    $$ |U| = | - \int \vec E \d \vec s | = E d $$
    $$ C = \frac{\epsilon_0 S}{d} $$
    $$ |U| = \frac{\sigma e}{\epsilon_0} \frac{d}{S} \implies e = C U $$
    $$ A = \frac{e^2}{2 \epsilon_0 S} (d_2 - d_1) = \Delta W_{p, e} \implies W_C = \frac{e^2 d}{2 \epsilon_0 S} = \frac{e^2}{2 C} = \frac{e U}{2} = \frac{C U^2}{2} $$
    $$ \int \d A_e = \int U \d e = \int U C \d U = \frac{C U^2}{2} $$
- valjasti (kjer je notranji polmer $r$ in zunanji $R$:
    $$ E = \frac{e}{2 \pi \epsilon_0 l r} $$
    $$ |U| = \frac{e}{2 \pi \epsilon_0 l} \ln \frac{R}{r} $$
- krogelni (kjer je $r$ polmer notranje krogle in $R$ zunanje):
    $$ E = \frac{e}{4 \pi \epsilon_0 r^2} $$
    $$ |U| = \frac{e}{4 \pi \epsilon_0} (\frac{1}{r} - \frac{1}{R}) $$
    $$ C = \frac{4 \pi \epsilon_0}{\frac{1}{r} - \frac{1}{R}} $$

$$ W_e = \frac{W_C}{V} = \frac{e^2 d \epsilon_0}{2 \epsilon_0^2 S S d} = \frac{\epsilon_0 E^2}{2} $$

#### Prehodni pojavi v *kondenzatorju*

*Karakteristični* čas $\tau = R C$

**Polnjenje**
$$ U_C + U_R = 0 \implies \frac{e}{C} - I R = 0 \implies e = - \frac{\d e}{\d t} R C \implies - \int_0^e \frac{\d e}{e} = \int_0^t \frac{\d t}{R C} \implies \ln \frac{e}{e_0} = - \frac{t}{R C} \implies e = e_0 \left( 1 - e ^{- t / (R C)} \right) $$
$$ e = e_0 \left( 1 - e ^{- t / \tau} \right) $$

**Praznenje**

$$ e = e_0 e^{- t / \tau} $$

### *Elektromagnetizem*

*Magnetno* polje ustvari *električni* tok, oz. naboj.

S silnicami *magnetnega* polja predstavimo gostoto *mag.* polja.

Silnice *magnetnega* polja so vedno sklenjene (tečejo namreč od severnega *pola* na južni *pol* in tudi skozi magnet nazaj). *Magnetnih monopolov* (najverjetneje) ni.

$$ \vec B_1 = e (\vec v_1 \times \vec r) \frac{\mu_0}{4 \pi r^2 r} $$
$$ \mu_0 \epsilon_0 = \frac{1}{c^2} $$

Polje okoli vodnika:
$$ \vec B = \frac{\mu_0}{4 \pi} \int_{vodnik} \frac{\vec r \times \vec{I \d l}}{r^3} = \frac{I \mu_0 a^2}{4 \pi a^3} \int_{- \pi / 2}^{\pi /2} \frac{\d \phi \cos \phi}{cos^2(\phi)} $$
$$ B_{vodnik} = \frac{\mu_0 I}{2 \pi r}$$

*Magnetna* sila:
$$ \vec{F_m} = e_2 \vec v_2 \times \vec B_1 \implies F_m = e v B \sin(\phi) $$
$$ F_{m 1 2} = \frac{e_1 e_2 \mu_0}{4 \pi r^2} (\vec{v_2} \times (\vec{v_1} \times \frac{\vec r}{r})) $$

Lorentzova sila:
$$ \vec{F} = e \vec E + e \vec v \times \vec B $$

Sila na vodnik:
$$ \vec{F_m} = N \vec{F_1} = N_e l S e_0 v B = \vec{j_e} l S \vec B = \vec{I l} \vec B $$

Navor na zanko: neodvisen od njene oblike, odvisen le od ploščine (ki je lahko poljubno iz-/vbočena, le da je napeta na vodnik zanke)
$$ |\vec M| = \vec F_{m 1} b = I a B b = I S B $$
$$ \vec M = \vec I S \times \vec B $$

*Magnetni dipol*:
$$ \vec{p_m} = \vec I \vec S $$
$$ \vec M = \vec I S \times \vec B = \vec{p_m} \times \vec B $$
$$ W_m = - \vec{p_m} \vec B $$

V *homogenem magnetnem* polju na gibajoč se naboj deluje stalna sila na eno stran – sredobežna sila, ki povzroči, da naboj v *magnetnem* polju kroži:
$$ F_c = F_m \implies m \frac{v^2}{r} = e v B \implies r = \frac{m v}{e B} $$
*Ciklotronska frekvenca*:
$$ \nu_c = \frac{e B}{2 \pi m}; \omega = \frac{e B}{m} $$

**Hallova napetost**: ravnovesno stanje, kjer *magnetna* in *električna* sila kažeta vsaksebi in sta enaki
$$ F_m = F_e \implies e v B = e E $$
$$ U_H = E d = B d v $$

<div class="zakon">
**Biot-Savartov zakon**: polje, ki ga vodnik (zelo dolg, $l \gg r$) povzroča v točki, oddaljeni $\vec r$:
$$ \vec{\d B}(\vec r) = \frac{\mu_0}{4 \pi} \left( \frac{\vec{I \d l} \times \vec r}{r^3} \right)$$
$$ \vec B(0) = \frac{\mu_0}{4 \pi} \int{ \frac{\vec r \times \vec{I \d l}}{r^3} } $$
</div>

<div class="zakon">
**Amperov zakon**: zaobjeti tok (npr. če bi šli po *magnetni* silnici okoli vodnika, dobimo tok v tem vodniku)
$$ \oint \vec B \vec{\d S} = \mu_0 I $$
</div>
Amperov zakon za tuljavo (kjer gledamo $l'$ in $N'$ na neko enoto:
$$ \oint \vec B \vec{\d s} = B l' = \mu_0 N' I $$
$$ B = \frac{N' \mu_0 I}{l'}  t = L \frac{\d I}{\d t} I \d t \implies A = L \int_0^I I \d I $$
$$ W_m = L \frac{I^2}{2} $$

Tuljava v tuljavi:
$$ L_{2 1} = \frac{N_2 B_1 S_2}{I_1} = \frac{\mu_0 N_1^2 I_1 N_2 S_2}{l_1 I_1} = \frac{\mu_0 N_1 N_2 S_2}{l_1} $$

#### Snov v *magnetnem* polju

$\mu$: *permeabilnost*; večja kot je, bolj snov poveča *mag.* polje, ker so v snovi *mag. dipoli*
$$ \mu_0 \rightarrow \mu \mu_0 $$
*Magnetni dipol*:
$$\vec p_m = I \vec S = e_0 \upsilon \pi r^2 \frac{v}{2 \pi r} = \frac{e_0 r v}{2} = \frac{e_0 \Gamma}{2 m_e} $$

### Izmenični tok

$$U = U_0 \sin(\omega t + \delta) $$

*Kondenzator*:
$$ U + U_C = 0 \implies U_0 \sin(\omega t) = \frac{e}{C} /\frac{\d}{\d t} \implies C \omega U_0 \cos(\omega t) = I $$
$$ "R_C" = Z_C = \frac{U_0}{I_0} = \frac{1}{\omega C} $$

Tuljava:
$$ U + U_L = 0 \implies U_= \sin(\omega t) = L \frac{\d I}{\d t} \implies - \frac{1}{\omega L} U_0 \cos(\omega t) = A I$$
$$ "R_L" = Z_L = \omega L $$

$U_C$ in $U_L$ v tokokrogu z izmeničnim tokom nihata v *protifazi*.

### *Električni* nihajni krog

$$ U = U_0 \sin(\omega t) $$
$$ I = I_0 \sin(\omega t + \delta) $$
$$ \omega^2 = \frac{1}{L C} $$

Primerjava vzmetnega nihala v *mehaniki* in *el.* nihajnega kroga:

| vzmetno | *el.* nih. krog |
| --- | --- |
| $$ k $$ | $$ \frac{1}{C} $$ |
| $$ m $$ | $$ L $$ |
| $$ F $$ | $$ U $$ |
| $$ W_k $$ | $$ W_m (L) $$ |
| $$ W_{pr.} $$ | $$ W_e (C) $$ |
| $$ x $$ | $$ l $$ |
| $$ v $$ | $$ I $$ |

$$ P = U_0 \sin(\omega t + \delta) I_0 \sin(\omega t) = U_0 I_0 \left[ \sin^2(\omega t) \cos(\delta) + \cos(\omega t) \sin(\omega t) \sin(\delta) \right] = U_0 I_0 \left[ \sin^2(\omega t) \cos(\delta) + \frac{1}{2} \sin^2(2 \omega t) \sin(\delta) \right] $$
$$ \overline{P} = \frac{1}{2} U_0 I_0 \cos(\delta) $$
$$ P = U_{ef.} I_{ef.} $$
$$ I_{ef.} = \frac{I_0}{\sqrt{2}} \implies U_{ef.} = R I_{ef.} = \frac{U_0}{\sqrt{2}} $$

*El.* nihajni krog v *kompleksnem* (glej tudi [Skupna števila](/knjiznica/racunstvo#Skupna_stevila)):
$$ \phi = \omega t $$
$$ U = U_0 e^{\mathrm{i} \phi} $$
$$ I = I_0 e^{\mathrm{i} (\phi + \delta)} $$
$$ Z_C = \frac{1}{\mathrm{i} \omega C} $$
$$ Z_L = \mathrm{i} \omega L $$
$$ |Z| e^{\mathrm{i} \delta} = R + \mathrm{i} \omega L + \frac{1}{\mathrm{i} \omega C} $$

## *Fizika* delcev

$$ W_f = \mathrm{h} \nu $$
$$ W_f = A_i + W_k $$
$$ W_f = \Delta W_n $$
$$ \Delta W_v = \Delta m c^2 $$

$$ N = N_0 2^{- \frac{t}{t_{1/2}}} = N_0 e^{- \lambda t} $$
$$ \lambda = \frac{\ln 2}{t_{1/2}} $$
$$ A = N \lambda $$

### Jedrski razpadi

Razpad alfa; delec razpada je $\alpha = ^4_2He_2^{2+}$:
$$ ^{A}_{Z}X_N \rightarrow ^{A-4}_{Z-2}Y_{N-2} + ^4_2\mathrm{He}_2 $$

Razpad beta minus; delec razpada je $\beta^{-} = e_0^{-}$:
$$ ^A_ZX_N \rightarrow ^{A}_{Z+1}Y + e_0^{-} + \bar{\nu}_e $$
$$ n \rightarrow p + e_0^{-} + \bar{\nu}_e $$

Razpad beta plus; delec razpada je $\beta^{+} = e_0^{+}$:
$$ ^A_ZX_N \rightarrow ^{A}_{Z-1}Y_{N+1} + e_0^{+} + \nu_e $$
$$ p \rightarrow n + e_0^{+} + \nu_e $$

Razpad gama; delec razpada je foton $\nu$:
$$ X^{+} \rightarrow X + \nu $$

## Računanje z negotovostmi

Meritve brez negotovosti ne obstajajo (posebno če so zvezne narave), zato so merski podatki brez negotovosti nepopolni, torej precej neuporabni ali vsaj nezaželjeni. Meritve pogosto nastopajo v obliki t.i. *normalne* porazdelitve, ki jo opišemo z Gaussovo krivuljo, ki ima en vrh nad izhodiščem (kjer je naše povprečje/večina meritev) in se na obeh straneh spušča vedno bližje nič, torej dlje, kot smo od izhodišča, večje kot je odstopanje meritve, manjša je verjetnost za takšno meritev; nikoli pa ni nič. Po dogovoru za negotovost vzamemo odsek okoli izhodišča, v katerega pade 2/3 vseh meritev.

Negotovosti so povezane/odvisne (*korelirane*) ali nepovezane/neodvisne.

**Odvisne negotovosti** seštevamo

- seštevanje/odštevanje količin: seštevanje *absolutnih* napak
- množenje/deljenje količin: seštevanje *relativnih* napak

Pri **neodvisnih negotovostih** seštevamo njihove kvadrate.

Enačbe lahko močno poenostavimo z upoštevanjem negotovosti in uporabo Taylorjeve vrste:
$$ f(x) = f(a) + \frac{f'(a)}{1!} x + \frac{f''(a)}{2!} x^2 + \frac{f'''(a)}{3!} x^3 + ... $$
V enačbi lahko zanemarimo člene od tistega naprej, ki je zadosti manjši od negotovosti.

## Veličine in enote

### Osnovne enote

</div>
| veličina | oznaka veličine | enota | oznaka enote |
| --- | --- | --- | --- |
| dolžina, (odmik) | l, d, (x) | meter | m |
| masa | m | kilogram | kg |
| čas | t | sekunda | s |
= \frac{N \mu_0 I}{l} $$

#### *Indukcija*

Vodnik, ki ga vlečemo pravokotno na *magnetno* polje:
$$ U_i = U_H = B l v $$
$$ F_{zaviralna} = F_m = B l I_i = \frac{B^2 l^2 v}{R} $$

Zanka, ki kroži v *magnetnem* polju, z osjo, pravokotno na silnice *mag.* polja (v zanki se *inducira* izmenična napetost):
$$ \vec v = \vec \omega \vec r \implies U_i = 2 U_H = 2 \omega r B a = B S \omega \cos(\phi) $$
$$ \vec v \times \vec B = \omega r B \cos(\phi) $$

<div class="zakon">
**Faradayev /*indukcijski* zakon**: *inducirana* napetost v zaključeni zanki je premo sorazmerna hitrosti spreminjanja *magnetnega* pretoka skozi površino te zanke (kjer je $\phi_m$ *mag.* pretok, $\vec B$ pa gostota *mag.* polja):
$$ U_i = \frac{\d \phi_m}{\d t}; \phi_m = \int \vec B \vec{\d S} $$
</div>
$\vec H$: jakost *Mag.* polja, ki je neodvisna od snovi v prostoru
$$ \oint \vec B \vec{\d S} = \mu_0 I \implies \oint \vec H \vec{\d S} = I $$
$$ \oint \vec E_i \cdot \d \vec s = - \int \frac{\partial B}{\partial t} \d \vec S $$

#### Tuljava

Tuljava v tokogrogu deluje kot "vztrajnost", saj se upira spremembam.

L: *induktivnost* tuljave
$$ L = N^2 \frac{\mu_0 S}{l} $$
$$ U_i = - \frac{\d \phi_m}{\d t} = - L \frac{\d I}{\d t} $$

$$ \tau = \frac{L}{R} $$
"Polnjenje" tuljave
$$ I = I_0 (1 - e^{- t/\tau}) $$
"Praznenje" tuljave:
$$ U_L + U_R = 0 \implies - L \frac{\d I}{\d t} - I R = 0 \implies L \frac{\d I}{\d t} = - I R $$
$$ I = I_0 e^{- t/\tau} $$

*Energija* tuljave:
$$ \d A = U \d e = U I \d t = P \d t = L \frac{\d I}{\d t} I \d t \implies A = L \int_0^I I \d I $$
$$ W_m = L \frac{I^2}{2} $$

Tuljava v tuljavi:
$$ L_{2 1} = \frac{N_2 B_1 S_2}{I_1} = \frac{\mu_0 N_1^2 I_1 N_2 S_2}{l_1 I_1} = \frac{\mu_0 N_1 N_2 S_2}{l_1} $$

#### Snov v *magnetnem* polju

$\mu$: *permeabilnost*; večja kot je, bolj snov poveča *mag.* polje, ker so v snovi *mag. dipoli*
$$ \mu_0 \rightarrow \mu \mu_0 $$
*Magnetni dipol*:
$$\vec p_m = I \vec S = e_0 \upsilon \pi r^2 \frac{v}{2 \pi r} = \frac{e_0 r v}{2} = \frac{e_0 \Gamma}{2 m_e} $$

### Izmenični tok

$$U = U_0 \sin(\omega t + \delta) $$

*Kondenzator*:
$$ U + U_C = 0 \implies U_0 \sin(\omega t) = \frac{e}{C} /\frac{\d}{\d t} \implies C \omega U_0 \cos(\omega t) = I $$
$$ "R_C" = Z_C = \frac{U_0}{I_0} = \frac{1}{\omega C} $$

Tuljava:
$$ U + U_L = 0 \implies U_= \sin(\omega t) = L \frac{\d I}{\d t} \implies - \frac{1}{\omega L} U_0 \cos(\omega t) = A I$$
$$ "R_L" = Z_L = \omega L $$

$U_C$ in $U_L$ v tokokrogu z izmeničnim tokom nihata v *protifazi*.

### *Električni* nihajni krog

$$ U = U_0 \sin(\omega t) $$
$$ I = I_0 \sin(\omega t + \delta) $$
$$ \omega^2 = \frac{1}{L C} $$

Primerjava vzmetnega nihala v *mehaniki* in *el.* nihajnega kroga:

| vzmetno | *el.* nih. krog |
| --- | --- |
| $$ k $$ | $$ \frac{1}{C} $$ |
| $$ m $$ | $$ L $$ |
| $$ F $$ | $$ U $$ |
| $$ W_k $$ | $$ W_m (L) $$ |
| $$ W_{pr.} $$ | $$ W_e (C) $$ |
| $$ x $$ | $$ l $$ |
| $$ v $$ | $$ I $$ |

$$ P = U_0 \sin(\omega t + \delta) I_0 \sin(\omega t) = U_0 I_0 \left[ \sin^2(\omega t) \cos(\delta) + \cos(\omega t) \sin(\omega t) \sin(\delta) \right] = U_0 I_0 \left[ \sin^2(\omega t) \cos(\delta) + \frac{1}{2} \sin^2(2 \omega t) \sin(\delta) \right] $$
$$ \overline{P} = \frac{1}{2} U_0 I_0 \cos(\delta) $$
$$ P = U_{ef.} I_{ef.} $$
$$ I_{ef.} = \frac{I_0}{\sqrt{2}} \implies U_{ef.} = R I_{ef.} = \frac{U_0}{\sqrt{2}} $$

*El.* nihajni krog v *kompleksnem* (glej tudi [Skupna števila](/knjiznica/racunstvo#Skupna_stevila)):
$$ \phi = \omega t $$
$$ U = U_0 e^{\mathrm{i} \phi} $$
$$ I = I_0 e^{\mathrm{i} (\phi + \delta)} $$
$$ Z_C = \frac{1}{\mathrm{i} \omega C} $$
$$ Z_L = \mathrm{i} \omega L $$
$$ |Z| e^{\mathrm{i} \delta} = R + \mathrm{i} \omega L + \frac{1}{\mathrm{i} \omega C} $$

## *Fizika* delcev

$$ W_f = \mathrm{h} \nu $$
$$ W_f = A_i + W_k $$
$$ W_f = \Delta W_n $$
$$ \Delta W_v = \Delta m c^2 $$

$$ N = N_0 2^{- \frac{t}{t_{1/2}}} = N_0 e^{- \lambda t} $$
$$ \lambda = \frac{\ln 2}{t_{1/2}} $$
$$ A = N \lambda $$

### Jedrski razpadi

Razpad alfa; delec razpada je $\alpha = ^4_2He_2^{2+}$:
$$ ^{A}_{Z}X_N \rightarrow ^{A-4}_{Z-2}Y_{N-2} + ^4_2\mathrm{He}_2 $$

Razpad beta minus; delec razpada je $\beta^{-} = e_0^{-}$:
$$ ^A_ZX_N \rightarrow ^{A}_{Z+1}Y + e_0^{-} + \bar{\nu}_e $$
$$ n \rightarrow p + e_0^{-} + \bar{\nu}_e $$

Razpad beta plus; delec razpada je $\beta^{+} = e_0^{+}$:
$$ ^A_ZX_N \rightarrow ^{A}_{Z-1}Y_{N+1} + e_0^{+} + \nu_e $$
$$ p \rightarrow n + e_0^{+} + \nu_e $$

Razpad gama; delec razpada je foton $\nu$:
$$ X^{+} \rightarrow X + \nu $$

## Računanje z negotovostmi

Meritve brez negotovosti ne obstajajo (posebno če so zvezne narave), zato so merski podatki brez negotovosti nepopolni, torej precej neuporabni ali vsaj nezaželjeni. Meritve pogosto nastopajo v obliki t.i. *normalne* porazdelitve, ki jo opišemo z Gaussovo krivuljo, ki ima en vrh nad izhodiščem (kjer je naše povprečje/večina meritev) in se na obeh straneh spušča vedno bližje nič, torej dlje, kot smo od izhodišča, večje kot je odstopanje meritve, manjša je verjetnost za takšno meritev; nikoli pa ni nič. Po dogovoru za negotovost vzamemo odsek okoli izhodišča, v katerega pade 2/3 vseh meritev.

Negotovosti so povezane/odvisne (*korelirane*) ali nepovezane/neodvisne.

**Odvisne negotovosti** seštevamo

- seštevanje/odštevanje količin: seštevanje *absolutnih* napak
- množenje/deljenje količin: seštevanje *relativnih* napak

Pri **neodvisnih negotovostih** seštevamo njihove kvadrate.

Enačbe lahko močno poenostavimo z upoštevanjem negotovosti in uporabo Taylorjeve vrste:
$$ f(x) = f(a) + \frac{f'(a)}{1!} x + \frac{f''(a)}{2!} x^2 + \frac{f'''(a)}{3!} x^3 + ... $$
V enačbi lahko zanemarimo člene od tistega naprej, ki je zadosti manjši od negotovosti.

## Veličine in enote

### Osnovne enote

</div>
| veličina | oznaka veličine | enota | oznaka enote |
| --- | --- | --- | --- |
| dolžina, (odmik) | l, d, (x) | meter | m |
| masa | m | kilogram | kg |
| čas | t | sekunda | s |
| električni tok | I | amper | A |
| termodinamična temperatura | T | kelvin | K |
| množina snovi | n | mol | mol |
| svetilnost | J | kandela | cd |
:Preglednica osnovnih enot

<div class="content">

### Izpeljane enote

</div>
| veličina | oznaka veličine | enota | oznaka enote | osnovne enote |
| --- | --- | --- | --- | --- |
| ravninski kot | α | radian | rad | $$ \frac {m}{m} $$ |
| prostorski kot | Ω | steradian | sr | $$ \frac {m^2}{m^2} $$ |
:Preglednica dopolnilnih enot

| veličina | oznaka veličine | enota | oznaka enote | druge enote | osnovne enote |
| --- | --- | --- | --- | --- | --- |
| frekvenca | ν (grška *ni*) | herc | Hz | | $$ \frac {1}{s} $$ |
| sila | F | newton (njuten) | N | | $$ \frac {kg m}{s^2} $$ |
| tlak, pritisk, mehanska napetost | p | pascal (paskal) | Pa | $$ \frac {N}{m^2} $$ | $$ \frac {kg}{m s^2} $$ |
| energija (delo, toplota, entalpija) | W (E, A, Q, H) | joule (džul) | J | $$ N m $$ | $$ \frac {kg m^2}{s^2} $$ |
| moč | P | watt (vat) | W | $$ \frac {J}{s} $$ | $$ \frac {kg m^2}{s} $$ |
| električni naboj | Q | coulomb (kolumb) | C | | $$ A s $$ |
| električna napetost (električni potencial) | U | volt | V | $$ \frac {J}{C}, \frac {W}{A} $$ | $$ \frac {m^2 kg}{s^3 A} $$ |
| električni upor (el. upornost) | R | ohm (om) | Ω | $$ \frac {V}{A} $$ | $$ \frac {m^2 kg}{s^3 A^2} $$ |
| električna prevodnost | G | siemens (simens) | S | $$ \frac {1}{Ω} = V s = \frac {A}{V} $$ | $$ \frac {s^3 A^2}{m^2 kg} $$ |
| kapacitivnost | C | farad | F | $$ \frac{C}{V} $$ | $$ \frac {s^4 A^2}{m^2 kg} $$ |
| magnetni (pre)tok | Φ<sub>M</sub> | weber (veber) | Wb | $$ V s $$ | $$ \frac {m^2 kg}{s^2 A} $$ |
| gostota magnetnega (pre)toka | B | tesla | T | $$ \frac {Wb}{m^2} = \frac {V s}{m^2} $$ | $$ \frac {kg}{s^2 A} $$ |
| induktivnost | L | henry (henri) | H | $$ \frac {Wb}{A} = \frac {V s}{A} $$ | $$ \frac {m^2 kg}{s^2 A^2} $$ |
| celzijeva temperatura | t | stopinja celzija | °C | | $$ K - 273.15 $$ |
| svetlobni tok | Φ | lumen | lm | $$ cd sr $$ | $$ cd $$ |
| osvetljenost | E | luks | lx | $$ \frac{lm}{m^2} = \frac{cd sr}{m^2} $$ | $$ \frac{cd}{m^2} $$ |
| radioaktivnost (št. razpadov na čas. enoto) | A | bekerel | Bq | | $$ \frac {1}{s} $$ |
| absorbiran odmerek (ionizirajočega sevanja) | D | gray (grej) | Gy | $$ \frac {J}{kg} $$ | $$ \frac {m^2}{s^2} $$ |
| ekvivalentni odmerek (ionizirajočega sevanj) | H | sievert (sivert) | Sv | $$ \frac {J}{kg} $$ | $$ \frac {m^2}{s^2} $$ |
| katalitična aktivnost | Akt k | katal | kat | | $$ \frac {mol}{s} $$ |
:Preglednica izpeljanih enot

| veličina | oznaka veličine | enota | oznaka enote | druge enote | osnovne enote |
| --- | --- | --- | --- | --- | --- |
| tlak, pritisk | p | bar | bar | $$ 10^5 Pa $$ | $$ 10^5 \frac {kg}{m s^2} $$ |
| energija | W | vatna ura | Wh | $$ 1 \frac{J}{s} 3600 s = 3600 J $$ | |
| energija | W | elektronvolt | eV | $$ 1.6 \cdot 10^{-19} J $$ | |
| energija | W | kalorija | cal | | |
| temperatura | T | fahrenheit (farenhajt) | °F | $$ \frac {5}{9} (x - 32) °C $$ | $$ \frac {5}{9} (x + 459.67) K $$ |
:Preglednica ostalih enot

<div class="content">

## Stalnice

</div>
| stalnica | oznaka | vrednost | negotovost |
| --- | --- | --- | --- |
| hitrost svetlobe v brezzračnem prostoru | c | $$ 299.792.458 \frac{m}{s} $$ | |
| Planckova | h | $$ 6,626.070.15 \cdot 10^{-34} J s = 4,14 \cdot 10^{-15} eV s $$ | |
| težnostna | G | $$ 6,674.30 \cdot 10^{-11} \frac{N m^2}{kg^2} $$ | $$ 1 \pm 1,2 \cdot 10^{-4} $$ |
| težni pospešek na Zemlji | g | $$ 9,81 \frac{m}{s^2} $$ | |
| osnovni naboj | $e_0$ | $$ 1,602.176.634 \cdot 10^{-19} A s $$ | |
| Avogadrovo število | $N_A$ | $$ 6,022.140.76 \cdot 10^{23} \frac{1}{mol} $$ | |
| splošna plinska | R | $$ 8,314.462.618 \frac{J}{mol\cdot K} = 8,310 \frac{kPa \cdot l}{mol \cdot K} $$ | |
| električna (*influenčna*) | $ε_0$ | $$ 8,85 \cdot 10^{-12} \frac{A s}{V m} $$ | |
| magnetna (*indukcijska*) | $μ_0$ | $$ 4 \pi \cdot 10^{-7} \frac{V s}{A m} $$ | |
| Boltzmannova | $k_{\mathrm{B}}$ | $$ 1,380.649 \cdot 10^{-23} \frac{J}{K} $$ | |
| Stefanova | ο | $$ 5,670.374.419 \cdot 10^{-8} \frac{W}{m^2 K^4} $$ | |
| poenotena atomska masna enota | $m_u = 1 u$ | $$ 1,660.539.068.92 \cdot 10^{-27} kg = 931,494 \frac{Me V}{c^2} $$ | |
| lastna energija atomske enote mase | $m_u c^2$ | $$ 931,494 Me V $$ | |
| masa elektrona | $m_e$ | $$ 9,109.383.713.9 \cdot 10^{-31} kg = \frac {1 u}{1823} = 0,5110 \frac{Me V}{c^2} $$ | |
| masa protona | $m_p$ | $$ 1,672.621.925.95 \cdot 10^{-27} kg = 1,00728 u = 938,272 \frac{Me V}{c^2} $$ | |
| masa nevtrona | $m_n$ | $$ 1,67493 \cdot 10^{-27} kg = 1,00866 u = 939,566 \frac{Me V}{c^2} $$ | |
:Preglednica fizikalnih stalnic

<div class="content">

---
## Zunanje povezave in viri

- [The Feynman Lectures on Physics](https://www.feynmanlectures.caltech.edu/)
- [The International System of Units (SI; 2019)](https://www.bipm.org/documents/20126/41483022/SI-Brochure-9-EN.pdf/2d2b50bf-f2b4-9661-f402-5f9d66e4b507)
- [NIST – CODATA values of the fundamental physical constants](https://www.nist.gov/programs-projects/codata-values-fundamental-physical-constants)
