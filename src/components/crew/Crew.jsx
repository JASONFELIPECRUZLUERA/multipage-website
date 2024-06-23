import React from 'react'

const Crew = () => {
  return (

    <div className='bg-cover bg-center h-full' style={{ backgroundImage: 'url(background-crew-desktop.jpg)' }}>

      <div className='pb-10'>
        <p className='text-white text-[25px] pt-60 pl-24'>02 MEET YOUR CREW</p>
      </div>

      <div className='pt-4 flex flex-row items-center justify-center p-20 gap-28'>

        <div className='flex flex-col justify-center pt-1 gap-1'>

          <p className='text-white text-[40px]'>COMMANDER</p>

          <p className='text-white text-[60px]'>DOUGLAS HURLEY</p>

          <p className='text-white text-[18px]'>
            Douglas Gerald Hurley is an American engineer, former Marine Corps<br></br>
            pilot and former NASA astronaut. He launched into space for the third<br></br>
            time as commander of Crew Dragon Demo-2. <br></br>
          </p>

        </div>

        <div className='flex items-center justify-center cursor-pointer'>
          <img src='image-douglas-hurley.png'></img>
        </div>

      </div>


    </div>
  )
}

export default Crew
