---
---
// Map
var actionsData = {{ site.data.events | jsonify }};

var actionsMap = L.map("Chaos-Map",{
                    center: [55.0006601,-2.7039512],
                    crs: L.CRS.EPSG3857,
                    zoom: 6,
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
  newMarker.actionData = actionsData["events"][i]
  newMarker.actionData['slug'] = actionsData["events"][i]["browser_url"].replace("https://actionnetwork.org/events/","")
  newMarker.on("click",markerClicked );
  newMarker.addTo(markerCluster);
}
markerCluster.addTo(actionsMap)

function getVisablePoints(bounds){
  var events = [];
  for (i in actionsData["events"]){
    var markerLocation = actionsData["events"][i]["location"]["location"];
    var latlng = L.latLng(markerLocation["latitude"], markerLocation["longitude"]);
    if (bounds.contains(latlng)){
      events.push(actionsData["events"][i])
    }
  }
  return events
}
function updateActionsList(actions){
  var actionslisthtml = "";
  for (i in actions){
    var id = actions[i]["browser_url"].replace("https://actionnetwork.org/events/","") ;
    actionslisthtml = actionslisthtml.concat(`
      <input type="radio" name="Actions-List" value="${ id }" id="${ id }-radio"/>
      <div class="Chaos-Blog-Item Action"  id="${ id }">
        <div class="top ">
          <div class="description">
            <div class="header-line">
              <h3><a target="_blank" href="${actions[i]["browser_url"]}">${ actions[i]["title"] }</a></h3>
            </div>
            <p>${actions[i]["location"]["venue"]}, ${actions[i]["location"]["address_lines"][0]}, ${actions[i]["location"]["locality"]}</p>
          </div>
        </div>
      </div>
    `);
    if (i > 100){
      actionslisthtml = actionslisthtml.concat(`...`);
      break
    }
  }
  // actionslisthtml = actionslisthtml.concat("</ul>");
  $('.Action-List').html(actionslisthtml);
}
function updateActionBox(action){
  $('.Chaos-Map-Overlay .Action').html(`
      <h4><a target="_blank" href="${action["browser_url"]}">${ action["title"] }</a></h4>
      <p>${action["location"]["venue"]}, ${action["location"]["address_lines"][0]}</p>
    `);
}

function mapMoved() {
  var actions = getVisablePoints(actionsMap.getBounds());
  updateActionsList(actions);
  // updateActionBox(actions[0]);
}
function markerClicked(e){
 var lastMarker = $(`.Action-List .Action.first`).attr('id');
 var thisMarker = e.target.actionData.slug ;

 $(`#${ lastMarker }`).removeClass('first');
 $(`#${ thisMarker }`).addClass('first'); 

  // updateActionBox()
}

// Handle events
actionsMap.on("zoomend",function(e){
  mapMoved()
})
actionsMap.on("moveend",function(e){
  mapMoved()
})
$( document ).ready(function(){
  updateActionsList(actionsData["events"]);
})

$('#Postcode-Form-Input').on("keyup", function(e){
  // console.log(this);this.value
  var input = this.value;
  $.get(`https://api.postcodes.io/postcodes/${input}/autocomplete`, function(postcodes){
    var postcode = postcodes.result[0];
    console.log(postcodes);
    console.log(postcodes.result.length);
    $.get(`https://api.postcodes.io/postcodes/${postcode}`, function(data){

      newView = L.latLng(data.result.latitude, data.result.longitude);
      actionsMap.setView(newView);
      if (postcodes.result.length==1){
        actionsMap.setZoom(10);
      }else if (input.length > 1){
        actionsMap.setZoom(8);
      }else if (input.length > 2){
        actionsMap.setZoom(9);
      }else if (input.length > 3){
        actionsMap.setZoom(9.8);
      }else{
        actionsMap.setZoom(6);
      }
    })
  });


})
