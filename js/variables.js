var BtwCalculator = (function () {
    function BtwCalculator(price, btw, amount) {
        this.price = BtwCalculator.parseUserInputToFloat(price);
        this.btw = BtwCalculator.parseUserInputToFloat(btw);
        this.amount = BtwCalculator.parseUserInputToFloat(amount);
    }
    BtwCalculator.prototype.getSubTotal = function () {
        var totalPrice = this.price * this.amount;
        return totalPrice + totalPrice * this.btw;
    };
    BtwCalculator.parseUserInputToFloat = function (someNumberAsString) {
        var result;
        if (someNumberAsString.indexOf(',') > -1) {
            result = parseFloat(someNumberAsString.replace(",", "."));
        }
        else {
            result = parseFloat(someNumberAsString);
        }
        return result;
    };
    return BtwCalculator;
})();
var priceInput = prompt("Geef de kostprijs");
var btwInput = prompt("Geef het btw percentage");
var amountInput = prompt("Geef het aantal op");
var resultDiv = document.getElementById('resultDiv');
var paragraph = document.createElement('p');
var resultContent = null;
var calculator = new BtwCalculator(priceInput, btwInput, amountInput);
if (!isNaN(calculator.getSubTotal())) {
    resultContent = document.createTextNode('De totale prijs is: ' + calculator.getSubTotal());
}
else {
    resultContent = document.createTextNode('Er zijn geen geldige waarden opgegeven.');
}
paragraph.appendChild(resultContent);
resultDiv.appendChild(paragraph);
