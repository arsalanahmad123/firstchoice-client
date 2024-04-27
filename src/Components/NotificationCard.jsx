import React from 'react'

const NotificationCard = ({ notifications }) => {
    return (
        <div className='flex justify-center items-center w-full'>
            <div className='card card-compact shadow-2xl bg-bgLight'>
                <div className='card-body'>
                    {notifications.length > 0 && (
                        <div className='text-white font-semibold'>
                            <h1 className='text-xl mb-4'>
                                Employees with Expiring Documents
                            </h1>
                            <ul className='list-decimal text-lightGold text-sm'>
                                {notifications?.map((notification, i) => (
                                    <li key={i} className='mb-2'>
                                        <span className='font-semibold'>
                                            {notification.name}
                                        </span>
                                        <span className='ml-2'>
                                            {notification.expiredFields.map(
                                                (field, i) => (
                                                    <span
                                                        key={i}
                                                        className='inline-block bg-red-500 text-white p-1 text-xs rounded-full ml-2'
                                                    >
                                                        {field}
                                                    </span>
                                                ),
                                            )}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {notifications.length === 0 && (
                        <p className='text-white'>
                            No employees with expiring documents found.
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default NotificationCard
