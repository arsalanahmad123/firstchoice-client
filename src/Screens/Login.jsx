import React from 'react'
import { MdEmail } from 'react-icons/md'
import { MdLock } from 'react-icons/md'
import Logo from '../assets/logo.png'
import back from '../assets/adminbg.png'
const Login = () => {
    return (
        <div
            data-theme='light'
            className='lg:flex  lg:justify-between lg:gap-x-6  min-h-screen adjust'
        >
           
            <div className='  hidden lg:flex lg:flex-col lg:justify-center lg:w-screen lg:p-16 lg:items-center '>
              <img src={Logo} alt="" />
                <h1 className='font-bold lg:text-3xl lg:pb-5 text-center text-black'>
                    WELCOME TO FIRST CHOICE MANAGEMENT CUNSULTANCY
                </h1>
                <h1 className='font-semibold '>We Make Your Work Easier</h1>
            </div>
            <div className='lg:w-3/2 p-3  w-full  lg:min-h-full bg-[#af831b]  md:flex md:justify-center md:items-center relative'>
                <div
                    className='absolute top-5 md:-top-10 -left-10 '
                    style={{ zIndex: 10 }}
                >
                    {/* <img src={back} className='' /> */}
                </div>
                <div
                    className={` md:w-96 p-5  bg-white flex flex-col justify-center rounded-3xl lg:min-h-full  `}
                    style={{ zIndex: 20 }}
                >
                    <img src={Logo} className=' m-auto ' />
                    <p className='text-dark m-auto  font-bold text-lg lg:pt-7 lg:-mt-9'>
                        Sign Into Your Account
                    </p>

                    <div className='flex flex-col mt-3 text-white'>
                        <label htmlFor='email'>Email:</label>
                        <div className='relative mt-2'>
                            <input
                                type='email'
                                placeholder='E-mail'
                                className='w-full pl-12 pr-4 py-3 rounded-lg bg-[#F5F5F7] focus:outline-none    focus:ring-0 focus:border-textActive'
                            />
                            <div className='absolute  inset-y-0  left-0 pr-3 flex items-center pointer-events-none  '>
                                <div className=' bg-[#af831b] h-full flex items-center px-2'>
                                    <MdEmail className='  size-6 rounded  text-white' />
                                </div>
                            </div>
                        </div>
                        <label htmlFor='password' className='mt-5'>
                            Password:
                        </label>
                        <div className='relative mt-2'>
                            <input
                                type='password'
                                placeholder='password'
                                className='w-full  pl-12 pr-4 py-3 rounded-lg bg-[#F5F5F7] focus:outline-none    focus:ring-0 focus:border-textActive'
                            />
                            <div className='absolute  inset-y-0  left-0 pr-3 flex items-center pointer-events-none  '>
                                <div className=' bg-[#af831b] h-full flex items-center px-2.5'>
                                    <MdLock className='  size-6 rounded  text-white' />
                                </div>
                            </div>
                        </div>
                        <div className='flex mt-3 items-center gap-x-2'>
                            <input
                                className='size-4    '
                                type='checkbox'
                                name=''
                                id=''
                            />
                            <label className='font-xl text-black'>Remember Me</label>
                        </div>
                        <button
                            type='submit'
                            className=' m-auto bg-[#af831b]    rounded-xl  py-3 w-full mt-5 text-white'
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
