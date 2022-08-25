import React from 'react'
import Rocket from "../images/Rocket.svg"
import { Link } from 'react-router-dom';
import miniRocket from "../images/miniRocket.png"

const Landing = () => {
  return (
    <>
      {/* main div */}
      <div className='h-[20vh] md:h-[20vh] w-full '>
      </div>
      <div className='h-[60vh] md:h-[60vh] flex justify-center items-center bg-[#e4b12e] w-full '>
        <h1 className='homeHeading text-3xl md:text-4xl w-[80%] md:w-[60%] lg:text-5xl text-white p-3 text-center font-bold'>Thanks for joining, we are currently at <span className='text-blue-700'>85%</span> of our goal of 200 active users</h1>
      </div>
      <div className='h-[20vh] md:h-[20vh] w-full'>
      </div>
      {/* main div ends */}


      {/* rocket illustration */}
      {/* <center><img className='z-[2] -mt-[6rem] ' src={Rocket} alt={Rocket}/></center> */}


      {/* launch button */}
      {/* <Link to="landing"><center><button className='text-2xl flex justify-center items-center mt-12 md:w-[40%] w-[70%]  bg-[#e4b12e] text-white rounded-full px-8 py-3'>Launch <img className='h-[4.5vh] pl-2 ' src={miniRocket} alt={miniRocket}/></button></center></Link> */}

    </>
  );
}

export default Landing