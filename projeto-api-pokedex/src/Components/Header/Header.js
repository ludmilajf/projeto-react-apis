import React from 'react'
import { useNavigate } from 'react-router-dom'
import pokemonLogo from "../../assets/pokemon-logo.svg"
import { HeaderContainer } from './HeaderStyle'
import {
  goToPokemonListPage,
  goToPokedexPage,
} from '../../Routes/coordinator'

const Header = (props) => {
const {isOnPokemonListPage, 
  isOnPokedexPage, 
  isOnPokemonDetailPage,
} = props

const navigate = useNavigate()


  return (
    <HeaderContainer>
            <img src={pokemonLogo} alt='Logo Pokemon' />
            {
              isOnPokemonListPage &&
              <button onClick={() => goToPokedexPage(navigate)}><h2>Pokédex</h2></button>
            }
            {
              isOnPokedexPage &&
              <a href='/'><h2>Todos os Pokémons</h2></a>
            }
            {
            isOnPokemonDetailPage &&
              <a href='/'><h2>Todos os Pokémons</h2></a>
            }
    </HeaderContainer>
  )
}

export default Header