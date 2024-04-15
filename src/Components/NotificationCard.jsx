import React from 'react'

const NotificationCard = ({ notifications }) => {
    return (
        <div className='card card-compact w-full  shadow-2xl bg-bgLight -mt-8'>
            <div className='card-body'>
                <di v className='text-white font-semibold'>
                    {notifications && (
                        <h1 className='text-xl'>
                            These Employees have expired Documents, Kindly check
                            it
                        </h1>
                    )}
                    <ul className='list-disc text-lightGold p-3 text-lg'>
                        {notifications?.map((notification, i) => (
                            <li key={i}>{notification.name}</li>
                        ))}
                    </ul>
                </di>
            </div>
        </div>
    )
}

export default NotificationCard
