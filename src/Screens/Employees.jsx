import React from 'react';
import Wrapper from '../Layout/Wrapper';
import AppLayout from '../Layout/AppLayout';
import { CgSearch } from 'react-icons/cg';
import Ellipse from '../assets/Ellipse.png'
import Card from '../Components/Card';
import DashboardCard from '../Components/DashboardCard';
import EmployeeProfile from '../Components/EmployeeProfile'
import { lazy } from 'react';
const Employees = () => {
  return (
    <Wrapper title="Employees" >
    
        <div className='flex items-center flex-col -mt-10 md:flex-row'>

        <div className="flex gap-x-7 px-6   pt-16 text-center">
          <EmployeeProfile img={Ellipse}  desc="Description  " btn="Visit Profile" loading={lazy}/>
        </div>
        <div className='flex gap-x-7 px-6   pt-16 text-center'>

          <EmployeeProfile img={Ellipse}  desc="Description  " btn="Visit Profile" loading={lazy}/>
        </div>
        </div>
    </Wrapper>
  );
};

export default AppLayout()(Employees);
