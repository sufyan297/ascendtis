$(document).ready(function() {
})

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}
//AIzaSyAFWaaq-N8JY1li6d3F7NlBAFOW-RNJ-WU