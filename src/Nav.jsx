import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'

function Nav() {
  
  return (
    <nav>
      <ul className='nav-list'> 
      <header>ATLA Lore</header>
        <li><Link to="/nation" >Nation Search</Link></li>
        <li><Link to="/avatars">Avatars</Link></li>
        <li><Link to="/character-search">Character Search</Link></li>
      </ul>
    </nav>
  )
}

export default Nav