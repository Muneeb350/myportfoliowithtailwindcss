import React from 'react'
import { IoIosMail } from "react-icons/io";
import { BsTelephoneOutboundFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-4'>
                <h2 className='text-4xl' data-aos="fade-up"
     data-aos-duration="3000">Contact</h2>
                <p className='text-gray-400 text-[18px] pt-2' data-aos="fade-up"
     data-aos-duration="3000">Contact me with message or a call by submitting form.
                </p>
                <div className='flex gap-3 items-center' data-aos="fade-up"
     data-aos-duration="3000">
                <IoIosMail size={50}/> muneebjawed304@gmail.com
                </div>
                <div className='flex gap-3 items-center' data-aos="fade-up"
     data-aos-duration="3000">
                <BsTelephoneOutboundFill size={40}/> (92) 312-0800026
                </div>
            </div>
            <div className='space-y-8'>
                <div className='flex flex-col gap-1' data-aos="fade-up"
     data-aos-duration="3000">
                    <label htmlFor="name">Name</label>
                    <input type="text" 
                    className='h-[30px] bg-transparent border border-white'
                    id='name'/>
                </div>
                <div className='flex flex-col gap-1' data-aos="fade-up"
     data-aos-duration="3000">
                    <label htmlFor="email">Email</label>
                    <input type="text" 
                    className='h-[30px] bg-transparent border border-white'
                    id='email'/>
                </div>
                <div className='flex flex-col gap-1' data-aos="fade-up"
     data-aos-duration="3000">
                    <label htmlFor="msg">Message</label>
                    <textarea
                    className='bg-transparent border border-white'
                    id='msg' rows={6}>
                   </textarea>
                </div>
                <button className="bg-slate-500 hover:bg-slate-400 text-white font-bold py-2 px-6 rounded" data-aos="fade-up"
     data-aos-duration="3000">Send</button>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
