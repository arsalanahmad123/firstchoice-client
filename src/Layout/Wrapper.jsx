import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { api } from '../API/api'

const Wrapper = ({ children, title }) => {
    const [expired, setExpired] = useState(false)
    const BASE_URL = import.meta.env.VITE_BASE_URL
    const companyID = JSON.parse(localStorage.getItem('company'))?._id

    useEffect(() => {
        const getCompanyExpiry = async () => {
            try {
                const response = await api.get(
                    `${BASE_URL}/${companyID}/companyExpiry`,
                )
                if (response.status === 200) {
                    setExpired(response.data.data)
                }
            } catch (error) {
                console.log(error)
            }
        }

        getCompanyExpiry()
    }, [])

    return (
        <>
            <div className='lg:min-w-[75%] mx-auto flex flex-col '>
                <Navbar title={title} expired={expired} />
                {children}
            </div>
        </>
    )
}

export default Wrapper
