import React from 'react'

const NotificationCard = ({ notifications }) => {
    return (
        <div className='flex justify-center items-center w-full'>
            <div className='card card-compact shadow-2xl bg-bgLight '>
                <div className='card-body'>
                    <div className='text-white font-semibold'>
                        {notifications.length > 0 && (
                            <h1 className='text-xl'>
                                These Employees Documents will expire soon or
                                expired
                            </h1>
                        )}
                        <ul className='list-disc text-lightGold p-3 text-lg'>
                            {notifications?.map((notification, i) => (
                                <li key={i}>{notification.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotificationCard
