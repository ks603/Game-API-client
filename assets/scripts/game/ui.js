const store = require('./../store')

const onCreateGameSuccess = function (data) {
  store.game = data.game
  $('#message').text('Created game successfully!')
  $('form').trigger('reset')
}

const onCreateGameFailure = function (data) {
  store.game = data.game
  $('#message').text('Created game failed')
  $('form').trigger('reset')
}

const onUpdateGameSuccess = function (responseData) {
  store.hardware = responseData.hardware
  $('#message').text('Updated game successfully!')
  $('form').trigger('reset')
}

const onUpdateGameFailure = function (responseData) {
  store.hardware = responseData.hardware
  $('#message').text('Updated game failed!')
  $('form').trigger('reset')
}

const onGetGameSuccess = function (data) {
  $('#message').text('get game success')
  $('form').trigger('reset')
}

const onGetGameFailure = response => {
  $('#message').text('Get Games failed!')
  $('form').trigger('reset')
}

const onDeleteGameSuccess = function (data) {
  $('#message').text('You deleted the game!')
  $('form').trigger('reset')
}

const onDeleteGameFailure = function (data) {
  $('#message').text('Delete game failed')
  $('form').trigger('reset')
}

module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure,
  onGetGameSuccess,
  onGetGameFailure,
  onDeleteGameSuccess,
  onDeleteGameFailure
}
