//interface CalculateParameters {
//    bewerking:string;
//    getal:number;
//    deler:number;
//    herhalingen:number;
//    error:boolean;
//}
//
//class StupidCalculator {
//    calcParameters:CalculateParameters;
//    errorMessages:string [];
//    errors:string[] = [];
//
//    operators = {
//        'optellen': function (a, b) {
//            return a + b
//        },
//        'aftrekken': function (a, b) {
//            return a - b
//        }
//    };
//
//    node:any;
//
//    constructor(parameters:CalculateParameters, node) {
//        this.calcParameters = parameters;
//        this.node = node;
//        this.initErrorMessages();
//        this.validate();
//        this.handleResults();
//    }
//
//    initErrorMessages() {
//        this.errorMessages = [];
//        this.errorMessages['operator'] = 'De bewerking is verkeerd gedefinieerd, dit mag enkel optellen en aftrekken zijn:';
//        this.errorMessages['digit'] = 'Getal is verkeerd gedefinieerd, dit is geen getal:';
//        this.errorMessages['divider'] = 'Deler mag niet nul zijn!';
//        this.errorMessages['iterator'] = 'De bewerking is verkeerd gedefinieerd, dit mag enkel optellen en aftrekken zijn:';
//    }
//
//    validate() {
//        if ((this.calcParameters.bewerking.localeCompare('aftrekken') !== 0) && (this.calcParameters.bewerking.localeCompare('optellen') !== 0 )) {
//            this.calcParameters.error = true;
//            this.errors.push(this.errorMessages['operator'] + this.calcParameters.bewerking);
//        }
//
//        if (!StupidCalculator.isNumeric(this.calcParameters.getal)) {
//            this.calcParameters.error = true;
//            this.errors.push(this.errorMessages['digit'] + this.calcParameters.getal);
//        }
//
//        if (this.calcParameters.deler === 0) {
//            this.calcParameters.error = true;
//            this.errors.push(this.errorMessages['divider']);
//        }
//
//        if (this.calcParameters.herhalingen < 1) {
//            this.calcParameters.error = true;
//            this.errors.push(this.errorMessages['iterator'] + this.calcParameters.herhalingen);
//        }
//
//        if (this.errors.length > 0) {
//            this.displayErrors();
//        } else {
//            this.displayResults();
//        }
//    }
//
//    handleResults() {
//        if (this.errors.length > 0) {
//            this.displayErrors();
//        } else {
//            this.displayResults();
//        }
//    }
//
//    displayResults() {
//        while (this.calcParameters.herhalingen > 0) {
//            this.calcParameters.herhalingen--;
//            var paragraph = document.createElement('p');
//            var result = "Getal is nu:" + this.calcParameters.getal;
//            result += ".Gedeeld door 3 geeft dit " + Math.floor(this.calcParameters.getal / 3);
//            result += ".En de rest na deling door 3 is " + this.calcParameters.getal % 3;
//            var textNode = document.createTextNode(result);
//            paragraph.appendChild(textNode);
//            this.node.appendChild(paragraph);
//            this.calcParameters.getal = this.operators[this.calcParameters.bewerking](this.calcParameters.getal, 1);
//        }
//    }
//
//    displayErrors() {
//        this.errors.forEach(function (errorItem) {
//            var paragraph = document.createElement('p');
//            var textNode = document.createTextNode(errorItem);
//            paragraph.appendChild(textNode);
//            this.node.appendChild(paragraph);
//        });
//    }
//
//    static isNumeric(someNumber) {
//        return !isNaN(parseFloat(someNumber)) && isFinite(someNumber);
//    }
//
//}
//
//var resultDiv = document.getElementById('result');
//var button = document.createElement('button');
//var buttonTextNode = document.createTextNode('Resultaten');
//button.appendChild(buttonTextNode);
//button.onclick = buttonClickHandler;
//document.body.appendChild(button);
//
//function buttonClickHandler() {
//    var bewerking:string = 'optellen';
//    var getal:number = 10;
//    var deler:number = 3;
//    var herhalingen:number = 5;
//    var error:boolean = false;
//    var calcParameters:CalculateParameters = {
//        bewerking: bewerking,
//        getal: getal,
//        deler: deler,
//        herhalingen: herhalingen,
//        error: error
//    };
//
//    var paragraph = document.createElement('h2');
//    var textNode = document.createTextNode('Controle van variabelen');
//    paragraph.appendChild(textNode);
//    resultDiv.appendChild(paragraph);
//    var stupidCalculatorObject = new StupidCalculator(calcParameters, resultDiv);
//
//}
//
