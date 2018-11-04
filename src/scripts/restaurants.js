function RestaurantExpand(arrowImage, restaurantExpansion) {
  let element = document.getElementById(restaurantExpansion);
  let image = document.getElementById(arrowImage);

  if (element.style.display === "none" || element.style.display === "") {
    element.style.display = "block";
    image.src = "../img/arrow-up.svg";
  } else {
    element.style.display = "none";
    image.src = "../img/arrow-down.svg";
  }
}

var pizza, steak, seafood, lobster;
function initMap() {
  pizza = { lat: 39.898, lng: 8.597 };
  steak = { lat: 40.923, lng: 9.5165 };
  seafood = { lat: 39.219, lng: 9.105 };
  lobster = { lat: 39.221, lng: 9.103 };
  var mapPizza = new google.maps.Map(document.getElementById("mapPizza"), {
    zoom: 10,
    center: pizza
  });
  var mapSteak = new google.maps.Map(document.getElementById("mapSteak"), {
    zoom: 10,
    center: steak
  });
  var mapSeafood = new google.maps.Map(document.getElementById("mapSeafood"), {
    zoom: 10,
    center: seafood
  });
  var mapLobster = new google.maps.Map(document.getElementById("mapLobster"), {
    zoom: 10,
    center: lobster
  });
  var markerPizza = new google.maps.Marker({ position: pizza, map: mapPizza });
  var markerSteak = new google.maps.Marker({ position: steak, map: mapSteak });
  var markerSeafood = new google.maps.Marker({
    position: seafood,
    map: mapSeafood
  });
  var markerLobster = new google.maps.Marker({
    position: lobster,
    map: mapLobster
  });
}
