import React from 'react'
import AppLayout from '../Layout/AppLayout'
import Wrapper from '../Layout/Wrapper'
import DashboardCard from '../Components/DashboardCard'
import NotificationCard from '../Components/NotificationCard'
import { useFetch } from '../Hooks/useFetch'
const Dashboard = () => {
    const company = JSON.parse(localStorage.getItem('company'))
    const companyID = company?._id
    const companyName = company?.username
    const { data: employeeLength } = useFetch(`employees/${companyID}`)
    const { data: invoiceLength } = useFetch(`invoices/${companyName}`)
    const { data: pendingInvoiceLength } = useFetch(
        `pending-invoices/${companyName}`,
    )
    const { data: notifications } = useFetch(`${companyID}/employees/expiry`)

    return (
        <>
            <Wrapper title={'Dashboard'}>
                <div className='flex justify-between items-start px-5 rounded-md  gap-x-2 '>
                    <div className='flex flex-col justify-start items-start gap-x-4  min-h-screen w-full gap-y-3'>
                        <div className='flex flex-col bg-bgLight p-3 w-full gap-y-2 rounded-b-lg shadow-[0_0_20px_0_rgba(0,0,0,0.5)]'>
                            <h4 className='lg:text-3xl text-2xl text-lightGold italic'>
                                Profile Information
                            </h4>
                            <div className='flex md:flex-row  flex-col gap-y-2 justify-around items-center'>
                                <img
                                    src={company.logo.url}
                                    alt='Company Logo'
                                    className='w-24 h-24 rounded-full'
                                />
                                <div className='flex flex-col gap-y-2'>
                                    <div className='flex flex-row justify-start items-center gap-x-5'>
                                        <p className='md:text-lg text-lightGold'>
                                            Username:
                                        </p>
                                        <span> {company.username}</span>
                                    </div>
                                    <div className='flex flex-row justify-start items-center gap-x-5'>
                                        <p className='md:text-lg text-lightGold'>
                                            Email:
                                        </p>
                                        <span> {company.email}</span>
                                    </div>
                                    <div className='flex flex-row justify-start items-center gap-x-5'>
                                        <p className='md:text-lg text-lightGold'>
                                            Phone
                                        </p>
                                        <span> {company.phone}</span>
                                    </div>
                                    <div className='flex flex-row justify-center items-center gap-x-5'>
                                        <p className='md:text-lg text-lightGold'>
                                            Documents
                                        </p>
                                        <span className='flex flex-row justify-center items-center gap-x-1 flex-wrap'>
                                            {company.documents.map(
                                                (document, i) => (
                                                    <span
                                                        className='tooltip tooltip-success p-1 rounded-md bg-bgDarkColor text-xs'
                                                        data-tip='Click to View'
                                                    >
                                                        <a
                                                            href={document.url}
                                                            target='_blank'
                                                        >
                                                            {document.fileName}
                                                        </a>
                                                    </span>
                                                ),
                                            )}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <DashboardCard
                            employeeLength={employeeLength}
                            invoiceLength={invoiceLength}
                            pendingInvoiceLength={pendingInvoiceLength}
                        />
                        {notifications?.length > 0 && (
                            <NotificationCard notifications={notifications} />
                        )}
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default AppLayout()(Dashboard)
