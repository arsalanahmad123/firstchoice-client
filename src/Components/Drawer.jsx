import React from 'react'
import { CiMenuBurger } from "react-icons/ci";
import NavList from './NavList';
import { FiHome } from 'react-icons/fi';
import { CgOrganisation as Organization } from 'react-icons/cg';
import { TbChartHistogram as Orders } from 'react-icons/tb'
import logo from '../assets/logo.png'
const Drawer = () => {
  return (
    <>
    <div className="drawer md:hidden lg:hidden xl:hidden pr-6" style={{zIndex: 1000}}>
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="text-sm" ><CiMenuBurger className='bg-bgLight text-white size-5 '/></label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu  w-1/2 min-h-full  text-base-content bg-bgDarkColor">
    <img src={logo} className="pb-3" />
    <NavList
                        icon={
                            <FiHome
                                className='md:text-lg text-sm '
                                style={{ fontWeight: 'bolder' }}
                            />
                        }
                        title='Dashboard'
                        link='/'
                    />
                    <NavList
                        icon={
                            <Organization
                                className='md:text-lg text-sm '
                                style={{ fontWeight: 'bolder' }}
                            />
                        }
                        title='Employees'
                        link='/employees'
                    />
                    <NavList
                        icon={
                            <Orders
                                className='md:text-lg text-sm '
                                style={{ fontWeight: 'bolder' }}
                            />
                        }
                        title='Orders'
                        link='/orders'
                    />





    </ul>
  </div>
</div>
    </>
  )
}

export default Drawer