import React from 'react'
import Header from '../../Components/Header/Header'
import PokemonCard from '../../Components/PokemonCard/PokemonCard'
import { PokedexStyled } from './PokedexStyle'

const PokedexPage = (props) => {
  const isOnPokedexPage = true
  const { pokedex, pokemons, addToPokedex} = props

  
  return (
    <div>
      <Header
        isOnPokedexPage={true}
      />
      <PokedexStyled>
        <h1>Pokédex</h1>
        {pokemons  && 
        pokedex.map((pokemon) => (
          <PokemonCard 
            name={pokemon.data.name}
            image={pokemon.data.sprites.other.dream_world.front_default}
            key={pokemon.data.id}
            isOnPokedexPage={true}
          />
        ))}
      </PokedexStyled>
    </div>
  )
}

export default PokedexPage