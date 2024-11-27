import { title } from 'process'
import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data= [
    {
        id:0,
        title: "Resume builder",
        desc: "A HTML & CSS Based Website with Typescript",
        img: "/Resize Resume.png",
        tags: ["HTML", "CSS", "Typescript"],
    }
]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32' data-aos="fade-up"
    data-aos-duration="3000">
      <Heading title='My Projects' />
      <div className='grid gao-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects
