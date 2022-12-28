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

window.onclick = function (e) {
    if ( e.target == overlay) {
        headerTopMenu.classList.remove('active');
        overlay.style.display = 'none';
    }
}

headerContentSearch.addEventListener('click', () => {
    headerContentForm.classList.toggle('active');
})
