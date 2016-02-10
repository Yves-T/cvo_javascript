var getal, pogingen, raadpoging, tekst;
var myGame;

class GuessGame {

    private result = document.getElementById('afdrukResultaat');
    private startButton = document.getElementById('knop_start');
    private guessInputField = document.getElementById('raad');
    private tryButton = document.getElementById('knop_poging');
    private resetGameButton = document.getElementById('knop_opnieuw');

    private getal;
    private pogingen;
    private raadpoging; // why do I need this ??
    private tekst; // why do I need this ??

    constructor() {
        this.getal = this.getRandomInt(1, 10);
        this.pogingen = 0;
        this.showStartButton(true);
        this.showGuessInputField(false);
        this.showTryButton(false);
        this.showResetButton(false);
    }

    public try() {
        this.showStartButton(false);
        this.pogingen++;
        var inputValue = (<HTMLInputElement>this.guessInputField);
        if (!inputValue.value) {
            return {callBack: this.emptyInputField.bind(this)}
        } else if (!this.isNumeric(inputValue.value)) {
            return {callBack: this.inputIsNotNummeric.bind(this)}
        } else if (inputValue.value > this.getal) {
            return {callBack: this.userGuessGreaterThenComputer.bind(this)}
        } else if (inputValue.value < this.getal) {
            return {callBack: this.userGuessLessThenComputer.bind(this)}
        } else {
            return {callBack: this.gameOver.bind(this)}
        }

    }

    public start() {
        this.getal = this.getRandomInt(1, 10);
        this.pogingen = 0;
        this.clearResult();
        this.showStartButton(false);
        this.showGuessInputField(true);
        this.showTryButton(true);
        this.showResetButton(false);
    }

    public emptyInputField() {
        this.result.innerHTML = 'U hebt niets ingevuld?';
    }

    public inputIsNotNummeric() {
        this.result.innerHTML = 'U moet een getal invullen.';
    }

    public userGuessGreaterThenComputer() {
        this.result.innerHTML = 'Het getal in mijn gedachten is lager.';
    }

    public userGuessLessThenComputer() {
        this.result.innerHTML = 'Het getal in mijn gedachten is hoger.';
    }

    public clearResult() {
        this.result.innerHTML = '';
    }

    public gameOver() {
        var result = 'Proficiat, het getal is inderdaad ' + this.getal + '. ';
        result += 'Je hebt het gevonden na ' + this.pogingen + ' pogingen!';
        this.result.innerHTML = result;
        this.showGuessInputField(false);
        this.showTryButton(false);
        this.showResetButton(true);
    }

    public showStartButton(show) {
        this.toggleVisibility(this.startButton, show);
    }

    public showGuessInputField(show) {
        this.toggleVisibility(this.guessInputField, show);
    }

    public showTryButton(show) {
        this.toggleVisibility(this.tryButton, show);
    }

    public showResetButton(show) {
        this.toggleVisibility(this.resetGameButton, show);
    }

    private toggleVisibility(element, vissible) {
        var elementDisplay = element.style;
        elementDisplay.display = (vissible) ? 'inline' : "none";
    }

    private getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    private isNumeric(someNumber) {
        return !isNaN(parseFloat(someNumber)) && isFinite(someNumber);
    }
}

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
