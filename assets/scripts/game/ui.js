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
}

const onGetGameFailure = response => {
  $('#message').text('Get Games failed!')
}

module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure,
  onGetGameSuccess,
  onGetGameFailure
}
