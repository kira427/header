const contentbtnBtnOpen = document.querySelector('.content__btn-open');
const close = document.querySelector('.close');
const headerTopMenu = document.querySelector('.header__top-menu');
const overlay = document.querySelector('.overlay');
const headerContentSearch = document.querySelector('.header__content-search');
const headerContentForm = document.querySelector('.header__content-form');

if (contentbtnBtnOpen) {
    contentbtnBtnOpen.addEventListener('click', () => {
        headerTopMenu.classList.add('active');
        overlay.style.display = 'block';
    })
}

if (close) {
    close.addEventListener('click', () => {
        headerTopMenu.classList.remove('active');
        overlay.style.display = 'none';
    })
}

window.addEventListener('click', (e) => {
    if (e.target == overlay) {
        headerTopMenu.classList.remove('active');
        overlay.style.display = 'none';
    }
})


headerContentSearch.addEventListener('click', () => {
    headerContentForm.classList.toggle('active');
})

//------SLIDER-------------------
// Инициализация превью слайдера
const sliderThumbs = new Swiper('.slider__thumbs .swiper-container', {
    // задаем параметры
    direction: 'vertical',
    slidesPerView: 4, 
    spaceBetween: 24,
    navigation: { 
        nextEl: '.slider__next', 
        prevEl: '.slider__prev' 
    },
    freeMode: true,
    breakpoints: { 
        0: { 
            direction: 'horizontal', 
        },
        855: { 
            direction: 'vertical',
        }
    }
});

// Инициализация слайдера изображений
const sliderImages = new Swiper('.slider__images .swiper-container', { 
    // задаем параметры
    direction: 'vertical', 
    slidesPerView: 1, 
    spaceBetween: 32, 
    mousewheel: true,
    effect: "fade",
    navigation: {
        nextEl: '.slider__next',
        prevEl: '.slider__prev' 
    },
    grabCursor: true, 
    thumbs: { 
        swiper: sliderThumbs
    },
    breakpoints: { 
        0: { 
            direction: 'horizontal',
        },
        855: { 
            direction: 'vertical', 
        }
    }
});

//--------------LIGHBOX-------------------------------

const jsImages = document.querySelectorAll('.js__images'),
    lightbox = document.querySelector('.js__lightbox'),
    lightboxImg = lightbox.querySelector('.js__lightbox-img'),
    lightboxClose = lightbox.querySelector('.js__lightbox-close'),
    lightboxCounter = lightbox.querySelector('.js__lightbox-counter');
const nextItem = document.querySelector('.next__item');
const prevItem = document.querySelector('.prev__item');
const openFull = document.querySelector('.js-open-full__expand');
const elem = document.documentElement;
let itemIndex = 0;

for (let i = 0; i < jsImages.length; i++) {
    jsImages[i].addEventListener('click', () => {
        itemIndex = i;
        changeItem();
        toggleLightbox();
    })
}

nextItem.addEventListener('click', function () {
    if (itemIndex === jsImages.length - 1) {
        itemIndex = 0;
    } else {
        itemIndex++;
    }
    changeItem()
})

prevItem.addEventListener('click', function () {
    if (itemIndex === 0) {
        itemIndex = jsImages.length - 1;
    } else {
        itemIndex--;
    }
    changeItem()
})

function toggleLightbox() {
    lightbox.classList.toggle('open');
}

function changeItem() {
    imgSrc = jsImages[itemIndex].querySelector('.js__images img').getAttribute("src");
    lightboxImg.src = imgSrc;
    lightboxCounter.innerHTML = (itemIndex + 1) + ' ' + '/ ' + jsImages.length;
}

lightbox.addEventListener('click', function (e) {
    if (e.target === lightboxClose || e.target === lightbox) {
        toggleLightbox();
    }
})

/* Просмотр в полноэкранном режиме */
openFull.addEventListener('click', function () {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
        elem.msRequestFullscreen();
    }
    closeFullscreen()

});

/* Закрыть полный экран */
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        /* Firefox */
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        /* IE/Edge */
        document.msExitFullscreen();
    }
}