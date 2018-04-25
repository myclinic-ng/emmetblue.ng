var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

$(document).ready(function () {

    bind_shrink_header();

    var isMobile = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;
    }

    //set equalize height
    $('.equalize').equalize();

    /* ===================================
     Toggle Close 
     ====================================== */
    $(document).on('click', 'ul.navbar-nav li', function (event) { 
        $('#bs-example-navbar-collapse-1').removeClass('in');
        $('#bs-example-navbar-collapse-1').addClass('collapse');
        $('.navbar-toggle').addClass('collapsed');
    });

     /*==============================================================
     smooth scroll With Shrink Navigation
     ==============================================================*/

    $(window).scroll(function () {
        
        var shrink_header = $('.shrink-header').length;
        var shrink_medium_header = $('.shrink-medium-header').length;
        var shrink_big_header = $('.shrink-big-header').length;
        var shrink_transparent_header_light = $('.shrink-transparent-header-light').length;
        var shrink_transparent_header_dark = $('.shrink-transparent-header-dark').length;
        if(shrink_medium_header)
        {
            var windowsize = $(window).width();
            if(windowsize <= 991 && windowsize == 768)
            {
              var header_offset = -106;
            }else if(windowsize <= 767){
              var header_offset = -90;
            }else{
              var header_offset = -110;
            }
            
        }else if(shrink_big_header){
            var windowsize = $(window).width();
            if(windowsize <= 991)
            {
              var header_offset = -64;
            }else{
              var header_offset = -115;
            }
            
        }else if(shrink_header || shrink_transparent_header_light || shrink_transparent_header_dark){
            var windowsize = $(window).width();
            if(windowsize <= 991 && windowsize == 768)
            {
              var header_offset = -64;
            }else if(windowsize <= 767){
              var header_offset = -60;
            }else{
              var header_offset = -68;
            }
            
        }else{
            var header_offset = 1;
        }
        $('.inner-link').smoothScroll({
            speed: 900,
            offset: header_offset
        });

        $('a.btn:not(.inner-link)').smoothScroll({
            speed: 900,
            offset: header_offset
        });
    });


    /* ===================================
     shrink navigation Active
     ====================================== */
    $('.navigation-menu').onePageNav({
        scrollSpeed: 750,
        scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
        scrollOffset: 79, //Height of Navigation Bar
        currentClass: 'active',
        filter: ':not(.btn-very-small)'
    });    
});

/* ===================================
 shrink navigation
 ====================================== */
$(window).scroll(function () {
    bind_shrink_header();
});

function bind_shrink_header() {
    if ($('nav').hasClass('shrink-header')) {

        $('.shrink-header').addClass('shrink-nav');
        $('section:first').addClass('header-margin-top');

    } else if ($('nav').hasClass('shrink-big-header')) {

        $('.shrink-big-header').addClass('shrink-nav');
        $('section:first').addClass('header-margin-top-big');

    } else if ($('nav').hasClass('shrink-medium-header')) {

        $('.shrink-medium-header').addClass('shrink-nav');
        $('section:first').addClass('header-margin-top-medium');

    } else if ($('nav').hasClass('shrink-transparent-header-dark')) {

        $('.shrink-transparent-header-dark').addClass('shrink-nav');

    } else if ($('nav').hasClass('shrink-transparent-header-light')) {

        $('.shrink-transparent-header-light').addClass('shrink-nav');

    } else {

        $('.shrink-header').removeClass('shrink-nav');
        $('section:first').removeClass('header-margin-top');
    }

    if ($(window).scrollTop() > 10) {
        $("#header-topmost-callout").hide();
        $('nav').addClass('shrink');
        $("#top-menu-try-emmetblue").show();
    } else {
        $("#header-topmost-callout").show();
        $('nav').removeClass('shrink');
        $("#top-menu-try-emmetblue").hide();
    }
}

setTimeout(function () {
    $(window).scroll();
}, 500);

/*==============================================================
 wow animation - on scroll
 ==============================================================*/

var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 90,
    mobile: false,
    live: true
});
wow.init();


$(document).ready(function(){
    $(document).on('click', '.yamm .dropdown-menu', function(e) {
      e.stopPropagation()
    });

    if (isMobile.any()){
        $("#header-topmost-callout").remove();
        // $(".navbar-collapse").addClass("display-none");
    }
});