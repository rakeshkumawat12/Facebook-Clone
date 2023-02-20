import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import './home.css'
import Rightbar from '../../components/rightbar/Rightbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='homeContainer'>
          <Sidebar/>
          <Feed/>
          <Rightbar/>
      </div>
    </>
  )
}

export default Home