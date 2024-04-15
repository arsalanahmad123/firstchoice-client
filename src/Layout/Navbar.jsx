import { useState } from 'react'
import Drawer from '../Components/Drawer'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { api } from '../API/api'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'

const Navbar = ({ title }) => {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()

    const handleLogout = async () => {
        await api.delete('/logout')
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('company')
        sessionStorage.removeItem('loggedIn')
        navigate('/login')
        toast.success('Logout Successful')
    }

    return (
        <>
            <div className='flex justify-between  items-center px-5 pt-7 pb-1 border-b border-bgLight'>
                <Drawer />
                <h3 className='text-2xl text-white'>{title}</h3>
                <div className='flex items-center justify-between mx-5'>
                    <div
                        className='relative flex justify-center items-center  hover:bg-bgLight px-6 py-2 rounded-md ml-auto'
                        onClick={() => setShow(!show)}
                    >
                        <span className='cursor-pointer'>Admin</span>
                        {show ? (
                            <BiChevronUp className='text-white cursor-pointer' />
                        ) : (
                            <BiChevronDown className='text-white cursor-pointer' />
                        )}
                        {show && (
                            <div className='absolute top-12 right-0 bg-bgLight shadow-2xl shadow-gray-800 rounded-lg z-50 p-5 '>
                                <button
                                    className='text-white w-full px-5 py-2 rounded-lg bg-red-500 font-semibold'
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
