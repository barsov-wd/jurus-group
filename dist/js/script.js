
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

// Menu

const menu = document.querySelector('.header__nav'),
    menuItem = document.querySelectorAll('.header__menu-item'),
    humburger = document.querySelector('.humburger');

    humburger.addEventListener('click', () => {
        humburger.classList.toggle('humburger_active');
        menu.classList.toggle('header__nav_active');
    });


    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            humburger.classList.toggle('humburger_active');
            menu.classList.toggle('header__nav_active');
        });
    });