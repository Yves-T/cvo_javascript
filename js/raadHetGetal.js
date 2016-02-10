var getal, pogingen, raadpoging, tekst;
var myGame;
var GuessGame = (function () {
    function GuessGame() {
        this.result = document.getElementById('afdrukResultaat');
        this.startButton = document.getElementById('knop_start');
        this.guessInputField = document.getElementById('raad');
        this.tryButton = document.getElementById('knop_poging');
        this.resetGameButton = document.getElementById('knop_opnieuw');
        this.getal = this.getRandomInt(1, 10);
        this.pogingen = 0;
        this.showStartButton(true);
        this.showGuessInputField(false);
        this.showTryButton(false);
        this.showResetButton(false);
    }
    GuessGame.prototype.try = function () {
        this.showStartButton(false);
        this.pogingen++;
        var inputValue = this.guessInputField;
        if (!inputValue.value) {
            return { callBack: this.emptyInputField.bind(this) };
        }
        else if (!this.isNumeric(inputValue.value)) {
            return { callBack: this.inputIsNotNummeric.bind(this) };
        }
        else if (inputValue.value > this.getal) {
            return { callBack: this.userGuessGreaterThenComputer.bind(this) };
        }
        else if (inputValue.value < this.getal) {
            return { callBack: this.userGuessLessThenComputer.bind(this) };
        }
        else {
            return { callBack: this.gameOver.bind(this) };
        }
    };
    GuessGame.prototype.start = function () {
        this.getal = this.getRandomInt(1, 10);
        this.pogingen = 0;
        this.clearResult();
        this.showStartButton(false);
        this.showGuessInputField(true);
        this.showTryButton(true);
        this.showResetButton(false);
    };
    GuessGame.prototype.emptyInputField = function () {
        this.result.innerHTML = 'U hebt niets ingevuld?';
    };
    GuessGame.prototype.inputIsNotNummeric = function () {
        this.result.innerHTML = 'U moet een getal invullen.';
    };
    GuessGame.prototype.userGuessGreaterThenComputer = function () {
        this.result.innerHTML = 'Het getal in mijn gedachten is lager.';
    };
    GuessGame.prototype.userGuessLessThenComputer = function () {
        this.result.innerHTML = 'Het getal in mijn gedachten is hoger.';
    };
    GuessGame.prototype.clearResult = function () {
        this.result.innerHTML = '';
    };
    GuessGame.prototype.gameOver = function () {
        var result = 'Proficiat, het getal is inderdaad ' + this.getal + '. ';
        result += 'Je hebt het gevonden na ' + this.pogingen + ' pogingen!';
        this.result.innerHTML = result;
        this.showGuessInputField(false);
        this.showTryButton(false);
        this.showResetButton(true);
    };
    GuessGame.prototype.showStartButton = function (show) {
        this.toggleVisibility(this.startButton, show);
    };
    GuessGame.prototype.showGuessInputField = function (show) {
        this.toggleVisibility(this.guessInputField, show);
    };
    GuessGame.prototype.showTryButton = function (show) {
        this.toggleVisibility(this.tryButton, show);
    };
    GuessGame.prototype.showResetButton = function (show) {
        this.toggleVisibility(this.resetGameButton, show);
    };
    GuessGame.prototype.toggleVisibility = function (element, vissible) {
        var elementDisplay = element.style;
        elementDisplay.display = (vissible) ? 'inline' : "none";
    };
    GuessGame.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    GuessGame.prototype.isNumeric = function (someNumber) {
        return !isNaN(parseFloat(someNumber)) && isFinite(someNumber);
    };
    return GuessGame;
})();
function startSpel() {
    myGame.start();
}
function poging() {
    var result = myGame.try();
    result.callBack();
}
function setUpGame() {
    myGame = new GuessGame();
}
setUpGame();
