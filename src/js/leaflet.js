var map = L.map(
  "map",
  {
      center: [-1.312081, 36.790501],        
      crs: L.CRS.EPSG3857,
      zoom: 14,
      zoomControl: true,
      preferCanvas: false,
  }
);

var tile_layer_01 = L.tileLayer(
  "https://api.mapbox.com/styles/v1/unrunguma/ckhw8jy0914hx19pqe3aaem6o/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidW5ydW5ndW1hIiwiYSI6ImNraDMzdHFybDBsMGozMGxzbnNjODJrdWMifQ.xSO0uCJfC4jND_q5-b2TAA",
  {"attribution": "Mapbox Streets", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
).addTo(map);
var tile_layer_02 = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {"attribution": "Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://www.openstreetmap.org/copyright\"\u003eODbL\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
);
var tile_layer_03 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

//Shapefiles
//Kibera Boundary
function geo_json_9be2ada2fad1efdc87f03ebb0400467f_styler(feature) {
  switch(feature.id) {
      default:
          return {"color": "red", "dashArray": "5, 3", "fillColor": "none", "weight": 2};
  }
}

function geo_json_9be2ada2fad1efdc87f03ebb0400467f_onEachFeature(feature, layer) {
  layer.on({
  });
};
var geo_json_9be2ada2fad1efdc87f03ebb0400467f = L.geoJson(null, {
      onEachFeature: geo_json_9be2ada2fad1efdc87f03ebb0400467f_onEachFeature,
  
      style: geo_json_9be2ada2fad1efdc87f03ebb0400467f_styler,
});

function geo_json_9be2ada2fad1efdc87f03ebb0400467f_add (data) {
  geo_json_9be2ada2fad1efdc87f03ebb0400467f
      .addData(data)
      .addTo(map);
}
  geo_json_9be2ada2fad1efdc87f03ebb0400467f_add({"bbox": [36.7718085200525, -1.31919417190885, 36.8091874190247, -1.30576788184075], "features": [{"bbox": [36.7718085200525, -1.31919417190885, 36.8091874190247, -1.30576788184075], "geometry": {"coordinates": [[[[36.791634338373, -1.30915364873601, 0.0], [36.7910324671326, -1.30856091533882, 0.0], [36.7901341518485, -1.30701621552452, 0.0], [36.7892358365644, -1.30658513633693, 0.0], [36.7867025874632, -1.30607322970562, 0.0], [36.7851125694103, -1.30576788184075, 0.0], [36.7837830627898, -1.30632469262526, 0.0], [36.7824535561693, -1.30718685101583, 0.0], [36.7808186223522, -1.30902791742104, 0.0], [36.7788423287271, -1.31117432971831, 0.0], [36.7775128221066, -1.31177604329575, 0.0], [36.7767402709623, -1.31143477292629, 0.0], [36.7759317872066, -1.31112942571416, 0.0], [36.7750694045338, -1.31117432971831, 0.0], [36.7741261734855, -1.3105726159962, 0.0], [36.7733536223412, -1.3095847274823, 0.0], [36.7726709027252, -1.3079592009893, 0.0], [36.772625986961, -1.30795920098931, 0.0], [36.7723205597644, -1.30782448880172, 0.0], [36.7718983515809, -1.30817474047439, 0.0], [36.7718085200525, -1.309503900223, 0.0], [36.7719342841923, -1.31031217269855, 0.0], [36.773138026673, -1.31228794876268, 0.0], [36.7745573648219, -1.31349137523704, 0.0], [36.77562636001, -1.31366201028724, 0.0], [36.7751951686736, -1.31435353116089, 0.0], [36.7750694045338, -1.31499116712139, 0.0], [36.7753748317304, -1.31554797585515, 0.0], [36.7756712757742, -1.3163652271586, 0.0], [36.775455680106, -1.31730820909897, 0.0], [36.7768301024907, -1.31782011343145, 0.0], [36.7797496271641, -1.31834099843372, 0.0], [36.7824086404051, -1.3179997289618, 0.0], [36.7846813780739, -1.31636522715862, 0.0], [36.7862264803626, -1.31589822644657, 0.0], [36.7881578582235, -1.31546714878861, 0.0], [36.7890561735076, -1.31456008930675, 0.0], [36.7900892360843, -1.31503607105613, 0.0], [36.7901790676127, -1.31602395741609, 0.0], [36.7903946632809, -1.31649095810458, 0.0], [36.7913738269406, -1.31667057373073, 0.0], [36.791975698181, -1.31778419032382, 0.0], [36.7932692721901, -1.31838590230814, 0.0], [36.7947245429504, -1.31902353723722, 0.0], [36.7946796271862, -1.31919417190885, 0.0], [36.7969164322436, -1.31894271028343, 0.0], [36.7987130628119, -1.31894271028342, 0.0], [36.7994047655806, -1.31868226785884, 0.0], [36.8000874851966, -1.31756865166728, 0.0], [36.8010666488562, -1.31626643855377, 0.0], [36.8019110652233, -1.31642809263241, 0.0], [36.8028812457302, -1.31659872748185, 0.0], [36.8034112517478, -1.31651790044934, 0.0], [36.8042916007262, -1.31698490104532, 0.0], [36.8054324611371, -1.31685917012427, 0.0], [36.8062678943513, -1.31730820909897, 0.0], [36.8091874190247, -1.31492830161143, 0.0], [36.8081184238366, -1.31477562822341, 0.0], [36.8074267210678, -1.31420085773767, 0.0], [36.806851799286, -1.31342850968927, 0.0], [36.8062229785871, -1.31213527521332, 0.0], [36.805773820945, -1.3137069142459, 0.0], [36.8052168654689, -1.31480257058667, 0.0], [36.8046149942285, -1.31544020643248, 0.0], [36.8032675213023, -1.31535937936245, 0.0], [36.8022344587256, -1.31491034003685, 0.0], [36.799099338384, -1.31190177447275, 0.0], [36.7947245429504, -1.3097553627989, 0.0], [36.7935208004697, -1.30953982344965, 0.0], [36.792712316714, -1.30924345681423, 0.0], [36.7924518052815, -1.3093332648893, 0.0], [36.791634338373, -1.30915364873601, 0.0]]]], "type": "MultiPolygon"}, "id": "0", "properties": {}, "type": "Feature"}], "type": "FeatureCollection"});




// Define an icon called cssIcon
var cssIcon = L.divIcon({
  // Specify a class name we can refer to in CSS.
  className: 'css-icon',
  html: '<div class="gps_ring"></div>'
  // Set marker width and height
  ,iconSize: [22,22]
  ,iconAnchor: [11,11]
});

// specify popup options 
var customOptions =
    {

    'maxWidth': '271',
    'className' : 'popupCustom'
    }

// Create three markers and set their icons to cssIcon
L.marker([-1.312081, 36.790501], {icon: cssIcon}).addTo(map);

var marker = L.marker([-1.312081, 36.790501], {})
.addTo(map)
.bindPopup("<h4><u><b>Kibera</b></u></h4><i>Kibera is a division of Nairobi Area, Kenya, and neighbourhood of the city of Nairobi, 6.6 kilometres (4.1 mi) from the city centre. Kibera is the largest slum in Nairobi, and the largest urban slum in Africa.</i><br> <a href='https://en.wikipedia.org/wiki/Kibera' target='_blank' rel='noopener noreferrer'>Visit Wikipedia</a>", {
  style:"text-align: justify;"
})
.openPopup();

//Layer control
var layer_control_fd8d313b94934d669ff6899766eff936 = {
  base_layers : {
      "Mapbox" : tile_layer_01,
      "OSM" : tile_layer_02,
      "Imagery" : tile_layer_03,
  },
  overlays :  {
      "Kibera" : marker,
      "Kibera Boundary" : geo_json_9be2ada2fad1efdc87f03ebb0400467f,
      //"Turkana West" : geo_json_7801366dd3a842f7973b4b5fdc20b53c,
      //"Road" : geo_json_52b27921cacb433d866bda8b25343d0f,
      //"Urban Centers" : feature_group_0bdb65134983444e953e764221ed1711,
      //"Trading Centers" : feature_group_3106d5a0ca4248d7b6a4a0a6039c89e9,
  },
};
L.control.layers(
  layer_control_fd8d313b94934d669ff6899766eff936.base_layers,
  layer_control_fd8d313b94934d669ff6899766eff936.overlays,
  {"autoZIndex": true, "collapsed": false, "position": "topright"}
).addTo(map);

//Mini map
var tile_layer_0b23588f5d354669a6417b0119aedda9 = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {"attribution": "Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://www.openstreetmap.org/copyright\"\u003eODbL\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
);
var mini_map_50257087e84c42d3b180ce494e188e20 = new L.Control.MiniMap(
  tile_layer_0b23588f5d354669a6417b0119aedda9,
  {"autoToggleDisplay": false, "centerFixed": false, "collapsedHeight": 25, "collapsedWidth": 25, "height": 150, "minimized": false, "position": "bottomleft", "toggleDisplay": false, "width": 150, "zoomAnimation": false, "zoomLevelOffset": -5}
);
map.addControl(mini_map_50257087e84c42d3b180ce494e188e20);

//Fullscreen
L.control.fullscreen(
  {"forceSeparateButton": true, "position": "bottomright", "title": "Expand me", "titleCancel": "Exit me"}
).addTo(map);
