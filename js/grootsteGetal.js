(function () {

    var GreatestNumberEngine = (function () {
        function GreatestNumberEngine() {
            // NOP
        }

        GreatestNumberEngine.findGreatestNumber = function (someArray) {
            var maxNumber = Math.max.apply(Math, someArray);

            return {
                maxNumber: maxNumber,
                position: someArray.indexOf(maxNumber)
            };
        };

        return GreatestNumberEngine;
    })();

    var scores = [30,410,10,490];

    var resultDiv = document.getElementById('resultDiv');
    var header = document.createElement('h1');
    var textNode = document.createTextNode('Grootste getal');
    header.appendChild(textNode);
    resultDiv.appendChild(header);

    var paragraph = document.createElement('p');
    var greatesttNumberObject = GreatestNumberEngine.findGreatestNumber(scores);
    var result = 'Het grootste getal: ' + greatesttNumberObject.maxNumber + ' staat in de array op positie:';
    result += greatesttNumberObject.position;
    textNode = document.createTextNode(result);
    paragraph.appendChild(textNode);
    resultDiv.appendChild(paragraph);
})();