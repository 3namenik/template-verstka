/* document.addEventListener('DOMContentLoaded', () => { */
    
    if (document.querySelector('.slider')){
        console.log('slider.pug');
        document.querySelectorAll('.slider').forEach(item => {
            new Swiper(item.querySelector('.swiper'), {
                slidesPerView: 'auto',
                loop: true,
                navigation: {
                    nextEl: item.querySelector('.swiper-button-next'),
                    prevEl: item.querySelector('.swiper-button-prev'),
                },
            });
        });
    }

/* }); */
