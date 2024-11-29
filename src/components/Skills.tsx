import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="fade-up"
     data-aos-duration="3000">
                <h2 className='text-2xl md:text-3xl'>I work with these Technologies!</h2>
                <p className='text-gray-400 pt-2'>I am a passionate web developer with expertise in crafting responsive, user-friendly websites and web applications. Proficient in front-end technologies such as React, Next.js, Tailwind CSS, HTML, CSS, and JavaScript, along with TypeScript, I specialize in building dynamic and intuitive interfaces that enhance user experiences. My commitment to clean, efficient code ensures seamless performance and scalability. Whether working on independent projects or collaborating with teams, I strive to deliver solutions that align with client goals and modern web standards.</p>
            </div>
            <div>
                <div className='grid grid-cols-2 sm:gap-6 text-accent text-4xl sm:text-3xl'>
                    <div className='space-y-4'>
                        <h2 data-aos="fade-up"
     data-aos-duration="3000">React.js</h2>
                        <h2 data-aos="fade-up"
     data-aos-duration="3000">Next.js</h2>
                        <h2 data-aos="fade-up"
     data-aos-duration="3000">CSS</h2>

                    </div>
                    <div className='space-y-4'>
                        <h2 data-aos="fade-up"
     data-aos-duration="3000">Typescript</h2>
                        <h2 data-aos="fade-up"
     data-aos-duration="3000">Node.js</h2>
                        <h2 data-aos="fade-up"
     data-aos-duration="3000">Tailwind CSS</h2>

                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills
