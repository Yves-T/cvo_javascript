class BtwCalculator {
    private price:number;
    private btw:number;
    private amount:number;

    constructor(price:string, btw:string, amount:string) {
        this.price = BtwCalculator.parseUserInputToFloat(price);
        this.btw = BtwCalculator.parseUserInputToFloat(btw);
        this.amount = BtwCalculator.parseUserInputToFloat(amount);
    }

    public getSubTotal() {
        var totalPrice:number = this.price * this.amount;
        return totalPrice + totalPrice * this.btw;
    }


    private static parseUserInputToFloat(someNumberAsString) {
        var result;
        if (someNumberAsString.indexOf(',') > -1) {
            result = parseFloat(someNumberAsString.replace(",", "."));
        } else {
            result = parseFloat(someNumberAsString);
        }
        return result;
    }

}

var priceInput = prompt("Geef de kostprijs");
var btwInput = prompt("Geef het btw percentage");
var amountInput = prompt("Geef het aantal op");

var resultDiv = document.getElementById('resultDiv');
var paragraph = document.createElement('p');
var resultContent = null;

var calculator = new BtwCalculator(priceInput, btwInput, amountInput);

if (!isNaN(calculator.getSubTotal())) {
    resultContent = document.createTextNode('De totale prijs is: ' + calculator.getSubTotal());
} else {
    resultContent = document.createTextNode('Er zijn geen geldige waarden opgegeven.');
}

paragraph.appendChild(resultContent);
resultDiv.appendChild(paragraph);
