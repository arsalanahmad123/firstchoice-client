import React from 'react'
import AppLayout from '../Layout/AppLayout'
import Wrapper from '../Layout/Wrapper'
import DashboardCard from '../Components/DashboardCard'
import NotificationCard from '../Components/NotificationCard'
const Dashboard = () => {
    return (
        <>
            <Wrapper title={'Dashboard'}>
                <div className='flex justify-between items-start px-5 rounded-md mt-1 gap-x-2 '>
                    <div className='flex flex-col justify-start items-start gap-x-4  min-h-screen w-full'>
                        <DashboardCard />
                       <NotificationCard/>
                    </div>
                   
                </div>
            </Wrapper>
        </>
    )
}

export default AppLayout()(Dashboard)
