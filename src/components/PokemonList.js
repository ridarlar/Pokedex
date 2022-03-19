import React,{useState, useEffect} from "react";
import PokemonCard from "./PokemonCard";
import axios from "axios";
import './PokemonList.css'

function PokemonList() {
    

    const [state, setState]=useState([])

    useEffect(()=>{
        getPokemons('https://pokeapi.co/api/v2/pokemon?limit=100')
    },[])

    const getPokemons=async (url)=>{
        const pokemonsList=await axios.get(url)
        setState([...pokemonsList.data.results])
    }
    
    return(
        <div className="pokemonListContainer">
            {
                state.map((item)=>{
                    // console.log(item)
                    return(
                        <PokemonCard key={item.url+item.name} pokemonUri={item.url}/>
                    )
                })
            }
        </div>
    )
}

export default PokemonList