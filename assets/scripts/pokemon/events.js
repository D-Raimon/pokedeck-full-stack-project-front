'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreatePokemon = (event) => {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.createPokemon(data)
    .then(ui.createPokemonSuccess)
    .catch(ui.failure)
}

const onGetPokemon = (event) => {
  event.preventDefault()
  api.getPokemon()
    .then(ui.getPokemonSuccess)
    .catch(ui.failure)
}
//
// const onUpdatePokemon = (event) => {
//   event.preventDefault()
//
//
// }
//
// const onDeletePokemon = (event) => {
//   event.preventDefault()
//
//
// }

const addHandlers = () => {
  $('#create-pokemon').on('submit', onCreatePokemon)
  $('#getPokemonButton').on('click', onGetPokemon)
}

module.exports = {
  addHandlers
}
