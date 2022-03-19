import axios from 'axios'
import React,{useEffect, useState} from 'react'
import './PokemonCard.css'

function PokemonCard({pokemonUri}) {

    const [pokemon, setPokemon]=useState({})

    useEffect(()=>{
        getInfoPokemon(pokemonUri)
    },[])

    const getInfoPokemon=async(url)=>{
        const dataPokemon=await axios.get(url)
        setPokemon({...dataPokemon.data})
    }

  return (
    <a href='#' className='cardPokemon'>
        <div className='contentCard'>
        {
            pokemon.sprites? (<img src={pokemon.sprites.front_default} alt={pokemon.name}/>):(<></>)
        }
        <p>{pokemon.name}</p>
        </div>
    </a>
  )
}

export default PokemonCard