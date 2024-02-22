import { useState, useEffect } from "react";
import axios from "axios";

function Nation() {
  const [drop, setDrop] = useState("");
  const [charsInfo, setCharsInfo] = useState([])

  const fetchDrop = async (dropInfo) => {
    const res = await axios.get(
      `https://last-airbender-api.fly.dev/api/v1/characters?affiliation=${dropInfo}`
    );
    console.log(res.data);
    setCharsInfo(res.data);
  };

  function handleChange(e){
    setDrop(e.target.value)
    fetchDrop(e.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="char-drop">Choose A Character</label>
        <select
          id="dropdown"
          value={drop}
          onChange={handleChange}
        >
          <option value="">Choose</option>
          <option value="fire+nation">Fire Nation</option>
          <option value="water+tribe">Water Tribe</option>
          <option value="earth+kingdom">Earth Kingdom</option>
          <option value="air+nomads">Air Nomads</option>

        </select>
      </form>
        {charsInfo.length > 0 && charsInfo.map((charInfo) => (
            <div>
                <img src={charInfo.photoUrl} alt={`Picture of ${charInfo.name}`}/>
                <p>{charInfo.name}</p>
                <p>{charInfo.affiliation}</p>
            </div>
        ))}
    </div>
  );
}

export default Nation;

// function fetchResults(animeTitle) {
//   fetch(`${baseUrl}/anime?title=${animeTitle}`) // https://animechan.xyz/api/random/anime?title=naruto
//     .then((response) => response.json())
//     .then((res) => {
//       displaySelectedQuote(res);
//     })
// }
