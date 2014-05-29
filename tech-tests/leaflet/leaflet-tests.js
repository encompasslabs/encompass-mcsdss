/* 
 * Initialize the map and set geographical coordinates and zoom level.
 * By default (as we didn’t pass any options when creating the map instance),
 * all mouse and touch interactions on the map are enabled, and it has zoom and attribution controls.
 * Note that setView call also returns the map object —
 * most Leaflet methods act like this when they don’t return an explicit value,
 * which allows convenient jQuery-like method chaining.
 */
var map = L.map('map').setView([51.505, -0.09], 4);

/*
 * Add a Tile Layer to the map.
 * Creating a tile layer usually involves setting the URL template for the tile images (get yours at CloudMade),
 * the attribution text and the maximum zoom level of the layer.
 */
var cloudmade = L.tileLayer('http://{s}.tile.cloudmade.com/{key}/{styleId}/256/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade',
    key: 'BC9A493B41014CAABB98F0471D759707',
    styleId: 22677
}).addTo(map);

/*
 * detailed breakdown of the http URL for the Tile Layer in CloudMade:
 *
 * b.tile.cloudmade.com - the server we're getting the image from.
 * We have [abc]-subdomains to allow parallel downloads -
 * you get exactly the same tiles whether you access a.tile.cloudmade.com, b.tile.cloudmade.com, c.tile.cloudmade.com or simply just tile.cloudmade.com.
 * Parallel downloads are a useful technique to get around the simultaneous image-connection limits in many browsers -
 * we're happy to take all the traffic you want to send!
 * If you need secure SSL-enabled service, please use these URLs: https://ssl_tiles.cloudmade.com or https://ssl-tiles.cloudmade.com.
 *
 * 8ee2a50541944fb9bcedded5165f09d9 - the API key.
 * This one is ours - you need to substitute it with your own! You generate an API key on your account page.
 *
 * 1 - the style id.
 * We provide different cartographic styles, and you choose between them.
 * Create your own or choose from thousands of styles created by the Style Editor community.
 * Put required style id instead of the 1, e.g. 997.
 * To get double resolution tiles use @2x suffix: 997@2x - this will improve map look for iPhone 4, Motorola Milestone, etc.
 *
 * 256 - the dimensions of the tile, in pixels.
 * We provide tiles in the standard size of 256x256, and also 64x64 -
 * these can be especially useful for you if your application runs on small-screen mobile devices.
 *
 * 15/17599/10746.png - the last three numbers specify the exact tile you are looking for - Zoom/X/Y.png.
 * You can use Zoom 0-18 for regular tiles and Zoom 0-19 for Hi-Res tiles.
 */

/*
 * Converting Latitude and Longitude to Tile Numbers
 *
 * n = 2 ^ zoom
 * xtile = ((lon_deg + 180) / 360) * n
 * ytile = (1 - (ln(tan(lat_rad) + sec(lat_rad)) / Pi)) / 2 * n
 *
 * Note: ln stands for natural logarithm
 *
 * round down xtile and ytile to get the integer tile numbers. If you need to go the other way:
 *
 * n = 2 ^ zoom
 * lon_deg = xtile / n * 360.0 - 180.0
 * lat_rad = arctan(sinh( Pi * (1 - 2 * ytile / n)))
 * lat_deg = lat_rad * 180.0 / Pi
 */

/*
 * Besides tile layers, you can easily add other things to your map, including markers, polylines, polygons, circles, and popups.
 */
var marker = L.marker([51.5, -0.09]).addTo(map);

/*
 * Adding a circle is the same (except for specifying the radius in meters as a second argument),
 * but lets you control how it looks by passing options as the last argument when creating the object.
 */
var circle = L.circle([51.508, -0.11], 500, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
}).addTo(map);

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);

/*
 * Popups are usually used when you want to attach some information to a particular object on a map. Leaflet has a very handy shortcut for this.
 */
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

/*
 * You can also use popups as layers (when you need something more than attaching a popup to an object).
 * Here we use openOn instead of addTo because it handles automatic closing of a previously opened popup when opening a new one which is good for usability.
 */
var popup = L.popup().setLatLng([51.493, -0.10]).setContent("I am a standalone popup.").openOn(map);

/*
 * Every time something happens in Leaflet, e.g. user clicks on a marker or map zoom changes,
 * the corresponding object sends an event which you can subscribe to with a function.
 * It allows you to react to user interaction.
 */
var popup = L.popup();

function onMapClick(e) {
    //alert("You clicked the map at " + e.latlng);
    popup.setLatLng(e.latlng).setContent("You clicked the map at " + e.latlng.toString()).openOn(map);
}

map.on('click', onMapClick);

/*
 * Each object has its own set of events — see documentation for details.
 * The first argument of the listener function is an event object —
 * it contains useful information about the event that happened.
 * For example, map click event object (e in the example above) has latlng property which is a location at which the click occured.
 * Lets improve our example by using a popup instead of an alert.
 */

/*
 * Using Markers wit Custom Images
 *
 * To make a custom icon, we usually need two images —
 * the actual icon image and the image of its shadow.
 * For this tutorial, we took the Leaflet logo and created four images out of it —
 * 3 leaf images of different colors and one shadow image for the three.
 */

/*
 * Marker icons in Leaflet are defined by L.Icon objects, which are passed as an option when creating markers. Let’s create a green leaf icon:
 */
var greenIconA = L.icon({
    iconUrl: 'leaf-green.png',
    shadowUrl: 'leaf-shadow.png',
    iconSize: [38, 95], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

L.marker([51.5, -0.16], {
    icon: greenIconA
}).addTo(map);

/*
 * Defining an Icon Class
 *
 * What if we need to create several icons that have lots in common?
 * Lets define our own icon class containing the shared options, inheriting from L.Icon.
 */
var LeafIcon = L.Icon.extend({
    options: {
        shadowUrl: 'leaf-shadow.png',
        iconSize: [38, 95],
        shadowSize: [50, 64],
        iconAnchor: [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76]
    }
});

/*
 * Now we can create all three of our leaf icons from this class and use them.
 */
var greenIcon = new LeafIcon({
    iconUrl: 'leaf-green.png'
}),
    redIcon = new LeafIcon({
        iconUrl: 'leaf-red.png'
    }),
    orangeIcon = new LeafIcon({
        iconUrl: 'leaf-orange.png'
    });

/*
 * You may have noticed that we used the new keyword for creating LeafIcon instances.
 * So why do all Leaflet classes get created without it?
 * The answer is simple: the real Leaflet classes are named with a capital letter (e.g. L.Icon),
 * and they also need to be created with new, but there are also shortcuts with lowercase names (L.icon),
 * created for convenience like this.
 * Note: You can do the same with your classes too.
 */
L.icon = function(options) {
    return new L.Icon(options);
};

L.marker([51.5, -0.15], {
    icon: greenIcon
}).addTo(map).bindPopup("I am a green leaf.");
L.marker([51.499, -0.14], {
    icon: redIcon
}).addTo(map).bindPopup("I am a red leaf.");
L.marker([51.501, -0.13], {
    icon: orangeIcon
}).addTo(map).bindPopup("I am an orange leaf.");

/*
 * Using GeoJSON with Leaflet
 *
 * Note: These examples work on the curent map but you have to zoom way out to find them.
 * The full example can be found here: http://leafletjs.com/examples/geojson-example.html
 *
 * GeoJSON is becoming a very popular data format among many GIS technologies and services —
 * it's simple, lightweight, straightforward, and Leaflet is quite good at handling it.
 *
 * GeoJSON is a format for encoding a variety of geographic data structures.
 * A GeoJSON object may represent a geometry, a feature, or a collection of features.
 * GeoJSON supports the following geometry types: Point, LineString, Polygon, MultiPoint, MultiLineString, MultiPolygon, and GeometryCollection.
 * Features in GeoJSON contain a geometry object and additional properties, and a feature collection represents a list of features.
 *
 * Leaflet supports all of the GeoJSON types above, but Features and FeatureCollections work best as
 * they allow you to describe features with a set of properties. We can even use these properties to style our Leaflet vectors.
 * Here's an example of a simple GeoJSON feature.
 */
var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.99404, 39.75621]
    }
};

/*
 * The GeoJSON layer
 *
 * GeoJSON objects are added to the map through a GeoJSON layer. To create it and add it to a map, we can use the following code.
 */
L.geoJson(geojsonFeature).addTo(map);

/*
 * Alternatively, we could create an empty GeoJSON layer and assign it to a variable so that we can add more features to it later.
 */
var myLayer = L.geoJson().addTo(map);
myLayer.addData(geojsonFeature);

/*
 * GeoJSON options
 */

/*
 * style
 *
 * The style option can be used to style features two different ways.
 * First, we can pass a simple object that styles all paths (polylines and polygons) the same way:
 */
var myLines = [{
    "type": "LineString",
    "coordinates": [
        [-100, 40],
        [-105, 45],
        [-110, 55]
    ]
}, {
    "type": "LineString",
    "coordinates": [
        [-105, 40],
        [-110, 45],
        [-115, 55]
    ]
}];

var myStyle = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.65
};

L.geoJson(myLines, {
    style: myStyle
}).addTo(map);

/*
 * Alternatively, we can pass a function that styles individual features based on their properties.
 * In the example below we check the "party" property and style our polygons accordingly.
 */
var states = [{
    "type": "Feature",
    "properties": {
        "party": "Republican"
    },
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                [-104.05, 48.99],
                [-97.22, 48.98],
                [-96.58, 45.94],
                [-104.03, 45.94],
                [-104.05, 48.99]
            ]
        ]
    }
}, {
    "type": "Feature",
    "properties": {
        "party": "Democrat"
    },
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                [-109.05, 41.00],
                [-102.06, 40.99],
                [-102.03, 36.99],
                [-109.04, 36.99],
                [-109.05, 41.00]
            ]
        ]
    }
}];

L.geoJson(states, {
    style: function(feature) {
        switch (feature.properties.party) {
            case 'Republican':
                return {
                    color: "#ff0000"
                };
            case 'Democrat':
                return {
                    color: "#0000ff"
                };
        }
    }
}).addTo(map);

/*
 * pointToLayer
 *
 * Points are handled differently than polylines and polygons.
 * By default simple markers are drawn for GeoJSON Points.
 * We can alter this by passing a pointToLayer function in a GeoJSON options object when creating the GeoJSON layer.
 * This function is passed a LatLng and should return an instance of ILayer, in this case likely a Marker or CircleMarker.
 * Here we're using the pointToLayer option to create a CircleMarker.
 * We could also set the style property in this example —
 * Leaflet is smart enough to apply styles to GeoJSON points if you create a vector layer like circle inside the pointToLayer function.
 */
var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

var someGeojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.99404, 39.75621]
    }
};

L.geoJson(someGeojsonFeature, {
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
}).addTo(map);

/*
 * onEachFeature
 *
 * The onEachFeature option is a function that gets called on each feature before adding it to a GeoJSON layer.
 * A common reason to use this option is to attach a popup to features when they are clicked.
 */
function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}

var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.99404, 39.75621]
    }
};

L.geoJson(geojsonFeature, {
    onEachFeature: onEachFeature
}).addTo(map);

/*
 * filter
 *
 * The filter option can be used to control the visibility of GeoJSON features.
 * To accomplish this we pass a function as the filter option.
 * This function gets called for each feature in your GeoJSON layer, and gets passed the feature and the layer.
 * You can then utilise the values in the feature's properties to control the visibility by returning true or false.
 * In the example below "Busch Field" will not be shown on the map.
 */
var someFeatures = [{
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "show_on_map": true
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.99404, 39.75621]
    }
}, {
    "type": "Feature",
    "properties": {
        "name": "Busch Field",
        "show_on_map": false
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.98404, 39.74621]
    }
}];

L.geoJson(someFeatures, {
    filter: function(feature, layer) {
        return feature.properties.show_on_map;
    }
}).addTo(map);