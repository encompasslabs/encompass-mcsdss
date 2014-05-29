console.log('leaflet-mobile.js loaded.');

var map = L.map('map');

var cloudmade = L.tileLayer('http://{s}.tile.cloudmade.com/{key}/{styleId}/256/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade',
    key: 'BC9A493B41014CAABB98F0471D759707',
    styleId: 22677
}).addTo(map);

// Set the view by the detected geolocation of the device.
// If geolocation fails, the setView true option will display the entire world.
map.locate({
    setView: true,
    maxZoom: 16
});

// Finding the location.
function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);

// Handling errors.
function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);

// Currently cannot get mobile emulation to provide geolocation to webpage in canary chrome.
// Getting error message so code is executing correctly, but owuld like to see geolocation working... =/