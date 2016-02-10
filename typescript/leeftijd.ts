/// <reference path="DomWriter.ts" />
(function () {

    class DateCalculator {
        constructor() {
            // NOP
        }

        static calculateAge(year) {
            var now = new Date();
            var currentYear = now.getFullYear();
            return currentYear - year;
        }
    }

    var formDiv = document.getElementById('formDiv');
    Dom.DomWriter.createDomNode(formDiv, 'h3', 'Dit jaar wordt u:');
    var inputField =  Dom.DomWriter.createDomNode(formDiv, 'input', '');
    inputField.setAttribute('type', 'text');
    inputField.setAttribute('disabled', 'disabled');
    inputField.setAttribute('id', 'showUserBirthDay');
    var button = Dom.DomWriter.createDomNode(formDiv, 'button', 'Toon het me');
    button.onclick = handleButtonClick;

    function handleButtonClick() {
        leeftijdBerekenen(1971);
    }

    function leeftijdBerekenen(year) {
        var inputValue = (<HTMLInputElement>document.getElementById('showUserBirthDay'));
        inputValue.value = DateCalculator.calculateAge(year).toString();
    }
})();
