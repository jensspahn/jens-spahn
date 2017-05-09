var flickityOptions = {
  autoPlay: true,
  arrowShape: {
    x0: 10,
    x1: 60, y1: 50,
    x2: 60, y2: 45,
    x3: 15
  },
  cellAlign: 'left',
  contain: true,
  dragThreshold: 10,
  imagesLoaded: true,
  pageDots: false,
  resize: true,
  setGallerySize: true,
  wrapAround: true
};

var translateJuicer = function() {
  $('.j-paginate').text('Mehr laden');
};

$(document).ready(function(){
  $('.home__slider').flickity(flickityOptions);
  $('.profil__slider').flickity(flickityOptions);

  setTimeout(function() {
    $('.home .flickity-viewport').height($('.home__slider').height());
  }, 300);

  var menuToggled = false;

  var toggleMenu = function() {
    if (menuToggled === true) {
      $('.menu__toggle i').removeClass('fa-bars').addClass('fa-close');
      $('nav.menu').addClass('expanded');
    } else {
      $('.menu__toggle i').removeClass('fa-close').addClass('fa-bars');
      $('nav.menu').removeClass('expanded');
    }
  };

  $('body').on('click', '.menu__toggle', function() {
    menuToggled = !menuToggled;
    toggleMenu();
  });

  var subscribeToggled = false;

  var toggleSubscribe = function() {
    if (subscribeToggled === true) {
      $('.subcribe__content').addClass('expanded');
      $('.subscribe__toggle i').removeClass('fa-chevron-up').addClass('fa-close');
    } else {
      $('.subcribe__content').removeClass('expanded');
      $('.subscribe__toggle i').removeClass('fa-close').addClass('fa-chevron-up');
    }
  };

  $('body').on('click', '.subscribe__header', function() {
    subscribeToggled = !subscribeToggled;
    toggleSubscribe();
  });

  setTimeout(function() {
    $('.home__subscribe').addClass('visible');
  }, 3000);

  // Smooth scrolling
  var smoothScroll = function(target) {
    $('body, html').animate({
      scrollTop: target.offset().top
    }, 750);
  };

  // Clean URL from anchor names and smooth scroll
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        smoothScroll(target);
        return false;
      }
    }
  });
});
