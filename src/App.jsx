import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import TopList from './components/TopList/TopList.jsx';
import Service from './components/Service/Service.jsx';

import BgImage from './assets/bg.png'


const App = () => {
  return (
    <div style={{'--image-url': `url(${BgImage})`}}  className='overflow-x-hidden bg-[image:var(--image-url)]'>
      <div className='min-h-screen bg-white/50 backdrop-blur-sm'>
      <Navbar/>
      <Hero/>
      <TopList/>
      <Service/>
      </div>
    </div>
  )
}

export default App
