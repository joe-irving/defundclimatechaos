---
---
// Map
var actionsData = {{ site.data.events | jsonify }};
var actionsMap = L.map("Chaos-Map",{
                    center: [0, 0],
                    crs: L.CRS.EPSG3857,
                    zoom: 1,
                    zoomControl: true,
                    preferCanvas: false,
                });
var titleLayer = L.tileLayer(
  "https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg",{
    "attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.",
    "detectRetina": false,
    "maxNativeZoom": 18,
    "maxZoom": 18,
    "minZoom": 0,
    "noWrap": false,
    "opacity": 1,
    "subdomains": "abc",
    "tms": false
  }
).addTo(actionsMap);

var markerCluster = L.markerClusterGroup();

for (i in actionsData["events"]){
  var markerLocation = actionsData["events"][i]["location"]["location"];
  var newMarker = L.marker([markerLocation["latitude"], markerLocation["longitude"]],{});
  newMarker.addTo(markerCluster)
}
markerCluster.addTo(actionsMap)
