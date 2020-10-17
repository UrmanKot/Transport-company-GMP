var questioins = document.querySelectorAll('.questions__text');
var openButtons = document.querySelectorAll('.questions__button');

var addThumbnailClick = function (question, openButton) {
    openButton.addEventListener('click', function () {
        question.classList.toggle('questions__text--closed');
    });
};

for (var i = 0; i < questioins.length; i++) {
    addThumbnailClick(questioins[i], openButtons[i]);
}

