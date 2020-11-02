// Sample view for fixed point view
var mymap = L.map('mapid').setView([51.505, -0.09], 13);

//Add a tile layer to add to our map, in this case it's a Mapbox Streets tile layer
// Make sure all the code is called after the div and leaflet.js inclusion. 
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibGlxaWNhaSIsImEiOiJja2dqa3J2c3IwdDBlMzRsZmc2NG5uYmY5In0.KESdv0_ZE9rlUBuC6U9UyA'
        // Currently using public accessToken, the speed might be impacted
}).addTo(mymap);

// Create the demo marker
var marker = L.marker([51.5, -0.09]).addTo(mymap);

// Create the demo circle
var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

// Create the demo polygon
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);

// Create the demo popups
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(mymap);

// Create the event
// After clicking on the map, it will show coordinates in a popup
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);