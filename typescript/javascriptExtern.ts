class Header {
    content:string;
    headerNumber:number;

    constructor(content:string, headerNumber:number) {
        this.content = content;
        this.headerNumber = headerNumber;
    }

    getHeader() {
        var header = document.createElement("h" + this.headerNumber);
        var newContent = document.createTextNode(this.content);
        header.appendChild(newContent);
        return header;
    }
}

var hello:string = "Hallo wereld";

var button = document.createElement('button');
var buttonContent = document.createTextNode('Click op mij');
button.appendChild(buttonContent);
document.body.appendChild(button);
var clickHandler = () => {
    console.log('clicked');
    printHeaders();
};

button.onclick = clickHandler;

var printHeaders = () => {
    var greeterDiv = document.getElementById('greeterDiv');
    for (var x = 1; x < 7; x++) {
        var header = new Header(hello, x);
        greeterDiv.appendChild(header.getHeader())
    }
};
