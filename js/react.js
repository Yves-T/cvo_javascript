var ResultBox = React.createClass({
    render: function () {
        return (
            <div className="commentBox">
                <p>Hallo {this.props.result.concatName}</p>
                <p>Jouw naam bevat {this.props.result.nameLength} karakters</p>
                <p>De originele filename is: '{this.props.result.filename}'</p>
                <p>De filename kan beter in kleine letters getypt worden, dus: '{this.props.result.filenameLower}'</p>
                <p>Als je '{this.props.result.filename}' opsplitst krijg je: '{this.props.result.firstFile}' en
                    '{this.props.result.lastFile}'</p>
                <p>Het vijfde karakter in '{this.props.result.filenameLower}' is: '{this.props.result.charFive}'</p>
                <p>In '{this.props.result.email}' staat de @ op positie: {this.props.result.positionAt}</p>
                <p>De naam is dus '{this.props.result.emailName}'</p>
                <p>De originele tekst: '{this.props.result.someText}' wordt dan: '{this.props.result.tooLongToRead}'</p>
            </div>
        );
    }
});

// 1
var voornaam = "Danny";
var achternaam = "Drijvers";
var concatName = voornaam + ' ' + achternaam;

// 2
var nameLength = concatName.length;

// 3
var filename = 'javaScriptFrameWork';

// 4
var lowerFileName = filename.toLowerCase();

// 5
var firstFile = lowerFileName.substring(0, 10);
var lastFile = lowerFileName.substring(10);

// 6
var charFive = lowerFileName.charAt(5);

// 7
var email = 'jan.klaassen@mail.com';
var positionAt = email.indexOf('@');

// 8
var emailName = email.substring(0, positionAt);

// 9
var someText = 'Deze tekst is te lang en zal worden afgekapt op 8 tekens m.b.v. substr().';
var tooLongToRead = someText.substr(0, 8);

var result = {
    concatName: concatName,
    nameLength: nameLength,
    filename: filename,
    filenameLower: lowerFileName,
    firstFile: firstFile,
    lastFile: lastFile,
    email: email,
    charFive: charFive,
    positionAt: positionAt,
    emailName: emailName,
    someText: someText,
    tooLongToRead: tooLongToRead
};

ReactDOM.render(
    <ResultBox result={result}/>,
    document.getElementById('content')
);