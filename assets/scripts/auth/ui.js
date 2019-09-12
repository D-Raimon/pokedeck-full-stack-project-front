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
  $('#sign-in-modal-message').text('Signed in successfully')
  $('#sign-in').trigger('reset')
  store.user = data.user
  $('#navbarDropdownMenuLink').text(store.user.email)
  $('.signed-out').css('display', 'none')
  $('.signed-in').css('display', 'block')
  $('.dropdown-toggle').css('display', 'block')
  $('#message-auth').text('')
}

const signInFailure = function (error) {
  $('#message-auth').text('Error on sign in')
  return error
}

const signOutSuccess = function () {
  // $('#message-auth').text('Signed out successfully!')
  $('.content').text('')
  $('#message-auth').text('')
  $('#pokemon-errors').text('')
  $('#sign-in-modal-message').text('')
  $('#sign-up-modal-message').text('')
  $('#navbarDropdownMenuLink').text('')
  $('.signed-out').css('display', 'block')
  $('.signed-in').css('display', 'none')
  $('.dropdown-toggle').css('display', 'none')
  store.user = null
}

const signOutFailure = function (error) {
  $('#message-auth').text('Error on sign out.')
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
