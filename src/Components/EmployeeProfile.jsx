import React from 'react'

const ViewModal = ({ Employee }) => {
    return (
        <>
            <dialog id='my_modal_2' className='modal'>
                <div className='modal-box '>
                    <h3 className='font-bold text-2xl italic'>Documents</h3>
                    <div className='flex flex-col gap-y-1'>
                        {Employee?.documents.map((doc, i) => (
                            <div
                                className='flex flex-row justify-between items-center'
                                key={i}
                            >
                                <p className=' text-left text-xl text-lightGold'>
                                    {doc.fileName}
                                </p>
                                <a
                                    href={doc.url}
                                    target='_blank'
                                    className='badge badge-neutral badge-lg'
                                >
                                    View
                                </a>
                            </div>
                        ))}
                        {Employee?.documents.length === 0 && (
                            <p className='text-xl'>No documents found</p>
                        )}
                    </div>
                </div>
                <form method='dialog' className='modal-backdrop'>
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}

const EmployeeProfile = ({ employee }) => {
    const toggleModal = () => {
        const modal = document.getElementById('my_modal_2')
        modal.showModal()
    }

    return (
        <div className='flex flex-col justify-start  items-start text-white  rounded-xl  md:gap-y-2   bg-bgLight px-5 py-4'>
            <h2 className='text-2xl text-lightGold text-left'>
                {employee.name}
            </h2>
            <div className='flex flex-col gap-y-2 '>
                <div className='flex flex-row justify-between items-center gap-x-5'>
                    <p className='text-[15px] text-left'>Nationality</p>
                    <p className='text-sm text-left'>{employee.nationality}</p>
                </div>
                <div className='flex flex-row justify-between items-center gap-x-5'>
                    <p className='text-[15px] text-left'>EID Number</p>
                    <p className='text-sm text-left'>{employee.eid_no}</p>
                </div>
                <div className='flex flex-row justify-between items-center gap-x-5'>
                    <p className='text-[15px] text-left'>EID Expiry</p>
                    <p className='text-sm text-left'>
                        {new Date(employee.eid_expiry).getDate()}/
                        {new Date(employee.eid_expiry).getMonth() + 1}/
                        {new Date(employee.eid_expiry).getFullYear()}
                    </p>
                </div>
                <div className='flex flex-row justify-between items-center gap-x-5'>
                    <p className='text-[15px] text-left'>Labor Card Number</p>
                    <p className='text-sm text-left'>
                        {employee.labor_card_no}
                    </p>
                </div>
                <div className='flex flex-row justify-between items-center gap-x-5'>
                    <p className='text-[15px] text-left'>Labor Card Expiry</p>
                    <p className='text-sm text-left'>
                        {new Date(employee.labor_card_expiry).getDate()}/
                        {new Date(employee.labor_card_expiry).getMonth() + 1}/
                        {new Date(employee.labor_card_expiry).getFullYear()}
                    </p>
                </div>
                <div className='flex flex-row justify-between items-center gap-x-5'>
                    <p className='text-[15px] text-left'>Passport No</p>
                    <p className='text-sm text-left'>{employee.passport_no}</p>
                </div>
                <div className='flex flex-row justify-between items-center gap-x-5'>
                    <p className='text-[15px] text-left'>Passport Expiry</p>
                    <p className='text-sm text-left'>
                        {new Date(employee.passport_expiry).getDate()}/
                        {new Date(employee.passport_expiry).getMonth() + 1}/
                        {new Date(employee.passport_expiry).getFullYear()}
                    </p>
                </div>
                <button
                    className='text-gray-900 font-semibold text-sm w-52 px-2 lg:py-1 lg:rounded-2xl bg-gradient-to-b from-yellow-400 to-yellow-600'
                    onClick={() => {
                        toggleModal()
                    }}
                >
                    View Documents
                </button>
                <ViewModal Employee={employee} />
            </div>
        </div>
    )
}

export default EmployeeProfile
