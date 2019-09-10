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

const getPokemon = () => {
  return $.ajax({
    url: config.apiUrl + '/pokemons',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deletePokemon = (id) => {
  return $.ajax({
    url: config.apiUrl + '/pokemons/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createPokemon,
  getPokemon,
  deletePokemon
}
