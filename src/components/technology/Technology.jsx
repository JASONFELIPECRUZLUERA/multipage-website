import React from 'react'

const Technology = () => {
  return (

    <div className='bg-cover bg-center h-full' style={{ backgroundImage: 'url(background-technology-desktop.jpg)' }}>

      <div className='pb-10'>
        <p className='text-white text-[25px] pt-60 pl-24'>03 SPACE LAUNCH 101</p>
      </div>

      <div className='pt-4 flex flex-row items-center justify-center p-20 gap-4'>

        <div className='w-[80px] flex flex-col justify-center gap-10'>

          <div className='bg-white w-[60px] h-[60px] rounded-full flex items-center justify-center cursor-pointer'>
            <p className='text-black text-[30px]'>1</p>
          </div>

          <div className='bg-white w-[60px] h-[60px] rounded-full flex items-center justify-center cursor-pointer'>
            <p className='text-black text-[30px]'>2</p>
          </div>

          <div className='bg-white w-[60px] h-[60px] rounded-full flex items-center justify-center cursor-pointer'>
            <p className='text-black text-[30px]'>3</p>
          </div>

        </div>

        <div className='flex flex-col justify-center pt-1 gap-1'>

          <p className='text-white text-[40px]'>THE TERMINOLOGY</p>

          <p className='text-white text-[60px]'>LAUNCH VEHICLE</p>

          <p className='text-white text-[18px]'>
            A launch vehicle or carrier rocket is a rocket-propelled vehicle<br></br>
            used to carry a payload from Earth's surface to space, usually to<br></br>
            Earth orbit or beyond. Our WEB-X carrier rocket is the most<br></br>
            powerful in operation. Standing 150 metres tall, it's quite an<br></br>
            awe-inspiring sight on the launch pad!<br></br>

          </p>

        </div>

        <div className='flex items-center justify-center cursor-pointer'>
          <img src='image-launch-vehicle-portrait.jpg'></img>
        </div>

      </div>


    </div>
  )
}

export default Technology
