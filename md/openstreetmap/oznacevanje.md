---
title: OpenStreetMap
date: 2026-10-28
description: Nekaj izbranih oznak za označevanje v OpenStretMap
keywords: OpenStreetMap
---

# Označevanje v OpenStreetMap

## Poti

    highway=path/footway/cycleway
    segregated=yes/no
    oneway=yes/no
    surface=asphalt/compacted/gravel/fine_gravel/...
    
    foot=yes/no/designated/private
    bicycle=yes/no/designated
    footway=sidewalk/crossing
    cycleway=-/crossing

### Pločniki

Za pešce in kolesarje:

    highway=path
    foot=yes/designated
    bicycle=yes/designated
    footway=sidewalk

Samo za pešce:

    highway=footway
    foot=designated
    footway=sidewalk

### Prehodi

    crossing=traffic_signals/uncontrolled/...
    crossing:island=yes/no
    crossing:markings=zebra/...

Za pešce in kolesarje:

    highway=path
    foot=yes/designated
    bicycle=yes/designated
    cycleway=crossing
    footway=crossing

Samo za kolesarje:

    highway=cycleway
    bicycle=designated
    cycleway=crossing

### Ostale poti

Za pešce in kolesarje:

    highway=path
    foot=yes/designated
    bicycle=yes/designated

Zgolj kolesarska steza:

    highway=cycleway
    bicycle=designated

## Avtobusne povezave

Postajališče (`platform`):

    public_transport=platform
    highway=bus_stop
    bus=yes
    name=Jadranska
    operator=Ljubljanski potniški promet
    shelter=no
    covered=no
    bench=no

Postojno mesto avtobusa (`stop_position`):

    public_transport=stop_position
    bus=yes

Zveza postajališča (`stop_area`):

    type=public_transport
    public_transport=stop_area
    bus=yes
    name=Jadranska
    operator=Ljubljanski potniški promet

Avtobusna povezava v eno smer (`route`):

    type=route
    name=Bus 10: Besnica obračališče => Zadobrova

    network=MPP Ljubljana - Urbana
    operator=Ljubljanski potniški promet
    route=bus
    ref=42
    public_transport:version=2

    from=Besnica obračališče
    via=Podgrad
    to=Zadobrova

    fee=yes
    colour=#58574a

Zveza avtobusne povezave v obe (/vse) smeri (`route_master`):

    type=route_master
    name=Bus 42

    route_master=bus
    ref=42
    network=MPP Ljubljana - Urbana
    operator=Ljubljanski potniški promet

    colour=#58574a

Zavetje postajališč:

    amenity=shelter
    shelter_type=public_transport
    building=roof

## Verski gradniki

Splošna verska zgradba: `building=religious`

### Župnija

    name=Župnija *

    deanery=Dekanija *
    diocese=Škofija *

    religion=christian
    denomination=roman_catholic

    parish:website=http://*

    parish:wikidata=Q*
    parish:wikipedia=sl:*

Lahko tudi `boundary=religious_administration` za mejo župnije

#### Župnijska cerkev


name=Župnijska cerkev sv. *

    amenity=place_of_worship
    building=church
    religion=christian
    denomination=roman_catholic
    church:type=parish

    parish=Župnija *
    deanery=Dekanija *
    diocese=Nadškofija *

    parish:website=http://*
    parish:wikidata=Q*
    parish:wikipedia=sl:*
    wikidata=Q*
    wikipedia=sl:

Zadnji dve le, če ima sama cerkev zapis na Wikipediji/Wikidata.

#### Podružnična cerkev

    name=Podružnična cerkev svete/ga *
    short_name=Sveta/i *

    amenity=place_of_worship
    building=church
    religion=christian
    denomination=roman_catholic
    church:type=filial

    parish=Župnija *
    deanery=Dekanija *
    diocese=Nadškofija *

    parish:website=http://*
    wikidata=Q*
    wikipedia=sl:

Zadnji dve le, če ima sama cerkev zapis na Wikipediji/Wikidata.

#### Župnišče

    name=Župnija *

    building=rectory
    office=parish

    parish=Župnija *
    deanery=Dekanija *
    diocese=Škofija *

    website=http://*
    phone=*
    contact:email=*

    parish:wikidata=Q*
    parish:wikipedia=sl:*

    addr:city=*
    addr:housenumber=*
    addr:postcode=****
    addr:street=*

Namesto `building=rectory` se uporablja tudi `building=presbytery`; če pa
župnišče označuješ na točki, `building=*` sploh povsem izpustiš.

Za župnijo, ki jo oskrbuje/upravlja druga župnija:

    operator=Župnija *
    operator:type=religious

### Kapela

Večja kapela (ne obpotna kapelica), v katero lahko gre več oseb, se lahko vanjo stopi.

    name=Cerkev Sv. Bride

    amenity=place_of_worship
    building=chapel
    religion=christian
    denomination=roman_catholic

    parish=Župnija *
    deanery=Dekanija *
    diocese=Škofija *

**Bolnišnična kapela**:

    building:part=chapel
    chapel:type=hospital

**Pokopališka kapela**:

    chapel:type=grave_yard

### Pokopališka vežica

    amenity=place_of_mourning

### Zvonik

    building:part=tower
    man_made=tower
    tower:type=bell_tower

#### Samostoječ

    building=tower
    tower:type=bell_tower
    man_made=tower

### Pokopališče

    landuse=cemetery

    parish=Župnija *
    deanery=Dekanija *
    diocese=Škofija *

#### Pokopališče okoli cerkve

    amenity=grave_yard
    landuse=cemetry

    parish=Župnija *
    deanery=Dekanija *
    diocese=Škofija *

### Redovi

Kapucinski frančiškani:

    community=OFMCap
    community:sl=frančiškani
    community:gender=male
    community:wikidata=Q124862

Klarise:

    community=OSC
    community:sl=klarise
    community:gender=female
    community:wikidata=Q733658

## Parkirišče

    amenity=parking
    fee=no/yes
    parking=surface/street_side
    capacity=*
    orientation=parallel/diagonal/perpendicular
    surface=asphalt

### Spomeniki

    historic=memorial
    memorial=obelisk/bust/stele/*
    wikidata=Q*

### Domobrancem

    historic=memorial
    war_memorial=yes
    memorial:conflict=WW2
    subject=Slovensko domobranstvo
    subject:wikidata=Q137886

### NOB

    historic=memorial
    war_memorial=yes
    memorial:conflict=WW2
    subject=NOB
    subject:wikidata=Q1565371

## Omrežje

### Elektrika

[`power=*`](https://wiki.openstreetmap.org/wiki/Key:power)

- `power=line` – (pomembnejši) daljnovod
- `power=minor_line` – manj pomemben (običajno stebrni) daljnovod
- `power=tower` – daljnovodni stolp
- `power=pole` – daljnovodni steber
- `power=terminal` – prehod z daljnovoda v stavbo (npr. električni stolp /
transformator) ali obratno

[Prehodni steber daljnovoda](https://wiki.openstreetmap.org/wiki/Tag:location:transition%3Dyes):

    power=pole
    location:transition=yes
    line_management=transition
