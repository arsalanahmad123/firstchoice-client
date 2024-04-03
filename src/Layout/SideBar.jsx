import React from 'react'
import { FiHome, FiBell, FiLogOut } from 'react-icons/fi'
import { CiReceipt as Receipt } from 'react-icons/ci'
import { CgOrganisation as Organization } from 'react-icons/cg'
import { GrCatalogOption as Services } from 'react-icons/gr'
import { AiOutlineSolution as Work } from 'react-icons/ai'
import { SiExpensify as Expense } from 'react-icons/si'
import { GiProfit as Profit } from 'react-icons/gi'
import { TbChartHistogram as Orders } from 'react-icons/tb'
import NavList from '../Components/NavList'
import logo from '../assets/logo.png'


const SideBar = () => {
    return (
        <>
            <div className=' hidden  min-w-[20%] bg-bgLight min-h-screen md:flex md:flex-col md:w-[24%] pt-8 px-3 '>
                <img src={logo} alt='Logo'  />
                <ul className='flex flex-col justify-center items-center w-full gap-y-2 mt-2'>
                    <NavList
                        icon={
                            <FiHome
                                className='text-lg '
                                style={{ fontWeight: 'bolder' }}
                            />
                        }
                        title='Dashboard'
                        link='/'
                    />
                    <NavList
                        icon={
                            <Organization
                                className='text-lg '
                                style={{ fontWeight: 'bolder' }}
                            />
                        }
                        title='Employees'
                        link='/employees'
                    />
                    <NavList
                        icon={
                            <Orders
                                className='text-lg '
                                style={{ fontWeight: 'bolder' }}
                            />
                        }
                        title='Orders'
                        link='/orders'
                    />





                </ul>
            </div>

        </>
    )
}

export default SideBar
