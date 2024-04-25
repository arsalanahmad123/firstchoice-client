import React from 'react'
import { NavLink } from 'react-router-dom'

const DashboardCard = ({
    employeeLength,
    invoiceLength,
    pendingInvoiceLength,
    pendingAmount,
}) => {
    return (
        <>
            <div className='flex  flex-col gap-y-2  font-semibold md:flex-row justify-center  md:items-start items-center py-1 gap-x-4 w-full md:flex-wrap mb-5'>
                <NavLink
                    to={'/employees'}
                    className='relative bg-[#dbcaff] text-black flex flex-col px-4 py-2 rounded-md md:min-w-[200px] min-w-full'
                >
                    <div className=''>
                        <h2 className='text-2xl'>Total Employees</h2>
                        <p className='text-3xl italic font-bold text-darkorange'>
                            {employeeLength}
                        </p>
                    </div>
                </NavLink>
                <NavLink
                    to={'/orders'}
                    className='relative bg-[#dbcaff] text-black flex flex-col px-4 py-2 rounded-md md:min-w-[200px] min-w-full'
                >
                    <div className=''>
                        <h2 className=' text-2xl'>Invoices</h2>
                        <p className='text-3xl italic font-bold text-darkorange'>
                            {' '}
                            {invoiceLength}
                        </p>
                    </div>
                </NavLink>
                <NavLink
                    to={'/orders'}
                    className='relative bg-[#dbcaff] text-black flex flex-col px-4 py-2 rounded-md md:min-w-[200px] min-w-full'
                >
                    <div>
                        <h2 className='text-2xl'>Pending Orders</h2>
                        <p className='text-3xl italic font-bold text-darkorange'>
                            {pendingInvoiceLength}
                        </p>
                    </div>
                </NavLink>
                <div className='relative bg-[#dbcaff] text-black flex flex-col px-4 py-2 rounded-md md:min-w-[200px] min-w-full'>
                    <div className=''>
                        <h2 className='text-2xl'>Pending Amount</h2>
                        <p className='text-3xl italic font-bold text-darkorange'>
                            {pendingAmount || 0} AED
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardCard
