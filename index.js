$(document).ready(function () {
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

  // onclick open-sidebar button
  const sidebar = $('.main .sidebar')
  const openSidebarBtn = $('.open-sidebar')
  const openSidebarArrow = $('.open-sidebar img')
  openSidebarBtn.on('click', (event) => {
    if (openSidebarBtn.data('opened')) {
      sidebar.css('right', '-32rem')
      openSidebarBtn.css('right', '0')
      openSidebarArrow.css('transform', 'none')
      openSidebarBtn.data('opened', false)
    } else {
      sidebar.css('right', '0')
      openSidebarBtn.css('right', '32rem')
      openSidebarArrow.css('transform', 'rotate(180deg)')
      openSidebarBtn.data('opened', true)
    }
  })
})
