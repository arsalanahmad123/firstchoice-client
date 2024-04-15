import React from 'react'

const ViewModal = ({ Documents }) => {
    return (
        <>
            <dialog id='my_modal_2' className='modal'>
                <div className='modal-box '>
                    <h3 className='font-bold text-2xl italic'>Documents</h3>
                    <div className='flex flex-col gap-y-1'>
                        {Documents?.map((doc, i) => (
                            <div
                                className='flex flex-row justify-between items-center'
                                key={i}
                            >
                                <p className=' text-left text-3xl text-lightGold'>
                                    {doc.fileName}
                                </p>
                                <a href={doc.url} target='_blank'>
                                    View
                                </a>
                            </div>
                        ))}
                        {Documents.length === 0 && (
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

const EmployeeProfile = ({
    name,
    eid_no,
    nationality,
    documents,
    labor_card_expiry,
    labor_card_no,
    eid_expiry,
}) => {
    return (
        <div className='flex flex-col justify-start  items-start text-white  rounded-xl  md:gap-y-2   bg-bgLight px-5 py-4'>
            <h2 className='text-2xl text-lightGold text-left'>{name}</h2>
            <div className='flex flex-col gap-y-2 '>
                <div className='flex flex-row justify-between items-center gap-x-5'>
                    <p className='text-[15px] text-left'>Nationality</p>
                    <p className='text-sm text-left'>{nationality}</p>
                </div>
                <div className='flex flex-row justify-between items-center gap-x-5'>
                    <p className='text-[15px] text-left'>EID Number</p>
                    <p className='text-sm text-left'>{eid_no}</p>
                </div>
                <div className='flex flex-row justify-between items-center gap-x-5'>
                    <p className='text-[15px] text-left'>EID Expiry</p>
                    <p className='text-sm text-left'>
                        {new Date(eid_expiry).toLocaleDateString()}
                    </p>
                </div>
                <div className='flex flex-row justify-between items-center gap-x-5'>
                    <p className='text-[15px] text-left'>Labor Card Number</p>
                    <p className='text-sm text-left'>{labor_card_no}</p>
                </div>
                <div className='flex flex-row justify-between items-center gap-x-5'>
                    <p className='text-[15px] text-left'>Labor Card Expiry</p>
                    <p className='text-sm text-left'>
                        {new Date(labor_card_expiry).toLocaleDateString()}
                    </p>
                </div>
                {/* <button
                    className='text-gray-900 font-semibold text-sm w-52 px-2 lg:py-1 lg:rounded-2xl bg-gradient-to-b from-yellow-400 to-yellow-600'
                    onClick={() => {
                        document.getElementById('my_modal_2').showModal()
                    }}
                >
                    View Documents
                </button>
                {documents && <ViewModal Documents={documents} />} */}
            </div>
        </div>
    )
}

export default EmployeeProfile
