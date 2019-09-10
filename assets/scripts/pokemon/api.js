'use strict'
const config = require('../config.js')
const store = require('../store.js')

const createPokemon = (data) => {
  return $.ajax({
    url: config.apiUrl + '/pokemons',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createPokemon
}
