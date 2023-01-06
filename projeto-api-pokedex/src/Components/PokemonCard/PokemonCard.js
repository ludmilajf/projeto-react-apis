import React from 'react'
import { CardContainer } from './PokemonCardStyle'
import pokeball from '../../assets/pokeball.svg'

const PokemonCard = (props) => {
  const { name,
    image,
    id,
    addToPokedex,
    pokemon,
    isOnPokemonListPage,
    isOnPokedexPage,
    deleteFromPokedex
  } = props

  return (
    <CardContainer>
      <div className='name-id-type'>
        <h2>#{id}</h2>
        <h1>{name}</h1>
      </div>
      <div className='layout-card'>
        <img src={pokeball} alt='pokeball' />
        <img src={image} alt='pokemon' />
      </div>
      <div className='button-and-details'>
        <a href='/details'>Detalhes</a>

        {
          isOnPokedexPage &&
          <button onClick={() => deleteFromPokedex(pokemon)}><h2>Excluir da Pokédex</h2></button>
        }

        {
          isOnPokemonListPage &&
          <button onClick={() => addToPokedex(pokemon)}>Capturar!</button>
        }
      </div>
    </CardContainer>
  )
}

export default PokemonCard