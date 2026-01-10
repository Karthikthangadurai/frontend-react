import React from 'react'
import { FaBookReader, FaHandHoldingHeart, FaLeaf } from 'react-icons/fa'
import goal from '../assets/sustainable-development-goals.png' //importing goal image

const Program = () => {
  return (
    <section>

        <div className='px-6 md:px-28 py-3 text-green-700 bg-blue-100 font-semibold text-center'>
            <p className='mx-3 my-1 md:mx-28 p-4 bg-white rounded shadow'>Hi! 🖐🏻 Upskill as a Social Worker with <b className='text-blue-700 font-serif'>KANAVU FOUNDATION</b> Training Module <button className='text-red-500 font-bold hover:underline hover:text-red-600'>CLICK HERE!</button></p>
        </div>

        <div className='bg-slate-100'>
            <h1 className='p-6 bg-slate-100 text-green-800 text-2xl md:text-3xl font-semibold text-center  shadow'>Our Programmes</h1>
            <div className='m-4 p-2 md:flex md:justify-evenly items-center text-center'>

                   <div className='m-4 p-4 bg-white border border-gray-200 shadow rounded '>
                    <p className='bookreader p-2 text-3xl'><FaBookReader/></p>
                    <h2 className='text-lg p-1 font-semibold'>Education</h2>
                    <p className='p-1'>Take the knowledge sharing for kids beyond pages of books and walls of a school and provide a holistic understanding of society .</p>
                    </div>

                <div className='m-4 p-4 bg-white border border-gray-200 shadow rounded'>
                    <p className='leaf p-2 text-3xl '><FaLeaf/></p>
                    <h2 className='text-lg p-1 font-semibold'>Environment</h2>
                    <p className='p-1'>Sow a seed for a better future and work with people in a community to nurture and nourish the plants to create a society that is sustainable for all to live in.</p>
                </div>

                <div className='m-4 p-4 bg-white border border-gray-200 shadow rounded'>
                    <p className='handholdingheart p-2 text-3xl'><FaHandHoldingHeart/></p>
                    <h2 className='text-lg p-1 font-semibold'>Humanity</h2>
                    <p className='p-1'>Bring together people as equals and support every person in a time of need to bring out the best in a person so all may live in a better society.</p>
                </div>
            </div>
              <div className='mx-10 bg-white rounded border border-gray-200 shadow flex flex-col justify-center items-center'>
                <h1 className='pt-3 text-lg md:text-2xl font-semibold'>To Reach Our Goals</h1>
                <img className='goal p-2 md:w-1/5 md:h-auto' src={goal} alt="sustainable development goals" />
                </div>

        </div>
    </section>
  )
}

export default Program