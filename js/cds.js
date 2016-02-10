(function () {
    var artist1 = "Nirvana";
    var album1 = "Nevermind";
    var artist2 = "U2";
    var album2 = "Ratle and Hum";
    var buttonDiv = document.getElementById('buttonDiv');
    var button = Dom.DomWriter.createDomNode(buttonDiv, 'button', 'Druk resultaten af');
    button.onclick = printResults;
    function makeText(artistName, albumName) {
        var labelAndArtist = artistName;
        var labelAndAlbum = albumName;
        addTextToPage('CD', 'h2');
        addTextToPage(labelAndArtist, 'p');
        addTextToPage(labelAndAlbum, 'p');
    }
    function addTextToPage(content, tag) {
        var resultDiv = document.getElementById('resultDiv');
        Dom.DomWriter.createDomNode(resultDiv, tag, content);
    }
    function printResults() {
        makeText(artist1, album1);
        makeText(artist2, album2);
    }
})();
