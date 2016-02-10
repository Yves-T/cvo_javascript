(function () {

    var ReverseEngine = (function () {
        function ReverseEngine() {
            // NOP
        }

        ReverseEngine.createReverseArray = function (zin) {
            return Rx.Observable.fromArray(zin)
                .map(function (sentence) {
                    return sentence.split(' ');
                }).map(function (wordArray) {
                    var reverseArray = [];
                    wordArray.forEach(function (word) {
                        reverseArray.unshift(word);
                    });
                    return reverseArray;
                });
        };

        return ReverseEngine;
    })();

    var resultDivOneItem = document.getElementById('resultOneItemInArray');
    var text = document.createTextNode('Een element in array');
    var header = document.createElement('h1');
    header.appendChild(text);
    resultDivOneItem.appendChild(header);

    var resultDivMoreThenOneItem = document.getElementById('resultMoreThenOneItemInArray');
    text = document.createTextNode('Meer dan Een element in array');
    header = document.createElement('h1');
    header.appendChild(text);
    resultDivMoreThenOneItem.appendChild(header);

    var zin = ["Kan jij achterstevoren praten?"];
    var otherZin = ["Kan jij achterstevoren praten?", "Over meerdere zinnen?"];

    ReverseEngine.createReverseArray(zin).subscribe(function (reverseArray) {
        var text = document.createTextNode(reverseArray.join(' '));
        var paragraph = document.createElement('p');
        paragraph.appendChild(text);
        resultDivOneItem.appendChild(paragraph);
    });

    var reverseResultArray = [];
    ReverseEngine.createReverseArray(otherZin).subscribe(function (reverseArray) {
        reverseResultArray.unshift(reverseArray.join(' '));
    }, null, function () {
        reverseResultArray.forEach(function (reverseSentence) {
            console.log(reverseSentence);
            var text = document.createTextNode(reverseSentence);
            var paragraph = document.createElement('p');
            paragraph.appendChild(text);
            resultDivMoreThenOneItem.appendChild(paragraph);
        });
    });
})();