'use strict';

(function() {

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

  scaleInput1.onchange = function() {
    amountInput.value = scaleInput1.value;
    amountInput2.value = scaleInput1.value;
  };

  scaleInput2.value = 15;

  scaleInput2.onchange = function() {
    periodInput.value = scaleInput2.value;
    periodInput2.value = scaleInput2.value;
  };

  _disableForm();
  nameInput.onblur = function() {
    if (_checkField(nameInput)) {
      _alertHide(nameDiv);
      _borderRedHide(nameInput);
    } else {
      _alertShow(nameDiv);
      _borderRedShow(nameInput);
    }
    validateForm();
  };

  surnameInput.onblur = function() {
    if (_checkField(surnameInput)) {
      _alertHide(surnameDiv);
      _borderRedHide(surnameInput);
    } else {
      _alertShow(surnameDiv);
      _borderRedShow(surnameInput);
    }
    validateForm();
  };

  phoneInput.onblur = function() {
    if (_checkPhone(phoneInput)) {
      _alertHide(phoneDiv);
      _borderRedHide(phoneInput);
      console.log(phoneInput.value);
    } else {
      _alertShow(phoneDiv);
      _borderRedShow(phoneInput);
    }
    validateForm();
  };

  emailInput.onblur = function() {
    if (_checkEmail(emailInput)) {
      _alertHide(emailDiv);
      _borderRedHide(emailInput);
      console.log(emailInput.value);
    } else {
      _alertShow(emailDiv);
      _borderRedShow(emailInput);
    }
  };

  dateInput.onblur = function() {
    if (_checkDate(dateInput)) {
      _alertHide(dateDiv);
      _borderRedHide(dateInput);
    } else {
      _alertShow(dateDiv);
      _borderRedShow(dateInput);
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

  function _borderRedShow(input) {
    input.style.boxShadow = 'none';
    input.style.border = '1px solid rgba(255, 0, 0, 0.5)';
  }

  function _borderRedHide(input) {
    input.style.boxShadow = 'inset 1px 1px 1px 0px rgba(8, 8, 8, 0.75)';
    input.style.border = '1px solid #a8a8a8';
  }

  function _checkField(input) {
    var inputLength = input.value.length;
    if (inputLength < 1 && input.required) {
      return false;
    } else {
      return true;
    }
  }

  function _checkEmail(email) {
    var regExp = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var emailChecked = email.value;
    if (regExp.test(emailChecked)) {
      return true;
    } else {
      return false;
    }
  }

  function _checkPhone(phone) {
    var regExp = /^\d[\d\(\)\ -]{4,14}\d$/;
    var phoneChecked = phone.value;
    if (regExp.test(phoneChecked)) {
      return true;
    } else {
      return false;
    }
  }

  function _checkDate(date) {
    var regExp = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
    var dateChecked = date.value;
    if (regExp.test(dateChecked)) {
      return true;
    } else {
      return false;
    }
  }

})();
