console.log('Leaflet Choropleth loaded.');

// create map.
var map = L.map('map').setView([37.8, -96], 4);

var cloudmade = L.tileLayer('http://{s}.tile.cloudmade.com/{key}/{styleId}/256/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade',
    key: 'BC9A493B41014CAABB98F0471D759707',
    styleId: 22677
}).addTo(map);

// Overlaying the Idaho GeoJSON data on the US map.
// SUCCESS!! -sans interactivity...
//L.geoJson(masterGrid).addTo(map);

// Load Aquifer GeoJSON data.
L.geoJson(NEW_major_aquifers_dd).addTo(map);

// Apply styles to states.
function style(feature) {
    return {
        fillColor: '#9999ff',
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.5
    };
}

L.geoJson(NEW_major_aquifers_dd, {
    style: style
}).addTo(map);

// Make GeoJSON layer accessible ot listeners.
var geojson;

// Create listeners for interactivity with states.
function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 3,
        color: '#F99',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }

    // custom hover control feature.
    //info.update(layer.feature.properties);
}

function resetHighlight(e) {
    geojson.resetStyle(e.target);

    // custom hover control feature.
    //info.update();
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
geojson = L.geoJson(NEW_major_aquifers_dd, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);