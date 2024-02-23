import React from 'react'
import axios from 'axios';
import { useState, useEffect} from 'react';

function CharSrc() {
  const [search, setSearch] = useState("")
  const [char, setChar] = useState({})
  const fetchChar = async () => {
    const res = await axios.get(`https://last-airbender-api.fly.dev/api/v1/characters?name=${search}`);
    console.log(res.data)
    setChar(res.data[0])

    // useEffect(() => {
    //   fetchChar();
    // }, []);
}
  return (
    <div>
      <label for="char-search">Search for an ATLA Character</label>
      <input 
        type="search" 
        placeholder="your character"
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
      />

      <button 
      onClick={fetchChar}
      type='search'
      >Search</button>

      <img className='char-src-pic' src={char.photoUrl} alt={`Picture of ${char.name}`}/>
      <p>Name: {char.name || "wrong"}</p>
    </div>
  )
}

export default CharSrc