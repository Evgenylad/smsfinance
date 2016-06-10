'use strict';

(function() {
/*  var formContainer = document.querySelector('.overlay-container');
  var formOpenButton = document.querySelector('.reviews-controls-new');
  var formCloseButton = document.querySelector('.review-form-close');

  formOpenButton.onclick = function(evt) {
    evt.preventDefault();
    formContainer.classList.remove('invisible');
    _addListeners();
  };

  formCloseButton.onclick = function(evt) {
    evt.preventDefault();
    formContainer.classList.add('invisible');
    _removeListeners();
  //  addEventListener('input', inputFieldsOninput);
  };
*/

  var nameInput = document.getElementById('name');
  var surnameInput = document.getElementById('surname');
  var phoneInput = document.getElementById('phone');
  var emailInput = document.getElementById('email');
  var dateInput = document.getElementById('date');
  var regionInput = document.getElementById('region');

  var scaleInput1 = document.getElementById('scale1');
  var scaleInput2 = document.getElementById('scale2');
  var periodInput = document.getElementById('period-box');
  var amountInput = document.getElementById('amount-box');
  var periodInput2 = document.getElementById('period-box-2');
  var amountInput2 = document.getElementById('amount-box-2');

  var nameDiv = document.getElementById('alert-name');
  var surnameDiv = document.getElementById('alert-surname');
  var phoneDiv = document.getElementById('alert-phone');
  var emailDiv = document.getElementById('alert-email');
  var dateDiv = document.getElementById('alert-date');
  var regionDiv = document.getElementById('alert-region');


  var submitButton = document.getElementById('form-submit-2');

  scaleInput1.value = 5000;
  console.log(scaleInput1.value);

  scaleInput1.onchange = function() {
    amountInput.value = scaleInput1.value;
    amountInput2.value = scaleInput1.value;
  };

  scaleInput2.value = 15;
  console.log(scaleInput2.value);

  scaleInput2.onchange = function() {
    periodInput.value = scaleInput2.value;
    periodInput2.value = scaleInput2.value;
  };


  /*
  var browserCookies = require('browser-cookies');
  reviewMarkInput.value = browserCookies.get('reviewMarkInput') || reviewMarkInput.value;
  nameInput.value = browserCookies.get('nameInput') || nameInput.value;

  var today = new Date();
  var thisYear = today.getFullYear();
  var myBirthday = new Date(thisYear, 9, 14);
  var expires = (myBirthday - today) / 24 / 60 / 60 / 1000;
*/


  /*
  form.onsubmit = function() {
    browserCookies.set('nameInput', nameInput.value, {expires: expires});
    browserCookies.set('reviewMarkInput', reviewMarkInput.value, {expires: expires});
    this.submit();
  };
  */

//  _disableForm();

  /* function onRadioChange() {
    var currentValue = parseInt(reviewMarkInput.value, 10);

    if(currentValue < 3) {
      textInput.setAttribute('required', true);
    } else {
      textInput.removeAttribute('required');
    }

    validateForm();
  }
*/


  /*  surnameInput.onfocusout = validateSurnameInput;
    phoneInput.onfocusout = validatePhoneInput;
    emailInput.onfocusout = validateEmailInput;
    dateInput.onfocusout = validateDateInput;
    regionInput.onfocusout = validateRegionInput;
    periodInput.onfocusout = validatePeriodInput;
    amountInput.onfocusout = validateAmountInput;
  }
  */

/*  function _removeListeners() {

    for(var i = 0; i < ratingRadioButtons.length; i++) {
      ratingRadioButtons[i].onchange = null;
    }
    textInput.oninput = null;
    textInput.oninput = null;
  }
*/

  _disableForm();
  nameInput.onblur = function() {
    if (_checkField(nameInput)) {
      _alertHide(nameDiv);

    } else {
      _alertShow(nameDiv);

    }
    validateForm();
  };

  surnameInput.onblur = function() {
    if (_checkField(surnameInput)) {
      _alertHide(surnameDiv);
    } else {
      _alertShow(surnameDiv);

    }
    validateForm();
  };

  phoneInput.onblur = function() {
    if (_checkField(phoneInput)) {
      _alertHide(phoneDiv);
    } else {
      _alertShow(phoneDiv);

    }
    validateForm();
  };

  emailInput.onblur = function() {
    if (_checkField(emailInput)) {
      _alertHide(emailDiv);
    } else {
      _alertShow(emailDiv);

    }
  };

  dateInput.onblur = function() {
    if (_checkField(dateInput)) {
      _alertHide(dateDiv);
    } else {
      _alertShow(dateDiv);

    }
  };

  regionInput.onblur = function() {
    if (_checkField(regionInput)) {
      _alertHide(regionDiv);
    } else {
      _alertShow(regionDiv);

    }
  };

  function validateForm() {
    _enableForm();
    if (_checkField(nameInput) && _checkField(surnameInput) && _checkField(phoneInput)) {
      _enableForm();
      console.log(surnameInput);
    } else {
      _disableForm();
    }
  }

  // Disabling form
  function _disableForm() {
    submitButton.setAttribute('disabled', 'disabled');
  }


  // Enabling form
  function _enableForm() {
    submitButton.removeAttribute('disabled');
  }

  //Hide alert message
  function _alertHide(div) {
    div.style.visibility = 'hidden';
  }

  //Show alert message
  function _alertShow(div) {
    div.style.visibility = 'visible';
  }

  function _checkField(input) {
    var inputLength = input.value.length;
    if (inputLength < 1 && input.required) {
      return false;
    } else {
      return true;
    }
  }
})();
