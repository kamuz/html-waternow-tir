jQuery(document).ready(function($){

    /**
     * First home page slider
     */
     $('.block-slider-full-width .owl-carousel').owlCarousel({
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
        navText: ['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        loop: true
    });

    /**
     * Second home page carousel
     */
     $('.block-carousel-center-four .owl-carousel').owlCarousel({
        nav: true,
        dots: false,
        margin: 30,
        responsive: {
            600: {
                items: 3
            }
        },
        center: true,
        navText: ['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        loop: true
    });

});