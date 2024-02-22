import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu';

function Nav() {
  
  return (
    <div>
      <nav>
        <Link to="/nation" >Nation Search</Link>
        <Link to="/avatars">Avatars</Link>
        <Link to="/character-search">Character Search</Link>
      </nav>
    </div>
  )
}

export default Nav