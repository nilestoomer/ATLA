import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal.jsx';

function Avatars() {
  const [avatarsInfo, setAvatarsInfo] = useState([])
  const [avatar, setAvatar] = useState({})
  const [modal, setModal] = useState(false)

  const fetchAvatar = async () => {
      const res = await axios.get("https://last-airbender-api.fly.dev/api/v1/characters/avatar");
      console.log(res.data)
      setAvatarsInfo(res.data)
  }

  useEffect(() => {
    fetchAvatar()
  }, [])

  const handleModal = (clickedAvatar) => {
    setAvatar(clickedAvatar)
    setModal(true)
  }
  
  return (
    <div className='avatar-thing'>
      {avatarsInfo.length > 0 && avatarsInfo.map((avatarInfo) => (
            <div onClick={() => handleModal(avatarInfo)}>
                <img className='avatarModelPic' src={avatarInfo.photoUrl} alt={`Picture of ${avatarInfo.name}`}/>
                <p>{avatarInfo.name}</p>
                {/* <p>{avatarInfo.position}</p>
                <p>{avatarInfo.allies}</p>
                <p>{avatarInfo.enemies}</p> */}
            </div>
        ))}
        { modal && <Modal avatar={avatar} setModal={setModal}/> }
    </div>
  )
}

export default Avatars