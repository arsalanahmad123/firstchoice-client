import React from 'react'
import AppLayout from '../Layout/AppLayout'
import Wrapper from '../Layout/Wrapper'
import OrdersTracking from '../Components/OrdersTracking'
import { useFetch } from '../Hooks/useFetch'

const Orders = () => {
    const companyID = JSON.parse(sessionStorage.getItem('company'))?._id
    const { data: orders } = useFetch(`invoices/${companyID}`)
    return (
        <>
            <Wrapper title={'Orders'}>
                <OrdersTracking orders={orders} />
            </Wrapper>
        </>
    )
}

export default AppLayout()(Orders)
