import React from 'react'
import { IoMdHand } from "react-icons/io";

const Slidebar = () => {
  return (
    <section className=''>

    <div className='md:flex md:flex-col md:items-center'>
        <div className='p-5 text-center md:flex justify-evenly items-center'>
          <div className='md:w-2/5'>
        <img className='' src="https://thuvakkam.org/wp-content/uploads/2025/12/tkm-home-cover-humanity1.png" alt="image"  />
        </div>
        <div>
        <h1 className=' mt-2 md:mt-4 font-semibold text-xl'>Your compossion can change lives.</h1>
        <button className='mt-1 md:mt-3 p-2 text-white bg-yellow-500 border rounded font-semibold hover:text-green-700 hover:bg-white hover:border hover:border-green-700'>Donate now!</button>    
        </div>
        </div>

        <div className='p-5 text-center md:flex justify-evenly items-center'>
          <div className='md:w-2/5'>
        <img className='' src="https://thuvakkam.org/wp-content/uploads/2025/12/tkm-home-cover-education1.png" alt="image" />
        </div>
        <div>
        <h1 className='mt-2 md:mt-4 font-semibold text-xl'>Be the reason a child learns.</h1>
        <button className='mt-1 md:mt-3 p-2 text-white bg-yellow-500 border rounded font-semibold hover:text-green-700 hover:bg-white hover:border hover:border-green-700'>Donate now!</button>    
        </div>
        </div>  

        <div className='p-5 text-center md:flex justify-evenly items-center'>
          <div className='md:w-2/5'>
        <img className='' src="https://thuvakkam.org/wp-content/uploads/2025/12/tkm-home-cover-enivironment1.png" alt="image" />
        </div>
        <div>
        <h1 className='mt-2 md:mt-4 font-semibold text-xl'> Be the change you wish to see.</h1>
        <button className='mt-1 md:mt-3  p-2 text-white bg-yellow-500 border rounded font-semibold hover:text-green-700 hover:bg-white hover:border hover:border-green-700'>Donate now!</button>    
         </div>
         </div>  
    </div>

    </section>
  )
}

export default Slidebar