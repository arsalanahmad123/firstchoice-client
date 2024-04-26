import { useEffect, useState } from 'react'
import { CgSearch } from 'react-icons/cg'

const OrdersTracking = ({ orders }) => {
    const [filteredOrders, setFilteredOrders] = useState(null)

    const handleSearch = (e) => {
        const query = e.target.value
        if (query) {
            const filtered = orders.filter((order) => {
                return order.title.toLowerCase().includes(query.toLowerCase())
            })
            setFilteredOrders(filtered)
        } else {
            setFilteredOrders(orders)
        }
    }

    useEffect(() => {
        setFilteredOrders(orders)
    }, [orders])

    return (
        <>
            <div className='flex  flex-col md:flex-row lg:flex-row justify-between items-center  gap-x-20 lg:pt-4 px-5'>
                <div className='relative'>
                    <input
                        type='text'
                        className=' md:w-80 lg:py-1 pl-5 lg:rounded-2xl bg-bgLight border-2 rounded-xl border-gray-700 text-white'
                        onChange={(e) => handleSearch(e)}
                        placeholder='Search Order By Title'
                    />
                    <CgSearch className='text-slate-700 m-auto absolute  bottom-1 left-44 md:left-72  lg:right-5 lg:top-1.5' />
                </div>
            </div>
            {filteredOrders && (
                <div className='overflow-x-auto  bg-bgLight max-h-[76vh] mt-10 mx-5 rounded-xl '>
                    <table className='table table-md  text-white '>
                        <thead>
                            <tr className='bg-darkorange text-white  border-gray-700'>
                                <th>Order</th>
                                <th>Service</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                                <th>Pending Amount</th>
                                <th>Invoice Status</th>
                                <th>Invoice Employee Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredOrders?.map((item) => (
                                <tr key={item._id}>
                                    <td>{item.title}</td>
                                    <td className='flex flex-row gap-x-1 flex-wrap'>
                                        {item.services?.map((service) => (
                                            <p
                                                key={service.service}
                                                className=''
                                            >
                                                {service.service}
                                            </p>
                                        ))}
                                    </td>
                                    <td>
                                        <div className='flex flex-row gap-x-1 flex-wrap'>
                                            {item.services?.map((service) => (
                                                <p
                                                    key={service.service}
                                                    className='badge'
                                                >
                                                    {service.quantity}
                                                </p>
                                            ))}
                                        </div>
                                    </td>
                                    <td>{item.total_price} AED</td>
                                    <td>{item.pending_amount} AED </td>
                                    <td>{item.status ? item.status : 'N/A'}</td>
                                    <td>
                                        {item.services?.map((service) =>
                                            service.employees?.map(
                                                (employee) => (
                                                    <p key={employee.name}>
                                                        <span className='text-lightGold font-bold'>
                                                            {employee.name}
                                                        </span>{' '}
                                                        == {employee.status}
                                                    </p>
                                                ),
                                            ),
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
