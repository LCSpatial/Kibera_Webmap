window.onload = init;

function init (){
    const map = new ol.Map({
        target: 'map',
        controls: ol.control.defaults({ attribution: false, zoom : false, }),
        
        view: new ol.View({
          center: ol.proj.fromLonLat([37.8238, - 0.1965]),
          zoom: 10,
          
        })
      });
      const mapboxbasic = new ol.layer.Tile({
          source: new ol.source.XYZ({
              url:'https://api.mapbox.com/styles/v1/unrunguma/ckhw8jy0914hx19pqe3aaem6o/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidW5ydW5ndW1hIiwiYSI6ImNraDMzdHFybDBsMGozMGxzbnNjODJrdWMifQ.xSO0uCJfC4jND_q5-b2TAA'
              
               
            }),
            visible:true,
            title: 'Mapbox Basic'

      })
      map.addLayer(mapboxbasic)
  
      

 


}
