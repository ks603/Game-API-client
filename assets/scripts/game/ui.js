const store = require('./../store')
const showGamesTemplate = require('../templates/show-stuff.handlebars')

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
  $('#message').text('Updated game successfully!')
  $('form').trigger('reset')
}

const onUpdateGameFailure = function (responseData) {
  $('#message').text('Updated game failed!')
  $('form').trigger('reset')
}

const onGetGameSuccess = function (data) {
  $('#message').text('get game success')
  $('form').trigger('reset')
  $('.content').show()
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

const getGamesSuccess = (data) => {
  console.log(data)
  const showGamesHtml = showGamesTemplate({ games: data.games })
  $('.content').append(showGamesHtml)
  $('#message').text('Here is the list!')
}

const clearGames = () => {
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure,
  onGetGameSuccess,
  onGetGameFailure,
  onDeleteGameSuccess,
  onDeleteGameFailure,
  getGamesSuccess,
  clearGames,
  failure
}
