import React from 'react'
import Image1 from "../assets/about1.png"
import Image2 from "../assets/about2.png"
import Image3 from "../assets/about3.png"

const About = () => {
  return (
    <div className='w-[80vw] m-auto flex flex-wrap mb-10'>
    
    <div className='w-[40vw] pl-32 items-center mt-36'>
      <div className='w-[4vw] h-[3px] bg-[#4D270C] rounded-2xl'></div>
        <p className='text-[#291507] w-[25vw] mt-2 font-mont text-left text-[5vh] font-bold'>Why should you have a cat?</p>
        <div className=''>
        <p className='text-left font-mont mt-10 w-[29vw] text-lg '>
            Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety 
            levels.
        </p>
        </div>
        <div className='mt-10 text-left pl-2'>
            <a className='font-mont pt-32 font-bold text-left text-[#291507] text-lg cursor-pointer hover:underline'>Read More</a>
        </div>
        </div>
    <div className='w-[40vw] justify-center'>
      <div className='flex'>
        <div className='mt-5 p-4'>
        <img src={Image2} alt="cat" className='h-[20vh] mb-5'/>
        <img src={Image1} alt="cat" className='h-[35vh] ml-20'/>
      </div>
      <div className='mt-10'>
        <img src={Image3} alt="cat" className="h-[40vh]"/>
      </div>
      </div>
    </div>
    </div>
  )
}

export default About
