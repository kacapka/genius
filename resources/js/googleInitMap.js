// google map location
        
(function(){
    


window.initMap = function() {
        var mapCenterDeskop = {
            lat: 52.2276985, 
            lng: 21.0131939
        };
    
        var mapCenterMobile = {
            lat: 52.2214033, 
            lng: 20.9599979
        };
        
        var mapStyle = [
              {
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#f5f5f5"
                  }
                ]
              },
              {
                "elementType": "labels.icon",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#616161"
                  }
                ]
              },
              {
                "elementType": "labels.text.stroke",
                "stylers": [
                  {
                    "color": "#f5f5f5"
                  }
                ]
              },
              {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#bdbdbd"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#eeeeee"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#757575"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#e5e5e5"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#ffffff"
                  }
                ]
              },
              {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#757575"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#dadada"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#616161"
                  }
                ]
              },
              {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              },
              {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#e5e5e5"
                  }
                ]
              },
              {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#eeeeee"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#c9c9c9"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              }
            ]
        if (window.innerWidth <= 767 || window.isTabletOrMobile()) {
            var myOptsMap = {
                zoom: 13,
                center: mapCenterMobile,
                streetViewControl: true,
                backgroundColor: '#ecf0f1',
                streetViewControl: false,
                zoomControl: false,
                fullscreenControl: false,
                styles: mapStyle
            } 
        } else {
           var myOptsMap = {
                zoom: 13,
                center: mapCenterDeskop,
                streetViewControl: true,
                backgroundColor: '#ecf0f1',
                zoomControl: true,
                zoomControlOptions: {
                    position: google.maps.ControlPosition.TOP_RIGHT
                },
                streetViewControl: true,
                streetViewControlOptions: {
                    position: google.maps.ControlPosition.TOP_RIGHT
                },
                styles: mapStyle
            } 
        }
        
        
        var map = new google.maps.Map(document.querySelector('.map'), myOptsMap);
        
    // create marker
            
        function MapIcon(lat, lng) {
            this.lat = lat;
            this.lng = lng;
            this.latLng = new google.maps.LatLng(lat, lng);
        }
        
        MapIcon.prototype = new google.maps.OverlayView();
        MapIcon.prototype.onRemove = function(){};
        
        MapIcon.prototype.onAdd = function() {
            div = document.createElement('div');
            div.classList.add('marker_icon');
            var panes = this.getPanes();
            panes.overlayImage.appendChild(div);
            var isOnTop = false;
                        
            google.maps.event.addDomListener(div, 'click', function () {
                if(!isOnTop){
                   divInfo.style.opacity = 0.8;
                   isOnTop = true;
                } else {
                   divInfo.style.opacity = 0.01;
                   isOnTop = false;    
                }        
        });
        }
        
        MapIcon.prototype.draw = function() {
            var overlayProjection = this.getProjection();
            var position = overlayProjection.fromLatLngToDivPixel(this.latLng);
            div.style.top = position.y + 'px';
            div.style.left = position.x + 'px'; 
        }
        
    // create InfoWindow
        
        function infoWindow(lat, lng) {
            this.lat = lat;
            this.lng = lng;
            this.latLng = new google.maps.LatLng(lat, lng);
        }
        
        infoWindow.prototype = new google.maps.OverlayView();
        infoWindow.prototype.onRemove = function(){};
        
        infoWindow.prototype.onAdd = function() {
            divInfo = document.createElement('div');
            divInfo.classList.add('info_window');
            var panes = this.getPanes();
            panes.overlayImage.appendChild(divInfo);
            divInfo.innerHTML = `<p><center><b>CROSSFIT GENIUS</b></center></p><p>Al. Prymasa Tysiaclecia 38</p>`;
            divInfo.style.opacity = 0.01;
        }
        
        infoWindow.prototype.draw = function() {
            var overlayProjection = this.getProjection();
            var position = overlayProjection.fromLatLngToDivPixel(this.latLng);
            divInfo.style.top = position.y + 'px';
            divInfo.style.left = position.x + 'px';
            
        }
         
        var icon = new MapIcon(52.221589,20.960760);
        icon.setMap(map);
        
        var info = new infoWindow(52.221589,20.960760);
        info.setMap(map); 
    }
    
}());
  

