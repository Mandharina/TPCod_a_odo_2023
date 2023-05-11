let map = L.map("map").setView([-34.4250568959495, -58.57859920925296],15);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        document.getElementById("select-location").addEventListener("change", function(e){
            let coords = e.target.value.split(",");
            map.flyTo(coords,17);
        
           if (e.target.options[e.target.selectedIndex].classList.contains("resto")) {
            L.circleMarker(L.latLng(coords),{ 
                radius:9,
                fillColor:"#ff6600",
                color:"black",
                weight: 3.5,
                opacity: 1,
                fillOpacity: 1,
            }).addTo(map);
           }else if(e.target.options[e.target.selectedIndex].classList.contains("confiteria")) {
            L.circleMarker(L.latLng(coords),{ 
                radius:9,
                fillColor:"#e8f52e",
                color:"black",
                weight: 3.5,
                opacity: 1,
                fillOpacity: 1,
            }).addTo(map);
        }else if(e.target.options[e.target.selectedIndex].classList.contains("heladeria")) {
            L.circleMarker(L.latLng(coords),{ 
                radius:9,
                fillColor:"#82e2f3",
                color:"black",
                weight: 3.5,
                opacity: 1,
                fillOpacity: 1,
            }).addTo(map);
        }else if(e.target.options[e.target.selectedIndex].classList.contains("queHacer")) {
            L.circleMarker(L.latLng(coords),{ 
                radius:9,
                fillColor:"#ff0000",
                color:"black",
                weight: 3.5,
                opacity: 1,
                fillOpacity: 1,
            }).addTo(map);
        }else if(e.target.options[e.target.selectedIndex].classList.contains("alojamientos")) {
            L.circleMarker(L.latLng(coords),{ 
                radius:9,
                fillColor:"#0ea122",
                color:"black",
                weight: 3.5,
                opacity: 1,
                fillOpacity: 1,
            }).addTo(map);
                
        }
        
        })