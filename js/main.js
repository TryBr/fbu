$(document).ready(function() {
  /*---------------
      #BANNER
  ---------------*/
  var swiperBanner = new Swiper('.swiper-banner', {
      slidesPerView: 1,
      loop: true
  });

  $('.info-slider-nav__prev').click(function() {
      swiperBanner.slidePrev();
  });

  $('.info-slider-nav__next').click(function() {
      swiperBanner.slideNext();
  });

  /*---------------
      #PARTNERS
  ---------------*/
  var swiperPartners = new Swiper('.swiper-partners', {
      slidesPerView: 4,
      loop: true,
      // Responsive breakpoints
      breakpoints: {
        // when window width is <= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        // when window width is <= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is <= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
  });

  $('.partners-navigation__prev__btn').click(function() {
      swiperPartners.slidePrev();
  });

  $('.partners-navigation__next__btn').click(function() {
      swiperPartners.slideNext();
  });


  /*---------------
      #NEWS
  ---------------*/
  var swiperNews = new Swiper('.swiper-news', {
      slidesPerView: 1,
      loop: true,
      // Responsive breakpoints
  });

  $('.news-slider-nav__prev__btn').click(function() {
      swiperNews.slidePrev();
  });

  $('.news-slider-nav__next__btn').click(function() {
      swiperNews.slideNext();
  });

    /*---------------
        #SERVICES
    ---------------*/
    $('.services-all__btn').click(function() {
        $('.services-full-info').show();

        /*---------------
            #SERVICES
        ---------------*/
        var swiperServices = new Swiper('.swiper-services', {
            slidesPerView: 1,
            observer: true,
            spaceBetween: 0,
            // Responsive breakpoints
            breakpoints: {
              // when window width is <= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 0
              },
              // when window width is <= 480px
              480: {
                slidesPerView: 1,
                spaceBetween: 0
              },
              // when window width is <= 640px
              640: {
                slidesPerView: 1,
                spaceBetween: 0
              }
            }
        });

        $('.services-navigation__prev__btn').click(function() {
            swiperServices.slidePrev();
        });

        $('.services-navigation__next__btn').click(function() {
            swiperServices.slideNext();
        });

    });

    var itemId;
    var itemNum;

    $('.services-full-info-item').hover(function() {
        itemId = $(this).attr('id');
        console.log(itemId);
        itemNum = parseInt(itemId.replace(/[^0-9.]/g, ""));
        $('.services-full-info-item').removeClass('active');
        $(this).addClass('active');
        $('.services-full-content').hide();
        $('.services-full-info').find('#services-full-content-' + itemNum).show();
    });

  /*---------------
      #MENU DROPDOWN
  ---------------*/
  if ($(window).width() > 1199) {
    $('ul.nav li.dropdown').hover(function() {
      $(this).addClass('open');
      $(this).find('.dropdown-menu').stop(true, true).show();
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).hide();
      $(this).removeClass('open');
    });

    /*---------------
        #SEARCH
    ---------------*/
    $('.navbar-search__field').focusin(function() {
        $('.navbar-search').addClass('active');
        $('.top-navbar-nav').hide();
    });

    $('.navbar-search__field').focusout(function() {
        $('.navbar-search').removeClass('active');
        $('.top-navbar-nav').show();
    });

    $('.navbar-search-close__btn').click(function() {
        $('.navbar-search').removeClass('active');
        $('.top-navbar-nav').show();
    });

    /*---------------
        #SEARCH STICKY
    ---------------*/
    $('.navbar-search-btn').click(function() {
        $('.navbar-search--sticky').addClass('active');
        $('.top-navbar-nav--sticky').hide();
        $('.navbar-search--sticky').show();
    });

    $('.navbar-search__field--sticky').focusout(function() {
        $('.navbar-search--sticky').removeClass('active');
        $('.top-navbar-nav--sticky').show();
        $('.navbar-search--sticky').hide();
    });

    $('.navbar-search-close__btn').click(function() {
        $('.navbar-search--sticky').removeClass('active');
        $('.top-navbar-nav--sticky').show();
        $('.navbar-search--sticky').hide();
    });

    /*---------------
        #LEFT MENU
    ---------------*/
    $('.show-the-services-menu').click(function() {
      $(this).toggleClass('active');
      $(this).parent().toggleClass('active');
      $('.services-content-item-info').hide();
      $('.services-content-item').removeClass('active');
    });

    $('.services-content-item-1').click(function() {
      $('.services-content-item').removeClass('active');
      $(this).addClass('active');
      $('.services-content-item-info').hide();
      $('.services-content-item-info-1').show();
    });

    $('.services-content-item-2').click(function() {
      $('.services-content-item').removeClass('active');
      $(this).addClass('active');
      $('.services-content-item-info').hide();
      $('.services-content-item-info-2').show();
    });

    $('.services-content-item-3').click(function() {
      $('.services-content-item').removeClass('active');
      $(this).addClass('active');
      $('.services-content-item-info').hide();
      $('.services-content-item-info-3').show();
    });

    $('.services-content-item-4').click(function() {
      $('.services-content-item').removeClass('active');
      $(this).addClass('active');
      $('.services-content-item-info').hide();
      $('.services-content-item-info-4').show();
    });

    $('.services-content-item-5').click(function() {
      $('.services-content-item').removeClass('active');
      $(this).addClass('active');
      $('.services-content-item-info').hide();
      $('.services-content-item-info-5').show();
    });

    $('.services-content-item-6').click(function() {
      $('.services-content-item').removeClass('active');
      $(this).addClass('active');
      $('.services-content-item-info').hide();
      $('.services-content-item-info-6').show();
    });

    $('.services-content-item-7').click(function() {
      $('.services-content-item').removeClass('active');
      $(this).addClass('active');
      $('.services-content-item-info').hide();
      $('.services-content-item-info-7').show();
    });


    /*---------------
        #MENU STICKY
    ---------------*/
    $(document).scroll(function() {
    var y = $(this).scrollTop();
      if (y > 150) {
        $('.top-navbar-sticky').css("opacity", "1");
        $('.top-navbar-sticky').addClass('active');
      } else {
        $('.top-navbar-sticky').css("opacity", "0");
        $('.top-navbar-sticky').remove('active');
      }
    });
  }


    /*---------------
        # STICKY HEADER
    ---------------*/
    $(window).resize(function(){
      if ( ($(window).width() < 1199)) {
        $('.top-navbar-sticky').css("display", "none");
      }
    });

  /*---------------
      #BACK TO TOP
  ---------------*/
  if ($('#back-to-top').length) {
      var scrollTrigger = 100, // px
          backToTop = function () {
              var scrollTop = $(window).scrollTop();
              if (scrollTop > scrollTrigger) {
                  $('#back-to-top').addClass('show');
              } else {
                  $('#back-to-top').removeClass('show');
              }
          };
      backToTop();
      $(window).on('scroll', function () {
          backToTop();
      });
      $('#back-to-top').on('click', function (e) {
          e.preventDefault();
          $('html,body').animate({
              scrollTop: 0
          }, 700);
      });
  }

  /*---------------
      #ANSWER
  ---------------*/
  $('.answer-form__btn').click(function() {
      $('.before-the-answer').hide();
      $('.after-the-answer').show();
  });

  /*---------------
      #ADD FIELDS
  ---------------*/
  $('.form__field__add__link').click(function() {
    $(this).parents('.field-main-wrapper').after("<div class='field-wrapper field-wrapper--add clearfix'><input class='form-control form__field' type='text' value='' id=''><div class='form__field__delete__link'></div></div>");
  });

  /*---------------
      #REMOVE FIELDS
  ---------------*/
  $(document).on('click', '.form__field__delete__link', function(events){
    $(this).closest('.field-wrapper').addClass('field-wrapper-remove');
    $(this).closest('.field-wrapper-remove').remove();
  });

  /*---------------
      #FANCYBOX
  ---------------*/
  $(".fancybox").fancybox();

  /*---------------
      #DOT DOT DOT
  ---------------*/
  $(".services-item__title").dotdotdot();



  /*---------------
      #NEWS
  ---------------*/
  var newsItemHeight = $('.news-item').height();
  var newsItemPhoto = $('.news-item-photo').height();
  var newsItemDate = $('.news-item__date').height();
  var newsItemTitle = $('.news-item__title').height();
  var NewsItemNewHeight = newsItemHeight - newsItemPhoto - newsItemDate - newsItemTitle - 100;

  $(".news-item__description").dotdotdot({height: NewsItemNewHeight});

  $(window).resize(function() {
    $(".news-item__description").dotdotdot({height: NewsItemNewHeight});
  });

  /*---------------
      #SEND FORM
  ---------------*/
  $('#send-form').submit(function(){
    if(!$("#agree").is(':checked')) {
        $("#agree").parent().addClass('invalid');
        return false;
    }
    return false;
  });

  /*---------------
      #SERVICES ITEMS
  ---------------*/
  var servicesItems = $('.services').find('.services-item').length;
  var servicesItemsHide = 0;
  var servicesItemsShown = 0;
  var servicesItemsShownTotal = 0;
  if (servicesItems > 8)  {
    $('.services').find('.services-item').each(function(i,elem) {
      if (i + 1 > 8)  {
        $(this).addClass("services-item--hide");
        servicesItemsHide ++;
      }
    });
  }

  if ( ($(window).width() < 1199)) {
    if (servicesItems > 4)  {
      $('.services').find('.services-item').each(function(i,elem) {
        if (i + 1 > 4)  {
          $(this).addClass("services-item--hide");
          servicesItemsHide ++;
        }
      });
    }
  }

  $(window).resize(function() {
    if ( ($(window).width() < 1199)) {
      if (servicesItems > 4)  {
        $('.services').find('.services-item').each(function(i,elem) {
          if (i + 1 > 4)  {
            $(this).addClass("services-item--hide");
            servicesItemsHide ++;
          }
        });
      }
    }
  });

  /*---------------
      #SHOW SERVICES ITEMS
  ---------------*/
  $('.services-show__btn').click(function() {
    $('.services').find('.services-item--hide').each(function(i,elem) {
      if ( (!$(this).hasClass('services-item--shown')) && (servicesItemsShown <= 3) ) {
        $(this).show();
        $(this).addClass('services-item--shown');
        servicesItemsShown ++;
        // $(this).removeClass('services-item--hide');
      }
    });
    servicesItemsShownTotal = servicesItemsShownTotal + servicesItemsShown;
    if (servicesItemsHide == servicesItemsShownTotal) {
      $('.services-show__btn').hide();
      $('.services-all__btn').show();
    }
    servicesItemsShown = 0;
  });


  /*---------------
      #SELECT
  ---------------*/
  $('.selectpicker').selectpicker();


  /*---------------
      #POLLS
  ---------------*/
  $('.answer-form__radio').change(function(){
      if ($('.answer-form__radio').is(':checked') == true){
          document.getElementById('answer-form__btn').disabled = false;
      } else {
          document.getElementById('answer-form__btn').disabled = true;
      }
  });

});
