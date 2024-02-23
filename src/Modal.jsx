import React from 'react'
import "./App.css"

function Modal({avatar, setModal}) {
  return (
    <div className='avatarModal'>
        <img src={avatar.photoUrl} alt={`Picture of ${avatar.name}`}/>
        <p>{avatar.name}</p>
        <p>{avatar.position}</p>
        <p>{avatar.allies}</p>
        <p>{avatar.enemies}</p>
        <button className='avatarButton' onClick={() => setModal(false)}>🐉</button>
    </div>
  )
}

export default Modal