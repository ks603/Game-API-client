'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

$(() => {
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#create-game').hide()
  $('#update-game').hide()
  $('#get-game').hide()
  $('#getGames').hide()
  $('#clearGames').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#create-game').on('submit', gameEvents.onCreateGame)
  $('#update-game').on('submit', gameEvents.onUpdateGame)
  $('#get-game').on('submit', gameEvents.onGetGame)
  $('.remove-book').on('submit', gameEvents.onDeleteGame)
  gameEvents.addHandlers()
})
