import React from 'react'
import InvoiceTable from './InvoiceTable'
const InvoiceSlip = (props) => {
    return (
        <div className=' m-auto  text-white text-sm md:text-lg px-4 lg:px-16'>
            <div className='flex justify-between w-full items-center text-white    '>
                <img src={props.logo} className='w-[50%] -ml-7' />
                <label htmlFor="invoice number">Invoice# {props.invoiceNumber}</label>
            </div>
            <div className='flex items-center justify-between'>
                <label htmlFor="billto" >Bill To: <span className='text-lg underline lg:ml-4'>{props.billTo}</span></label>
                <div className='flex flex-col'>

                    <label htmlFor="issueDate" className='lg:text-sm'>Issue Date  : {props.issueDate}</label>
                    <label htmlFor="dueDate" className='lg:text-sm'>Due Date  : {props.dueDate}</label>
                </div>

            </div>

            <h1 className='pt-5 text-lg lg:text-2xl'>Invoice</h1>
            <div>
                <InvoiceTable item1="item1" quantity="1" amount="2" Total="00.00$"/>
            </div>
        </div>

    )
}

export default InvoiceSlip