import React,{useState, useEffect} from "react";
import PokemonCard from "./PokemonCard";
import axios from "axios";
import './PokemonList.css'


import Modal from "./Modal";
function PokemonList() {

    const [state, setState]=useState({
        list:[],
        lastPokemon:0,
        numPokemons:25
    })
    const [modal,setModal]=useState({
        visibility:false,
        pokemonSelected:{}
    })

    useEffect(()=>{
            getPokemons()
    },[state.numPokemons])

    const handleScroll=(e)=>{
         const {scrollTop, clientHeight, scrollHeight}=e.currentTarget
        //  console.log(`
        // Top:${scrollTop}
        // Client Height:${clientHeight}
        // Scroll height: ${scrollHeight}
        //  `)
        if(scrollHeight-scrollTop===clientHeight){
            console.log("I need more pokemons")
            setState({
                ...state,
                numPokemons:state.numPokemons+20
            })
        }
    }

    const getPokemons=async(num)=>{
        const pokemonsList=await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${state.numPokemons}}`)
        setState({
            ...state,
            list:[...pokemonsList.data.results]
        })
    }

   

    return(
        <>
        <div className="pokemonListContainer" id="container-cards" onScroll={handleScroll}>
            <div className="pokemonListContainer--list">
                {
                    state.list.map((item,index)=>{
                        return(
                            <PokemonCard 
                                key={index} 
                                pokemonUri={item.url}
                                modalState={modal} 
                                setModalState={setModal}
                            />
                        )
                    })
                }
            </div>
        </div>
        <Modal modalState={modal} setModalState={setModal}/>
        </>
    )
}
export default PokemonList