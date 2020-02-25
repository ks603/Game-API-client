const store = require('./../store')

const onCreateGameSuccess = function (data) {
  store.game = data.game
  $('#message').text('Created game successfully!')
}

const onCreateGameFailure = function (data) {
  store.game = data.game
  $('#message').text('Created game failed')
}

const onUpdateGameSuccess = function (responseData) {
  store.hardware = responseData.hardware
  $('#message').text('Updated game successfully!')
}

const onUpdateGameFailure = function (responseData) {
  store.hardware = responseData.hardware
  $('#message').text('Updated game failed!')
}

const onGetGameSuccess = function (data) {
  $('#message').text('get game success')
}

const onGetGameFailure = response => {
  $('#message').text('Get Games failed!')
}

const onDeleteGameSuccess = function (data) {
  $('#message').text('You deleted the game!')
}

const onDeleteGameFailure = function (data) {
  $('#message').text('Delete game failed')
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
