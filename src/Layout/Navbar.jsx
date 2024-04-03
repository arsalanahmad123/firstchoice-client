import React from 'react'
import Drawer from '../Components/Drawer'

const Navbar = ({ title }) => {
    return (
        <>
            <div className='flex justify-between  items-center px-5 pt-7 pb-1 border-b border-bgLight'>
               <div>

                <Drawer />
               </div>
               <div className='flex items-center '>
                
                <h3 className='text-2xl text-white pr-10'>{title}</h3>
                <h4 className='text-[10px] font-semibold text-white  md:pt-2 lg:pt-2  '>Welcome Admin</h4>
               </div>
            </div>
        </>
    )
}

export default Navbar
