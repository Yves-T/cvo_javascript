var ColorHex = (function () {
    function ColorHex(colorR, colorG, colorB) {
        this.decimalColors = [];
        this.colorR = colorR;
        this.colorG = colorG;
        this.colorB = colorB;
    }
    ColorHex.prototype.HexString = function () {
        this.createColorArray();
        var that = this;
        var hexColors = this.decimalColors.map(function (color) {
            var hexString = parseInt(color).toString(16);
            hexString = that.validateHexString(hexString);
            return hexString.toUpperCase();
        });
        return hexColors.join('');
    };
    ColorHex.prototype.validateHexString = function (hexString) {
        if (hexString.length === 1) {
            hexString = '0' + hexString;
        }
        return hexString;
    };
    ColorHex.prototype.createColorArray = function () {
        this.decimalColors.push(this.colorR);
        this.decimalColors.push(this.colorG);
        this.decimalColors.push(this.colorB);
    };
    return ColorHex;
})();
var ColorDec = (function () {
    function ColorDec() {
    }
    ColorDec.prototype.decString = function (hexString) {
        hexString = this.validateHexString(hexString);
        var chunkArray = hexString.match(/.{1,2}/g);
        return chunkArray.map(function (hexGroup) {
            return parseInt(hexGroup, 16);
        });
    };
    ColorDec.prototype.validateHexString = function (hexString) {
        if (hexString.charAt(0) == '#') {
            hexString = hexString.slice(1);
        }
        hexString += Array(6 - hexString.length).join('0');
        return hexString;
    };
    return ColorDec;
})();
function berekenKleur() {
    var rValue = document.getElementById('kleurRIn').value;
    var gValue = document.getElementById('kleurGIn').value;
    var bValue = document.getElementById('kleurBIn').value;
    var myColorHex = new ColorHex(rValue, gValue, bValue);
    var inputValue = document.getElementById('hexWaardeOut');
    var hexColor = '#' + myColorHex.HexString();
    inputValue.value = hexColor;
    document.body.style.backgroundColor = hexColor;
}
function berekenRGBKleur() {
    var colorInHex = document.getElementById('hexWaardeIn').value;
    var myColorDex = new ColorDec();
    var decColorArray = myColorDex.decString(colorInHex);
    showDecimalColors(decColorArray);
}
function showDecimalColors(decColorArray) {
    var rValue = document.getElementById('rgbR');
    var gValue = document.getElementById('rgbG');
    var bValue = document.getElementById('rgbB');
    rValue.value = decColorArray[0];
    gValue.value = decColorArray[1];
    bValue.value = decColorArray[2];
    document.body.style.backgroundColor = 'rgb(' + decColorArray.join(',') + ')';
}
