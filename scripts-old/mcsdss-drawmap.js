console.log('scripts/mcsdss-drawmap.js loaded...');

var map = L.map('map').setView([43.5, -111], 8);

L.control.layers({
    'Base Map': L.mapbox.tileLayer('examples.map-zgrqqx0w').addTo(map),
    'Grey Map': L.mapbox.tileLayer('dnoll.g7i1h04g')
}, {
    'Land Use': L.mapbox.tileLayer('dnoll.nkkxzuxr'),
    'Raod Access': L.mapbox.tileLayer('dnoll.qohnz5mi'),
    'Transmission Lines': L.mapbox.tileLayer('dnoll.7xzp8pvi'),
    'Fault Zones': L.mapbox.tileLayer('dnoll.qga7zaor')
}).addTo(map);

var featureGroup = L.featureGroup().addTo(map);

var drawControl = new L.Control.Draw({
    edit: {
        featureGroup: featureGroup
    }
}).addTo(map);

map.on('draw:created', function (e) {
    featureGroup.addLayer(e.layer);
});
