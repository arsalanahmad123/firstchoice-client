import React from 'react'

const InvoiceForm = () => {
  return (
    <div className='bg-bgDarkColor text-white '>
      <form action="#" className='bg-bgLight p-8 lg:w-2/3 lg:m-auto'>
        <div className='lg:leading-9'>
          <label htmlFor="">Custome Invoice</label>
          <p className=' border-b border-white'>Abc/2024</p>
        </div>
        <div>
          <select className="bg-bgLight border-white lg:mt-5 lg:px-" id="" >
            <option value="company">company</option>
            <option value="company">company</option>
            <option value="company">company</option>
            <option value="company">company</option>
          </select>
          <label className=''>hjkhjkhkjhkjh</label>
        </div>
      </form>
    </div>
  )
}

export default InvoiceForm