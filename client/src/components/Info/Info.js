import React from 'react'

const Info = () => {
  const data = [
    {
        id: 1,
        img : "https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
        title: "Bengal",
        desc: "Bengal are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time owners. Extremely inteligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it." 
    },
    {

        id: 2,
        img: "https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
        title: "Chartreux",
        desc: "The Chartreux is generally silent but communicative. Short play session, mixed with naps and meals are their prefect day. Whilst appreciating any attention you give them, they are not demanding, content instead to follow you around devotedly, sleep on your bed and snuggle with you if you're not feeling well."
    },
    {
        id:3,
        img: "https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
        title:"Khao Manee",
        desc:"The Khao Manee is highly intelligent, with an extrovert and inquisitive nature, however they are very calm and relaxed, making them an idea lap cat."
    }
  ]

  return (
    <div className='mb-32'>
      {
        data.map((entry)=>{
            return (
                <div className='w-[80vw] flex m-auto mt-12'>
                <img src={entry.img} className="w-[15vw] h-[25vh] p-2 rounded-[50px]"/>
                <div className='font-mont w-[60vw] mx-8 mt-4'>
                    <h1 className='text-3xl font-semibold '>{entry.id}.<span className='p-2'>{entry.title}</span></h1>
                    <p className='text-lg mt-8'>{entry.desc}</p>
                </div>
                </div>
            )
        })
      }
    </div>
  )
}

export default Info
