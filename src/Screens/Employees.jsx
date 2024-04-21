import React from 'react'
import Wrapper from '../Layout/Wrapper'
import AppLayout from '../Layout/AppLayout'
import EmployeeProfile from '../Components/EmployeeProfile'
import { useFetch } from '../Hooks/useFetch'
const Employees = () => {
    const companyID = JSON.parse(localStorage.getItem('company'))?._id
    const { data: employees } = useFetch(`${companyID}/employees`)

    return (
        <Wrapper title='Employees'>
            <div className='flex items-center flex-col -mt-10 md:flex-row'>
                <div className='flex gap-x-7 px-6   pt-16 text-center'>
                    {employees?.map((employee) => (
                        <EmployeeProfile
                            key={employee._id}
                            employee={employee}
                        />
                    ))}
                    {employees?.length === 0 && (
                        <p className='text-3xl'>No employees found</p>
                    )}
                </div>
            </div>
        </Wrapper>
    )
}

export default AppLayout()(Employees)
