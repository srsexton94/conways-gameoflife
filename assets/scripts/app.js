'use strict'

const game = require('./game.js')
const store = require('./store.js')
const gameboardTemplate = require('./templates/gameboard.handlebars')

$(() => {
  // when the user changes the gameboard size, store it and set board HTML
  $('.controls input').on('change', event => {
    const val = event.target.value
    store.board = game.createBoard(val)
    const gameboardHtml = gameboardTemplate({ rows: store.board })
    $('#gameboard').html(gameboardHtml)
  })
  $('#select').on('click', () => {
    game.selectCells()
  })
  $('#play').on('click', () => {
    console.log('play')
  })
})
