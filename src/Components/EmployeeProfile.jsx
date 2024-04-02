import React from "react";
import { FiPlus } from "react-icons/fi";

const EmployeeProfile = (props) => {
  return (

    <div className="flex flex-col   items-center text-white  rounded-xl  md:gap-y-2   bg-bgLight   px-16 py-8  text-center">
      <img src={props.img}  alt="picture" />
      <p className="text-sm">{props.desc}</p>
      <button className="px-2 py-1 md:px-4  md:py-2 text-sm  bg-darkorange rounded-full">{props.btn}</button>
    </div>

  );
};

export default EmployeeProfile;
