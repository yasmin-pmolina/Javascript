let marker, map;

// Initialize and add the map
function initMap() {
  // The location of Uluru
  //const uluru = { lat: -25.344, lng: 131.031 };
 // Latitud: -34.569919 | Longitud: -58.442776 buenos aires Casa
  const uluru = { lat: -25.344, lng: 131.031};

  // The map, centered at Uluru
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 1,
    center: uluru,
  });

  //Creo los 3 marcadores para los lugares 
  // The marker, positioned indicada - Argentina
    marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });

   // The marker de Tokio ({lat: 35.6895,lng: 139.69171})  
   let marker2 = new google.maps.Marker({
    position: {lat: 35.6895,lng: 139.69171},
    map: map,
  });
  //Michelena-Venezuela
  let marker3 = new google.maps.Marker({
    position: {lat: 7.955,lng: -72.243333},
    map: map,
  });

  getPosition()
}


function getPosition(){

  if(navigator.geolocation) 
  {
   const geoLo =  navigator.geolocation//
   const watchPo = geoLo.watchPosition(centraMapa, onError, {timeout : 1000}) 

  }else {
  alert("Este navegador no admite Geolocalización")
  }
}

function centraMapa(posicion){
  console.log(posicion );

  let newPosition = {
    lat: posicion.coords.latitude ,
    lng: posicion.coords.longitude
  }

  marker.setPosition(newPosition)
  //map.setCenter(newPosition)
}

function onError(error){
  console.log('Error', error ) 
  alert("Error: " + error.message)

}

window.initMap = initMap;