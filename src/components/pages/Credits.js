import React from 'react'
import './Credits.css'
import Footer from '../Footer';
import Header from '../Header';

function Credits() {
    return (
        <div className='page-credits'>
            <Header/>
            <div className='content-credits'>
                <div className='credits'>
                    <h2>Thanks to:</h2>
                    <p><span>Poke API: </span><a target="_blank" href='https://pokeapi.co/'>https://pokeapi.co/</a></p>
                    <p><span>BatCode: </span><a target="_blank" href='https://bat-code-d-c.web.app/#/home'>https://bat-code-d-c.web.app/#/home</a></p>
                    <p><span>Richard Aguilar: </span><a target="_blank" href='https://github.com/RamCode1621'>https://github.com/RamCode1621</a></p>
                    <p><span>Kevin Largo: </span><a target="_blank" href='https://github.com/Kevin2423'>https://github.com/Kevin2423</a></p>
                    <p><span>Elian Erazo: </span><a target="_blank" href='https://github.com/ELIAN0709'>https://github.com/ELIAN0709</a></p>
                </div>
            </div>
            <Footer/>
        </div>
      )
}

export default Credits