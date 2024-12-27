import React from 'react';
import image from '../../assets/image4.png';
import hero from '../../assets/hero.png';
import image2 from '../../assets/image3.png';

const TopList = () => {
  return (
    <div className='container py-14'>
    {/* header section */}
    <div className='text-center'>
      <h1 className='text-4xl font-semibold'>
        Top List
      </h1>
      <p>
        Our top list
      </p>
    </div>
       {/* card section */}
         <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 '>
          <div className=' bg-white/50 p-10 hover:scale-110 transition duration-300 rounded-xl'>
            <img className='mx-auto rounded-full' src={hero} alt="" />
            <p className='font-bold tex-xl'>Food Name</p>
            <p>⭐⭐⭐⭐⭐</p>
            <p className='font-semibold'>$10.00</p>
            <p></p>
          </div>
          <div className='bg-white/50 p-10 hover:scale-110 transition duration-300 rounded-xl'>
          <img className='mx-auto rounded-full' src={hero} alt="" />
            <p className='font-bold tex-xl'>Food Name</p>
            <p>⭐⭐⭐⭐⭐</p>
            <p className='font-semibold'>$10.00</p>
          </div>
          <div className='bg-white/50 p-10 hover:scale-110 transition duration-300 rounded-xl'>
          <img className=' mx-auto rounded-full' src={hero} alt="" />
            <p className='font-bold tex-xl'>Food Name</p>
            <p>⭐⭐⭐⭐⭐</p>
            <p className='font-semibold'>$10.00</p>
          </div>
         </div>

    </div>
  )
}

export default TopList
