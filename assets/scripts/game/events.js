'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onCreateGame = function (event) {
  const form = event.target
  event.preventDefault()
  const data = getFormFields(form)
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

const onGetGame = function () {
  event.preventDefault()
  api.getGame()
    .then(ui.onGetGameSuccess)
    .catch(ui.onGetGameFailure)
}

const onDeleteGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deleteGame(data)
    .then(ui.onDeleteGameSuccess)
    .catch(ui.onDeleteGameFailure)
}

module.exports = {
  onGetGame,
  onCreateGame,
  onUpdateGame,
  onDeleteGame
}
