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
        navText: ['<i class="fa fa-caret-left"></i>','<i class="fa fa-caret-right"></i>'],
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
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        },
        center: true,
        navText: ['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        loop: true,
        navContainer: '.block-carousel-center-four .nav-container'
    });

});

/**
 * Off-canvas Menu
 */
function openNav() {
    document.getElementById("mySidenav").style.right = "0";
}

function closeNav() {
    document.getElementById("mySidenav").style.right = "-250px";
}