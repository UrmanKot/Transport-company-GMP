var modalCarsButtonsOpen = document.querySelectorAll('.car-park__button');
var modalCarsButtonsClose = document.querySelectorAll('.modal-cars__close');
var modalsCars = document.querySelectorAll('.modal-cars');

console.log(modalCarsButtonsClose);

var addButtonClick = function (buttonOpen, buttonClose, modal) {
    var body = document.querySelector('body');

    buttonOpen.addEventListener('click', function (evt) {
        evt.preventDefault();
        modal.classList.add('modal-cars--opened');
        overlay.classList.add('overlay--opened');
        body.classList.add('overflow');
    });

    buttonClose.addEventListener('click', function (evt) {
        modal.classList.remove('modal-cars--opened');
        overlay.classList.remove('overlay--opened');
        body.classList.remove('overflow');
    });
};

for (var i = 0; i < modalCarsButtonsOpen.length; i++) {
    addButtonClick(modalCarsButtonsOpen[i], modalCarsButtonsClose[i], modalsCars[i]);
}