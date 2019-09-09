'use strict'

const store = require('../store.js')

const signUpSuccess = function (data) {
  $('#message-auth').text('Signed up successfully!')
  $('#sign-up').trigger('reset')
}

const signUpFailure = function (error) {
  $('#message-auth').text('Error on sign up.')
  return error
}

const signInSuccess = function (data) {
  $('#message-auth').text('Signed in successfully')
  $('#sign-in').trigger('reset')
  store.user = data.user
}

const signInFailure = function (error) {
  $('#message-auth').text('Error on sign in')
  return error
}

const signOutSuccess = function () {
  $('#message-auth').text('Signed out successfully!')
  store.user = null
}

const signOutFailure = function (error) {
  $('#message-auth').text('Error on sign out.')
  $('#message-auth').removeClass()
  $('#message-auth').addClass('failure')
  return error
}

const changePasswordSuccess = function () {
  $('#message-auth').text('Changed password successfully!')
  $('#change-password').trigger('reset')
}

const changePasswordFailure = function (error) {
  $('#message-auth').text('Error on change password.')
  return error
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
