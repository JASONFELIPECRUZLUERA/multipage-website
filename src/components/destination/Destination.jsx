import React, { useState } from 'react';
import Moon from './Moon';

const Destination = () => {

  const [selected, setSelected] = useState(null);

  return (
    <div className='bg-cover bg-center h-full' style={{ backgroundImage: 'url(background-destination-desktop.jpg)' }}>

      <div>
        <p className='text-white text-[25px] pt-60 pl-24'>01 PICK YOUR DESTINATION</p>
      </div>

      <div className='pt-4 flex flex-row items-end justify-center p-20 gap-48'>

        <div className='flex items-center justify-center cursor-pointer'>
          <img src='image-moon.png'></img>
        </div>

        <div className='flex flex-col items-center justify-center pt-40 gap-3'>

          <div className='w-[400px] h-[40px] flex flex-row gap-10  items-center text-white'>
            <p className={`h-[96px] flex items-center cursor-pointer ${selected === 0 ? 'border-b-4 border-white' : 'border-none'}`} onClick={() => setSelected(0)}>MOON</p>
            <p className={`h-[96px] flex items-center cursor-pointer ${selected === 1 ? 'border-b-4 border-white' : 'border-none'}`} onClick={() => setSelected(1)}>MARS</p>
            <p className={`h-[96px] flex items-center cursor-pointer ${selected === 2 ? 'border-b-4 border-white' : 'border-none'}`} onClick={() => setSelected(2)}>EUROPA</p>
            <p className={`h-[96px] flex items-center cursor-pointer ${selected === 3 ? 'border-b-4 border-white' : 'border-none'}`} onClick={() => setSelected(3)}>TITAN</p>
          </div>

          <Moon></Moon>

        </div>

      </div>


    </div>
  )
}

export default Destination
