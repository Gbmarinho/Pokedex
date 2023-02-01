// API endpoint --------------------------------------------
const fetchConfig = {
    method: 'GET'
}
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

function getPokemons(){
    fetch(baseUrl)
    .then(response => response.json())
    .then(data => Pokedex.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
}

function getPokemon(){
    fetch(`${baseUrl}3`)
    .then(response => response.json())
    .then(data => {
        return Pokedex.textContent = JSON.stringify(data.moves[20])
    })
    .catch(error => console.error(error))
}
getPokemon()
// const response =  fetch(urlAPI + 1, fetchConfig)
// const arrayJSON =  response.json()
// console.log(arrayJSON);
