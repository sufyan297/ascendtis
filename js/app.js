$(document).ready(function () {

  //reCaptcha v3
  grecaptcha.ready(function() {
    grecaptcha.execute('6Lf8v44UAAAAAPtAnlK0EJPHBsTbFOQ4J4yskTfo', {action: 'homepage'}).then(function(token) {
      console.log("Token: ", token);
      $('#recaptcha_token').val(token);
    });
  });

  //

  var isMailSent = getParameterByName('mail_sent');
  if (isMailSent == 1) {
    $.notify("Your request has been successfully submitted.", "success");
  }

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    stagePadding: 50,
    autoplay: true,
    autoplayTimeout: 10 * 1000,
    navText: ['<img src="./images/chevron-left.svg">', '<img src="./images/chevron-right.svg">'],
    responsive: {
      0: {
        items: 1,
        nav: false,
        stagePadding: 20
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  var width = $(window).width();
  var height = $(window).height();

  if (width > 767) {
    let idx = 0;
    blipMarker(idx);
    setInterval(() => {
      blipMarker(idx);
      idx++;
      if (idx > 2) {
        idx = 0;
      }
    }, 350);
  }


  //Smooth Scroll
  $('.footer-navigation-title').on('click', function (event) {
    // // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      console.log("Hash: ", hash);
      if (hash === '#home') {
        scrollToAnimate(hash, 1600);
      } else if (hash === '#services') {
        scrollToAnimate(hash, 1600);
      } else if (hash === '#reviews') {
        scrollToAnimate(hash, 1600);
      } else {
        scrollToAnimate(hash, 800);
      }
    } // End if
  });

  /*
  * Show More/Less
  */

  // Configure/customize these variables.
  var showChar = 210;  // How many characters are shown by default
  var ellipsestext = "...";
  var moretext = "Show more";
  var lesstext = "Show less";


  $('.more').each(function () {
    var content = $(this).html();

    if (content.length > showChar) {

      var c = content.substr(0, showChar);
      var h = content.substr(showChar, content.length - showChar);

      var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

      $(this).html(html);
    }

  });
  $(".morelink").click(function () {
    if ($(this).hasClass("less")) {
      $(this).removeClass("less");
      $(this).html(moretext);
    } else {
      $(this).addClass("less");
      $(this).html(lesstext);
    }
    $(this).parent().prev().toggle();
    $(this).prev().toggle();
    return false;
  });


});

function scrollToAnimate(hash, milliseconds = 800) {
  // Using jQuery's animate() method to add smooth page scroll
  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, milliseconds, function () {
    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
  });
}

function blipMarker(idx = 0) {
  switch (idx) {
    case 0: $('.map-marker-2').css('background-image', 'url(./images/Ascendtis_Location_green_0.png)'); break;
    case 1: $('.map-marker-2').css('background-image', 'url(./images/Ascendtis_Location_green_1.png)'); break;
    case 2: $('.map-marker-2').css('background-image', 'url(./images/Ascendtis_Location_green_2.png)'); break;
    default: $('.map-marker-2').css('background-image', 'url(./images/Ascendtis_Location_green_2.png)'); break;
  }
}

function goToGoogleMap() {
  window.open("https://goo.gl/maps/1VDjYoSD54t", "_blank");
}
function goToUrl(url = '#') {
  window.open(url, "_blank");
}

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
