import React from 'react'
import Header from '../../Components/Header/Header'

const PokemonDetailPage = (props) => {
const isOnPokemonDetailPage = true
  return (
    <div>
      <Header
      isOnPokemonDetailPage={true}
      />
      <h1>Detalhes</h1>
      </div>
  )
}

export default PokemonDetailPage