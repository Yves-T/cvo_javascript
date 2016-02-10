class LastWord {
    someText:string;

    constructor(someText:string) {
        this.someText = someText;
    }

    getLastWord() {
        var userinput = this.someText.trim();
        var lastSpaceIndex = userinput.lastIndexOf(' ');
        return this.someText.substring(lastSpaceIndex);
    }

}


var userInput = prompt("Geef een stukje tekst in");
var lastWordObject = new LastWord(userInput);
var resultDiv = document.getElementById('resultDiv');
var paragraph = document.createElement('p');
var textNode = document.createTextNode(lastWordObject.getLastWord());
paragraph.appendChild(textNode);
resultDiv.appendChild(paragraph);
