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

  
});

function goToGoogleMap() {
  window.open("https://www.google.com/maps/place/Marvel+Square/@22.2807163,73.1519703,19z","_blank");
}