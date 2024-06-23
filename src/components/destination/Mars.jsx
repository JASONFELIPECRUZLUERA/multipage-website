import React from 'react'

const Mars = () => {
    return (
        <>
            <p className='text-white text-[120px]'>MARS</p>

            <p className='text-white text-[18px]'>
                Don’t forget to pack your hiking boots. You’ll need them to<br></br>
                tackle Olympus Mons, the tallest planetary mountain in <br></br>
                our solar system. It’s two and a half times the size of<br></br>
                Everest!<br></br>
            </p>

            <p className="w-[420px] h-[1px] ml-10 bg-[#979797] my-4"></p>

            <div className='text-white text-[20px] flex flex-row gap-32'>
                <p>
                    Avg. distance <br></br>
                    225 mil. km
                </p>

                <p>
                    Est. travel time <br></br>
                    9 months
                </p>
            </div>
        </>
    )
}

export default Mars
