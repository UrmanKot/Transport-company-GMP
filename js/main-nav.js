var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.page-header__toggle');
var overlay = document.querySelector('.overlay');
var close = document.querySelector('.main-nav__close');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
        overlay.classList.add('overlay--opened');
        //                navToggle.classList.add('page-header__toggle--closed');
    } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
        overlay.classList.remove('overlay--opened');
    }
});

close.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
        overlay.classList.add('overlay--opened');
        //                navToggle.classList.add('page-header__toggle--closed');
    } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
        overlay.classList.remove('overlay--opened');
    }
});