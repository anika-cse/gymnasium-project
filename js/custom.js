$(document).ready(function(){

    // back to top scroll
    var backToTop = $('.back-to-top');
    var navFix = $('nav');

    $(window).on('scroll', function(){
        var scrolling = $(this).scrollTop();

        // scroll back-to-top
        if(scrolling > 200)
        {
            // show
            backToTop.slideDown();
        }
        else{
            // hide
            backToTop.slideUp();
        }

        // navlist fix after 500px
        if(scrolling > 500)
        {
            navFix.addClass('navfix');
        }

        else{
            navFix.removeClass('navfix');
        }
    });


    backToTop.on('click', function(){
        $('html,body').animate({
            scrollTop: 0,
        }, 1500);
    });

    
    // windows scorlling
    $(window).on('scroll',function(){
        var scrolling = $(this).scrollTop();

        if(scrolling > 610)
        {
            $('.navbar').addClass('nav-bg');
        }
        else
        {
            $('.navbar').removeClass('nav-bg');
        }
    });

    // banner slider starts
    $('.banner-slider').slick({
        arrows: false,
        autoplay: true,
        dots: true,
        responsive : [
            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },

              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },

              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },
        ]
    });

    // about venobox starts
    $('.venobox').venobox({
        arrowsColor: '#e23e38',
        closeColor: '#e23e38',
        spinner: 'cube-grid',
    }); 

    // testimonial slider starts
       $('.testimonial-slider').slick({
        arrows: false,
        autoplay: true,
        slidesToShow: 2,
        dots: true,
        responsive : [
            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },

              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
              },

              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
              },
        ]
    });

    // countdown starts
    $('.counter').counterUp({
        delay: 20,
        time: 1000
    });


    // brand slider starts
    $('.brand-slider').slick({
        prevArrow: '<i class="fa fa-chevron-left prev-arrow"></i>',
        nextArrow: '<i class="fa fa-chevron-right next-arrow"></i>',
        autoplay: true,
        slidesToShow: 5,
        responsive : [
            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },

              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
              },

              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                }
              },
        ]
    });

});