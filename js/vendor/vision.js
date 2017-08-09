$(document).ready(function(){
  $.fn.incs = function(key, val) {
     str=$(this).css(key);
     num=parseInt(str);
     p=str.substring(num.toString().length);
     res=(num+parseInt(val)).toString()+p;
     $(this).css(key,res);
     return (num+parseInt(val)).toString()+p;
  };
});

$(document).ready(function(){
//sv_settings
var selectorBg='body, .container, .header-info-block *, .top-navbar-sticky, .dropdown-menu a, .dropdown-menu  *, .footer, .footer *, .infoblocks, .banner, .banner *, .partners *, .services *, .before-the-answer *, .about-block *, .infoblocks-header *, .top-navbar, .infoblocks-content, .infoblocks-content p, .infoblocks-news-item, .news-item__date, .news-item__title, .navbar-search, .navbar, .navbar *, .not-found-page *, .certificates-item, .certificates-item *, .pagination-nav, .pagination-nav *, .contacts-add-info, .contacts-add-info *, .content__title, .contacts-block, .contacts-block *, .breadcrumbs-wrapper, .breadcrumbs-wrapper *, .contacts-form-wrapper, .contacts-form-wrapper *, .content, .content *, .content-wrapper, .content-wrapper *, .banner-request-status *, .check:before';
var selectorFn='.footer, .footer *, .infoblocks, .banner, .banner *, .partners *, .services *, .before-the-answer *, .about-block *, .infoblocks-header *, .top-navbar, .not-found__number, .not-found__title, .certificates-item *, .pagination-nav, .pagination-nav *, .contacts-add-info, .contacts-add-info *,  .content__title, .contacts-block, .contacts-block*, .breadcrumbs-wrapper, .breadcrumbs-wrapper *, .contacts-form-wrapper, .contacts-form-wrapper *, .content, .content *, .header *';
    //-------------
    $('.fs-outer button').click(function(){
        $(selectorFn).css('font-size',$(this).css('font-size'));
        $.cookie('font-size',$(this).attr('id'));
        $('.fs-outer button').removeClass('active');
        $(this).addClass("active");
    });

    $('.cs-outer button').click(function(){
        $(selectorBg).css('color',$(this).css('color'));
        $(selectorBg).css('background',$(this).css('background'));
        $('.check-bullet').css('background', '#acacab');
        $('.infoblocks__link, .info-slider-more__link, .content-back__link').addClass('hide--arrow');
        $.cookie('cs',$(this).attr('id'));
        $('.cs-outer button').removeClass('active');
        $(this).addClass("active");

    });

    $('.img-outer button').click(function(){

        if (!$('.img-outer button').hasClass('active')){
            $('img').css('display','none');
            $.cookie('img','on');
            $('#img-onoff-text').text(' Включить');
            $(this).addClass("active");

            // убираем картинки
            $('.col--img').css('display','none');
            $('.about--col--text').removeClass('col-lg-6');
            $('.about--col--text').addClass('col-lg-12');

            $('.header-logo__text').css('left','0');

            $('.banner').addClass('banner--bg--hide');

            $('.contacts-block-icon').addClass('contacts-block-icon--hide');

            $('.services-item').addClass('no--image');
        } else
        {
            $('img').css('display','block');
            $.cookie('img','off');
            $('#img-onoff-text').text(' Отключить');
            $(this).removeClass("active");

            $('.col--img').css('display','block');
            $('.about--col--text').removeClass('col-lg-12');
            $('.about--col--text').addClass('col-lg-6');

            $('.header-logo__text').css('left','179px');

            $('.banner').removeClass('banner--bg--hide');

            $('.contacts-block-icon').removeClass('contacts-block-icon--hide');

            $('.services-item').removeClass('no--image');
        }
    });

    if ($.cookie('sv_on')=='true'){
        $('#sv_on').addClass('active');
        $('#sv_settings').css('display','block');
        if ($.cookie('font-size')!==null){
          $('#'+$.cookie('font-size')).click();
        }
        if ($.cookie('cs')!==null){
          $('#'+$.cookie('cs')).click();
        }

    }

    $('#sv_on').click(function(){
      if ($.cookie('sv_on')!='true'){
        $('.header').addClass('header--vision');
        $('.top-navbar-sticky').addClass('navbar--vision');
        console.log("режим включен");
        $.cookie('sv_on', 'true');
        $('#sv_settings').css('display','block');
        if ( ($.cookie('font-size')=="null") || (typeof $.cookie('font-size') === 'undefined') ) {
           $('.fs-n').click();
        }

        if ( ($.cookie('cs')=="null") || (typeof $.cookie('cs') === 'undefined') ){
           $('.cs-wb').click();
        }
      }
      else
      {
         $.cookie('sv_on', 'false');
         $('.header').removeClass('header--vision');
         $('.top-navbar-sticky').addClass('navbar--vision');
      }
      location.reload();
    });


    $('.navbar-vision__link, #vision-close').click(
    function(){
      $('#sv_on').click();
    });



});
//================
$(document).ready(function(){
  $(function () {
    $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Включить');
    $('.tree li.parent_li > span').on('click', function (e) {
      var children = $(this).parent('li.parent_li').find(' > ul > li');
      if (children.is(":visible")) {
          children.hide('fast');
          $(this).attr('title', 'Выключить изображения').find(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
      } else {
          children.show('fast');
          $(this).attr('title', 'Включить изображения').find(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
      }
      e.stopPropagation();
    });
  });
});
