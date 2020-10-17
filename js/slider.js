if (window.matchMedia('(max-width: 420px)').matches) {

    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slider-arrow slider-arrow--left"></button>',
        nextArrow: '<button type="button" class="slider-arrow slider-arrow--right"></button>'
    });
} else if (window.matchMedia('(max-width: 600px)').matches) {

    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: '<button type="button" class="slider-arrow slider-arrow--left"></button>',
        nextArrow: '<button type="button" class="slider-arrow slider-arrow--right"></button>'
    });
} else if (window.matchMedia('(max-width: 900px)').matches) {
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button type="button" class="slider-arrow slider-arrow--left"></button>',
        nextArrow: '<button type="button" class="slider-arrow slider-arrow--right"></button>'
    });
} else {
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button type="button" class="slider-arrow slider-arrow--left"></button>',
        nextArrow: '<button type="button" class="slider-arrow slider-arrow--right"></button>'
    });
}
