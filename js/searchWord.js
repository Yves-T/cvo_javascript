var SearchWord = (function () {
    function SearchWord(text, searchString) {
        this.stringPartials = [];
        this.text = text;
        this.searchString = searchString;
        this.buildStringPartials();
    }
    SearchWord.prototype.getSearchIndexes = function () {
        return this.stringPartials;
    };
    SearchWord.prototype.isContainingSearchString = function (someString) {
        return someString.indexOf(this.searchString);
    };
    SearchWord.prototype.buildStringPartials = function () {
        var textArray = this.text.match(/\S+\s*/g);
        var that = this;
        textArray.forEach(function (element) {
            if (that.isContainingSearchString(element.trim()) !== -1) {
                var startIndex = text.indexOf(element.trim());
                var endIndex = (startIndex + element.trim().replace(/[^A-Za-z0-9\s]/g, '').length);
                var stringPartial = { startIndex: startIndex, endIndex: endIndex };
                that.stringPartials.push(stringPartial);
            }
        });
    };
    return SearchWord;
})();
var text = "Hello world is a worldwide first exercise in any programming language. Yes, in whole the worldidelidoedeli!";
var searchString = 'world';
var searchObject = new SearchWord(text, searchString);
var searchIndexes = searchObject.getSearchIndexes();
var resultDiv = document.getElementById('result');
if (searchIndexes.length > 0) {
    searchIndexes.forEach(function (element) {
        var resultString = element.startIndex + " tot " + element.endIndex + ": " +
            text.substring(element.startIndex, element.endIndex);
        var paragraph = document.createElement('p');
        var textNode = document.createTextNode(resultString);
        paragraph.appendChild(textNode);
        resultDiv.appendChild(paragraph);
    });
    var paragraph = document.createElement('p');
    var textNode = document.createTextNode('Found:' + searchIndexes.length);
    paragraph.appendChild(textNode);
    resultDiv.appendChild(paragraph);
}
else {
    var paragraph = document.createElement('p');
    var textNode = document.createTextNode("This text does not contain the word ;\)");
    paragraph.appendChild(textNode);
    resultDiv.appendChild(paragraph);
    paragraph = document.createElement('p');
    textNode = document.createTextNode("No world Found :(");
    paragraph.appendChild(textNode);
    resultDiv.appendChild(paragraph);
}
