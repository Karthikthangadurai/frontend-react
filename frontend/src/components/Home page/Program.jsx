import React from 'react'
import { FaBookReader, FaHandHoldingHeart, FaLeaf } from 'react-icons/fa'

const Images = [
    { 
        image:"http://glogonx.world/wp-content/uploads/2025/09/goal1.jpeg",
    } ,
    {
        image:"http://glogonx.world/wp-content/uploads/2025/09/goal2.jpeg",
    },
    {   
        image:"http://glogonx.world/wp-content/uploads/2025/09/goal3.jpeg",
    },
    {
        image:"http://glogonx.world/wp-content/uploads/2025/09/goal4.jpeg",
    },
    {
        image:"http://glogonx.world/wp-content/uploads/2025/09/goal5.jpeg",
    },
    {
        image:"http://glogonx.world/wp-content/uploads/2025/09/goal6.jpeg",
    },
    {
        image:"http://glogonx.world/wp-content/uploads/2025/09/goal7.jpeg",
    },
    {
        image:"http://glogonx.world/wp-content/uploads/2025/09/goal8.jpeg",
    },
    {
        image:"http://glogonx.world/wp-content/uploads/2025/09/goal9.jpeg",
    },
    {
        image:"http://glogonx.world/wp-content/uploads/2025/09/goal10.jpeg",
    },
    {
        image:"http://glogonx.world/wp-content/uploads/2025/09/goal11.jpeg",
    },
    {
        image:"http://glogonx.world/wp-content/uploads/2025/09/goal12.jpeg",
    },
    {
        image:"http://glogonx.world/wp-content/uploads/2025/09/goal13.jpeg",
    },
    {
        image:"http://glogonx.world/wp-content/uploads/2025/09/goal14.jpeg",
    },
    {
        image:"http://glogonx.world/wp-content/uploads/2025/09/goal15.jpeg",
    },
    {
        image:"http://glogonx.world/wp-content/uploads/2025/09/goal16.jpeg",
    },
    {
        image:"http://glogonx.world/wp-content/uploads/2025/09/goal17.jpeg",
    }

]       

const Program = () => {

  return (
    <section>

        <div className='px-6 md:px-28 py-3 text-green-700 bg-blue-100 font-semibold text-center'>
            <p className='mx-3 my-1 md:mx-28 p-4 bg-white rounded shadow'>Hi! 🖐🏻 Upskill as a Social Worker with <b className='text-blue-700 italic'>KANAVU FOUNDATION</b> Training Module <button className='text-red-500 font-bold hover:underline hover:text-red-600'>CLICK HERE!</button></p>
        </div>

        <div className='bg-slate-100'>
            <h1 className='p-6 bg-slate-100 text-green-800 text-2xl md:text-3xl font-semibold text-center italic shadow'>Our Programmes</h1>
            <div className='m-4 p-2 md:flex md:justify-evenly items-center text-center'>

                   <div className='m-4 p-4 bg-white border border-gray-200 shadow rounded '>
                    <p className='bookreader p-2 text-3xl'><FaBookReader/></p>
                    <h2 className='text-lg text-green-800 p-1 font-semibold italic'>Education</h2>
                    <p className='p-1'>Take the knowledge sharing for kids beyond pages of books and walls of a school and provide a holistic understanding of society .</p>
                    </div>

                <div className='m-4 p-4 bg-white border border-gray-200 shadow rounded'>
                    <p className='leaf p-2 text-3xl '><FaLeaf/></p>
                    <h2 className='text-lg text-green-800 p-1 font-semibold italic'>Environment</h2>
                    <p className='p-1'>Sow a seed for a better future and work with people in a community to nurture and nourish the plants to create a society that is sustainable for all to live in.</p>
                </div>

                <div className='m-4 p-4 bg-white border border-gray-200 shadow rounded'>
                    <p className='handholdingheart p-2 text-3xl'><FaHandHoldingHeart/></p>
                    <h2 className='text-lg text-green-800 p-1 font-semibold italic'>Humanity</h2>
                    <p className='p-1'>Bring together people as equals and support every person in a time of need to bring out the best in a person so all may live in a better society.</p>
                </div>
            </div> 
            <div className="bg-slate-100">
             <h1 className="p-4 mx-20 md:mx-32 bg-green-800 text-white text-xl md:text-2xl font-semibold italic text-center border-2 border-yellow-300 shadow rounded-full ">To Reach Our Goals</h1>
            <div className="m-4 p-2 flex justify-evenly flex-wrap">
                {Images.map((img, index) => (
                    <img key={index} className="w-1/2 h-auto md:w-1/6 md:h-auto rounded m-4" src={img.image} alt={`goal${index + 1}`} />
                ))}
               </div> 
               </div>
        </div>
    </section>
  )
}

export default Program