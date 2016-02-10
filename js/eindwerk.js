var FormValidator = (function () {
    function FormValidator() {
        this.myForm = document.getElementById('myForm');
        this.voornaamDiv = document.getElementById('voornaamDiv');
        this.achternaamDiv = document.getElementById('achternaamDiv');
        this.straatDiv = document.getElementById('straatDiv');
        this.straatNummberDiv = document.getElementById('straatNummberDiv');
        this.zipCodeNummberDiv = document.getElementById('postCodeDiv');
        this.gemeenteDiv = document.getElementById('gemeenteDiv');
        this.emailDiv = document.getElementById('emailDiv');
        this.passwordDiv = document.getElementById('passwordDiv');
        this.passwordVerifyDiv = document.getElementById('passwordVerifyDiv');
        this.errorClasses = {
            formGroupHasError: "form-group has-error",
            formGroupHasNoError: "form-group"
        };
        this.initForm();
    }
    FormValidator.prototype.toggleError = function () {
        var parentElement = document.getElementById('achternaamDiv');
        var span = parentElement.getElementsByTagName('span')[0];
        this.toggleVisibility(span, true);
        this.setClassOnElement(parentElement, "form-group has-error");
    };
    FormValidator.prototype.toggleVisibility = function (element, vissible) {
        var elementDisplay = element.style;
        elementDisplay.display = (vissible) ? 'inline' : "none";
    };
    FormValidator.prototype.setClassOnElement = function (element, style) {
        element.className = style;
    };
    FormValidator.prototype.initForm = function () {
        this.myForm.onsubmit = this.onSubmit.bind(this);
        this.clearErrors();
    };
    FormValidator.prototype.clearErrors = function () {
        var _this = this;
        Array.prototype.forEach.call(document.getElementsByClassName('form-group'), function (divChild) {
            _this.setClassOnElement(divChild, _this.errorClasses['formGroupHasNoError']);
        });
        Array.prototype.forEach.call(document.getElementsByClassName('help-block'), function (divChild) {
            _this.toggleVisibility(divChild, false);
        });
    };
    FormValidator.prototype.leegVeldControle = function () {
        var emptyNodes = Array.prototype.filter.call(document.getElementsByTagName('input'), function (divChild) {
            var inputValue = divChild;
            return !inputValue.value;
        });
        var parentElements = this.getParentElements(emptyNodes);
        this.setFormGroupDivsInError(parentElements);
        var errorSpans = this.getErrorSpans(parentElements);
        this.showErrorSpans(errorSpans);
        return emptyNodes.length !== 0;
    };
    FormValidator.prototype.getParentElements = function (childNodes) {
        return childNodes.map(function (element) {
            return element.parentElement;
        });
    };
    FormValidator.prototype.setFormGroupDivsInError = function (formGroupDivs) {
        var _this = this;
        formGroupDivs.forEach(function (element) {
            _this.setClassOnElement(element, _this.errorClasses['formGroupHasError']);
        });
    };
    FormValidator.prototype.getErrorSpans = function (formGroupDivs) {
        return formGroupDivs.map(function (parentElement) {
            return parentElement.getElementsByTagName('span')[0];
        });
    };
    FormValidator.prototype.showErrorSpans = function (errorSpans) {
        var _this = this;
        errorSpans.forEach(function (errorSpan) {
            _this.toggleVisibility(errorSpan, true);
        });
    };
    FormValidator.prototype.onSubmit = function (event) {
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
    };
    FormValidator.prototype.validateFirstName = function () {
        var firstNameInput = document.getElementById('voornaam');
        var inputValue = firstNameInput;
        return inputValue.value.length > 1;
    };
    FormValidator.prototype.validateLastName = function () {
        var latNameInput = document.getElementById('achternaam');
        var inputValue = latNameInput;
        return inputValue.value.length > 1;
    };
    FormValidator.prototype.validateStreet = function () {
        var streetInput = document.getElementById('straat');
        var inputValue = streetInput;
        return inputValue.value.length > 1;
    };
    FormValidator.prototype.validateStreetNumber = function () {
        var streetNumberInput = document.getElementById('straatnummer');
        var inputValue = streetNumberInput;
        var regex = /^\d(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
        return regex.test(inputValue.value);
    };
    FormValidator.prototype.validateZipCode = function () {
        var postNumberInput = document.getElementById('postcode');
        var inputValue = postNumberInput;
        return inputValue.value.length > 3;
    };
    FormValidator.prototype.validateCity = function () {
        var postNumberInput = document.getElementById('gemeente');
        var inputValue = postNumberInput;
        return inputValue.value.length > 1;
    };
    FormValidator.prototype.validateEmail = function () {
        var emailInput = document.getElementById('gemeente');
        var inputValue = emailInput;
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(inputValue.value);
    };
    FormValidator.prototype.validatePassword = function () {
        var passwordInput = document.getElementById('wachtwoord');
        var inputValue = passwordInput;
        var password = inputValue.value;
        return this.isPasswordContainingAtLeastOneDigitAndAlphaNumeric(password)
            && this.isPasswordContainingIlligalCharacters(password)
            && this.isPasswordContainingCorrectLength(password);
    };
    FormValidator.prototype.isPasswordContainingAtLeastOneDigitAndAlphaNumeric = function (password) {
        var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]?).{7,}/;
        console.log('alpha');
        console.log(re.test(password));
        return re.test(password);
    };
    FormValidator.prototype.isPasswordContainingIlligalCharacters = function (password) {
        var re = /^[a-zA-Z0-9#!@$%^&*()_+{}:<>?|\\\[\];',.~\/]*$/;
        console.log('illigal');
        console.log(re.test(password));
        return re.test(password);
    };
    FormValidator.prototype.isPasswordContainingCorrectLength = function (password) {
        console.log('length');
        console.log(password.length > 6 && password.length < 21);
        return password.length > 6 && password.length < 21;
    };
    return FormValidator;
})();
function setUp() {
    var myForm = new FormValidator();
}
setUp();
