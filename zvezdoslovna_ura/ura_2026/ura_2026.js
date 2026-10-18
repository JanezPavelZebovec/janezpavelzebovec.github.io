const year_days = 365.2425;
const day_ms = 24*60*60*1000;
const ast_month_ms = (((29*24+12)*60+44)*60+2.9)*1000;
const ast_month_days = ast_month_ms / day_ms;
const axis_angle = 23.4392811;
const earth_sun = 149598023;
const sun_r_km = 696000;
const earth_r_km = 6371;   // srednji polmer (prej: 6356.752 = polarni)
const moon_r_km = 3474;

// =============================================================================

let pole = 1; // 1 = north, -1 = south

let N = 46.11994444;
let E = 14.81533333;

let year_angle = 42;
let midday = 0;
let spin = 0;
let projection = d3.geoAzimuthalEquidistant();

// -----------------------------------------------------------------------------

let win_w = window.innerWidth;
let win_h = window.innerHeight;

// Pri azimutni ekvidistančni projekciji je cela krogla krog s polmerom
// scale * PI, zato scale izberemo tako, da se vidi cel svet.
function fit_scale() {
    return (Math.min(win_w, win_h) / 2) / Math.PI * 0.95;
}

function layout() {
    projection
        .scale(fit_scale())
        .translate([win_w / 2, win_h / 2]);
    set_rotation();   // uporablja trenutni `projection`
}

function use_projection(p) {
    projection = p;
    geopath.projection(p);   // brez tega geopath še vedno uporablja staro
    layout();
    redraw();
}

layout();

/*const projection = d3.geoAzimuthalEquidistant()
    .scale(fit_scale())
    .translate([win_w / 2, win_h / 2]);*/

const geopath = d3.geoPath().projection(projection).pointRadius(4);

function set_rotation() {
    //projection.rotate([-midday + year_angle + spin, -(90 - axis_angle), 0]);
    projection.rotate([-midday + year_angle + spin, -(90 - axis_angle) * pole, 0]);
}
set_rotation();

// -----------------------------------------------------------------------------

const svg = d3.select("#map").append("svg")
    .attr("width", win_w)
    .attr("height", win_h);

function redraw() {
    svg.selectAll("path.geo").attr("d", geopath);
}

d3.json("world.json").then(world => {
    // Ocean (krogla)
    svg.append("path")
        .datum({ type: "Sphere" })
        .attr("class", "geo ocean")
        .attr("fill", "#0a0c10");

    // Kopno
    svg.append("path")
        .datum(world)
        .attr("class", "geo land")
        .attr("fill", "#232731")
        .attr("stroke", "#5b5a65");

    let place = { lon: E, lat: N };

    const place_paths = {};
    for (const name of ["parallel", "meridian", "point"]) {
        place_paths[name] = svg.append("path")
            .attr("class", "geo place-" + name)
            .attr("fill", name === "point" ? "#e0533d" : "none")
            .attr("stroke", "#e0533d")
            .attr("stroke-width", 1);
    }

    function set_place(lon, lat) {
        place = { lon, lat };
        place_paths.parallel.datum({
            type: "LineString",
            coordinates: d3.range(-180, 181, 2).map(l => [l, lat])
        });
        place_paths.meridian.datum({
            type: "LineString",
            coordinates: d3.range(-90, 91, 2).map(b => [lon, b])
        });
        place_paths.point.datum({ type: "Point", coordinates: [lon, lat] });
        redraw();
    }

    set_place(place.lon, place.lat);

    // Koordinatna mreža (vsakih 15°)
    svg.append("path")
        .datum(d3.geoGraticule().step([15, 15])())
        .attr("class", "geo graticule")
        .attr("fill", "none")
        .attr("stroke", "#3a4050")
        .attr("stroke-width", 0.5);

    const special_lats = [0, axis_angle, -axis_angle, 90 - axis_angle, -90 + axis_angle];

    svg.append("path")
        .datum({
            type: "MultiLineString",
            coordinates: special_lats.map(lat =>
                d3.range(-180, 180, 2).map(lon => [lon, lat]))
        })
        .attr("class", "geo special-lats")
        .attr("fill", "none")
        .attr("stroke", "#79ccd0")
        .attr("stroke-width", 0.8)
        /*.attr("stroke-dasharray", "4 3")*/;

    redraw();

    // Samodejno vrtenje
    function animate() {
        spin += 0.1;
        set_rotation();
        redraw();
        requestAnimationFrame(animate);
    }
    animate();

}).catch(err => console.error("Napaka pri nalaganju zemljevida:", err));

// Prilagoditev ob spremembi velikosti okna
window.addEventListener("resize", () => {
    win_w = window.innerWidth;
    win_h = window.innerHeight;
    svg.attr("width", win_w).attr("height", win_h);
    projection.translate([win_w / 2, win_h / 2]).scale(fit_scale());
    redraw();
});

