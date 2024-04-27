import React from 'react'

const ViewModal = ({ Employee, setSelectedEmployee }) => {
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
                    <button onClick={() => setSelectedEmployee(null)}>
                        close
                    </button>
                </form>
            </dialog>
        </>
    )
}

const EmployeeProfile = ({ employee }) => {
    const [selectedEmployee, setSelectedEmployee] = React.useState(null)
    const [showModal, setShowModal] = React.useState(false)
    const toggleModal = (emp) => {
        setSelectedEmployee(emp)
        setShowModal(true)
        document.getElementById('my_modal_2').showModal()
    }

    return (
        <div className='bg-gradient-to-r from-bgLight to-bgDarkColor text-white shadow-2xl  flex justify-center flex-col p-5 gap-y-5  min-h-36'>
            <h2 className='font-extrabold flex flex-row justify-between items-center gap-x-2 text-xl'>
                <span className=''>Name: </span>

                <span className='text-left text-lightGold uppercase whitespace-normal w-[300px] break-words'>
                    {employee?.name}
                </span>
            </h2>
            <div className='flex flex-col gap-y-1'>
                <div className='flex flex-row justify-between items-center gap-x-2'>
                    <p className='text-[15px] text-left'>Nationality</p>
                    <p className='text-sm text-left'>{employee.nationality}</p>
                </div>
                <div className='flex flex-row justify-between items-center gap-x-2'>
                    <p className='text-[15px] text-left'>EID Number</p>
                    <p className='text-sm text-left'>{employee.eid_no}</p>
                </div>
                <div className='flex flex-row justify-between items-center gap-x-2'>
                    <p className='text-[15px] text-left'>EID Expiry</p>
                    <p className='text-sm text-left'>
                        {new Date(employee.eid_expiry).getDate()}/
                        {new Date(employee.eid_expiry).getMonth() + 1}/
                        {new Date(employee.eid_expiry).getFullYear()}
                    </p>
                </div>
                <div className='flex flex-row justify-between items-center gap-x-2'>
                    <p className='text-[15px] text-left'>Labor Card Number</p>
                    <p className='text-sm text-left'>
                        {employee.labor_card_no}
                    </p>
                </div>
                <div className='flex flex-row justify-between items-center gap-x-2'>
                    <p className='text-[15px] text-left'>Labor Card Expiry</p>
                    <p className='text-sm text-left'>
                        {new Date(employee.labor_card_expiry).getDate()}/
                        {new Date(employee.labor_card_expiry).getMonth() + 1}/
                        {new Date(employee.labor_card_expiry).getFullYear()}
                    </p>
                </div>
                <div className='flex flex-row justify-between items-center gap-x-2'>
                    <p className='text-[15px] text-left'>Passport No</p>
                    <p className='text-sm text-left'>{employee.passport_no}</p>
                </div>
                <div className='flex flex-row justify-between items-center gap-x-2'>
                    <p className='text-[15px] text-left'>Passport Expiry</p>
                    <p className='text-sm text-left'>
                        {new Date(employee.passport_expiry).getDate()}/
                        {new Date(employee.passport_expiry).getMonth() + 1}/
                        {new Date(employee.passport_expiry).getFullYear()}
                    </p>
                </div>
                <button
                    className='btn btn-xs btn-outline text-white'
                    onClick={() => {
                        toggleModal(employee)
                    }}
                >
                    View Documents
                </button>
                {selectedEmployee && showModal && (
                    <ViewModal
                        Employee={selectedEmployee}
                        setSelectedEmployee={setSelectedEmployee}
                    />
                )}
            </div>
        </div>
    )
}

export default EmployeeProfile
