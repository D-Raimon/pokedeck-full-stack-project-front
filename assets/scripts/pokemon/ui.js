'use strict'
const showPokemonsTemplate = require('../templates/pokemon-listing.handlebars')
// const store = require('../store.js')

const createPokemonSuccess = (data) => {
  $('#pokemon-errors').text('Pokemon created successfully!')
  $('#create-pokemon').trigger('reset')
  console.log(data)
}

const getPokemonSuccess = (data) => {
  const showPokemonsHtml = showPokemonsTemplate({ pokemons: data.pokemons })
  $('.content').html(showPokemonsHtml)
  console.log('Pokemon retreived successfully!')
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  createPokemonSuccess,
  getPokemonSuccess,
  failure
}
