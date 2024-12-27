import React from 'react';
// import hero from '../../assets/hero.png';
import hero2 from '../../assets/hero2.png';

const Hero = () => {
  return (
    <div>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[650px] ">
        {/* text section */}
        <div className='flex flex-col justify-center gap-5 text-center md:text-left pt-24 md:p-0 pb-10'>
          <h1 className='text-3xl font-semibold'>
          Delicious Food Is Waiting For You
          </h1>
          <p className='font-semibold '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis rem quo tempora beatae ratione est maiores minus. Quas iure impedit cumque commodi, vitae id a. Eius at nemo sunt voluptas!
            labore inventore dicta, odio reprehenderit atque cum aliquam culpa perspiciatis nihil ad.</p>
          <div className='flex gap-3 items-center md:justify-start justify-center'>
            <button className='primary-btn'>Food menu</button>
            <button className='secondary-btn'>Book Table</button>
          </div>
        </div>
        {/* image section */}
       
        <div className='flex flex-col justify-center'>
        <img className='rounded-full animate-spin-slow max-w-[500px] w-[340px] mx-auto md:mx-0 ' src={hero2} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
