class EmailValidator {
    email:string;

    constructor(email:string) {
        this.email = email;
    }

    public isValidEmail() {
        return this.validateEmail(this.email);
    }

    private  validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

}

var emailAddress = prompt("Geef een email adres in");
document.getElementById('resultDiv');
var paragraph = document.createElement('p');
var result = '';
var emailValidator = new EmailValidator(emailAddress);
if (emailValidator.isValidEmail()) {
    result = "Ziet er goed uit";
} else {
    result = "Dit lijkt geen correct email adres te zijn!";
}

var textNode = document.createTextNode(result);
paragraph.appendChild(textNode);
resultDiv.appendChild(paragraph);

