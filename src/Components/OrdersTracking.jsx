import React from 'react'
import { CgSearch } from 'react-icons/cg'

const OrdersTracking = ({ orders }) => {
    return (
        <>
            <div className='flex  flex-col md:flex-row lg:flex-row justify-between items-center  gap-x-20 lg:pt-4 px-5'>
                <div className='relative'>
                    <input
                        type='text'
                        className=' md:w-80 lg:py-1 pl-5 lg:rounded-2xl bg-bgLight border-2 rounded-xl border-gray-700 text-white'
                    />
                    <CgSearch className='text-slate-700 m-auto absolute  bottom-1 left-44 md:left-72  lg:right-5 lg:top-3  ' />
                </div>
                <div className='flex   md:flex-row gap-2 justify-center items-center gap-x-2 pt-3   md:pt-0 '>
                    <span className='badge badge-neutral py-3 cursor-pointer  '>
                        pending
                    </span>
                    <span className='badge badge-success py-3  cursor-pointer'>
                        completed
                    </span>
                </div>
            </div>
            {orders && (
                <div className='overflow-x-auto  bg-bgLight max-h-[76vh] mt-10 mx-5 rounded-xl '>
                    <table className='table table-md  text-white '>
                        <thead>
                            <tr className='bg-darkorange text-white  border-gray-700'>
                                <th>Order ID</th>
                                <th>Company</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders?.map((item) => (
                                <tr key={item._id}>
                                    <td>{item._id}</td>
                                    <td>{item.company}</td>
                                    <td>{item.total_price}</td>
                                    <td>{item.total_price}</td>
                                    <td>
                                        {item.status ? (
                                            <span
                                                className={`badge px-3 ${
                                                    item.status === 'pending' &&
                                                    'badge-warning'
                                                } ${
                                                    item.status ===
                                                        'completed' &&
                                                    'badge-success'
                                                }
                                                ${
                                                    item.status ===
                                                        'submitted' &&
                                                    'badge-neutral'
                                                }
                                            `}
                                            >
                                                {item.status}
                                            </span>
                                        ) : (
                                            'N/A'
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            {!orders && (
                <div className='text-center text-white text-3xl'>
                    No Orders Found
                </div>
            )}
        </>
    )
}

export default OrdersTracking
