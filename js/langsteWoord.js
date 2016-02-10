(function () {
    var someArray = ["Welk woord is het langste? Moeilijk te zeggen, laat javascript het voor je doen."];

    String.prototype.longestWord = function () {
        var splitArray = this.split(' ');
        return splitArray.reduce(function (prev, current) {
            return (prev.length > current.length) ? prev : current;
        });
    };

    var resultDiv = document.getElementById('resultDiv');
    var header = document.createElement('h1');
    var textNode = document.createTextNode('Langste woord');
    header.appendChild(textNode);
    resultDiv.appendChild(header);

    var paragraph = document.createElement('p');
    var result = "Het langste woord is:" + someArray[0].longestWord() + '. ';
    result += "Dit is " + someArray[0].longestWord().length + " tekens lang.";
    textNode = document.createTextNode(result);
    paragraph.appendChild(textNode);
    resultDiv.appendChild(paragraph);
})();