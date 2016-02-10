class FormValidator {

    private myForm = document.getElementById('myForm');
    private voornaamDiv = document.getElementById('voornaamDiv');
    private achternaamDiv = document.getElementById('achternaamDiv');
    private straatDiv = document.getElementById('straatDiv');
    private straatNummberDiv = document.getElementById('straatNummberDiv');
    private zipCodeNummberDiv = document.getElementById('postCodeDiv');
    private gemeenteDiv = document.getElementById('gemeenteDiv');
    private emailDiv = document.getElementById('emailDiv');
    private passwordDiv = document.getElementById('passwordDiv');
    private passwordVerifyDiv = document.getElementById('passwordVerifyDiv');

    private errorClasses = {
        formGroupHasError: "form-group has-error",
        formGroupHasNoError: "form-group"
    };

    constructor() {
        this.initForm();
    }

    public toggleError() {
        var parentElement = document.getElementById('achternaamDiv');
        var span = parentElement.getElementsByTagName('span')[0];
        this.toggleVisibility(span, true);
        this.setClassOnElement(parentElement, "form-group has-error");
    }

    public toggleVisibility(element, vissible) {
        var elementDisplay = element.style;
        elementDisplay.display = (vissible) ? 'inline' : "none";
    }

    public setClassOnElement(element, style) {
        element.className = style;
    }

    private initForm() {
        this.myForm.onsubmit = this.onSubmit.bind(this);
        // remove error classes on form group div
        this.clearErrors();
    }

    private clearErrors() {
        Array.prototype.forEach.call(document.getElementsByClassName('form-group'), (divChild) => {
            this.setClassOnElement(divChild, this.errorClasses['formGroupHasNoError']);
        });

        // hide error spans
        Array.prototype.forEach.call(document.getElementsByClassName('help-block'), (divChild) => {
            this.toggleVisibility(divChild, false);
        });
    }

    private leegVeldControle() {
        // get all empty input fields
        var emptyNodes = Array.prototype.filter.call(document.getElementsByTagName('input'), (divChild) => {
            var inputValue = (<HTMLInputElement>divChild);
            return !inputValue.value
        });

        // get parrents of empty input fields
        var parentElements = this.getParentElements(emptyNodes);

        // set parent elements in error
        this.setFormGroupDivsInError(parentElements);

        // get all error spans
        var errorSpans = this.getErrorSpans(parentElements);

        // show error spans
        this.showErrorSpans(errorSpans);

        return emptyNodes.length !== 0;
    }

    private getParentElements(childNodes) {
        return childNodes.map(function (element) {
            return element.parentElement;
        });
    }

    private setFormGroupDivsInError(formGroupDivs) {
        formGroupDivs.forEach((element) => {
            this.setClassOnElement(element, this.errorClasses['formGroupHasError']);
        });
    }

    private getErrorSpans(formGroupDivs) {
        return formGroupDivs.map((parentElement) => {
            return parentElement.getElementsByTagName('span')[0];
        });
    }

    private showErrorSpans(errorSpans) {
        errorSpans.forEach((errorSpan) => {
            this.toggleVisibility(errorSpan, true);
        });
    }


    private onSubmit(event) {
        event.preventDefault();
        this.clearErrors();
        var hasEmptyFields = this.leegVeldControle();

        var formGroupDivs = [];
        if (!hasEmptyFields) {
            console.log("start validating");
            if (!this.validateFirstName()) {
                formGroupDivs.push(this.voornaamDiv);
            }

            if (!this.validateLastName()) {
                formGroupDivs.push(this.achternaamDiv);
            }

            if (!this.validateStreet()) {
                formGroupDivs.push(this.straatDiv);
            }

            if (!this.validateStreetNumber()) {
                formGroupDivs.push(this.straatNummberDiv);
            }

            if (!this.validateZipCode()) {
                formGroupDivs.push(this.zipCodeNummberDiv);
            }

            if (!this.validateCity()) {
                formGroupDivs.push(this.gemeenteDiv);
            }

            if (!this.validateEmail()) {
                formGroupDivs.push(this.emailDiv);
            }

            if (!this.validatePassword()) {
                formGroupDivs.push(this.passwordDiv);
            }
        }

        console.log(formGroupDivs);
    }

    private validateFirstName() {
        var firstNameInput = document.getElementById('voornaam');
        var inputValue = (<HTMLInputElement>firstNameInput);
        return inputValue.value.length > 1;
    }

    private validateLastName() {
        var latNameInput = document.getElementById('achternaam');
        var inputValue = (<HTMLInputElement>latNameInput);
        return inputValue.value.length > 1;
    }

    private validateStreet() {
        var streetInput = document.getElementById('straat');
        var inputValue = (<HTMLInputElement>streetInput);
        return inputValue.value.length > 1;
    }

    private validateStreetNumber() {
        var streetNumberInput = document.getElementById('straatnummer');
        var inputValue = (<HTMLInputElement>streetNumberInput);
        // must start with a number, allow numbers and letters, no spaces
        var regex = /^\d(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
        return regex.test(inputValue.value);
    }

    public validateZipCode() {
        var postNumberInput = document.getElementById('postcode');
        var inputValue = (<HTMLInputElement>postNumberInput);
        return inputValue.value.length > 3;
    }

    public validateCity() {
        var postNumberInput = document.getElementById('gemeente');
        var inputValue = (<HTMLInputElement>postNumberInput);
        return inputValue.value.length > 1;
    }

    private  validateEmail() {
        var emailInput = document.getElementById('gemeente');
        var inputValue = (<HTMLInputElement>emailInput);
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(inputValue.value);
    }

    private validatePassword() {
        var passwordInput = document.getElementById('wachtwoord');
        var inputValue = (<HTMLInputElement>passwordInput);
        var password = inputValue.value;
        return this.isPasswordContainingAtLeastOneDigitAndAlphaNumeric(password)
            && this.isPasswordContainingIlligalCharacters(password)
            && this.isPasswordContainingCorrectLength(password);
    }

    private isPasswordContainingAtLeastOneDigitAndAlphaNumeric(password) {
        var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]?).{7,}/;
        console.log('alpha');
        console.log(re.test(password));
        return re.test(password);
    }

    private isPasswordContainingIlligalCharacters(password) {
        var re = /^[a-zA-Z0-9#!@$%^&*()_+{}:<>?|\\\[\];',.~\/]*$/;
        console.log('illigal');
        console.log(re.test(password));
        return re.test(password);
    }

    private isPasswordContainingCorrectLength(password) {
        console.log('length');
        console.log(password.length > 6 && password.length < 21);
        return password.length > 6 && password.length < 21;
    }
}

function setUp() {
    var myForm = new FormValidator();
}


setUp();