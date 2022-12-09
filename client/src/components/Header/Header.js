import React from 'react'

const Header = () => {
  return (
    <div className='overflow-none'>
    <div className=' bg-hero bg-no-repeat bg-cover bg-center w-[75vw] m-auto rounded-tr-2xl rounded-tl-2xl h-[70vh]'>
      <div className='text-left w-[20vw] relative pt-32  ml-28 h-[50vh] '>
        <p className='font-mystery text-white text-6xl'>CatWiki</p>
        <p className='text-white text-left text-xl mt-5 font-mont'>Get to know more about your cat breed</p>
        <div className='mt-10 mx-auto'>
          <input type="text" className='w-full h-[7vh] rounded-[14vh] focus:outline-none text-[#291507] p-5' placeholder='Enter your breed'></input>
        </div>
      </div>
    </div>
    <div className='h-[70vh] bg-[#E3E1DC] w-[75vw] m-auto overflow-none rounded-br-2xl rounded-bl-2xl mb-10'>
        <div className='relative text-left  ml-28 p-5 pt-12'>
         <a className='font-mont text-[#291507] text-lg'>Most Searched Breeds</a>
         <div className=''>
            <div className='mt-10'>
                <p className='text-[#291507] text-[6vh] w-[32vw] font-mont font-bold leading-[4rem]'>66+ Breeds For you to discover</p>
            </div>
         </div>
         </div>
    </div>
    </div>
  )
}

export default Header
