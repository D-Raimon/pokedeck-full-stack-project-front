'use strict'

// const store = require('../store.js')

const createPokemonSuccess = (data) => {
  $('#pokemon-errors').text('Pokemon created successfully!')
  console.log(data)
}

const createPokemonFailure = (error) => {
  $('#pokemon-errors').text('Error trying to create Pokemon!')
  console.error(error)
}

module.exports = {
  createPokemonSuccess,
  createPokemonFailure
}
