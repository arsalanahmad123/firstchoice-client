import React from 'react'
import AppLayout from '../Layout/AppLayout'
import Wrapper from '../Layout/Wrapper'
import OrdersTracking from '../Components/OrdersTracking'
import { useFetch } from '../Hooks/useFetch'
import Loader from '../Components/Loader'

const Orders = () => {
    const companyID = JSON.parse(localStorage.getItem('company'))?.username
    const { data: orders, loading } = useFetch(`/all-invoices/${companyID}`)
    return (
        <>
            <Wrapper title={'Orders'}>
                {loading ? <Loader /> : <OrdersTracking orders={orders} />}
            </Wrapper>
        </>
    )
}

export default AppLayout()(Orders)
