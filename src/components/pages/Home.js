import React from 'react'
import Footer from '../Footer';
import Header from '../Header';
import PokemonList from '../PokemonList';
import './Home.css'

function Home() {
  return (
    <div className='page-home'>
        <Header/>
        <PokemonList/>
        <Footer/>
    </div>
  )
}

export default Home