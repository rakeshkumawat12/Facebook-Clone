import React from 'react'
import './storycard.css'


const Storycard = ({user}) => {
  return (
    <div className="storyCard">
      <div className="overlay"></div>
      <img src={user.profilePicture} alt="Img" className="storyProfile" />
      <img src={user.profilePicture} alt="Img" className="storybackground" />
      <span className="text">{user.username}</span>
    </div>
  );
}

export default Storycard