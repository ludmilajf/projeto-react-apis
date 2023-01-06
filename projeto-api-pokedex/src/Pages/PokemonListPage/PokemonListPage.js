import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import PokemonCard from '../../Components/PokemonCard/PokemonCard'
import { PokemonListStyled } from './PokemonListStyle'
import axios from "axios"

const PokemonListPage = (props) => {
  const isOnPokemonListPage = true
  
  const [pokemons, setPokemons] = useState([])
  const [pokedex, setPokedex] = useState([])

  const getPokemons = () => {
    let endpoints = []
    for (let i = 1; i < 20; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }
    let response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res)).catch((err) => console.log(err))
  }
  useEffect(() => {
    getPokemons()
    localStorage.getItem("catchedPokemons") === null && localStorage.setItem("catchedPokemons", JSON.stringify([]))
  }, [])

  const addToPokedex = (pokemonToAdd) => {
    const newPokedex = [...pokedex]
    const pokemonFound = newPokedex.some((pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name )
    if(!pokemonFound) {
      const newPokemon = {...pokemonToAdd}
      newPokedex.push(newPokemon)
    }else{
      alert("Pokemon já adicionado")
    }
    setPokedex(newPokedex)
  } 

  

  const deleteFromPokedex = (pokemonToDelete) => {
    const newPokedex = [...pokedex]

    const indexFound = newPokedex.findIndex(
        (pokemonInPokedex) => pokemonInPokedex.id === pokemonToDelete.id
    )

    newPokedex.splice(indexFound, 1)
    setPokedex(newPokedex)
}



  return (
    <div>
      <Header
        isOnPokemonListPage={true}
      />
      <PokemonListStyled>

        <h1>Todos os Pokémons</h1>
        {pokemons && pokemons.map((pokemon) => (
          <PokemonCard
          name={pokemon.data.name}
          image={pokemon.data.sprites.other.dream_world.front_default}
          key={pokemon.data.id}
          addToPokedex={addToPokedex}
          deleteFromPokedex={deleteFromPokedex}
          isOnPokemonListPage={true}
          />
        ))}

      </PokemonListStyled>
    </div>
  )
}

export default PokemonListPage