console.log('Leaflet Choropleth loaded.');

// create map.
var map = L.map('map').setView([37.8, -96], 4);

var cloudmade = L.tileLayer('http://{s}.tile.cloudmade.com/{key}/{styleId}/256/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade',
    key: 'BC9A493B41014CAABB98F0471D759707',
    styleId: 22677
}).addTo(map);

// Load States GeoJSON data.
//L.geoJson(statesData).addTo(map);

// Define styles for states.
function getColor(d) {
    return d > 1000 ? '#800026' :
        d > 500 ? '#BD0026' :
        d > 200 ? '#E31A1C' :
        d > 100 ? '#FC4E2A' :
        d > 50 ? '#FD8D3C' :
        d > 20 ? '#FEB24C' :
        d > 10 ? '#FED976' :
        '#FFEDA0';
}

// Apply styles to states.
function style(feature) {
    return {
        fillColor: getColor(feature.properties.density),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

L.geoJson(statesData, {
    style: style
}).addTo(map);

// Make GeoJSON layer accessible ot listeners.
var geojson;

// Create listeners for interactivity with states.
function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }

    // custom hover control feature.
    info.update(layer.feature.properties);
}

function resetHighlight(e) {
    geojson.resetStyle(e.target);

    // custom hover control feature.
    info.update();
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

// Method to assign all listeners programmatically.
function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

// Assign listeners to the geojson layer.
geojson = L.geoJson(statesData, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);

// Create a custom hover control to display state info.
// requires adding new lines into listeners (commented above).
var info = L.control();

info.onAdd = function(map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// The method that we will use to update the control based on feature properties passed
info.update = function(props) {
    this._div.innerHTML = '<h4>US Population Density</h4>' + (props ?
        '<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>' : 'Hover over a state');
};

info.addTo(map);

// Add a custom legend control.
var legend = L.control({
    position: 'bottomright'
});

legend.onAdd = function(map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 10, 20, 50, 100, 200, 500, 1000],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(map);

// Overlaying the Idaho GeoJSON data on the US map.
// SUCCESS!! -sans interactivity...
//L.geoJson(masterGrid).addTo(map);

// Load Aquifer GeoJSON data.
L.geoJson(NEW_major_aquifers_dd).addTo(map);