import React from 'react'
import AppLayout from '../Layout/AppLayout'
import Wrapper from '../Layout/Wrapper'
import DashboardCard from '../Components/DashboardCard'
import NotificationCard from '../Components/NotificationCard'
import { useFetch } from '../Hooks/useFetch'
const Dashboard = () => {
    const companyID = JSON.parse(sessionStorage.getItem('company'))?._id
    const companyName = JSON.parse(sessionStorage.getItem('company'))?.username
    const { data: employeeLength } = useFetch(`/employees/${companyID}`)
    const { data: invoiceLength } = useFetch(`/invoices/${companyID}`)
    const { data: pendingInvoiceLength } = useFetch(
        `/pending-invoices/${companyName}`,
    )
    const { data: notifications } = useFetch(`/${companyID}/employees/expiry`)

    return (
        <>
            <Wrapper title={'Dashboard'}>
                <div className='flex justify-between items-start px-5 rounded-md mt-1 gap-x-2 '>
                    <div className='flex flex-col justify-start items-start gap-x-4  min-h-screen w-full'>
                        <DashboardCard
                            employeeLength={employeeLength}
                            invoiceLength={invoiceLength}
                            pendingInvoiceLength={pendingInvoiceLength}
                        />
                        {notifications.length > 0 && (
                            <NotificationCard notifications={notifications} />
                        )}
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default AppLayout()(Dashboard)
