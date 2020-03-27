
    function initMap() {
         let pos = {
           lat: 59.93884,
           lng: 30.32308
         };
         let option = {
           center: pos,
           zoom: 17
         };

         let myMap = new google.maps.Map(
           document.querySelector(".contact_map"),
           option
         );
         let myMarker = new google.maps.Marker({
           position: pos,
           map: myMap,
           icon: "assets/images/main_page/map.png"
         });
    };