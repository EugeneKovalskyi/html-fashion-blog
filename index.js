$(document).ready(function () {
  /// rellax.js init
  var rellax = new Rellax('.rellax')

  // slick-slider
  $('.footer-slider').slick({
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 4,
    speed: 200,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 950,
        settings: {
          centerMode: false,
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 750,
        settings: {
          arrows: true,
          slidesToShow: 1,
          prevArrow:
            '<button type="button" class="slick-prev slick-arrow"></button>',
          nextArrow:
            '<button type="button" class="slick-next slick-arrow"></button>',
        },
      },
    ],
  })

  // toggle .active
  $('.header .nav-link').on('click', (event) => {
    $('.header .active').removeClass('active')
    $(event.target).addClass('active')
  })

  // on resize screen resolution
  $(window).on('resize', function () {
    if ($(document).width() < 750) {
      $('.main .sidebar').attr('data-rellax-speed', '0')
    }
  })
})
