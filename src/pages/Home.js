import React from 'react'
import About from '../components/home/About';
import Header from './../components/home/Header';
import RoomContainer from './../components/home/RoomContainer'


const Home = ({state, setBannerDetails,setAboutDetails, setRoomDetails}) => {
  
  return (
    <>
      <Header showBannerDetails={state.showBannerDetails} setBannerDetails={setBannerDetails}/>
      <About setAboutDetails={setAboutDetails} showAboutDetails={state.showAboutDetails}/>
      <RoomContainer rooms={state.rooms} setRoomDetails={setRoomDetails} />
    </>
  )
}

export default Home
