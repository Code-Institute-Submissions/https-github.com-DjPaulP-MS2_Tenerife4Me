function initMap () {
    var location = {lat: 28.291565, lng: -16.629129};
    var map = new google.maps.Map(document.getElementById("map"), {zoom: 10, center: location});
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
