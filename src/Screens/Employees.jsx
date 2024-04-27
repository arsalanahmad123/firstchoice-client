import { useEffect, useState } from 'react'
import Wrapper from '../Layout/Wrapper'
import AppLayout from '../Layout/AppLayout'
import EmployeeProfile from '../Components/EmployeeProfile'
import { useFetch } from '../Hooks/useFetch'
const Employees = () => {
    const companyID = JSON.parse(localStorage.getItem('company'))?._id
    const { data: employees } = useFetch(`${companyID}/employees`)
    const [filteredEmployees, setFilteredEmployees] = useState(employees)
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearch = (event) => {
        setSearchTerm(event.target.value)
    }

    useEffect(() => {
        if (searchTerm) {
            const filtered = employees.filter((employee) => {
                return employee.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
            })
            setFilteredEmployees(filtered)
        } else {
            setFilteredEmployees(employees)
        }
    }, [searchTerm, employees])

    return (
        <Wrapper title='Employees'>
            <div
                className='flex items-center flex-col w-full 
            '
            >
                <div className='flex flex-row justify-between items-start w-full'>
                    <input
                        type='text'
                        name='search'
                        id='search'
                        placeholder='Search By Name'
                        className='input input-bordered input-sm max-w-xs mt-1 md:ml-5 ml-2'
                        onChange={(e) => handleSearch(e)}
                    />
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-7 grid-cols-1 md:mx-5 mx-2'>
                    {filteredEmployees?.map((employee) => (
                        <EmployeeProfile
                            key={employee._id}
                            employee={employee}
                        />
                    ))}
                    {filteredEmployees?.length === 0 && (
                        <p className='text-3xl'>No employees found</p>
                    )}
                </div>
            </div>
        </Wrapper>
    )
}

export default AppLayout()(Employees)
