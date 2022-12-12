import React from 'react'
import { GrEmptyCircle } from "react-icons/gr";
import { GoLocation } from "react-icons/go";
import { FiEdit } from "react-icons/fi";

const DetailBox = () => {
  return (
    <>
    <div className="  relative py-[24px] font-Plus Jakarta Sans">
        {/* making header */}
        <div className="flex justify-between items-center">
          {/* for text */}
          <div className="px-[20px]">
            <div className="">
              <ul className=" ">
                <li className=" font-semibold">Medical Product</li>
               
              </ul>
            </div>
            <div className="">25Tonne(s)Containers</div>
          </div>
          {/* for image */}
          <div className="pl-3">
            <img className="scale-50" src={require("./Picture9.png")} alt="/"></img>
          </div>
        </div>
        {/* header end */}
        {/* detail */}
        <div className="px-[20px]">
          <div className="">
            <ul className="flex justify-start items-starts gap-4">
              <li className="pt-2 ">
                <GrEmptyCircle />
              </li>
              <li className=" text-lg">Delhi</li>
            </ul>
          </div>
          <div className="">
            {/* for right hand location */}
            <div className="flex justify-between items-center">
              <div className="">
                <ul className="flex justify-start items-baseline ">
                  <li className="pt-2 pr-4 ">
                    <GoLocation />
                  </li>
                  <li className=" text-lg pr-0">Maharastra</li>
                  <li className="text-[#0097AA] px-0 pb-4 hover:text-[#f0ba6d] cursor-pointer">+8States</li>
                </ul>
                <div className="text-[#9198A4] text-sm ">Posted on 23 jan 08:09PM</div>
                <div className="text-[#9198A4] text-sm ">Expires in 23 hour(s)</div>
              </div>
              <div className="">
                <ul className=" flex justify-between items-center gap-2 pt-6 ">
                    <li className=" border-2 rounded-2xl px-3 py-1  border-[#EB5056] text-[#EB5056] cursor-pointer hover:scale-105 ">Deactivate</li>
                    <li className=" text-[#FF7614] border-2 p-2 rounded-md cursor-pointer hover:scale-105"><FiEdit/></li>                   
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>


    </>
  )
}

export default DetailBox