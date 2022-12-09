import React from 'react'


const About = () => {
  return (
    <div className='w-[80vw] m-auto flex mb-10'>
    <div className='w-[30vw] pl-32 mt-32'>
        <p className='text-[#291507] font-mont text-left text-[5vh] font-bold'>Why should you have a cat?</p>
        <div className=''>
        <p className='text-left font-mont mt-10 w-[29vw] text-lg '>
            Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety 
            levels.
        </p>
        </div>
        <div className='mt-10 text-left pl-2'>
            <a className='font-mont pt-32 font-bold text-left text-[#291507] text-lg'>Read More</a>
        </div>
        </div>
    <div className='w-[40vw]'></div>
    </div>
  )
}

export default About
