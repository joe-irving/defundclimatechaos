// Main Map
// $(document).ready(function(){
//   console.log("ready")
// })
var now = new Date()
var actionsMap;
var actionsMapData;

function httpGetAsync(theUrl, callback) {
  let xmlHttpReq = new XMLHttpRequest();
  xmlHttpReq.onreadystatechange = function () {
    if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200)
      callback(xmlHttpReq.responseText);
  }
  xmlHttpReq.open("GET", theUrl, true); // true for asynchronous
  xmlHttpReq.send(null);
}

function makeMap(mapData, callback){
  actionsMapData = mapData;
  actionsMap = L.map("Chaos-Map",{
      center: [55.0006601,-2.7039512],
      crs: L.CRS.EPSG3857,
      zoom: 6,
      zoomControl: true,
      preferCanvas: false,
  });
  var customMarker = L.icon({
    iconUrl: "/assets/images/fist_pointer_shadow.png",
    shadowUrl: "/assets/images/red_fist_marker.png",
    iconSize: [70,125],
    shadowSize: [125,125],
    iconAnchor:   [35,125], // point of the icon which will correspond to marker's location
    shadowAnchor: [0,125],  // the same for the shadow
    popupAnchor:  [0, -125] // point from which the popup should open relative to the iconAnchor
  })

  var redMarker = new L.Icon({
    iconUrl: '/assets/marker-icon-red.png',
    shadowUrl: '/assets/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
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

  var markerCluster = L.markerClusterGroup({
    maxClusterRadius: 40,
  });

  for (i in mapData){
    action = mapData[i]
    title = `${action['trade_unions_taking_action']} against ${action['employer_name']} about ${action['action_reason']}`
    startDate = new Date(action["start_date"])
    // var markerLocation = action;
    if (action['map_exclude']){
      console.log(`No location for ${title}`)
      continue
    }
    var newMarker = L.marker([action['location']["lat"], action['location']["lng"]],{icon: redMarker});
    newMarker.bindPopup(/*html*/`
        <a href='https://strikemap.co.uk/strikes/${action['id']}' target='_parent'>
        ${title}
        </a>
      `)
    newMarker.actionData = action
    // newMarker.actionData['slug'] = actionsData["id"]
    newMarker.on("click",markerClicked );
    newMarker.addTo(markerCluster);
  }
  markerCluster.addTo(actionsMap)
  callback(actionsMap, mapData)
}



function getVisablePoints(bounds, mapData){
  var events = [];
  for (i in mapData){
    let action = mapData[i];
    let publish;
    var markerLocation = action['location'];
    if (Object.keys(action).includes('location')){
      var latlng = L.latLng(markerLocation["lat"], markerLocation["lng"]);
      if (bounds.contains(latlng)){
        publish = true;
      }
    }else{
      publish=true
    }
    if (publish){
      events.push(action)
    }
  }
  return events
}
function updateActionsList(actions){
  var actionslisthtml = "";
  for (i in actions){
    let action = actions[i];
    var id = action["slug"];
    let url = `https://strikemap.co.uk/strikes/${action['id']}`
    let title = `${action['trade_unions_taking_action']} against ${action['employer_name']} about ${action['action_reason']}`
    // var start = new Date(actions[i]["start_date"]+" UTC+0100");
    // var options = { hour: 'numeric', minute: 'numeric'}
    // var startTime = start.getTime() ? new Intl.DateTimeFormat('en-GB', options).format(start) : "";
    // var options = { weekday: 'short', month: 'short', day: 'numeric'}
    // var startDate = start.getTime() ? new Intl.DateTimeFormat('en-GB', options).format(start) : "";
    actionslisthtml = actionslisthtml.concat(/*html*/`
      <div class="Chaos-Blog-Item Action"  id="${ id }">
        <div class="top">
          <div class="description">
            <div class="header-line">
              <h3><a target="_parent" href="${url}">${ title }</a></h3>
              <a target="_parent" href="${url}"><span class="Chaos-Button">Join</span></a>
            </div>
            <p>${ action['more_information'] }</p>
            <address>${action['action_postcode']}, ${action['constituency']}</address>
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

function mapMoved(actionsMap, mapData) {
  var actions = getVisablePoints(actionsMap.getBounds(), mapData);
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


$( document ).ready(function(){
  $.get('/strikes.json', function(mapData){
    makeMap(mapData, function(actionsMap, mapData){
      // Handle events
      actionsMap.on("zoomend",function(e){
        console.log(this)
        mapMoved(this, mapData)
      })
      actionsMap.on("moveend",function(e){
        mapMoved(this, mapData)
      })
    })
    updateActionsList(mapData);
  })
  
})

$('#Postcode-Form-Input').on("keyup", function(e){
  var input = this.value;
  $.get(`https://api.postcodes.io/postcodes?q=${input}`, function(postcodes){
    var codes = postcodes.result
    // actionsMap.fitBounds([
    //   [codes[0].latitude, codes[0].longitude],
    //   [codes[codes.length - 1].latitude, codes[codes.length - 1].longitude],
    // ])
    actionsMap.setView([codes[0].latitude, codes[0].longitude]);
    if (codes.length==1){
      actionsMap.setZoom(20);
    }else if (input.length > 1){
      actionsMap.setZoom(12);
    }else if (input.length > 2){
      actionsMap.setZoom(9);
    }else if (input.length > 3){
      actionsMap.setZoom(9.8);
    }else{
      actionsMap.setZoom(6);
    }
  });
})