
    // Adds different layer groups
    var printers = L.layerGroup();
    var hotspots = L.layerGroup();
    var laundry = L.layerGroup();
    var buildings = L.layerGroup();

    //var geojsonLayer = new L.GeoJSON.AJAX("scraping/shapes.json");

   /* var district_boundary = new L.geoJson();
district_boundary.addTo(map);

$.ajax({
dataType: "json",
url: "scraping/shapes.json",
success: function(data) {
    $(data.features).each(function(key, data) {
        district_boundary.addData(data);
    });
}
}).error(function() {});*/

    var printerLocs = [['40.34614', '-74.660091', '1901 Hall - Ground Floor', '6'],
 ['40.345863', '-74.656253', '1937 Hall - Ground Floor', '6'],
 ['40.344532', '-74.655534', '1976 Hall - Room 33', '6'],
 ['40.343418', '-74.655867', 'Bloomberg Hall - Room 315', '6'],
 ['40.347546', '-74.654514', 'Campus Club - 2nd Floor', '6'],
 ['40.346659', '-74.653703', 'Center for Jewish Life - 2nd Floor', '6'],
 ['40.34714524', '-74.65927882', 'Edwards Hall - Basement', '6'],
 ['40.349123', '-74.651827', 'Fields Center - Room 308', '6'],
 ['40.349582', '-74.657495', 'Firestone Library - Room B-4-K', '6'],
 ['40.342214', '-74.661144', 'Forbes College - Library, Room 32', '6'],
 ['40.342214', '-74.661144', 'Forbes College - Rooms 21, 22', '6'],
 ['40.350268', '-74.652827', 'Friend Center - Room 016', '6'],
 ['40.350268', '-74.652827', 'Friend Center - Room 017', '6'],
 ['40.34673', '-74.655259', 'Frist Campus Center - 100 Level', '6'],
 ['40.34673', '-74.655259', 'Frist Campus Center - 200 Level', '6'],
 ['40.34673', '-74.655259', 'Frist Campus Center - 300 Level', '6'],
 ['40.348599', '-74.661556', 'Holder Hall - Room B11', '6'],
 ['40.348599', '-74.661556', 'Holder Hall - Room B31', '6'],
 ['40.34491', '-74.656064', 'Julian Street Library', '6'],
 ['40.343615', '-74.658358', 'Lauritzen Hall - Room 409', '6'],
 ['40.333379', '-74.657018', 'Lawrence Apartments - Building 1', '6'],
 ['40.333379', '-74.657018', 'Lawrence Apartments - Building 14', '6'],
 ['40.346679', '-74.659941', 'Little Hall - Basement', '6'],
 ['40.348433', '-74.66236', 'Madison Hall - Room G17', '6'],
 ['40.348307', '-74.656521', 'McCosh Hall - Room B59', '6'],
 ['40.345334', '-74.652546', 'McDonnell Hall - Brush Gallery', '6'],
 ['40.340914', '-74.666387', 'New Graduate College - Entry 33/34', '6'],
 ['40.344305', '-74.658391', 'North Hall - Library', '6'],
 ['40.340903', '-74.665119', 'Old Graduate College - Room B-9-B', '6'],
 ['40.347788', '-74.656319', 'Architecture Library - 2nd Floor', '28'],
 ['40.34673', '-74.655259', 'East Asian Library - Frist Campus Center', '28'],
 ['40.346412', '-74.655946', 'East Asian Library - Jones Hall', '28'],
 ['40.350268', '-74.652827', 'Engineering Library - 2nd Floor', '28'],
 ['40.345701', '-74.652474', 'Fine Hall Library - Basement', '28'],
 ['40.349582', '-74.657495', 'Firestone Library - 1st Floor, Reserve', '28'],
 ['40.349582', '-74.657495', 'Firestone Library - 3rd Floor', '28'],
 ['40.349582', '-74.657495', 'Firestone Library - A Floor', '28'],
 ['40.349582', '-74.657495', 'Firestone Library - A Floor - Reserve', '28'],
 ['40.349582', '-74.657495', 'Firestone Library - B Floor', '28'],
 ['40.349582', '-74.657495', 'Firestone Library - C Floor', '28'],
 ['40.34673', '-74.655259', 'Frist Campus Center - 100 Level', '28'],
 ['40.34624', '-74.6528', 'Lewis Library - 1st Floor', '28'],
 ['40.34624', '-74.6528', 'Lewis Library - 2nd Floor', '28'],
 ['40.34624', '-74.6528', 'Lewis Library - A Floor', '28'],
 ['40.347274', '-74.658045', 'Marquand Library', '28'],
 ['40.347239', '-74.655894', 'Music Library - Woolworth', '28'],
 ['40.349789', '-74.656103', 'Psychology Library', '28'],
 ['40.349194', '-74.653644', 'Stokes Library - Basement', '28'],
 ['40.351069', '-74.654141', '201 Nassau Street', '92'],
 ['40.34365', '-74.657332', '1981 Hall - Room B10', '29'],
 ['40.347445', '-74.661497', 'Blair Hall - Entry 11', '29'],
 ['40.346367', '-74.657862', 'Brown Hall - Basement', '29'],
 ['40.34678', '-74.658659', 'Dod Hall - Lower Level', '29'],
 ['40.344653', '-74.658267', 'Fisher Hall Dorm - Room 213', '29'],
 ['40.346321', '-74.660941', 'Foulke Hall - Basement', '29'],
 ['40.346014', '-74.655508', 'McCosh Health Center - Solarium', '29'],
 ['40.345359', '-74.659666', 'Pyne Hall - Room 231', '29'],
 ['40.344386', '-74.654874', 'Scully Hall - Room 269A', '29'],
 ['40.344386', '-74.654874', 'Scully Hall - Room 309', '29'],
 ['40.344653', '-74.659248', 'Spelman Halls - Laundry Room', '29'],
 ['40.34745173', '-74.66012844', 'Witherspoon Hall - Room 109', '29'],
 ['40.34570028', '-74.65758615', 'Wright Hall - 3rd Floor', '29'],
 ['40.344719', '-74.656574', 'Wu Hall - Mellon Library', '29'],
 ['40.34673', '-74.655259', 'Frist Campus Center - 100 Level', '30'],
 ['40.34673', '-74.655259', 'Frist Campus Center - B Level', '30']];

 hotspotLocs = [['40.35063', '-74.654932', '1st Floor (near elevator)'],
 ['40.342738', '-74.657116', 'Communication Center window'],
 ['40.348357', '-74.648976', 'Next to elevator, main lobby'],
 ['40.349043', '-74.6586', 'Chancellor Green Cafe'],
 ['40.350182', '-74.652298', 'South Lobby, near stairwell'],
 ['40.345591', '-74.658685', 'Lobby, west wall'],
 ['40.350484', '-74.651539', 'On column next to cafe entrance'],
 ['40.349582', '-74.657495', 'Firestone Library Front Desk'],
 ['40.342027',
  '-74.661065',
  '1) North wing, main lobby 2) Dining Hall, card checker station'],
 ['40.344018', '-74.65084', 'Frick Chemistry CaFe'],
 ['40.34673',
  '-74.655259',
  '1) 100 Level mailboxes (x2) 2) Southwest entrance, A Level'],
 ['40.340903', '-74.665119', 'Procter Hall, card checker station'],
 ['40.345797',
  '-74.65456',
  '1) Near west end elevator on the first floor 2) Near west end elevator on the third floor'],
 ['40.344366', '-74.653435', 'Genomics Cafe'],
 ['40.343413', '-74.6488', 'Lobby, east wall'],
 ['40.34495', '-74.651918', '1st Floor'],
 ['40.34624',
  '-74.6528',
  'Lower floor in the common lobby area across from internal library main entrance'],
 ['40.347697', '-74.661595', 'Witherspoon Hall, exterior near entry 4'],
 ['40.347274', '-74.658045', 'Near Marquand Library'],
 ['40.345611', '-74.653978', 'Lower Level (near maintenance shop)'],
 ['40.343333',
  '-74.658934',
  '1) Housing Office, Floor 5 2) TigerCard Office, Floor A'],
 ['40.348373', '-74.654762', 'Woodrow Wilson Cafe'],
 ['40.348528', '-74.661928', 'Madison Hall, card checker station (x2)'],
 ['40.344058', '-74.657933', 'Community Hall, Gallery'],
 ['40.34491', '-74.656064', 'Wilcox Hall, card checker station'],
 ['40.34745173', '-74.66012844', 'Exterior, near Entry 4'],
 ['40.34570028', '-74.65758615', 'North wall, exterior']];

 laundryLocs = [['40.344719', '-74.65694', '1915 Hall - Entry 6'],
 ['40.345162', '-74.655828', '1927/Clapp Hall - Basement'],
 ['40.344532', '-74.655534', '1976 Hall - Room 032'],
 ['40.34365', '-74.657332', '1981 Hall - Room F312'],
 ['40.34365', '-74.657332', '1981 Hall - Room F403'],
 ['40.34365', '-74.657332', '1981 Hall - Room FB11'],
 ['40.347445', '-74.661497', 'Blair Hall - Basement, entry 10'],
 ['40.343418', '-74.655867', 'Bloomberg Hall - Room 041'],
 ['40.343418', '-74.655867', 'Bloomberg Hall - Room 269'],
 ['40.343418', '-74.655867', 'Bloomberg Hall - Room 332'],
 ['40.343418', '-74.655867', 'Bloomberg Hall - Room 460'],
 ['40.347405', '-74.660712', 'Buyers Hall - Basement'],
 ['40.34714524', '-74.65927882', 'Edwards Hall'],
 ['40.345827', '-74.656613', 'Feinberg Hall - Basement'],
 ['40.344653', '-74.658267', 'Fisher Hall - Room A119'],
 ['40.341498', '-74.660568', 'Forbes Annex - Basement'],
 ['40.342214', '-74.661144', 'Forbes Main - Basement'],
 ['40.34811', '-74.66219', 'Hamilton Hall - Basement'],
 ['40.348599', '-74.661556', 'Holder Hall - Basement, entry 5'],
 ['40.347803', '-74.662118', 'Joline Hall - Entry 3'],
 ['40.346679', '-74.659941', 'Little Hall - Basement, entry 1'],
 ['40.344305', '-74.658391', 'North Hall - Room C205'],
 ['40.344305', '-74.658391', 'North Hall - Room C305'],
 ['40.344305', '-74.658391', 'North Hall - Room C407'],
 ['40.343449', '-74.65792', 'South Baker Hall - Room S201'],
 ['40.343449', '-74.65792', 'South Baker Hall - Room S301'],
 ['40.343449', '-74.65792', 'South Baker Hall - Room S401'],
 ['40.34745173', '-74.66012844', 'Witherspoon Hall - Basement'],
 ['40.344255', '-74.656129', 'Yoseloff Hall - Room 005']];

     var printerIcon = L.icon({
       iconUrl: "{% static 'classes/images/printer.png' %}",
       iconSize:     [28, 28], // size of the icon
       iconAnchor:   [14, 14], // point of the icon which will correspond to marker's location
       popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
     });
     var laundryIcon = L.icon({
       iconUrl: "{% static 'classes/images/washing-machine.png' %}",
       iconSize:     [28, 28], // size of the icon
       iconAnchor:   [14, 14], // point of the icon which will correspond to marker's location
       popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
     });

     var hotspotIcon = L.icon({
       iconUrl: "{% static 'classes/images/hotspot.png' %}",
       iconSize:     [26, 26], // size of the icon
       iconAnchor:   [13, 13], // point of the icon which will correspond to marker's location
       popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
     });

     var savedIcon = L.icon({
       iconUrl: "{% static 'classes/images/marker-icon-orange.png' %}",
       iconAnchor:   [12, 41], // point of the icon which will correspond to marker's location
       popupAnchor:  [0, -35] // point from which the popup should open relative to the iconAnchor
     });

     var myIcon = L.icon({
       iconUrl: "{% static 'classes/images/youarehere.png' %}",
       iconSize:     [35, 35], // size of the icon
       iconAnchor:   [18, 18], // point of the icon which will correspond to marker's location
       popupAnchor:  [0, -18] // point from which the popup should open relative to the iconAnchor
     });

    for (var i = 0; i < printerLocs.length; i++) {
  //if (hi[i][3] == '6' || hi[i][3] == '29')
    if (printerLocs[i][3] == '6') L.marker([printerLocs[i][0], printerLocs[i][1]], {icon: printerIcon}).bindPopup(printerLocs[i][2]).addTo(printers);
    if (printerLocs[i][3] == '29') L.marker([printerLocs[i][0], printerLocs[i][1]], {icon: printerIcon}).bindPopup(printerLocs[i][2]).addTo(printers);
    if (printerLocs[i][3] == '28') L.marker([printerLocs[i][0], printerLocs[i][1]], {icon: printerIcon}).bindPopup(printerLocs[i][2]).addTo(printers);
 }

 for (var i = 0; i < laundryLocs.length; i++) {
  //if (hi[i][3] == '6' || hi[i][3] == '29')
    L.marker([laundryLocs[i][0], laundryLocs[i][1]], {title: laundryLocs[i][2], icon: laundryIcon}).bindPopup(laundryLocs[i][2]).addTo(laundry);
 }

 for (var i = 0; i < hotspotLocs.length; i++) {
  //if (hi[i][3] == '6' || hi[i][3] == '29')
    L.marker([hotspotLocs[i][0], hotspotLocs[i][1]], {title: hotspotLocs[i][2], icon: hotspotIcon}).bindPopup(hotspotLocs[i][2]).addTo(hotspots);
 }

    // URLS of maps for different layers (note: need to add attributes)
    var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    mbUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    mbUrl2 = 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';

    // Different layers
    var regular   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr}),
    satellite  = L.tileLayer(mbUrl2, {id: 'mapbox.satellite',   attribution: mbAttr});

    // Initializes the map
    var map = L.map('map', {
      center: [40.346, -74.653],
      zoom: 16,
      layers: [regular]
    });

    /*$('.pure-button').on('click', function(){
mymap.locate({setView: true, maxZoom: 15});
});*/

    map.locate({setView: true,watch: true, maxZoom: 16});
    function onLocationFound(e) {
    var radius = e.accuracy / 2;
    L.marker(e.latlng, {icon: myIcon}).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();
    L.circle(e.latlng, radius).addTo(map);
    }
    map.on('locationfound', onLocationFound);

    // Bookmarks
    //var control = new L.Control.Bookmarks().addTo(map);

    // Our different layers
    var baseLayers = {
      "Regular": regular,
    "Satellite": satellite
    };

    // Our overlays
    var overlays = {
      "Printers": printers,
      "Laundry": laundry,
    "Hotspots": hotspots,
    "Buildings": buildings
    };



    // Adds overlays and layers to map
    L.control.layers(baseLayers, overlays, {position: 'topleft'}).addTo(map);

    // Limits zoom (we could get rid of this)
    map.options.minZoom = 14;
    map.options.maxZoom = 18;

    function getColor(d) {
  if (d == 'dormitory') return '#800026';
  else if (d == 'university') return '#FEB42C';
  else return '#FED976';
  /*return d > 1000 ? '#800026' :
      d > 500  ? '#BD0026' :
      d > 200  ? '#E31A1C' :
      d > 100  ? '#FC4E2A' :
      d > 50   ? '#FD8D3C' :
      d > 20   ? '#FEB24C' :
      d > 10   ? '#FED976' :
            '#FFEDA0';*/
}


    function style(feature) {
  return {
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7,
    fillColor: getColor(feature.properties.building)
    //fillColor: '#FED976'
  };
}

      function highlightFeature(e) {
  var layer = e.target;

  layer.setStyle({
    weight: 5,
    color: '#666',
    dashArray: '',
    fillOpacity: 0.7
  });

  //if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
  //  layer.bringToFront();
  //}

  //info.update(layer.feature.properties);
}

function onEachFeature(feature, layer) {
  layer.on({
    mouseover: highlightFeature,//,
    mouseout: resetHighlight,
    click: zoomToFeature
  });
}

function zoomToFeature(e) {
  map.fitBounds(e.target.getBounds());
  e.bindPopup("You are within meters from this point");//.openPopup();
}

function resetHighlight(e) {
  geojson.resetStyle(e.target);
  //info.update();
}

    var geojson;
  geojson = L.geoJson(buildingData, {style: style, onEachFeature: onEachFeature}).addTo(buildings);

  var legend = L.control({position: 'bottomright'});

legend.onAdd = function (buildings) {

  var div = L.DomUtil.create('div', 'info legend'),
    grades = ['dormitory', 'university', 'other'],
    labels = [],
    from, to;

  for (var i = 0; i < grades.length; i++) {
    from = grades[i];
    //to = grades[i + 1];

    labels.push(
      '<i style="background:' + getColor(from) + '"></i> ' +
      from + (from ? '&ndash;' + from : '+'));
  }

  div.innerHTML = labels.join('<br>');
  return div;
};

legend.addTo(buildings);

    // Displays current user location and accuracy
    /*function onLocationFound(e) {
      var radius = e.accuracy / 2;

      L.marker(e.latlng).addTo(map).bindPopup("You are within " + radius + " meters from this point").openPopup();

      L.circle(e.latlng, radius).addTo(map);
    }
    map.on('locationfound', onLocationFound);*/

//     // Displays coordinates upon mouse click
//     var popup = L.popup();
//     function onMapClick(e) {
//       popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(map);
//     }
//     map.on('click', onMapClick);

lonlats = {};
var offset = 0.0001;
{% if saved_buildings %}
   {% for s in saved_buildings %}
     var key = "{{s.lon}} {{s.lat}}"
     var text = "<div>{{s}}</div>"+
     "<form method=\"GET\" action=\"{% url 'classes:index' %}\">" +"<br>"+
         "<button class=\"btn btn-remove\" name=\"r\" value=\"{{s.pk}}b\" type=\"submit\">" +
             "Remove" +
         "</button>" +
     "</form>";
     if (key in lonlats) {
       lonlats[key] += "<br>"+text;
     } else {
       lonlats[key] = text;
     }
  {% endfor %}
{% endif %}
{% if saved_courses %}
   {% for s in saved_courses %}
     var key = "{{s.building_lon}} {{s.building_lat}}";
     var text = "<div>{{s}}</div>"+
     "<form method=\"GET\" action=\"{% url 'classes:index' %}\">" +"<br>"+
         "<button class=\"btn btn-remove\" name=\"r\" value=\"{{s.pk}}c\" type=\"submit\">" +
             "Remove" +
         "</button>" +
     "</form>";
     if (key in lonlats) {
       lonlats[key] += "<br>"+text;
     } else {
       lonlats[key] = text;
     }
    {% endfor %}
{% endif %}

if (!jQuery.isEmptyObject(lonlats)) {
  for (var key in lonlats) {
    var tokens = key.split(" ");
    var lon = parseFloat(tokens[0])-offset;
    var lat = tokens[1];
    L.marker([lat, lon], {icon: savedIcon}).addTo(map).bindPopup(lonlats[key]);
  }
}

    // Searched marker
    {% if building %}
        var lon = "{{building.lon}}";
        var lat = "{{building.lat}}";
        var id = "{{building.pk}}";
        var type = "b";
        var name = "{{building}}";
    {% elif c %}
        var lon = "{{c.building_lon}}";
        var lat = "{{c.building_lat}}";
        var id = "{{c.pk}}";
        var type = "c";
        // modified this line to add parameters
        var name = "{{c}} {{c.building}} {{c.room}} {{c.day}} {{c.starttime}}-{{c.endtime}}";
    {% endif %}

    {% if building or c %}
      var search = "<div>" + name + "</div>" +
      "<form method=\"GET\" action=\"{% url 'classes:index' %}\">" +"<br>"+
          "<button class=\"btn btn-success\" name=\"s\" value=\""+id+type+"\" type=\"submit\">" +
              "Save" +
          "</button>" +
      "</form>";
       L.marker([lat, parseFloat(lon)+offset]).addTo(map).bindPopup(search).openPopup();
    {% endif %}