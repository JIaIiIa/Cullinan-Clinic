const openBurger = document.querySelector('.burger-open__link')
const stopScroll = document.querySelector('body')
const sideMenu = document.querySelector('.header__burger')

openBurger.addEventListener('click', () => {
    stopScroll.classList.toggle('open')
    sideMenu.classList.toggle('open')
})


const menuLink = document.querySelector('.header__menu-link.service-list');
const serviceList = document.querySelector('.burger__service-list');
const arrowIcon = menuLink.querySelector('img');
const paddingBottomService = 10;

menuLink.addEventListener('click', function (event) {
    event.preventDefault();

    const isExpanded = serviceList.classList.contains('active');

    if (isExpanded) {
        serviceList.style.maxHeight = '0px';
        serviceList.classList.remove('active');
        arrowIcon.style.transform = 'rotate(0deg)';
    } else {
        const totalHeight = serviceList.scrollHeight + paddingBottomService;
        serviceList.style.maxHeight = totalHeight + 'px';
        serviceList.classList.add('active');
        arrowIcon.style.transform = 'rotate(180deg)';
    }
});


const certificateOptions = document.querySelectorAll('.special-offer__button-item');
const submitButton = document.querySelector('.special-offer__send-link');
let selectedValue = null;

certificateOptions.forEach((button) => {
    button.addEventListener('click', () => {
        certificateOptions.forEach((btn) => btn.classList.remove('active'));

        button.classList.add('active');

        selectedValue = button.getAttribute('data-value');
    });
});

/*   submitButton.addEventListener('click', () => {
    if (selectedValue) {
      alert(`Вы выбрали сертификат на сумму ${selectedValue} ₽`);
      console.log(submitButton);

    } else {
      alert('Пожалуйста, выберите номинал сертификата.');
    }
  }); */


const hideText = document.querySelectorAll('.service-main__service-link');

hideText.forEach((button) => {

    if (window.innerWidth <= 900) {
        button.innerHTML = ``;
    }

    else {
        button.innerHTML = `Перейти`
    }
}
);


if (document.querySelector('.wrapper')) {

    let mm = gsap.matchMedia();
    const timeline = gsap.timeline();

    mm.add('(min-width: 1439px)', () => {


        /* gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);
        ScrollSmoother.create({
            wrapper: '.wrapper',
            content: '.content',
            smooth: 1.0,
            effects: true,
        }); */

        gsap.fromTo('.promotions__content', {
            y: 400, opacity: 0
        }, {
            y: 0,
            scrollTrigger: {
                trigger: '.main',
                start: '70% center',
                end: 'bottom top',
            },
            duration: 1.6,
            opacity: 1
        }
        )

        gsap.fromTo('.about-us__content', { opacity: 0 }, {
            scrollTrigger: {
                trigger: '.main',
                start: '70% center',
                end: 'bottom top',
            },

            duration: 2.5,
            opacity: 1,
            delay: 2
        })
        gsap.set('.services__content-item', { x: -200, })
        gsap.set('.services__item-title', { y: -200, opacity: 0 })
        gsap.set('.services__item-text', { y: -200, opacity: 0 })
        gsap.set('.services__item-button', { y: -300, opacity: 0 })



        gsap.to('.services__content-item', {
            x: 0,
            scrollTrigger: {
                trigger: '.about-us',
                start: 'center center',
                end: 'bottom top',
            },
            duration: 1,
            delay: 0.3
        })


        gsap.to('.services__item-title', {
            y: 0,
            scrollTrigger: {
                trigger: '.about-us',
                start: 'center center',
                end: 'bottom top',
            },
            delay: 0.8,
            duration: 1
        })
        gsap.to('.services__item-text', {
            y: 0,
            scrollTrigger: {
                trigger: '.about-us',
                start: 'center center',
                end: 'bottom top',
            },
            delay: 0.8,
            duration: 1
        })
        gsap.to('.services__item-button', {
            y: 0,
            scrollTrigger: {
                trigger: '.about-us',
                start: 'center center',
                end: 'bottom top',
            },
            delay: 0.8,
            duration: 1
        })
        gsap.to('.services__item-title', {
            opacity: 1,
            scrollTrigger: {
                trigger: '.about-us',
                start: 'center center',
                end: 'bottom top',
            },
            delay: 1.3,
            duration: 1.2
        })
        gsap.to('.services__item-text', {
            opacity: 1,
            scrollTrigger: {
                trigger: '.about-us',
                start: 'center center',
                end: 'bottom top',
            },
            delay: 1.3,
            duration: 1.2
        })
        gsap.to('.services__item-button', {
            opacity: 1,
            scrollTrigger: {
                trigger: '.about-us',
                start: 'center center',
                end: 'bottom top',
            },
            delay: 1.3,
            duration: 1
        })


        gsap.to('.logo-image-2', {
            rotateX: '-70deg', duration: 0.1, repeat: -1,
            scrollTrigger: {
                trigger: '.about-us',
                start: 'top center',
            }
        })

    })
}



Fancybox.bind('[data-fancybox]', {
    // Опции Fancybox
    autoFocus: false,  // Не фокусироваться на первом input при открытии
    dragToClose: false,  // Отключить закрытие при перетаскивании вниз
    groupAll: false,  // Группировать все попапы вместе
    placeFocusBack: false,  // Не возвращать фокус на элемент, который открыл попап
    Toolbar: false,  // Отключить стандартную панель инструментов Fancybox
    height: "auto",
    width: "auto",
    maxWidth: "90%",  // Максимальная ширина в 90% от экрана
    maxHeight: "90%",  // Максимальная высота в 90% от экрана
});


$(document).ready(function () {
    $('[data-fancybox="gallery"]').fancybox({

        loop: true,
        buttons: [
            "zoom",
            "slideShow",
            "fullScreen",
            "download",
            "thumbs",
            "close"
        ]
    });
});




if (document.querySelector('.service-prices__list')) {
    const titleWrapper = document.querySelector('.service-prices__title-wrapp');
    const items = document.querySelectorAll('.service-prices__item');
    const wrapItem = document.querySelector('.service-prices__list');
    const lastChild = document.querySelectorAll('.service-prices__item:nth-child(12n)')

    if (items.length <= 12) {
        items.forEach((item, index) => {
            if (index === items.length - 1) {
                item.style.borderBottom = 'transparent';
                item.style.paddingBottom = 'unset';
            }
        })
    }

    if (items.length > 12) {

        const existingTitle = document.querySelector('.service-prices__title');

        const clonedTitle = existingTitle.cloneNode(true);

        titleWrapper.appendChild(clonedTitle);

        wrapItem.style.display = 'grid';
        wrapItem.style.gridTemplateColumns = 'repeat(2, 1fr)';
        wrapItem.style.maxHeight = '100%';


        items.forEach((item, index) => {

            if (index % 2 === 0 && index >= items.length - 2) {
                item.style.borderBottom = '1px solid transparent';
            }

            if (index % 2 !== 0 && index >= items.length - 2) {
                item.style.borderBottom = '1px solid transparent';
            }

        });
    }


    window.addEventListener('resize', () => {
        if (window.innerWidth <= 950) {
            wrapItem.style.display = 'flex';
            items.forEach((item, index) => {
                if (index === items.length - 1) {
                    item.style.borderBottom = '1px solid transparent';
                } else {
                    item.style.borderBottom = '';
                }
            });
        }
    });


    window.dispatchEvent(new Event('resize'));
}





const accordeonButton = document.querySelectorAll('.ask-question__questions-button')
const paddingBottom = 70;

accordeonButton.forEach(button => {
    button.addEventListener('click', function () {
        const questionItem = button.closest('.ask-question__questions-item');
        const questionAnswers = questionItem.querySelector('.ask-question__answers');
        const isExpanded = questionAnswers.classList.contains('active');

        if (isExpanded) {
            questionAnswers.style.maxHeight = '0px';
            questionAnswers.classList.remove('active');
            button.classList.remove('active');
        } else {
            const totalHeight = questionAnswers.scrollHeight + paddingBottom;
            questionAnswers.style.maxHeight = totalHeight + 'px';
            questionAnswers.classList.add('active');
            button.classList.add('active');
        }
    });

});




new Swiper('.promotions__content', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,

    },
    loop: true,
    breakpoints: {
        2560: {
            slidesPerView: 2,
            spaceBetween: 30
        },

        1301: {
            slidesPerView: 2,
            spaceBetween: 30
        },

        900: {
            slidesPerView: 2,
            spaceBetween: 15
        },

        200: {
            slidesPerView: 1,
            spaceBetween: 15
        }
    },
    navigation: {
        prevEl: '.promotions__swiper-button_prev',
        nextEl: '.promotions__swiper-button_next'
    },
    speed: 1000,
    grabCursor: true
})

new Swiper('.services__content-list', {
    breakpoints: {
        1400: {
            slidesPerView: 4,
        },

        950: {
            slidesPerView: 3,
        },

        700: {
            slidesPerView: 2,
        },

        200: {
            slidesPerView: 1
        }

    },

    navigation: {
        prevEl: ".services__button_prev",
        nextEl: ".services__button_next"
    },

    spaceBetween: 30,
    speed: 500
})

new Swiper('.gallery__content-images', {

    breakpoints: {
        1440: {
            slidesPerView: 4,
            spaceBetween: 30,
        },

        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },

        1: {
            slidesPerView: 1.2,
            spaceBetween: 10,
        }
    },

    speed: 500,
    grabCursor: true

})

new Swiper('.professionals__content-list', {
    breakpoints: {
        1440: {
            slidesPerView: 4,
            spaceBetween: 30,
        },

        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },

        1: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    },

    speed: 500,
    grabCursor: true,
    navigation: {
        prevEl: '.professionals__button-prev',
        nextEl: '.professionals__button-next'
    }

})

if (document.querySelector('.special-offer')) {


    // Находим все кнопки с номиналом
    const buttons = document.querySelectorAll('.special-offer__button-item');
    const popupTextarea = document.querySelector('.callback-popup .speach_order');
    let selectedNominal = '';

    // Добавляем обработчики клика на каждую кнопку
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // Получаем значение номинала из data-атрибута
            selectedNominal = button.getAttribute('data-nominal');
        });
    });

    // Обрабатываем клик на ссылку "Оставить заявку"
    const sendLink = document.querySelector('.special-offer__send-link');
    sendLink.addEventListener('click', function () {
        if (selectedNominal) {
            // Добавляем текст с номиналом в textarea попапа
            popupTextarea.value = `Номинал сертификата: ${selectedNominal}`;
        } else {
            popupTextarea.value = ''; // Если номинал не выбран, поле пустое
        }
    });
}



const serviceMenuItem = document.querySelector('.header__menu-item.service');
const serviceWrapp = document.querySelector('.main__service-wrapp');

if (serviceMenuItem && serviceWrapp) {
    // Функция для показа блока
    const showServiceWrapp = () => {
        serviceWrapp.style.transform = 'translateY(0)';
        serviceWrapp.style.visibility = 'visible';
    };

    // Функция для скрытия блока
    const hideServiceWrapp = () => {
        serviceWrapp.style.transform = 'translateY(-160%)';
        serviceWrapp.style.visibility = 'hidden';
    };

    // Показ при наведении на пункт меню
    serviceMenuItem.addEventListener('mouseover', showServiceWrapp);

    // Скрытие при выходе с пункта меню, если не наведено на блок
    serviceMenuItem.addEventListener('mouseout', function () {
        setTimeout(function () {
            if (!serviceWrapp.matches(':hover')) {
                hideServiceWrapp();
            }
        }, 100); // Небольшая задержка для переключения курсора
    });

    // Показ при наведении на сам блок
    serviceWrapp.addEventListener('mouseover', showServiceWrapp);

    // Скрытие при выходе с блока
    serviceWrapp.addEventListener('mouseout', hideServiceWrapp);
}

const scrollUpBtn = document.querySelector('.footer__scroll-up');


window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollUpBtn.classList.add('show');
    } else {
        scrollUpBtn.classList.remove('show');
    }
});


scrollUpBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});










