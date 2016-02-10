var computerkeuze = Number();
var computertekst = String();
var computerGame;
var Game = (function () {
    function Game() {
        this.gameText = {
            1: 'steen',
            2: 'papier',
            3: 'schaar'
        };
        computerkeuze = this.computer();
    }
    Game.prototype.computer = function () {
        return this.getRandomInt(1, 3);
    };
    Game.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    Game.prototype.deterineWinner = function (spelerkeuze) {
        return (spelerkeuze == 1 && computerkeuze == 3)
            || (spelerkeuze == 2 && computerkeuze == 1)
            || (spelerkeuze == 3 && computerkeuze == 2);
    };
    Game.prototype.renderResult = function (userWon, spelerkeuze) {
        var resultDiv = document.getElementById('resultDiv');
        var paragraph = document.createElement('p');
        resultDiv.appendChild(paragraph);
        var textNode = document.createTextNode(this.buildResultString(userWon, spelerkeuze));
        paragraph.appendChild(textNode);
    };
    Game.prototype.buildResultString = function (userWon, spelerkeuze) {
        var result = "U hebt gekozen voor:" + this.keuze_naar_tekst(spelerkeuze) + '.';
        computertekst = this.keuze_naar_tekst(computerkeuze);
        result += "De computer heeft gekozen voor:" + computertekst;
        result += (userWon) ? " U hebt dus gewonnen!" : " U hebt verloren.";
        return result;
    };
    Game.prototype.keuze_naar_tekst = function (nummer) {
        return this.gameText[nummer];
    };
    return Game;
})();
function initGame() {
    computerGame = new Game();
}
function hand(spelerkeuze) {
    var userWon = computerGame.deterineWinner(spelerkeuze);
    computerGame.renderResult(userWon, spelerkeuze);
}
initGame();
