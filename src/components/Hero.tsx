import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id="hero" className="min-h-screen bg-no-repeat bg-[url(/Profile-modified.png)] bg-cover"
    style={{backgroundSize:"25%", backgroundPosition:"left 100px top 150px"}}
    >

      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[30px] sm:text-[90px] font-bold leading-tight flex justify-center items-center'>
        <div>
          <p data-aos="fade-up"
     data-aos-duration="3000">I&apos;m</p>
          <p data-aos="fade-up"
     data-aos-duration="3000">Muneeb</p>
          <p data-aos="fade-up"
     data-aos-duration="3000">Jawed</p>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default Hero
