import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PokemonListPage from '../Pages/PokemonListPage/PokemonListPage'
import PokedexPage from '../Pages/PokedexPage/PokedexPage'
import PokemonDetailPage from '../Pages/PokemonDetailPage/PokemonDetailPage'

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<PokemonListPage />} />
          <Route path="pokedex" element={<PokedexPage />} />
          <Route path="details" element={<PokemonDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router