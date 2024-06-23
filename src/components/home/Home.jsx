import React from 'react'

const Home = () => {
    
    return (
        <div className='bg-cover bg-center h-full' style={{ backgroundImage: 'url(background-home-desktop.jpg)' }}>

            <div className='pt-40 flex flex-row items-end justify-center p-20 gap-48'>

                <div className='flex flex-col pt-40'>

                    <p className='text-white text-[25px]'>SO, YOU WANT TO TRAVEL TO</p>

                    <p className='text-white text-[120px]'>SPACE</p>

                    <p className='text-white text-[18px]'>

                        Let’s face it; if you want to go to space, you might as well genuinely<br></br>
                        to outer space and not hover kind of on the edge of it. Well sit back,<br></br>
                        and relax because we’ll give you a truly out of this world experience!<br></br>

                    </p>

                </div>


                <div className='bg-white w-[262px] h-[262px] rounded-full flex items-center justify-center cursor-pointer'>
                    <p className='text-black text-[37px]'>EXPLORE</p>
                </div>

            </div>


        </div>
    )
}

export default Home
