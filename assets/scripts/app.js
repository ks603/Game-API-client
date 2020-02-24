'use strict'

const authEvents = require('./auth/events')

$(() => {
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#newGame').hide()
  $('#gameBoard').hide()
  $('#countGames').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
})
