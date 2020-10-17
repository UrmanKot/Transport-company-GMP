var calculateButton = document.querySelector('#calculate-button');
var calcError = document.querySelectorAll('.calc-form__error');
var calcInput = document.querySelectorAll('.calc-form__input');


    calculateButton.onclick = function(evt) {
        var calcKilometrage = document.getElementById('kilometrage').value;
        var calcCargoValue = document.getElementById('cargo-value').value;
        var calcWeight = document.getElementById('weight').value;
        var calcVolumeCargo = document.getElementById('volume-cargo').value;
        var calcTexture = document.getElementById('texture').value;

        var textureValue = 0;

        switch (calcTexture) {
            case 'mat':
                textureValue = 3000;
                break;
            case 'glossy':
                textureValue = 1200;
                break;
            case 'satin':
                textureValue = 2500;
                break;
            case 'fabric':
                textureValue = 2000;
                break;
        }

        var result = (parseInt(calcKilometrage, 10) * 7) + (parseInt(calcWeight, 10) * parseInt(calcVolumeCargo,10))  + Math.round(parseInt(calcCargoValue, 10) / 10) + textureValue;

        if (calcKilometrage == '' || calcCargoValue == '' || calcWeight== '' || calcVolumeCargo == '') {
            for (var i = 0; i < calcError.length; i++) {
                calcError[i].classList.add('calc-form__error--open');
            }

            for (var i = 0; i < calcError.length; i++) {
                calcInput[i].classList.add('calc-form__input--error');
            }

        }

        else {
            for (var i = 0; i < calcError.length; i++) {
                calcError[i].classList.remove('calc-form__error--open');
            }

            for (var i = 0; i < calcError.length; i++) {
                calcInput[i].classList.remove('calc-form__input--error');
            }
            document.getElementById('str').innerHTML = result + ' руб.';
        }
    };


