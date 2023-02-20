import React from 'react'
import './rightbarhome.css'
import { Usersonline } from '../../data';
import Online from '../online/Online';

const Rightbarhome = () => {
  return (
    <div className="rightbarhome">
      <div className="birthdayContainer">
        <img
          src="/assets/person/gift.jpg"
          alt="IMG"
          className="birthdayImg"
        />
        <span className="birthdayText">
          <b>Rakesh Kumawat</b> and <b>other friends</b> have a birthday today
        </span>
      </div>
      <img src="/assets/person/advertise.jpg" alt="" className="rightbarAdvert" />

      <span className="rightbarTitle">Online Friends</span>

      <ul className="rightbarFriendList">
        {Usersonline.map((u) => (
          <Online key={u.id} onlineuser={u} />
        ))}
      </ul>
    </div>
  );
}

export default Rightbarhome