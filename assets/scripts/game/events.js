'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onCreateGame = function (event) {
  const form = event.target
  event.preventDefault()
  const data = getFormFields(form)
  console.log(data)
  api.createGame(data)
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateGame(data)
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onUpdateGameFailure)
}

const onGetgames = function () {
  // event.preventDefault()
  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.failure)
}
const onDeleteGames = function (event) {
  const id = $(event.target).data('id')
  api.deleteGames(id)
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
  // onGetGame,
  onCreateGame,
  onUpdateGame,
  // onDeleteGame,
  addHandlers,
  onDeleteGames
}
