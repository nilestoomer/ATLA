import React from 'react'
import "./App.css"

function Main({charCard}) {
  return (
      <div className='main'>
        <img src={charCard.photoUrl} alt={`Picture of ${charCard.name}`}/>
        <h1>{charCard.name}</h1>
        <p>Position: {charCard.position || "Human"}</p>
        <p>Affiliation: {charCard.affiliation || "None"}</p>
        <p>Allies: {charCard.allies || "Solo Dolo"}</p>
        <p>Profession: {charCard.profession || "Professional Person"}</p>
    </div>
  )
}

export default Main