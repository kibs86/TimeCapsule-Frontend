'use strict';

const api = require('./api');
const ui = require('./ui');
const getFormFields = require('../../../lib/get-form-fields.js');
const msg = require('../common/user-messages.js');

const validEmail = (email) => {
  if (/^.+@.+\..+$/.test(email)) {
    return true;
  } else {
    msg.setUserMessage(msg.invalidEmail);
    return false;
  }
};

const matchingPasswords = (password1, password2) => {
  if (password1 === password2) {
    return true;
  } else {
    msg.setUserMessage(msg.mismatchedPasswords);
    return false;
  }
};

const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  if (validEmail(data.credentials.email) && matchingPasswords(data.credentials.password, data.credentials.password_confirmation)) {
    api.signUp(data)
      .done(ui.signUpSuccess)
      .fail(ui.failure);
  }
};

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.signInFailure);
};

const onSignOut = function (event) {
  event.preventDefault();
  api.signOut()
    .done(ui.signOutSuccess)
    .fail(ui.failure);
};

const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.failure);
};

const addHandlers = () => {
  $('#content').on('submit', '#sign-up', onSignUp);
  $('#content').on('submit', '#sign-in', onSignIn);
  $('#content').on('submit', '#change-password', onChangePassword);
  $('#sign-out-nav').on('click', onSignOut);
};

module.exports = {
  addHandlers,
};
