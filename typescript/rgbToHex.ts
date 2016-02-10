/// <reference path="DomWriter.ts" />

class ColorHex {
    private colorR;
    private colorG;
    private colorB;
    private decimalColors:string[] = [];

    constructor(colorR:string, colorG:string, colorB:string) {
        this.colorR = colorR;
        this.colorG = colorG;
        this.colorB = colorB;
    }

    HexString() {
        this.createColorArray();
        var that = this;
        var hexColors = this.decimalColors.map(function (color) {
            var hexString = parseInt(color).toString(16);
            hexString = that.validateHexString(hexString);
            return hexString.toUpperCase();
        });
        return hexColors.join('');
    }

    private validateHexString(hexString) {
        if (hexString.length === 1) {
            hexString = '0' + hexString;
        }
        return hexString;
    }

    private createColorArray() {
        this.decimalColors.push(this.colorR);
        this.decimalColors.push(this.colorG);
        this.decimalColors.push(this.colorB);
    }
}

class ColorDec {
    constructor() {

    }

    decString(hexString:string) {
        hexString = this.validateHexString(hexString);
        var chunkArray = hexString.match(/.{1,2}/g);
        return chunkArray.map(function (hexGroup) {
            return parseInt(hexGroup, 16);
        });
    }

    private validateHexString(hexString) {
        if (hexString.charAt(0) == '#') {
            hexString = hexString.slice(1);
        }
        hexString += Array(6 - hexString.length).join('0');
        return hexString;
    }

}

function berekenKleur() {
    var rValue = (<HTMLInputElement>document.getElementById('kleurRIn')).value;
    var gValue = (<HTMLInputElement>document.getElementById('kleurGIn')).value;
    var bValue = (<HTMLInputElement>document.getElementById('kleurBIn')).value;
    var myColorHex = new ColorHex(rValue, gValue, bValue);
    var inputValue = (<HTMLInputElement>document.getElementById('hexWaardeOut'));
    var hexColor = '#' + myColorHex.HexString();
    inputValue.value = hexColor;
    document.body.style.backgroundColor = hexColor;
}

function berekenRGBKleur() {
    var colorInHex = (<HTMLInputElement>document.getElementById('hexWaardeIn')).value;
    var myColorDex = new ColorDec();
    var decColorArray = myColorDex.decString(colorInHex);
    showDecimalColors(decColorArray);
}

function showDecimalColors(decColorArray) {
    var rValue = (<HTMLInputElement>document.getElementById('rgbR'));
    var gValue = (<HTMLInputElement>document.getElementById('rgbG'));
    var bValue = (<HTMLInputElement>document.getElementById('rgbB'));
    rValue.value = decColorArray[0];
    gValue.value = decColorArray[1];
    bValue.value = decColorArray[2];
    document.body.style.backgroundColor = 'rgb(' + decColorArray.join(',') + ')';
}
