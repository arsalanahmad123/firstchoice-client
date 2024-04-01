import React from 'react';
import { MdGroupWork } from "react-icons/md";
import { GiProfit } from "react-icons/gi";
import { FaSortAmountUp } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";

const DashboardCard = () => {
    return (
        <>
            <div className='flex flex-row justify-center  items-center py-1 gap-x-5 w-full'>
               
                <div className="card w-72 bg-[#dbcaff] text-black">
                    <HiBuildingOffice2 className='size-10 lg:ml-60' />
                    <div className="card-body pt-">
                        <h2 className="text-md -mt-8">Total Employees</h2>
                        <p>$$$</p>
                    </div>
                </div>
                <div className="card w-72 bg-[#fffac3] text-black">
                    <FaSortAmountUp className='size-9 lg:ml-60' />
                    <div className="card-body pt-">
                        <h2 className=" text-md -mt-8">Invoices</h2>
                        <p> $$$</p>
                    </div>
                </div>
                <div className="card w-72 bg-[#ffccbe] text-black">
                    <GiProfit className='size-10 lg:ml-60 ' />
                    <div className="card-body pt-">
                        <h2 className="text-md -mt-8">Status</h2>
                        <div className='flex '>
                            <p><span className='badge badge-neutral'>Pending</span></p>
                            <p><span className='badge badge-success'>Approved</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-center  items-center py-5 gap-x-5 w-full'></div>
        </>
    );
};

export default DashboardCard;
