/// <reference path="DomWriter.ts" />

(function () {

    // tsc --out js/machtsverheffing.js typescript/machtsverheffing.ts
    class Calculator {
        protected exponent;
        protected base;

        constructor(base:number, exponent:number) {
            this.base = base;
            this.exponent = exponent;
        }

        public calculatePower = () => {
            var result = 1;
            while (this.exponent--) {
                result *= this.base;
            }
            return result;
        }

    }


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
        return new Calculator(2,10).calculatePower();
    }
})();




