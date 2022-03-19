import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <h1>Pokedex</h1>
        <nav>
            <Link className='header-link' to="/">Home</Link>
            <Link className='header-link' to="#">Repositorie</Link>
            <Link className='header-link' to="#">Credits</Link>
        </nav>
    </div>
  )
}

export default Header