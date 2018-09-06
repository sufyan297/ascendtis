$(document).ready(function() {

    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      stagePadding: 50,
      navText: ['<img src="./images/chevron-left.svg">', '<img src="./images/chevron-right.svg">'],
      responsive:{
          0:{
            items:1
          },
          600:{
            items:1
          },
          1000:{
            items:1
          }
      }
  })

  let idx = 0;
  blipMarker(idx);
  setInterval(() => {
    blipMarker(idx);
    idx ++;
    if (idx > 2) {
      idx = 0;
    }
  }, 350);


  //Smooth Scroll
  $('.footer-navigation-title').on('click', function(event) {
    // // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
  
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
    
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

});

function blipMarker(idx = 0) {
  switch(idx) {
    case 0: $('.map-marker-2').css('background-image', 'url(./images/Ascendtis_Location_green_0.png)'); break;
    case 1: $('.map-marker-2').css('background-image', 'url(./images/Ascendtis_Location_green_1.png)'); break;
    case 2: $('.map-marker-2').css('background-image', 'url(./images/Ascendtis_Location_green_2.png)'); break;
    default: $('.map-marker-2').css('background-image', 'url(./images/Ascendtis_Location_green_2.png)'); break;
  }
}

function goToGoogleMap() {
  window.open("https://www.google.com/maps/place/Marvel+Square/@22.2807163,73.1519703,19z","_blank");
}