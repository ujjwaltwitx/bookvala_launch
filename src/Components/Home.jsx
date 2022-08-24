import React from 'react'
import Rocket from "../images/Rocket.svg"
import { Link } from 'react-router-dom';
import miniRocket from "../images/miniRocket.png"


const Home = () => {
  return (
    <>
      {/* main div */}
      <div className='h-[50vh] md:h-[50vh] flex justify-center items-center bg-[#e4b12e] w-full '>
        <h1 className='homeHeading text-3xl md:text-4xl w-[80%] md:w-[60%] lg:text-5xl text-white p-3 text-center font-bold'>Let's Launch Your Beta version Super App</h1>
      </div>
      {/* main div ends */}


      {/* rocket illustration */}
      <center><img className='z-[2] -mt-[6rem] ' src={Rocket} alt={Rocket}/></center>


      {/* launch button */}
      <Link to="landing"><center><button className='text-2xl flex justify-center items-center mt-12 md:w-[40%] w-[70%]  bg-[#e4b12e] text-white rounded-full px-8 py-3'>Launch <img className='h-[4.5vh] pl-2 ' src={miniRocket} alt={miniRocket}/></button></center></Link>

    </>
  );
}

export default Home