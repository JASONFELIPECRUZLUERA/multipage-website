import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const [selected, setSelected] = useState(null);

    return (
        <div className=' flex flex-row h-[96px] items-center mt-10 '>

            <div className='bg-white w-[48px] h-[48px] rounded-full ml-10'>
                <img src='logo.svg'></img>
            </div>
            
            <div className="w-[390px] h-[1px] ml-10 bg-[#979797] my-4"></div>

            <div className='w-[736px] h-[96px] flex flex-row gap-12 pl-32 items-center bg-[#D9D9D9] bg-opacity-50  text-white'>
                <p className={`h-[96px] flex items-center cursor-pointer ${selected === 0 ? 'border-b-4 border-white' : 'border-none'}`}onClick={() => setSelected(0)}><Link to='/'>00 HOME</Link></p>
                <p className={`h-[96px] flex items-center cursor-pointer ${selected === 1 ? 'border-b-4 border-white' : 'border-none'}`}onClick={() => setSelected(1)}><Link to='/destination'>01 DESTINATION</Link></p>
                <p className={`h-[96px] flex items-center cursor-pointer ${selected === 2 ? 'border-b-4 border-white' : 'border-none'}`}onClick={() => setSelected(2)}><Link to='/crew'>02 CREW</Link></p>
                <p className={`h-[96px] flex items-center cursor-pointer ${selected === 3 ? 'border-b-4 border-white' : 'border-none'}`}onClick={() => setSelected(3)}><Link to='/technology'>03 TECHNOLOGY</Link></p>
            </div>

        </div>
    )
}

export default NavBar
