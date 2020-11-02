* Leaflet is the leading open-source JavaScript library for mobile-friendly interactive maps. Weighing just about 39 KB of JS, it has all the mapping features most developers ever need.

* Compare with the Goolge Maps API:
  Define the LatLng coordinates for the polygon's path.
  const triangleCoords = [
    { lat: 25.774, lng: -80.19 },
    { lat: 18.466, lng: -66.118 },
    { lat: 32.321, lng: -64.757 },
    { lat: 25.774, lng: -80.19 },
  ];

* https://nominatim.openstreetmap.org/search.php?q=edmonton&polygon_geojson=1&format=jsonv2
We will get the boundaries coordinates from nominatim, it will generate a json file of the coordinates. 

* Leaflet works better when drawing the boundary:
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);
We could replace the boundary coordinates from nominatim easier.
