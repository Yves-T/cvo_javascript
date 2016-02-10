var computerkeuze = Number();
var computertekst = String();
var computerGame:Game;

class Game {

    private gameText = {
        1: 'steen',
        2: 'papier',
        3: 'schaar'
    };

    constructor() {
        computerkeuze = this.computer();
    }

    private computer() {
        return this.getRandomInt(1, 3);
    }

    private getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    public deterineWinner(spelerkeuze) {
        return (spelerkeuze == 1 && computerkeuze == 3)
            || (spelerkeuze == 2 && computerkeuze == 1)
            || (spelerkeuze == 3 && computerkeuze == 2);
    }

    public renderResult(userWon, spelerkeuze) {
        var resultDiv = document.getElementById('resultDiv');
        var paragraph = document.createElement('p');
        resultDiv.appendChild(paragraph);
        var textNode = document.createTextNode(this.buildResultString(userWon, spelerkeuze));
        paragraph.appendChild(textNode);
    }

    private buildResultString(userWon, spelerkeuze) {
        var result = "U hebt gekozen voor:" + this.keuze_naar_tekst(spelerkeuze) + '.';
        computertekst = this.keuze_naar_tekst(computerkeuze);
        result += "De computer heeft gekozen voor:" + computertekst;
        result += (userWon) ? " U hebt dus gewonnen!" : " U hebt verloren.";
        return result;
    }

    private keuze_naar_tekst(nummer) {
        return this.gameText[nummer];
    }
}

function initGame() {
    computerGame = new Game();
}

function hand(spelerkeuze) {
    var userWon = computerGame.deterineWinner(spelerkeuze);
    computerGame.renderResult(userWon, spelerkeuze);
}

initGame();