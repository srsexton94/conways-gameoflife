'use strict'

const game = require('./game.js')
const store = require('./store.js')
const message = require('./message.js')
const gameboardTemplate = require('./templates/gameboard.handlebars')

$(() => {
  // when the user changes the gameboard size, store it and set board HTML
  $('.controls input').on('change', event => {
    let val = event.target.value
    if (val > 50) {
      message.numAlert(50)
      val = 50
    } else if (val < 3) {
      message.numAlert(3)
      val = 3
    }
    store.board = game.createBoard(val)
    const gameboardHtml = gameboardTemplate({ rows: store.board })
    $('#gameboard').html(gameboardHtml)
  })

  // when a user clicks the "select cells" button
  $('#select').on('click', () => {
    game.selectCells()

    const gameboardHtml = gameboardTemplate({ rows: store.board })
    $('#gameboard').html(gameboardHtml)
  })

  // when a user presses play...
  $('#play').on('click', () => {
    console.log('play')
  })
})
