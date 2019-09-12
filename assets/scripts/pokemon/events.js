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

const onUpdatePokemon = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updatePokemon(data)
    .then(ui.updatePokemonSuccess).then(function () {
      onGetPokemon(event)
    })
    .catch(ui.failure)
}

const onDeletePokemon = (event) => {
  const id = $(event.target).data('id')
  api.deletePokemon(id)
    // .then(onGetBooks(event)) bad will run onGetBooks immedietally since we are calling the function with parenthesis
    // need to call it inside of an annonymous function
    .then(function () {
      onGetPokemon(event)
    })
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#create-pokemon').on('submit', onCreatePokemon)
  $('#getPokemonButton').on('click', onGetPokemon)
  $('.content').on('click', '.delete-button', onDeletePokemon)
  $('.content').on('click', '.update-button', function () {
    const myPokemonId = $(this).data('id')
    $('.modal-body #pokemonId').val(myPokemonId)
  })
  $('#update-pokemon').on('submit', onUpdatePokemon)
}

module.exports = {
  addHandlers
}
