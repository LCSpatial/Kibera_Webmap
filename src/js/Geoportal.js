window.onload = init;

function init (){
    const map = new ol.Map({
        target: 'geomap',
        controls: ol.control.defaults({ attribution: false, zoom : false}),
        
        view: new ol.View({
          center: ol.proj.fromLonLat([36.790501, -1.312081]),
          zoom: 15,
          
        })
      })

      //Basemaps
    const Mapbox = new ol.layer.Tile({
        controls: ol.control.defaults({ attribution: false, zoom : false}),
        source: new ol.source.XYZ({
            url:'https://api.mapbox.com/styles/v1/unrunguma/ckhw8jy0914hx19pqe3aaem6o/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidW5ydW5ndW1hIiwiYSI6ImNraDMzdHFybDBsMGozMGxzbnNjODJrdWMifQ.xSO0uCJfC4jND_q5-b2TAA'
            }),
          visible:true,
          title: 'Mapbox Basic'
    })

    
    const EsriImagery = new ol.layer.Tile({
        controls: ol.control.defaults({ attribution: false, zoom : false}),
        source: new ol.source.XYZ({
            url:'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'             
          }),
        visible:false,
        title: 'EsriImagery'
    })
    const OSM = new ol.layer.Tile({
        controls: ol.control.defaults({ attribution: false, zoom : false}),
        source: new ol.source.XYZ({
            url:'https://tile.openstreetmap.org/{z}/{x}/{y}.png'           
          }),
        visible:false,
        title: 'OSM'
    });

    //BaseMap Layer Group
    const baseLayerGroup = new ol.layer.Group({
        layers:[
            Mapbox,EsriImagery,OSM
        ]
    })
    map.addLayer(baseLayerGroup)


    
    //Add vectors
    //Settlement Boundary


//Zoom out
      const view = map.getView();
      const zoom = view.getZoom();
      const center = view.getCenter();
      const rotation = view.getRotation();
      document.getElementById('zoom-out').onclick = function() {
          const view = map.getView();
          const zoom = view.getZoom();
          
          map.getView().animate({
            zoom: map.getView().getZoom() - 1,
            duration: 400
          })
      };
      //zoom in
      document.getElementById('zoom-in').onclick = function() {
          const view = map.getView();
          const zoom = view.getZoom();
          //view.setZoom(zoom + 1);
          map.getView().animate({
            zoom: map.getView().getZoom() + 1,
            duration: 400
          })
      };
      //zoom to kenya
      document.getElementById('zoom-panto').onclick = function() {
          const view = map.getView();
          const wh = ol.proj.fromLonLat([37.9062, -0.0236]);
          
          view.setCenter(wh);
          view.setZoom(+ 6);

          
      };
      document.getElementById('zoom-restore').onclick = function() {
          view.setCenter(center);
          view.setRotation(rotation);
          view.setZoom(zoom);
      };


      const KBfillStyle = new ol.style.Fill({
        color:[0,0,0, 0]
    })

    const KBstrokeStyle= new ol.style.Stroke({
        color:[255,0,0, 1],
        width: 2,
        lineDash: [10, 5]
    })

    const circleStyle= new ol.style.Circle({
        color:[255,209,0, 1],
        width: 1.2
    })

    const Kibera_Boundary = new ol.layer.VectorImage({
        source:new ol.source.Vector({
            url:'Spatial_Data/geojson/Kibera_Settlement_Boundary.geojson',
            format: new ol.format.GeoJSON()
        }),
        visible:true,
        title:'Kibera Boundary',
        style: new ol.style.Style({
            fill:KBfillStyle,
            stroke:KBstrokeStyle
            
        })
    })

    map.addLayer(Kibera_Boundary)

    // Add event listeners to the checkboxes to toggle layer visibility
    const Kibera_BoundaryCheckbox = document.getElementById('Kibera_Boundary');
    Kibera_BoundaryCheckbox.addEventListener('change', function() {
        Kibera_Boundary.setVisible(Kibera_BoundaryCheckbox.checked);
    });

     // Create an overlay element for the tooltip
    const tooltipElement = document.createElement('div');
    tooltipElement.className = 'tooltip';
    const tooltip = new ol.Overlay({
    element: tooltipElement,
    offset: [10, 0], // Offset from the cursor
    positioning: 'bottom-left' // Positioning of the tooltip relative to the feature
    });
    map.addOverlay(tooltip);

    //Flood_Lights
    const Kibera_Flood_Lights = new ol.layer.VectorImage({
        source:new ol.source.Vector({
            url:'Spatial_Data/K_GeoJson/Flood_Lights.geojson',
            format: new ol.format.GeoJSON()
        }),
        visible:false,
        title:'Kibera Flood Lights'            
        })
        
 
    
    const KFLpointStyle =  new ol.style.Style({
        image: new ol.style.Icon({
            //size: [2000, 00],
            anchor: [0, 0],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            src: 'Icons/SVG/street-light-svgrepo-com.svg',
            opacity: 0.9  // Custom opacity value between 0 (transparent) and 1 (opaque)
            
       
        })
      });

      
      Kibera_Flood_Lights.setStyle(KFLpointStyle);
      
      map.addLayer(Kibera_Flood_Lights)
    // Add event listeners to the checkboxes to toggle layer visibility
    const Kibera_Flood_LightsCheckbox = document.getElementById('Kibera_Flood_Lights');
    Kibera_Flood_LightsCheckbox.addEventListener('change', function() {
        Kibera_Flood_Lights.setVisible(Kibera_Flood_LightsCheckbox.checked);
    });



      //Police Stations
      const Kibera_Police_Stations = new ol.layer.VectorImage({
        source:new ol.source.Vector({
            url:'Spatial_Data/K_GeoJson/Police_Stations.geojson',
            format: new ol.format.GeoJSON()
        }),
        visible:true,
        title:'Kibera Police Stations'            
        })
        
 
    
    const KPSpointStyle = new ol.style.Style({
        image: new ol.style.Icon({
            //size: [2000, 00],
            anchor: [0, 0],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            src: 'Icons/SVG/police.svg',
            opacity: 0.9  // Custom opacity value between 0 (transparent) and 1 (opaque)
            
       
        })
      });
      
      Kibera_Police_Stations.setStyle(KPSpointStyle);
      
      map.addLayer(Kibera_Police_Stations)

    // Add event listeners to the checkboxes to toggle layer visibility
    const Kibera_Police_StationsCheckbox = document.getElementById('Kibera_Police_Stations');
    Kibera_Police_StationsCheckbox.addEventListener('change', function() {
        Kibera_Police_Stations.setVisible(Kibera_Police_StationsCheckbox.checked);
    });

      //Waste Points
      const Kibera_Waste_Points = new ol.layer.VectorImage({
        source:new ol.source.Vector({
            url:'Spatial_Data/K_GeoJson/Waste_Points.geojson',
            format: new ol.format.GeoJSON()
        }),
        visible:false,
        title:'Kibera Waste Points'            
        })
        
 
    
    const KWsPpointStyle = new ol.style.Style({
        image: new ol.style.Icon({
            //size: [2000, 00],
            anchor: [0, 0],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            src: 'Icons/SVG/waste-svgrepo-com.svg',
            opacity: 0.9  // Custom opacity value between 0 (transparent) and 1 (opaque)
            
       
        })
      });
      
      Kibera_Waste_Points.setStyle(KWsPpointStyle);
      
      map.addLayer(Kibera_Waste_Points)
      
    // Add event listeners to the checkboxes to toggle layer visibility
    const Kibera_Waste_PointsCheckbox = document.getElementById('Kibera_Waste_Points');
    Kibera_Waste_PointsCheckbox.addEventListener('change', function() {
        Kibera_Waste_Points.setVisible(Kibera_Waste_PointsCheckbox.checked);
    });


    //Health
    const Kibera_Health = new ol.layer.VectorImage({
        source:new ol.source.Vector({
            url:'Spatial_Data/K_GeoJson/Health.geojson',
            format: new ol.format.GeoJSON()
        }),
        visible:true,
        title:'Kibera Health'            
        })
        
 
    
      const KHpointStyle = new ol.style.Style({
        image: new ol.style.Icon({
            size: [1500, 1500],
            anchor: [0, 0],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            src: 'Icons/SVG/Health.svg',
            opacity: 0.9  // Custom opacity value between 0 (transparent) and 1 (opaque)
            
       
        })
      });
      
      Kibera_Health.setStyle(KHpointStyle);
      
      
      map.addLayer(Kibera_Health)

      // Add event listeners to the checkboxes to toggle layer visibility
    const Kibera_HealthCheckbox = document.getElementById('Kibera_Health');
    Kibera_HealthCheckbox.addEventListener('change', function() {
        Kibera_Health.setVisible(Kibera_HealthCheckbox.checked);
    });

      //Education
      const Kibera_Education = new ol.layer.VectorImage({
        source:new ol.source.Vector({
            url:'Spatial_Data/K_GeoJson/Education.geojson',
            format: new ol.format.GeoJSON()
        }),
        visible:true,
        title:'Kibera Education'            
        })
        
 
    
    const KEpointStyle = new ol.style.Style({
        image: new ol.style.Icon({
            //size: [2000, 00],
            anchor: [0, 0],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            src: 'Icons/SVG/school-svgrepo-com.svg',
            opacity: 0.9  // Custom opacity value between 0 (transparent) and 1 (opaque)
            
       
        })
      });
      
      Kibera_Education.setStyle(KEpointStyle);
      
      map.addLayer(Kibera_Education)

    // Add event listeners to the checkboxes to toggle layer visibility
    const Kibera_EducationCheckbox = document.getElementById('Kibera_Education');
    Kibera_EducationCheckbox.addEventListener('change', function() {
        Kibera_Education.setVisible(Kibera_EducationCheckbox.checked);
    });

      //Markets
      const Kibera_Markets = new ol.layer.VectorImage({
        source:new ol.source.Vector({
            url:'Spatial_Data/K_GeoJson/Markets.geojson',
            format: new ol.format.GeoJSON()
        }),
        visible:true,
        title:'Kibera Markets'            
        })
        
 
    
    const KMpointStyle = new ol.style.Style({
        image: new ol.style.Icon({
            //size: [2000, 00],
            anchor: [0, 0],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            src: 'Icons/SVG/market-purchase-svgrepo-com.svg',
            opacity: 0.9  // Custom opacity value between 0 (transparent) and 1 (opaque)
            
       
        })
      });
      
      Kibera_Markets.setStyle(KMpointStyle);
      
      map.addLayer(Kibera_Markets)

    // Add event listeners to the checkboxes to toggle layer visibility
    const Kibera_MarketsCheckbox = document.getElementById('Kibera_Markets');
    Kibera_MarketsCheckbox.addEventListener('change', function() {
        Kibera_Markets.setVisible(Kibera_MarketsCheckbox.checked);
    });

      //Water Points
      const Kibera_Water_Points = new ol.layer.VectorImage({
        source:new ol.source.Vector({
            url:'Spatial_Data/K_GeoJson/Water_Points.geojson',
            format: new ol.format.GeoJSON()
        }),
        visible:false,
        title:'Kibera Water Points'            
        })
        
 
    
    const KWtPpointStyle = new ol.style.Style({
        image: new ol.style.Circle({
          radius: 3.5,  // Adjust the radius of the circle
          fill: new ol.style.Fill({
            color: '#1E90FF'  // Set the fill color to green
          }),
          stroke: new ol.style.Stroke({
            color: 'white',  // Set the stroke color to white
            width: 0.9  // Adjust the width of the stroke
          })
          
        })
      });
      
      Kibera_Water_Points.setStyle(KWtPpointStyle);
      
      map.addLayer(Kibera_Water_Points)

    // Add event listeners to the checkboxes to toggle layer visibility
    const Kibera_Water_PointsCheckbox = document.getElementById('Kibera_Water_Points');
    Kibera_Water_PointsCheckbox.addEventListener('change', function() {
        Kibera_Water_Points.setVisible(Kibera_Water_PointsCheckbox.checked);
    })


    //Hand_Washing
    const Kibera_Hand_Washing = new ol.layer.VectorImage({
        source:new ol.source.Vector({
            url:'Spatial_Data/K_GeoJson/Hand_Washing.geojson',
            format: new ol.format.GeoJSON()
        }),
        visible:false,
        title:'Kibera Hand Washing'            
        })
        
 
    
    const KHWpointStyle =  new ol.style.Style({
        image: new ol.style.Icon({
            //size: [2000, 00],
            anchor: [0, 0],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            src: 'Icons/SVG/water-drop-svgrepo-com.svg',
            opacity: 0.9  // Custom opacity value between 0 (transparent) and 1 (opaque)
            
       
        })
      });

      
      Kibera_Hand_Washing.setStyle(KHWpointStyle);
      
      map.addLayer(Kibera_Hand_Washing)

    // Add event listeners to the checkboxes to toggle layer visibility
    const Kibera_Hand_WashingCheckbox = document.getElementById('Kibera_Hand_Washing');
    Kibera_Hand_WashingCheckbox.addEventListener('change', function() {
        Kibera_Hand_Washing.setVisible(Kibera_Hand_WashingCheckbox.checked);
    })

    //Transport
    const Kibera_Transport = new ol.layer.VectorImage({
        source:new ol.source.Vector({
            url:'Spatial_Data/K_GeoJson/Transport_Stops.geojson',
            format: new ol.format.GeoJSON()
        }),
        visible:true,
        title:'Kibera Transport Stops'            
        })
        
 
    
    const KTPpointStyle = new ol.style.Style({
        image: new ol.style.Icon({
            //size: [2000, 00],
            anchor: [0, 0],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            src: 'Icons/SVG/marker-svgrepo-com.svg',
            opacity: 0.9  // Custom opacity value between 0 (transparent) and 1 (opaque)
            
       
        })
      });
      
      Kibera_Transport.setStyle(KTPpointStyle);
      
      map.addLayer(Kibera_Transport)

    // Add event listeners to the checkboxes to toggle layer visibility
    const Kibera_TransportCheckbox = document.getElementById('Kibera_Transport');
    Kibera_TransportCheckbox.addEventListener('change', function() {
        Kibera_Transport.setVisible(Kibera_TransportCheckbox.checked);
    })

    //Toilets
    const Kibera_Toilet = new ol.layer.VectorImage({
        source:new ol.source.Vector({
            url:'Spatial_Data/K_GeoJson/Sanitation.geojson',
            format: new ol.format.GeoJSON()
        }),
        visible:false,
        title:'Kibera Toilets'            
        })
        
 
    
    const KTtpointStyle = new ol.style.Style({
        image: new ol.style.RegularShape({
          fill: new ol.style.Fill({
            color: '#d2691e'  // Set the fill color to green
          }),
          stroke: new ol.style.Stroke({
            color: 'white',  // Set the stroke color to white
            width: 0.9  // Adjust the width of the stroke
          }),
          points: 4,  // Number of points in the diamond shape
          radius: 4,  // Adjust the radius of the diamond
          radius2: 3,  // Adjust the radius of the inner corners of the diamond
          angle: Math.PI / 4  // Set the rotation angle of the diamond (45 degrees in radians)
        }),
        
      });
      
      Kibera_Toilet.setStyle(KTtpointStyle);
      
      map.addLayer(Kibera_Toilet)
    
    // Add event listeners to the checkboxes to toggle layer visibility
    const Kibera_ToiletCheckbox = document.getElementById('Kibera_Toilet');
    Kibera_ToiletCheckbox.addEventListener('change', function() {
        Kibera_Toilet.setVisible(Kibera_ToiletCheckbox.checked);
    })

    //Religious
    const Kibera_Religious = new ol.layer.VectorImage({
        source:new ol.source.Vector({
            url:'Spatial_Data/K_GeoJson/Religious.geojson',
            format: new ol.format.GeoJSON()
        }),
        visible:false,
        title:'Kibera Religious Centers'            
        })
        
 
    
    const KRpointStyle = new ol.style.Style({
        image: new ol.style.RegularShape({
          fill: new ol.style.Fill({
            color: 'black'  // Set the fill color to green
          }),
          stroke: new ol.style.Stroke({
            color: 'white',  // Set the stroke color to white
            width: 0.9  // Adjust the width of the stroke
          }),
          points: 4,  // Number of points in the diamond shape
          radius: 4,  // Adjust the radius of the diamond
          radius2: 3,  // Adjust the radius of the inner corners of the diamond
          angle: Math.PI / 2  // Set the rotation angle of the diamond (45 degrees in radians)
        }),
        
      });
      
      Kibera_Religious.setStyle(KRpointStyle);
      
      map.addLayer(Kibera_Religious)

    // Add event listeners to the checkboxes to toggle layer visibility
    const Kibera_ReligiousCheckbox = document.getElementById('Kibera_Religious');
    Kibera_ReligiousCheckbox.addEventListener('change', function() {
        Kibera_Religious.setVisible(Kibera_ReligiousCheckbox.checked);
    })

      //POS
    const Kibera_Public_Space = new ol.layer.VectorImage({
        source:new ol.source.Vector({
            url:'Spatial_Data/K_GeoJson/Public_Spaces.geojson',
            format: new ol.format.GeoJSON()
        }),
        visible:false,
        title:'Kibera Public Space'            
        })
        
 
    
    const KPOScircleStyle= new ol.style.Style({
        image: new ol.style.Circle({
          radius: 3.5,  // Adjust the radius of the circle
          fill: new ol.style.Fill({
            color: 'green'  // Set the fill color to green
          }),
          stroke: new ol.style.Stroke({
            color: 'white',  // Set the stroke color to white
            width: 0.9  // Adjust the width of the stroke
          })
          
        })
      });
      
      Kibera_Public_Space.setStyle(KPOScircleStyle);
      
      map.addLayer(Kibera_Public_Space)

    // Add event listeners to the checkboxes to toggle layer visibility
    const Kibera_Public_SpaceCheckbox = document.getElementById('Kibera_Public_Space');
    Kibera_Public_SpaceCheckbox.addEventListener('change', function() {
        Kibera_Public_Space.setVisible(Kibera_Public_SpaceCheckbox.checked);
    })

      //Community_Centers
      const Kibera_Community_Centers = new ol.layer.VectorImage({
        source:new ol.source.Vector({
            url:'Spatial_Data/K_GeoJson/Community_Centers.geojson',
            format: new ol.format.GeoJSON()
        }),
        visible:false,
        title:'Kibera Community Centers'            
        })
        
 
    
    const KCCcircleStyle= new ol.style.Style({
        image: new ol.style.Circle({
          radius: 3.5,  // Adjust the radius of the circle
          fill: new ol.style.Fill({
            color: 'yellow'  // Set the fill color to green
          }),
          stroke: new ol.style.Stroke({
            color: 'black',  // Set the stroke color to white
            width: 0.5  // Adjust the width of the stroke
          })
          
        })
      });
      
      Kibera_Community_Centers.setStyle(KCCcircleStyle);
      
      map.addLayer(Kibera_Community_Centers)
      
    
    // Add event listeners to the checkboxes to toggle layer visibility
    const Kibera_Community_CentersCheckbox = document.getElementById('Kibera_Community_Centers');
    Kibera_Community_CentersCheckbox.addEventListener('change', function() {
        Kibera_Community_Centers.setVisible(Kibera_Community_CentersCheckbox.checked);
    })

      //Local_Admin_Offices
      const Kibera_Local_Admin_Offices = new ol.layer.VectorImage({
        source:new ol.source.Vector({
            url:'Spatial_Data/K_GeoJson/Local_Admin_Offices.geojson',
            format: new ol.format.GeoJSON()
        }),
        visible:false,
        title:'Local Administrative Offices'            
        })
        
 
    
    const KLAOcircleStyle= new ol.style.Style({
        image: new ol.style.RegularShape({
          fill: new ol.style.Fill({
            color: 'blue'  // Set the fill color to green
          }),
          stroke: new ol.style.Stroke({
            color: 'white',  // Set the stroke color to white
            width: 0.9  // Adjust the width of the stroke
          }),
          points: 4,  // Number of points in the diamond shape
          radius: 4,  // Adjust the radius of the diamond
          radius2: 3,  // Adjust the radius of the inner corners of the diamond
          angle: Math.PI / 2  // Set the rotation angle of the diamond (45 degrees in radians)
        }),
        
      });
      
      Kibera_Local_Admin_Offices.setStyle(KLAOcircleStyle);
      
      map.addLayer(Kibera_Local_Admin_Offices)

    // Add event listeners to the checkboxes to toggle layer visibility
    const Kibera_Local_Admin_OfficesCheckbox = document.getElementById('Kibera_Local_Admin_Offices');
    Kibera_Local_Admin_OfficesCheckbox.addEventListener('change', function() {
        Kibera_Local_Admin_Offices.setVisible(Kibera_Local_Admin_OfficesCheckbox.checked);
    });

      //Local_NGO_Offices
      const Kibera_Local_NGO_Offices = new ol.layer.VectorImage({
        source:new ol.source.Vector({
            url:'Spatial_Data/K_GeoJson/Local__NGO.geojson',
            format: new ol.format.GeoJSON()
        }),
        visible:false,
        title:'Kibera_Local_NGO_Offices'            
        })
        
 
    
    const KLNOcircleStyle= new ol.style.Style({
        image: new ol.style.RegularShape({
          fill: new ol.style.Fill({
            color: 'lightblue'  // Set the fill color to green
          }),
          stroke: new ol.style.Stroke({
            color: 'red',  // Set the stroke color to white
            width: 0.9  // Adjust the width of the stroke
          }),
          points: 4,  // Number of points in the diamond shape
          radius: 4,  // Adjust the radius of the diamond
          radius2: 3,  // Adjust the radius of the inner corners of the diamond
          angle: Math.PI / 2  // Set the rotation angle of the diamond (45 degrees in radians)
        }),
        
      });
      
      Kibera_Local_NGO_Offices.setStyle(KLNOcircleStyle);
      
      map.addLayer(Kibera_Local_NGO_Offices)

    // Add event listeners to the checkboxes to toggle layer visibility
    const Kibera_Local_NGO_OfficesCheckbox = document.getElementById('Kibera_Local_NGO_Offices');
    Kibera_Local_NGO_OfficesCheckbox.addEventListener('change', function() {
    Kibera_Local_NGO_Offices.setVisible(Kibera_Local_NGO_OfficesCheckbox.checked);
    });

    // Function to create a vector layer
    function createVectorLayer(url, name) {
    return new ol.layer.Vector({
        source: new ol.source.Vector({
        url: url,
        format: new ol.format.GeoJSON()
        }),
        visible: false, // Set the initial visibility to false
        name: name
    });
    }





      // Register event listeners to change the cursor style
    map.on('pointermove', function (evt) {
        var hit = false;
        map.forEachFeatureAtPixel(evt.pixel, function (feature) {
        hit = true;
        });
        map.getTargetElement().style.cursor = hit ? 'pointer' : ''; // Change cursor style based on hit
    });
      // Register a click event listener on the vector layer
    map.on('click', function (evt) {
        var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
        return feature;
        });
    
        if (feature) {
        var properties = feature.getProperties();
        var fclass = properties.fclass;
        var name = properties.name;
    
        tooltipElement.innerHTML = 'Facility Type: ' + fclass + '<br>Facility Name: ' + name; // Set the content of the tooltip
        tooltip.setPosition(evt.coordinate);
        tooltipElement.style.display = 'block';
        } else {
        tooltipElement.style.display = 'none';
        }
    });
    
    // Style your tooltip element with CSS
    const tooltipStyle = document.createElement('style');
    tooltipStyle.innerHTML = '.tooltip { background-color: rgba(0, 0, 0, 0.7); color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; }';
    document.head.appendChild(tooltipStyle);


    //Layer Switcher Logic
    const baseLayerElements = document.querySelectorAll('.ControlsidebarBM > input[type=radio]');  
    for(let baseLayerElement of baseLayerElements){
        //console.log(baseLayerElements)};
        baseLayerElement.addEventListener('change', function(){
            let baseLayerElementValue = this.value;
            baseLayerGroup.getLayers().forEach(function(element, index, array){
                let baseLayerTitle = element.get('title');
                element.setVisible(baseLayerTitle === baseLayerElementValue);
            })
        })
    
    }

}
