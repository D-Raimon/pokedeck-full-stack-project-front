# PokeDecks Client

## About
```md
    PokeDecks is an app for anyone with a nostalgia for Pokemon cards that grew
  up in the 90's and wants to relive the original days of opening packs for gen
  1 pokemon. This app will allow the user to create a deck and then add whatever
  pokemon you want to it in order to construct the deck that you always wanted,
  but never had due to packluck or the restricted financial situation of being a
  kid.
```

- [PokeDecks API Repo](https://github.com/D-Raimon/pokedeck-full-stack-project)
- [Deployed Client Application](https://d-raimon.github.io/pokedeck-full-stack-project-front/)
- [Deployed API](https://immense-sea-54902.herokuapp.com)

## Technologies Used
  - HTML
  - CSS
  - SASS
  - Bootstrap
  - JavaScript
  - jQuery
  - Ajax
  - Handlebars

## Process
  I began my project by createing user stories and wireframes of how I wanted my
  deployed front end to look. After that I started by building out a back end with
  Ruby on Rails that would be able to interact with the requests that I would be
  sending from my front-end. With a well thought out outline from my user stories
  I was able to implement all of the features that I wanted for my version one using
  scaffold. Once all of the backend was tested and taken care of I moved onto the
  front end.

  For the front end I started off by creating all of the form fields required for
  Auth and then tested them to make sure that everything was seemlessly connected
  to the backend. Once I had confirmed that there were no errors I worked on adding
  the functionality for creating, retrieving, updating and deleting specific pokemon
  cards. This was the lengthiest part of the process and required some refactoring in
  the update feature in particular due to the nature of handlebars.

  Once all of the functionality of the app was taken care of for my version 1 I
  spent a good amount of time styling and implementing bootstrap modals and navbars
  to try to make my site more visually appealing to the user. Although I have completed
  my version 1 I still have a lot more that I want to do in order to get this project
  to where I envisioned at the start.

## Unresolved Problems
- Was unable to get to version 2 during the project due to time contraints
  - Still want to implement a deck building feature
- Still need to make some adjustments to the UI as it is kind of sloppy
- Would also like to make adjustments to how user facing errors are displayed in messages

## User Stories

Version 1
- As a user I want to sign-up, sign-in, update my password and sign-out.
- As a user I want to create a pokemon.
- As a user I want to update a pokemon.
- As a user I want to delete a pokemon.
- As a user I want to search for pokemon.

Version 2
- As a user I want to create a new deck of pokemon.
- As a user I want to view my deck of pokemon.
- As a user I want to be able to update my deck of pokemon.
- As a user I want to be able to delete my deck of pokemon.
- As a user I want to be able to search for pokemon.
- As a user I want to be able to add a pokemon to my deck.
- As a user I want to be able to remove a pokemon from my deck.


## Wireframes
![alt text](https://i.imgur.com/9emQTYG.jpg "Wireframe 1")
![alt text](https://i.imgur.com/Tuw4kC0.jpg "Wireframe 2")
![alt text](https://i.imgur.com/pvuZFnt.jpg "ERD")
