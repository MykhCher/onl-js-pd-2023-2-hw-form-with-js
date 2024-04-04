'use strict';

// Create main, div container.
const main = document.createElement('main');
const divContent = document.createElement('div');
divContent.classList.add('content');

// Create form header.
const formHeader = document.createElement('div');
formHeader.classList.add('form-header');
const h1 = document.createElement('h1');
h1.textContent = 'Create an Account';
const formHeaderP = document.createElement('p');
formHeaderP.textContent = 'We always keep your name and email address private.';

// Create form
const form = document.createElement('form');
const formMain = document.createElement('div');
formMain.classList.add('form-main');
const formFoot = document.createElement('div');
formFoot.classList.add('form-foot');

// Create elements for form-main
const mainInfo = document.createElement('div');
mainInfo.classList.add('main-info');
const radioInfo1 = document.createElement('div');
radioInfo1.classList.add('radio-info');
const radioInfo2 = document.createElement('div');
radioInfo2.classList.add('radio-info');

// main-info
const textInput1 = document.createElement('input');
textInput1.setAttribute('type', 'text');
textInput1.setAttribute('placeholder', 'First name');
const textInput2 = document.createElement('input');
textInput2.setAttribute('type', 'text');
textInput2.setAttribute('placeholder', 'Last name');
const textInput3 = document.createElement('input');
textInput3.setAttribute('type', 'text');
textInput3.setAttribute('placeholder', 'Display Name');
const textInput4 = document.createElement('input');
textInput4.setAttribute('type', 'email');
textInput4.setAttribute('placeholder', 'Email Address');
const textInput5 = document.createElement('input');
textInput5.setAttribute('type', 'password');
textInput5.setAttribute('placeholder', 'Password');
const textInput6 = document.createElement('input');
textInput6.setAttribute('type', 'password');
textInput6.setAttribute('placeholder', 'Password Confirmation');

// radio-info
const radioInput1 = document.createElement('input');
const radioLabel1 = document.createElement('label');
radioInput1.setAttribute('type', 'radio');
radioInput1.setAttribute('id', 'radio1');
radioInput1.setAttribute('name', 'role');
radioLabel1.setAttribute('for', 'radio1');
radioLabel1.innerHTML = '<span class="caption">Join as a Buyer</span><br> I am looking for a Name, Logo or Tagline for my business, brand or product.';
const radioInput2 = document.createElement('input');
const radioLabel2 = document.createElement('label');
radioInput2.setAttribute('type', 'radio');
radioInput2.setAttribute('id', 'radio2');
radioInput2.setAttribute('name', 'role');
radioLabel2.setAttribute('for', 'radio2');
radioLabel2.innerHTML = '<span class="caption">Join As a Creative or Marketplace Seller</span><br> I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.';

// Create elements for form-foot
const checkboxContainer = document.createElement('div');
checkboxContainer.classList.add('checkbox');

const checkboxInput = document.createElement('input');
const checkboxLabel = document.createElement('label');
checkboxInput.setAttribute('type', 'checkbox');
checkboxInput.setAttribute('id', 'check');
checkboxLabel.setAttribute('for', 'check')
checkboxLabel.textContent = 'Allow Squadhelp to send marketing/promotional offers from time to time';

const submit = document.createElement('input');
submit.setAttribute('type', 'Submit');
submit.setAttribute('value', 'Create account');

// Add elements to HTML.
document.body.append(main);
main.append(divContent);

divContent.append(formHeader);
formHeader.append(h1);
formHeader.append(formHeaderP);

divContent.append(form);
form.append(formMain);
form.append(formFoot);
formMain.append(mainInfo);
formMain.append(radioInfo1);
formMain.append(radioInfo2);

mainInfo.append(textInput1);
mainInfo.append(textInput2);
mainInfo.append(textInput3);
mainInfo.append(textInput4);
mainInfo.append(textInput5);
mainInfo.append(textInput6);

radioInfo1.append(radioInput1);
radioInfo1.append(radioLabel1);
radioInfo2.append(radioInput2);
radioInfo2.append(radioLabel2);

formFoot.append(checkboxContainer);
checkboxContainer.append(checkboxInput);
checkboxContainer.append(checkboxLabel);
formFoot.append(submit);