import React from 'react'

const InvoiceTable = (props) => {
  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className='text-white text-center'>
      <tr  className='border-0 '>

        <th>Service</th>
        <th>Quantity </th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody className='text-center'>
      {/* row 1 */}
      <tr className='border-0 '>
        <td>{props.item1}</td>
        <td>{props.quantity}</td>
        <td>{props.amount}</td>
      </tr>
      
      {/* row 2 */}
      <tr  className='border-0 '>
      <td>{props.item1}</td>
        <td>{props.quantity}</td>
        <td>{props.amount}</td>
      </tr>
      {/* row 3 */}
      <tr  className='border-0 '>
      <td>{props.item1}</td>
        <td>{props.quantity}</td>
        <td>{props.amount}</td>
      </tr>
      <tr  className='border-t '>
        <td>Total</td>
        <td></td>
      <td>{props.Total}</td>
      </tr>

    </tbody>
  </table>
</div>
  )
}

export default InvoiceTable