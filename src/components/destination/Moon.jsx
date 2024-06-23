import React from 'react'

const Moon = () => {
    return (
        <>
            <p className='text-white text-[120px]'>MOON</p>

            <p className='text-white text-[18px]'>
                See our planet as you’ve never seen it before. A perfect<br></br>
                relaxing trip away to help regain perspective and come  <br></br>
                back refreshed. While you’re there, take in some history <br></br>
                by visiting the Luna 2 and Apollo 11 landing sites.<br></br>
            </p>

            <p className="w-[420px] h-[1px] ml-10 bg-[#979797] my-4"></p>

            <div className='text-white text-[20px] flex flex-row gap-32'>
                <p>
                    Avg. distance <br></br>
                    384,400 km
                </p>

                <p>
                    Est. travel time <br></br>
                    3 days
                </p>
            </div>
        </>
    )
}

export default Moon
