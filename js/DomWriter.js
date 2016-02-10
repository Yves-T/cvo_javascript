var Dom;
(function (Dom) {
    var DomWriter = (function () {
        function DomWriter() {
        }
        DomWriter.createDomNode = function (parentNode, childNodeName, someText) {
            var childNode = document.createElement(childNodeName);
            var textNode = document.createTextNode(someText);
            childNode.appendChild(textNode);
            parentNode.appendChild(childNode);
            return childNode;
        };
        return DomWriter;
    })();
    Dom.DomWriter = DomWriter;
})(Dom || (Dom = {}));
