import React from 'react'
import { FaEnvelope, FaList, FaPhoneAlt,} from 'react-icons/fa';

const Header = () => {
  return (
    <section>
        <div className='p-1 bg-indigo-100 flex justify-around items-center'>
            
            <div className='text md:text-base flex justify-center items-center gap-1 md:gap-2'>
                <p className='text-fuchsia-600'><FaPhoneAlt/></p>
                <p>+91 9876543210 </p>
            </div>
            <div className='text md:text-base flex justify-center items-center gap-1 md:gap-3'>
                <p className=' text-purple-800 md:text-xl'><FaEnvelope/></p>
                <p>admin@kanavufoundation.org</p>
            </div>
            
            <button className='md:text-xl text-red-600 font-extrabold'>X</button>
        </div>
    <section className='px-1 py-4 color text-white'>
        <div className='px-1 flex justify-between items-center'>
        <div className='md:text-2xl flex justify-center items-center'>
            <img className='w-16' src="src/assets/logo.png" alt="logo" />
           <h1 className='font-semibold font-serif '>KANAVU FOUNDATION</h1> 
        </div>
        <div>
            <div className='md:hidden'>
            <button className="text-lg"><FaList/></button>
            </div>
        <div className='hidden font-semibold md:flex justify-between items-center gap-7 cursor-pointer'>
            <p className='hover:underline'>About Us</p>
            <p className='hover:underline'>Projects</p>
            <p className='hover:underline'>Resources</p>
            <p className='hover:underline'>Join Us</p>
            <p className='hover:underline'>Contact Us</p>
         </div>
        </div>
    </div>
</section>

    </section>
  )
}

export default Header;
