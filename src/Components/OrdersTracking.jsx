import React from 'react'
import AppLayout from '../Layout/AppLayout'
import Wrapper from '../Layout/Wrapper'
import { CgSearch } from 'react-icons/cg'

const dummData = [
    {
        id: 1,
        name: 'KFC',
        quantity: 10,
        total_price: 2000,
        status: 'pending',
    },
    {
        id: 2,
        name: 'Burger King',
        quantity: 20,
        total_price: 4000,
        status: 'completed',
    },
    {
        id: 3,
        name: 'Pizza Hut',
        quantity: 30,
        total_price: 6000,
        status: 'submitted',
    },
]

const OrdersTracking = () => {
    return (
        <>
                <div className='flex  justify-between items-center  gap-x-20 lg:pt-4 px-5'>
                    <div className='relative'>
                        <input
                            type='text'
                            className=' md:w-80 lg:py-1 pl-5 lg:rounded-2xl bg-bgLight border-2 rounded-xl border-gray-700 text-white'
                        />
                        <CgSearch className='text-slate-700 m-auto absolute  bottom-1 left-44 md:left-72  lg:right-5 lg:top-3  ' />
                    </div>
                    <div className='flex -ml-20 flex-col md:flex-row gap-2 justify-center items-center gap-x-3 pt-9  md:pt-0 '>
                        <span className='badge badge-neutral py-3 cursor-pointer  '>
                            pending
                        </span>
                        <span className='badge badge-success py-3  cursor-pointer'>
                            completed
                        </span>
                    </div>
                </div>
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
                        <tbody >
                            {dummData.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.total_price}</td>
                                    <td>
                                        <span
                                            className={`badge px-3 ${
                                                item.status === 'pending' &&
                                                'badge-warning'
                                            } ${
                                                item.status === 'completed' &&
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
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
        </>
    )
}

export default OrdersTracking