(function () {
    var Calculator = (function () {
        function Calculator(base, exponent) {
            var _this = this;
            this.calculatePower = function () {
                var result = 1;
                while (_this.exponent--) {
                    result *= _this.base;
                }
                return result;
            };
            this.base = base;
            this.exponent = exponent;
        }
        return Calculator;
    })();
    var buttonDiv = document.getElementById('buttonDiv');
    var button = Dom.DomWriter.createDomNode(buttonDiv, 'button', 'Bereken');
    button.onclick = bereken;
    var resultDiv = document.getElementById('div1');
    function bereken() {
        console.log("btn clicked");
        resultDiv = document.getElementById('div1');
        Dom.DomWriter.createDomNode(resultDiv, 'p', Machtsverheffing());
    }
    function Machtsverheffing() {
        return new Calculator(2, 10).calculatePower();
    }
})();
