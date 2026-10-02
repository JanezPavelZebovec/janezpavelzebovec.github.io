const colors = [
  { percent: 0,   color: 'rgb(200, 0, 0, 1)' }, // red
  { percent: 25,  color: '#rgb(255, 100, 0, 1' }, //redish orange
  { percent: 50,  color: 'rgb(255, 128, 0, 1)' }, // orange
  { percent: 75,  color: 'rgb(255, 255, 0, 1)' }, // yellow
  { percent: 95,  color: 'rgb(128, 255, 0, 1)' }, // yellowish green
  { percent: 100, color: 'rgb(0, 180, 0, 1)' }, //green
];

function add_geojson(type, name, border, fill, zoom) {
    const options = {
        source: new ol.source.Vector({
            url: `GURS/${type}_${name}.geojson`,
            attributions: '<a href="https://www.e-prostor.gov.si/pogoji-uporabe/">© GURS</a>',
            format: new ol.format.GeoJSON({
                dataProjection: 'EPSG:4326',
                featureProjection: 'EPSG:3857'
            })
        }),
        style: new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: border,
                width: 0.5
            }),
            fill: new ol.style.Fill({
                color: fill
            })
        })
    };
    
    if (zoom) {
        options.minZoom = zoom;
    }

    return new ol.layer.Vector(options);
}

// ----------------------------------------------------------------------------

const OSM = new ol.layer.Tile({
    source: new ol.source.OSM()
});

const Maptiler = new ol.layer.Tile({
    source: new ol.source.TileJSON({
        url: 'https://api.maptiler.com/maps/base-v4/tiles.json?key=NEEc9suqwsJ2R7py84Nd',
        tileSize: 512,
        attributions: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
    })
});

const Maptiler_Contours = new ol.layer.VectorTile({
    source: new ol.source.VectorTile({
        format: new ol.format.MVT(),
        url: 'https://api.maptiler.com/tiles/contours-v2/{z}/{x}/{y}.pbf?key=NEEc9suqwsJ2R7py84Nd', 
        attributions: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    }),
    minZoom: 9,
    maxZoom: 14,
});

const GURS_DOF025 = new ol.layer.Tile({
    source: new ol.source.XYZ({
        url: 'https://gis.level2.si/geoserver/gwc/service/tms/1.0.0/level2%3ADOF025_latest@EPSG%3A3857@jpeg/{z}/{x}/{-y}.jpeg',
        maxZoom: 20,
        minZoom: 8,
        attributions: '<a href="https://www.e-prostor.gov.si/pogoji-uporabe/">© GURS</a>',
    })
});

/*const StatReg = new ol.layer.Vector({
    source: new ol.source.Vector({
        url: 'GURS/StatisticalRegions.geojson',
        attributions: '<a href="https://www.e-prostor.gov.si/pogoji-uporabe/">© GURS</a>',
        format: new ol.format.GeoJSON({
            dataProjection: 'EPSG:4326',
            featureProjection: 'EPSG:3857'
        })
    }),
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: '#2ecc71',
            width: 2
        }),
            fill: new ol.style.Fill({
            color: 'rgba(46, 204, 113, 0.0)'
        })
    })
});*/

/*const stavbe_tloris = new ol.layer.Vector({
    source: new ol.source.Vector({
        url: 'GURS/stavbe_stavbe.geojson',
        attributions: '<a href="https://www.e-prostor.gov.si/pogoji-uporabe/">© GURS</a>',
        format: new ol.format.GeoJSON({
            dataProjection: 'EPSG:4326',
            featureProjection: 'EPSG:3857'
        })
    }),
    minZoom: 15,
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: '#2ecc71',
            width: 2
        }),
            fill: new ol.style.Fill({
            color: 'rgba(46, 204, 113, 0.3)'
        })
    })
});*/

const prostorske_enote_statisticne_regije = add_geojson('prostorske_enote', 'statisticne_regije', '#2ecc71', 'rgba(46, 204, 113, 0.0)')
const prostorske_enote_obcine = add_geojson('prostorske_enote', 'obcine', '#ffff00', 'rgba(255, 255, 0, 0.0)')
const prostorske_enote_volilni_okraji = add_geojson('prostorske_enote', 'volilni_okraji', '#0000ff', 'rgba(0, 0, 128, 0)')
const prostorske_enote_naselja = add_geojson('prostorske_enote', 'naselja', '#2ecc71', 'rgba(46, 204, 113, 0.0)')
const prostorske_enote_lokalna_volisca = add_geojson('prostorske_enote', 'lokalna_volisca', '#ff0000', 'rgba(128, 0, 0, 0.5)')
const stavbe_tloris = add_geojson('stavbe', 'tloris', '#ffff00', 'rgba(128, 128, 0, 0.3)', 16)
const stavbe_nadzemni_tloris = add_geojson('stavbe', 'nadzemni_tloris', '#00ff00', 'rgba(0, 128, 0, 0.3)', 16)
const stavbe_podzemni_tloris = add_geojson('stavbe', 'podzemni_tloris', '#ff0000', 'rgba(128, 0, 0, 0.3)', 16)

// =============================================================================

const backgrounds = [
    {name: 'GURS DOF025', layer: GURS_DOF025 },
    //{name: 'Maptiler', layer: Maptiler },
    {name: 'OpenStreetMap', layer: OSM },
];

const overlays = [
    {name: 'GURS: Prostorske enote – statistične regije', layer: prostorske_enote_statisticne_regije },
    {name: 'GURS: Prostorske enote – občine', layer: prostorske_enote_obcine },
    {name: 'GURS: Prostorske enote – volilni okraji', layer: prostorske_enote_volilni_okraji },
    {name: 'GURS: Prostorske enote – naselja', layer: prostorske_enote_naselja },
    {name: 'GURS: Prostorske enote – lokalna volišča', layer: prostorske_enote_lokalna_volisca },

    {name: 'GURS: Stavbe – tloris', layer: stavbe_tloris },
    {name: 'GURS: Stavbe – nadzemni tloris', layer: stavbe_nadzemni_tloris },
    {name: 'GURS: Stavbe –  podzemni tloris', layer: stavbe_podzemni_tloris },

    /*{name: 'Maptiler: Contours', layer: Maptiler_Contours },*/
];

const layers_menu = document.getElementById('layers_menu');

overlays.forEach(({ name, layer }) => {
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = layer.getVisible();
    checkbox.addEventListener('change', () => layer.setVisible(checkbox.checked));

    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(' ' + name));
    layers_menu.appendChild(label);
});

backgrounds.forEach(({ name, layer }) => {
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = layer.getVisible();
    checkbox.addEventListener('change', () => layer.setVisible(checkbox.checked));

    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(' ' + name));
    layers_menu.appendChild(label);
});

// -----------------------------------------------------------------------------

const extent = ol.proj.transformExtent([13.3754696, 45.4214681, 16.5967003, 46.8766816], 'EPSG:4326', 'EPSG:3857');

const map = new ol.Map({
    layers: [
        //Maptiler,
        OSM,
        //GURS_DOF025,

        //Maptiler_Contours,
        prostorske_enote_lokalna_volisca,
        //prostorske_enote_volilni_okraji,
        prostorske_enote_obcine,
        //stavbe_tloris,
        //stavbe_nadzemni_tloris,
        //stavbe_podzemni_tloris
    ],
    target: 'map',
    view: new ol.View({
        center: ol.proj.fromLonLat([14.81533333,46.11994444]),
        zoom: 9,
        minZoom: 8,
        extent: extent,
        constrainOnlyCenter: true
    })
});

// -----------------------------------------------------------------------------

const clickables = [prostorske_enote_lokalna_volisca];

var select = new ol.interaction.Select({
    condition: ol.events.condition.click,
    layers: clickables,
    style: function (feature) {
        const orig_layer = select.getLayer(feature);
        const unselected_style = orig_layer.getStyle();

        return new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: unselected_style.getStroke().getColor(),
                width: 3
            }),
            fill: unselected_style.getFill()
        });
    }
});

map.addInteraction(select);   

map.on('click', function (event) {
    const feature = map.forEachFeatureAtPixel(event.pixel, function (feature) {
        return feature;
    }, {
        layerFilter: (layer) => clickables.includes(layer)
    });

    if (feature) {
        show_info(feature.getProperties());
    } else {
        remove_info();
    }
});

function show_info(info) {
    let lines = '';
    for (const [key, value] of Object.entries(info)) {
        if (key === 'geometry' || value === null) continue;
        lines += `<tr><td>${key}</td><td>${value}</td></tr>`;
    }
    document.getElementById('info_panel').innerHTML = `<table>${lines}</table>`;
}

function remove_info() {
    document.getElementById('info_panel').innerHTML = '<em>Klikni na območje za podrobnosti.</em>';
}
