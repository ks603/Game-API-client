'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onCreateGame = function (event) {
  const form = event.target
  event.preventDefault()
  const data = getFormFields(form)
  api.createGame(data)
    .then(function () {
      onGetgames(event)
        .then(ui.onCreateGameSuccess)
    })
    .catch(ui.onCreateGameFailure)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateGame(data)
    .then(ui.onUpdateGameSuccess)
    .then(function () {
      onGetgames(event)
    })
    .catch(ui.onUpdateGameFailure)
}

const onGetgames = function () {
  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.failure)
}
const onTest = function () {
  api.getGames()
    .then(ui.onTestSuccess)
    .catch(ui.onTestFailed)
}

const onDeleteGames = function (event) {
  // const id = $(event.target).data('id')
  api.deleteGames(event)
    .then(function () {
      onTest(event)
    })
    .then(function () {
      onGetgames(event)
    })
    .catch(ui.failure)
}

const onClearGames = (event) => {
  event.preventDefault()
  ui.clearGames()
}

const addHandlers = () => {
  $('#getGames').on('click', onGetgames)
  $('#clearGames').on('click', onClearGames)
  $('.content').on('click', '.remove-book', onDeleteGames)
}

module.exports = {
  onCreateGame,
  onUpdateGame,
  addHandlers,
  onDeleteGames,
  onTest
}
