import React,{useState, useEffect} from "react";
import PokemonCard from "./PokemonCard";
import axios from "axios";
import './PokemonList.css'


import Modal from "./Modal";

function PokemonList() {
    

    const [state, setState]=useState({
        list:[],
        lastPokemon:0
    })
    const [modal,setModal]=useState({
        visibility:false,
        pokemonSelected:{}
    })

    useEffect(()=>{
            getPokemons('https://pokeapi.co/api/v2/pokemon?limit=150')
    },[])

    const getPokemons=async (url)=>{
        const pokemonsList=await axios.get(url)
        setState({
            ...state,
            list:[...pokemonsList.data.results]
        })
    }
    
    // let observerScroll=new IntersectionObserver((inputs,observerScroll)=>{
    //     console.log(inputs )
    // },{
    //     rootMargin:'0',
    //     threshold:1.0
    // })

    return(
        <>
        <div className="pokemonListContainer">
            
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