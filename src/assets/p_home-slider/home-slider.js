/* document.addEventListener('DOMContentLoaded', () => { */

    let slider = new Swiper('#home-slider', {
        autoplay: {
            delay: 5000
        },
        loop: true,
        autoHeight: true,
        pagination: {
            el: '.home-slider__dots',
            clickable: true
        },
        spaceBetween: 10
    });
/* }); */