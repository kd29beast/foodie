import React from 'react';
import Profile from '../../assets/profile.png';
import { IoIosArrowDown } from 'react-icons/io';

const Navlink = [
  {
    id:"1",
    name:"Home",
    link:"/#"
  },
  {
    id:"2",
    name:"Menu",
    link:"/#"
  },
  {
    id:"3",
    name:"About",
    link:"/#"
  },
]

const Navbar = () => {
  return (
    <div className='py-6'>
    <div className="container flex justify-between items-center">
        {/* logo section */}
        <div className=''>
          <p className='text-lg font-semibold hover:scale-95 duration-150 '>FOOD<span className='text-orange-400'>IE</span></p>
        </div>
        {/* menu section */}
        <div className='hidden sm:block'>
             <ul className='flex items-center gap-6 font-medium'>
            { Navlink.map((Navlink)=>(
              <li className='hover:border-b-2 border-orange-400' key={Navlink.id}>
                 <a href={Navlink.link}>{Navlink.name}</a>
             </li>
              ))}
          </ul>
        </div>
        <div className='flex gap-4 items-center'> 
          <img src={Profile} alt="" className='w-10 rounded-full cursor-pointer hover:border border-orange-600'/>
          <IoIosArrowDown className=''/>
        </div>
    </div>
    </div>
  )
}

export default Navbar
