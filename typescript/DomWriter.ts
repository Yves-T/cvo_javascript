module Dom {
    export class DomWriter {
        constructor() {
// NOP
        }

        static createDomNode = (parentNode, childNodeName, someText) => {
            var childNode = document.createElement(childNodeName);
            var textNode = document.createTextNode(someText);

            childNode.appendChild(textNode);
            parentNode.appendChild(childNode);

            return childNode;
        };

    }
}
