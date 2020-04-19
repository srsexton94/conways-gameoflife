'use strict'

const game = require('./game.js')
const gameboardTemplate = require('./templates/gameboard.handlebars')

$(() => {
  $('#play').on('click', () => {
    console.log('play')
  })
  $('.controls input').on('change', event => {
    const val = event.target.value
    const board = game.createBoard(val)
    const gameboardHtml = gameboardTemplate({ rows: board })
    $('#gameboard').html(gameboardHtml)
    console.log('board', board)
  })
})
