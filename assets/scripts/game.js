'user strict'
const store = require('./store.js')

// function takes in an integer and outputs a random integer between 0 & input
const randomInt = (max) => {
  return Math.round(Math.random() * (max - 1))
}

// function accepts a integer of the size of the gameboard's sides
// it outputs a 2-dimensional array, initialized with all `0` values
// `0` represents a dead cell, `1` represents an alive cell
const createBoard = sideLength => {
  const board = []
  for (let i = 0; i < sideLength; i++) {
    board[i] = []
  }
  board.forEach(row => {
    for (let j = 0; j < sideLength; j++) {
      row[j] = 0
    }
  })
  return board
}

// function turns randomly selected indices in the stored `board` to `1`
const selectCells = () => {
  const side = store.board.length
  // sets `num` to random # less than board area
  // NOTE: `num` could be provided as input by user instead
  const num = randomInt(side * side)
  for (let i = 0; i <= num; i++) {
    const row = randomInt(side)
    const cell = randomInt(side)
    store.board[row][cell] = 1
  }
}

const checkEmpty = () => {
  // flatten the board into a new array variable
  const checkBoard = [].concat.apply([], store.board)
  // return true if every element is 0, else return false
  return checkBoard.every(e => e === 0)
}

// function takes in the row & cell placement of a square and returns number
// of live neighbors
const liveNeighbors = (r, c) => {
  const side = store.board.length
  let total = 0 // incrementor for live neighbors
  // initializes a 3(!) dimensional array of the row prior, during, and after
  // the input spot
  const square = [
    [[(r - 1), (c - 1)], [(r - 1), c], [(r - 1), (c + 1)]],
    [[r, (c - 1)], [r, (c + 1)]],
    [[(r + 1), (c - 1)], [(r + 1), c], [(r + 1), (c + 1)]]
  ]
  // if the provided row is first, remove the 'prior' row from `square`
  if (r === 0) {
    square.shift()
  // if the provided row is last, remove the 'following' row from `square`
  } else if (r === (side - 1)) {
    square.pop()
  }
  // if the provided column is first, remove the 'prior' column from the row
  if (c === 0) {
    square.forEach(row => row.shift())
  // if the provided column is last, remove the 'following' column from the row
  } else if (c === (side - 1)) {
    square.forEach(row => row.pop())
  }
  // for each coordinate pair in the surrounding square, see if it is 'truthy'
  // (ie `1`), and if so, increase the incrementor by 1
  square.forEach(row => {
    row.forEach(coord => {
      if (store.board[coord[0]][coord[1]]) {
        total += 1
      }
    })
  })
  // returns the total number of surrounding live spaces
  return total
}

const next = () => {
  // declared to new variable just for ease of writing
  const board = store.board
  // declares a new variable to store changes until all checks are finished
  const nextBoard = board

  // for each cell of each row, determine if it should be alive or dead
  // set its spot in nextBoard accordingly
  for (let i = 0; i < board.length; i++) {
    for (let k = 0; k < board[i].length; k++) {
      const neighbors = liveNeighbors(i, k)

      // if the spot is truthy, and has 2 or 3 neighbors, it stays 'alive'
      if (board[i][k] && (neighbors === 2 || neighbors === 3)) {
        nextBoard[i][k] = board[i][k]
      // if the spot is dead but has exactly 3 neighbors, it next becomes alive
      } else if (!board[i][k] && neighbors === 3) {
        nextBoard[i][k] = 1
      // in all other cases, the spot dies or stays dead
      } else {
        nextBoard[i][k] = 0
      }
    }
  }
  // after all checks are complete, the stored board is set to it's next value
  store.board = nextBoard
}

// NOTE: This function would need to update the `console.log`s with changes on
// the gameboard in app
// play calls `next` at least once, and continues calling `next` until the board
// is empty (ie, contains only `0`s)
const play = () => {
  const board = store.board // declared to new variable just for ease of writing
  console.log('start: ', board)
  next()
  while (!checkEmpty()) {
    console.log('next: ', board)
    next()
  }
  console.log('end: ', board)
}

module.exports = {
  createBoard,
  selectCells,
  play
}
