/**
 *
 */
/* MAP */
function initMap() {
  var opts = {
    zoom: 19,
    center: new google.maps.LatLng(35.6573877,139.6964451)
  };

  var map = new google.maps.Map(document.getElementById("map"), opts);
}