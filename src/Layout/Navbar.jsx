import { useState } from 'react'
import Drawer from '../Components/Drawer'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'

const Navbar = ({ title, expired }) => {
    const [show, setShow] = useState(false)
    const companyName = JSON.parse(localStorage.getItem('company'))?.username
    const navigate = useNavigate()

    const handleLogout = async () => {
        localStorage.removeItem('token')
        localStorage.removeItem('company')
        localStorage.removeItem('loggedIn')
        navigate('/login')
        toast.success('Logout Successful')
    }

    return (
        <>
            <div className='bg-bgDark flex flex-col border-b border-bgLight'>
                <div className='flex justify-between  items-center px-5 pt-7 pb-1 '>
                    <Drawer />

                    <h3 className='text-2xl text-white'>{title}</h3>
                    <div className='flex items-center justify-between mx-5'>
                        <div
                            className='relative flex justify-center items-center  hover:bg-bgLight px-6 py-2 rounded-md ml-auto'
                            onClick={() => setShow(!show)}
                        >
                            <span className='cursor-pointer'>
                                {companyName}
                            </span>
                            {show ? (
                                <BiChevronUp className='text-white cursor-pointer' />
                            ) : (
                                <BiChevronDown className='text-white cursor-pointer' />
                            )}
                            {show && (
                                <div className='absolute top-12 right-0 bg-bgLight shadow-2xl shadow-gray-800 rounded-lg z-50 p-5 '>
                                    <button
                                        className='text-white w-full px-5 py-2 rounded-lg bg-red-500 font-semibold'
                                        onClick={() => handleLogout()}
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {expired && (
                    <div className='flex justify-center items-center'>
                        <marquee
                            id='expired-documents'
                            className='text-lg text-darkorange font-bold overflow-hidden whitespace-nowrap'
                        >
                            Company has expired documents
                        </marquee>
                    </div>
                )}
            </div>
        </>
    )
}

export default Navbar
