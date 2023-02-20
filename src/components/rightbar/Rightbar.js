import React from 'react'
import './rightbar.css'
import Rightbarhome from '../rightbarhome/Rightbarhome';
import ProfileRightBar from "../profileRightBar/ProfileRightBar";


const Rightbar = ({ profile }) => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <Rightbarhome />}
      </div>
    </div>
  );
}

export default Rightbar