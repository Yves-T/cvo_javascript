var My_IMDB = (function () {
    function My_IMDB(titel, lengte, jaar, sterren) {
        this.titel = titel;
        this.lengte = lengte;
        this.jaar = jaar;
        this.sterren = sterren;
    }
    return My_IMDB;
})();
var XMen = new My_IMDB("X-Men", "104", "2000", "7.4");
PrintIt(XMen);
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var imdbResponse = JSON.parse(xhttp.responseText);
        var resultDiv = document.getElementById('resultDiv');
        Dom.DomWriter.createDomNode(resultDiv, 'h2', 'Of live van de IMDB API....');
        var liveXmenObject = new My_IMDB(imdbResponse.Title, imdbResponse.Runtime, imdbResponse.Year, imdbResponse.imdbRating);
        PrintIt(liveXmenObject);
        Dom.DomWriter.createDomNode(resultDiv, 'p', 'En je krijgt er dan nog een gratis poster bij :-)');
        var img = Dom.DomWriter.createDomNode(resultDiv, 'img', '');
        img.setAttribute('src', imdbResponse.Poster);
    }
};
xhttp.open("GET", "http://www.omdbapi.com/?t=x-men&y=&plot=short&r=json", true);
xhttp.send();
function PrintIt(movieObject) {
    var resultDiv = document.getElementById('resultDiv');
    Dom.DomWriter.createDomNode(resultDiv, 'h3', 'Titel:' + movieObject.titel);
    Dom.DomWriter.createDomNode(resultDiv, 'h3', 'Lengte:' + movieObject.lengte);
    Dom.DomWriter.createDomNode(resultDiv, 'h3', 'Jaar:' + movieObject.jaar);
    Dom.DomWriter.createDomNode(resultDiv, 'h3', 'Sterren:' + movieObject.sterren);
}
