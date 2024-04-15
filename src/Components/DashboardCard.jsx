import React from 'react'
import { GiProfit } from 'react-icons/gi'
import { FaSortAmountUp } from 'react-icons/fa'
import { HiBuildingOffice2 } from 'react-icons/hi2'

const DashboardCard = ({
    employeeLength,
    invoiceLength,
    pendingInvoiceLength,
}) => {
    return (
        <>
            <div className='flex  flex-col gap-y-2  font-semibold md:flex-row justify-center  items-center py-1 gap-x-5 w-full'>
                <div className='card w-64 md:w-72 bg-[#dbcaff] text-black'>
                    <HiBuildingOffice2 className='md:size-14 size-8 pt-2  pr-3    md:hidden lg:block  lg:ml-60' />
                    <div className='card-body'>
                        <h2 className='text-2xl  '>Total Employees</h2>
                        <p className='text-3xl italic font-bold'>
                            {employeeLength}
                        </p>
                    </div>
                </div>
                <div className='card w-64 md:w-72  bg-[#fffac3] text-black'>
                    <FaSortAmountUp className='md:size-10 size-8 pt-2 md:hidden lg:block lg:ml-60' />
                    <div className='card-body '>
                        <h2 className=' text-2xl'>Invoices</h2>
                        <p className='text-3xl italic font-bold'>
                            {' '}
                            {invoiceLength}
                        </p>
                    </div>
                </div>
                <div className='card w-64 md:w-72 bg-[#ffccbe] text-black'>
                    <GiProfit className='md:size-10 size-8 pt-2     md:hidden lg:block  lg:ml-60 ' />
                    <div className='card-body '>
                        <h2 className='text-2xl'>Pending Invoices</h2>
                        <p className='text-3xl italic font-bold'>
                            {pendingInvoiceLength}
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-center  items-center py-5 gap-x-5 w-full'></div>
        </>
    )
}

export default DashboardCard
