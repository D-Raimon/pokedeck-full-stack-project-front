'use strict'
const showPokemonsTemplate = require('../templates/pokemon-listing.handlebars')
// const store = require('../store.js')

const createPokemonSuccess = (data) => {
  $('#pokemon-errors').text('Pokemon created successfully!')
  $('#create-pokemon').trigger('reset')
  // console.log(data)
}

const getPokemonSuccess = (data) => {
  const showPokemonsHtml = showPokemonsTemplate({ pokemons: data.pokemons })
  $('.content').html(showPokemonsHtml)
  $('#pokemon-errors').text('')
  // console.log('Pokemon retreived successfully!')
}

const updatePokemonSuccess = (data) => {
  $('#pokemon-errors').text(`${data.pokemon.name} updated successfully!`)
  $('#update-pokemon').trigger('reset')
  // console.log(data)
}

const failure = (error) => {
  $('#pokemon-errors').text('Whoops, unable to process request. Please try again!')
  return error
}

module.exports = {
  createPokemonSuccess,
  getPokemonSuccess,
  updatePokemonSuccess,
  failure
}
