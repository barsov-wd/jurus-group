
new Swiper('.swiper', {
    navigation: {
        nextEl: '.slider__arrows--next',
        prevEl: '.slider__arrows--prev'
    },

    slidesPerView: 3,

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3
        }
    }
});