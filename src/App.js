import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Main from './Main';
import Nav from './Nav';
import CharSrc from './CharSrc';
import { Routes, Route } from 'react-router-dom';
import Nation from './Nation';
import Avatars from './Avatars';

function App() {
  const [charCard, setCharCard] = useState("")
  const fetchRandom = async () => {
      const res = await axios.get("https://last-airbender-api.fly.dev/api/v1/characters/random");
      console.log(res.data)
      setCharCard(res.data[0])
  }

  useEffect(() => {
    fetchRandom();
  }, []);

  return (
    <div className="App">
      <header>ATLA Lore</header>
      <Main charCard={charCard}/>
      <Nav />


      <Routes>
          <Route path="/nation" element={<Nation />} />
          <Route path="/avatars" exact element={<Avatars />} />
          <Route path="/character-search" element={<CharSrc />} />
       </Routes>
    </div>
  );
}

export default App;
