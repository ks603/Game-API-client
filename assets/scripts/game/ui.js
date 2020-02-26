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

const onGetgames = function (data) {
  $('#message').text('Game deleted')
  $('form').trigger('reset')
  $('.content').show()
}

const onGetGamesFailure = response => {
  $('#message').text('Get Games failed!')
  $('form').trigger('reset')
}

const onDeleteGamesSuccess = function (data) {
  $('#message').text('You deleted the game!')
  $('form').trigger('reset')
}

const onDeleteGameFailure = function (data) {
  $('#message').text('Delete game failed')
  $('form').trigger('reset')
}

const getGamesSuccess = (data) => {
  const showGamesHtml = showGamesTemplate({ games: data.games })
  $('.content').append(showGamesHtml)
  $('#message').text('Here is the list!')
}

const onTestSuccess = (data) => {
  const showGamesHtml = showGamesTemplate({ games: data.games })
  $('.content').append(showGamesHtml)
  $('#message').text('delete success')
}

const clearGames = () => {
  $('.content').empty()
  $('#message').text('Games cleared')
}

const failure = () => {
  $('#message').text('Not authorized for delete')
}

module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure,
  onGetgames,
  onGetGamesFailure,
  onDeleteGamesSuccess,
  onDeleteGameFailure,
  getGamesSuccess,
  clearGames,
  failure,
  onTestSuccess
}
