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
    const { data: pendingAmount } = useFetch(
        `total-pending-amount/${companyName}`,
    )

    const twentyDaysFromNow = new Date(Date.now() + 24 * 60 * 60 * 1000 * 20)

    return (
        <>
            <Wrapper title={'Dashboard'}>
                <div className='flex justify-between items-start px-2 rounded-md  gap-x-2 '>
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
                                        <p className='text-lightGold'>
                                            Company Name:
                                        </p>
                                        <span> {company.username}</span>
                                    </div>
                                    <div className='flex flex-row justify-start items-center gap-x-5'>
                                        <p className='text-lightGold'>Email:</p>
                                        <span> {company.email}</span>
                                    </div>
                                    <div className='flex flex-row justify-start items-center gap-x-5'>
                                        <p className=' text-lightGold'>Phone</p>
                                        <span> {company.phone}</span>
                                    </div>
                                    <div
                                        className={`flex flex-row justify-start items-center gap-x-5
                                        ${
                                            new Date(
                                                company.licence_expiry,
                                            ).getTime() <
                                            twentyDaysFromNow.getTime()
                                                ? 'text-red-500 border-b-2 border-red-800 border-dashed'
                                                : 'text-lightGold'
                                        }
                                        `}
                                    >
                                        <p className=' text-lightGold'>
                                            Licence Expiry
                                        </p>
                                        <span>
                                            {new Date(
                                                company.licence_expiry,
                                            ).getDate()}
                                            /
                                            {new Date(
                                                company.licence_expiry,
                                            ).getMonth() + 1}
                                            /
                                            {new Date(
                                                company.licence_expiry,
                                            ).getFullYear()}
                                        </span>
                                    </div>
                                    <div
                                        className={`flex flex-row justify-start items-center gap-x-5
                                        ${
                                            new Date(
                                                company.img_card_expiry,
                                            ).getTime() <
                                            twentyDaysFromNow.getTime()
                                                ? 'text-red-500 border-b-2 border-red-800 border-dashed'
                                                : 'text-lightGold'
                                        }
                                        `}
                                    >
                                        <p className=' text-lightGold'>
                                            Img Card Expiry
                                        </p>
                                        <span>
                                            {' '}
                                            {new Date(
                                                company.img_card_expiry,
                                            ).getDate()}
                                            /
                                            {new Date(
                                                company.img_card_expiry,
                                            ).getMonth() + 1}
                                            /
                                            {new Date(
                                                company.img_card_expiry,
                                            ).getFullYear()}
                                        </span>
                                    </div>
                                    <div
                                        className={`flex flex-row justify-start items-center gap-x-5
                                        ${
                                            new Date(
                                                company.least_contract_expiry,
                                            ).getTime() <
                                            twentyDaysFromNow.getTime()
                                                ? 'text-red-500 border-b-2 border-red-800 border-dashed'
                                                : 'text-lightGold'
                                        }
                                        `}
                                    >
                                        <p className=' text-lightGold'>
                                            Least Contract Expiry
                                        </p>
                                        <span>
                                            {new Date(
                                                company.least_contract_expiry,
                                            ).getDate()}
                                            /
                                            {new Date(
                                                company.least_contract_expiry,
                                            ).getMonth() + 1}
                                            /
                                            {new Date(
                                                company.least_contract_expiry,
                                            ).getFullYear()}
                                        </span>
                                    </div>
                                    <div
                                        className={`flex flex-row justify-start items-center gap-x-5
                                        ${
                                            new Date(
                                                company.e_channel_expiry,
                                            ).getTime() <
                                            twentyDaysFromNow.getTime()
                                                ? 'text-red-500 border-b-2 border-red-800 border-dashed'
                                                : 'text-lightGold'
                                        }
                                        `}
                                    >
                                        <p className=' text-lightGold'>
                                            E-Channel Expiry
                                        </p>
                                        <span>
                                            {new Date(
                                                company.e_channel_expiry,
                                            ).getDate()}
                                            /
                                            {new Date(
                                                company.e_channel_expiry,
                                            ).getMonth() + 1}
                                            /
                                            {new Date(
                                                company.e_channel_expiry,
                                            ).getFullYear()}
                                        </span>
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
                                                        key={i}
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
                            pendingAmount={pendingAmount}
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
