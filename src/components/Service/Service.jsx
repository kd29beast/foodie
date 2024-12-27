import React from 'react'
import { CiDeliveryTruck } from 'react-icons/ci'
import { FaMobileScreen } from 'react-icons/fa6'
import { MdFoodBank, MdOutlineFastfood } from 'react-icons/md'

const Service = () => {
  return (
    <>
      <div className="container py-12 mt-10 ">
        <div className=" flex justify-center">
          <h1 className='text-5xl font-bold'>Our Services</h1>
        </div>
        {/* icon section */}
        <div className='grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 justify-between gap-12 mt-12'>
          <div className='flex justify-center items-center gap-3'>
            <FaMobileScreen className='text-3xl'/>
            <p className='text-xl font-semibold'>Online Booking</p>
          </div>
          <div className='flex justify-center items-center gap-3'>
          <MdOutlineFastfood className='text-3xl'/>
          <p className='text-xl font-semibold'>Fast Food</p>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <MdFoodBank className='text-3xl'/>
            <p className='text-xl font-semibold'>Healthy Food</p>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <CiDeliveryTruck className='text-3xl'/>
            <p className='text-xl font-semibold'>Quick Delivery</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service
