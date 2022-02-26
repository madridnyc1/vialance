(function ($) {
    "use strict";
    //Timeline JS
   
    //Preloader
    $(window).on('load', function (event) {
        $('.js-preloader').delay(500).fadeOut(500);
    });

    //Open Story Box
    $('.box-btn').on('click', function() {
        $(this).toggleClass('open');
        $('.story-box').toggleClass('open');
    });
     //Open single nft item
     $('.nft-details-btn').on('click', function() {
      $('.nft-details-wrap').addClass('open');
    });
     $('.back-to-nft').on('click', function() {
      $('.nft-details-wrap').removeClass('open');
    });
     //Active Menu Item
     $('.header-menu.style2 .nav-item .modal-btn').on('click', function() {
        $(this).addClass('active');
      });
    $('.close-tab').on('click', function() {
        if($('.modal-btn').hasClass('active')){
            $('.modal-btn').removeClass('active')
        }
    });
    //Open Mobile dropdown
    $('.mb-dropdown-btn').on('click', function() {
        $('.nft-tablist').toggleClass('open');
    });
    $('.nft-tablist .nav-item .nav-link').on('click', function() {
      if($('.nft-tablist').hasClass('open')){
        $('.nft-tablist').removeClass('open');
      }
    });
    //Mint btn
    $('.mint-btn.style1').on('click', function() {
      $(this).toggleClass('sold');
    });


    //sticky Header
    var wind = $(window);
    var sticky = $('.header-wrap');
    wind.on('scroll', function () {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky');
        } else {
            sticky.addClass('sticky');
        }
    });

    // Paralax 
    $("body").mousemove(function(e) {
        parallaxIt(e, ".hero-circle span", -70);
        parallaxIt(e, ".hero-img", 60);
        parallaxIt(e, ".hero-text h1", 30);
    });	

    function parallaxIt(e, target, movement) {
        var $this = $("body");
        var relX = e.pageX - $this.offset().left;

        TweenMax.to(target, 1, {
            x: (relX - $this.width() / 2) / $this.width() * movement
        });
    }

    // Scroll animation
    AOS.init();

    //Nice Select Js
    $('select').niceSelect();

    //Nice Scroll js
    $(".nft-item-wrap, .story-para").niceScroll({
        cursorcolor: "#fff", // change cursor color in hex
        cursoropacitymin: 0, // change opacity when cursor is inactive (scrollabar "hidden" state), range from 1 to 0
        cursoropacitymax: 1, // change opacity when cursor is active (scrollabar "visible" state), range from 1 to 0
        cursorwidth: "5px", // cursor width in pixel (you can also write "5px")
        cursorborder: "1px solid #fff", // css definition for cursor border
        cursorborderradius: "5px", // border radius in pixel for cursor
        zindex: "auto", // change z-index for scrollbar div
        scrollspeed: 60, // scrolling speed
        mousescrollstep: 40, // scrolling speed with mouse wheel (pixel)
        touchbehavior: false, // enable cursor-drag scrolling like touch devices in desktop computer
        hwacceleration: true, // use hardware accelerated scroll when supported
        boxzoom: false, // enable zoom for box content
        dblclickzoom: true, // (only when boxzoom=true) zoom activated when double click on box
        gesturezoom: true, // (only when boxzoom=true and with touch devices) zoom activated when pinch out/in on box
        grabcursorenabled: true, // (only when touchbehavior=true) display "grab" icon
        autohidemode: false, // how hide the scrollbar works, possible values: 
        background: "", // change css for rail background
        iframeautoresize: true, // autoresize iframe on load event
        cursorminheight: 32, // set the minimum cursor height (pixel)
        preservenativescrolling: true, // you can scroll native scrollable areas with mouse, bubbling mouse wheel event
        railoffset: false, // you can add offset top/left for rail position
        bouncescroll: false, // (only hw accell) enable scroll bouncing at the end of content as mobile-like 
        spacebarenabled: true, // enable page down scrolling when space bar has pressed
        disableoutline: true, // for chrome browser, disable outline (orange highlight) when selecting a div with nicescroll
        horizrailenabled: true, // nicescroll can manage horizontal scroll
        railalign: "right", // alignment of vertical rail
        railvalign: "bottom", // alignment of horizontal rail
        enabletranslate3d: true, // nicescroll can use css translate to scroll content
        enablemousewheel: true, // nicescroll can manage mouse wheel events
        enablekeyboard: true, // nicescroll can manage keyboard events
        smoothscroll: true, // scroll with ease movement
        sensitiverail: true, // click on rail make a scroll
        enablemouselockapi: true, // can use mouse caption lock API (same issue on object dragging)
        cursorfixedheight: false, // set fixed height for cursor in pixel
        hidecursordelay: 400, // set the delay in microseconds to fading out scrollbars
        irectionlockdeadzone: 6, // dead zone in pixels for direction lock activation
        nativeparentscrolling: true, // detect bottom of content and let parent to scroll, as native scroll does
        enablescrollonselection: true, // enable auto-scrolling of content when selection text
        cursordragspeed: 0.3, // speed of selection when dragged with cursor
        rtlmode: "auto", // horizontal div scrolling starts at left side
        cursordragontouch: true, // drag cursor in touch / touchbehavior mode also
        oneaxismousemode: "auto", 
        scriptpath: "", // define custom path for boxmode icons ("" => same script path)
        preventmultitouchscrolling: true,// prevent scrolling on multitouch events
        disablemutationobserver: false,
      });  
    //Back To top
    function BackToTop() {
        $('.back-to-top').on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            }, 100);
            return false;
        });

        $(document).scroll(function () {
            var y = $(this).scrollTop();
            if (y > 600) {
                $('.back-to-top').fadeIn();
                $('.back-to-top').addClass('open');
            } else {
                $('.back-to-top').fadeOut();
                $('.back-to-top').removeClass('open');
            }
        });
    }
    BackToTop();

    //Magnific Popup Video
    $('.play-now').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        preloader: true,
    });
      
    // Timeline Js
    var items = document.querySelectorAll(".timeline li");
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
            items[i].classList.add("in-view");
        }
        }
    }
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

})(jQuery);
