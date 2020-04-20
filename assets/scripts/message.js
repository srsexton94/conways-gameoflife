const numAlert = num => {
  $('#user-msg')
    .text(`Sorry, it must be between 3 and 50. We've defulted to ${num}.`)
    .css('color', 'red')

  setTimeout(() => {
    $('#user-msg').text('')
  }, 2000)
}

module.exports = {
  numAlert
}
