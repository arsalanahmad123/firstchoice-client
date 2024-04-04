import React from 'react'
import AppLayout from '../Layout/AppLayout'
import Wrapper from '../Layout/Wrapper'
import OrdersTracking from '../Components/OrdersTracking';

const Orders = () => {
    return (
        <>
            <Wrapper title={'Orders'} >
                <OrdersTracking/>
               
            </Wrapper>
        </>
    )
}

export default AppLayout()(Orders)
