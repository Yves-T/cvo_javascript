var LastWord = (function () {
    function LastWord(someText) {
        this.someText = someText;
    }
    LastWord.prototype.getLastWord = function () {
        var userinput = this.someText.trim();
        var lastSpaceIndex = userinput.lastIndexOf(' ');
        return this.someText.substring(lastSpaceIndex);
    };
    return LastWord;
})();
var userInput = prompt("Geef een stukje tekst in");
var lastWordObject = new LastWord(userInput);
var resultDiv = document.getElementById('resultDiv');
var paragraph = document.createElement('p');
var textNode = document.createTextNode(lastWordObject.getLastWord());
paragraph.appendChild(textNode);
resultDiv.appendChild(paragraph);
