import React from 'react'
import Image from 'next/image';
interface propsType{
    title: string;
    desc: string;
    img: string;
    tags: string[];
}

const Card:React.FC<propsType> = ({title, desc, img, tags }) => {
  return (
    <div className='border border-accent w-[300px] sm:w-[350px]'data-aos="fade-up"
    data-aos-duration="3000">
      <div>
        <Image className='w-[300px] sm:w-[350px] h-[350px] object-cover'
        src={img}
        width={350}
        height={300}
        alt={title}
        />
      </div>


      <div className='p-4 space-y-4'>
        <div className='text-4xl font-extralight'>{title}</div>
        <div>{desc}</div>
        <div>
            {tags.map((el) => (
                <div className='tags' key={el}>
               {el}
                </div>
                ))}
        </div>
        </div>


    </div>
  )
}

export default Card
