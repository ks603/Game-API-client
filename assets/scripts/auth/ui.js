'use strict'

const store = require('./../store')

const onSignUpSuccess = function () {
  $('#message').text('succesfully signed up')
  $('#sign-up').trigger('reset')
  $('#message').removeClass()
}

const onSignUpFailure = function (response) {
  $('#message').text('sign up failed')
  $('form').trigger('reset')
}

const onSignInSuccess = function (response) {
  $('#message').text('successfully signed in')
  $('#sign-in').trigger('reset')
  $('#change-password').show()
  $('#sign-out').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
}

const onSignInFailure = function (response) {
  $('#message').text('sign in failed')
  $('form').trigger('reset')
}

const onChangePasswordSuccess = function (response) {
  $('#message').text('Change Password Succeeded')
  $('#change-password').trigger('reset')
}

const onChangePasswordFailure = function (response) {
  $('#message').text('Change Password failed')
  $('form').trigger('reset')
}

const onSignOutFailure = function (response) {
  $('#message').text('Sign Out failed')
}

const onSignOutSuccess = function (response) {
  $('#message').text('Sign Out Succeeded')
  $('#message').text('Sign Out Succeeded')
  $('#change-password').hide()
  $('#gameBoard').hide()
  $('#sign-out').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#newGame').hide()
  store.user = null
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutFailure,
  onSignOutSuccess
}
