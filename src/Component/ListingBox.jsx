import React from "react";
import { GrEmptyCircle } from "react-icons/gr";
import { GoLocation } from "react-icons/go";
import { FiEdit } from "react-icons/fi";
import {BsXCircle , BsCheckCircle } from "react-icons/bs";


const ListingBox = () => {
  return (
    <>
      <div className="  relative py-[24px] shadow-2xl rounded-3xl font-Plus Jakarta Sans">
        {/* making header */}
        <div className="flex justify-between items-center">
          {/* for text */}
          <div className="px-[20px]">
            <div className="">
              <ul className=" flex justify-start items-baseline ">
                <li className=" font-semibold pr-2">DL1MA****</li>
                <li className="text-[#EBA144] rounded-2xl  border-2  border-[#C5CBD5] text-[12px]  px-3">
                  Pending
                </li>
              </ul>
            </div>
            <div className="">25Tonne(s)Containers</div>
          </div>
          {/* for image */}
          <div className="pl-20">
            <img className="" src={require("./Picture5.png")} alt="/"></img>
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
                  <li className="text-[#0097AA] hover:text-[#f0ba6d] cursor-pointer px-0">+8States</li>
                </ul>
                <div className="text-[#9198A4] pt-3">Posted on 23 jan 08:09PM</div>
                <div className="text-[#9198A4] ">Expires in 23 hour(s)</div>
              </div>
              <div className="">
                <ul className="">
                    <li className="text-[#9198A4] pl-6  ">Your Rate</li>
                    <li className="  text-2xl">$40,000</li>
                    <div className="pl-6">
                    <li className="rounded-2xl text-[#9198A4] border-2 pl-4 text-sm hover:text-[#8bafef] cursor-pointer">Fixed</li>

                    </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* footer section */}
        <div className="pl-[20px] pt-[20px] flex justify-between items-center ">
            <div className="">
                <div className="flex align-baseline">
                  <img className=" rounded-full h-[40px]" src={require("./Picture8.png")} alt="/"></img>
                  <div className="flex align-baseline">
                  <div className="pl-1">Maa Transport service
                   <div className="">
                   <img className=" scale-[70%]" src={require("./Picture6.png")} alt="/"></img>
                   </div>
                   </div>
                  <div className="">
                  <img className=" scale-50" src={require("./Picture7.png")} alt="/"></img>
                  </div>
                  <div className="">
                

                  </div>
                  </div>
                </div>

            </div>
            <div className="pl-5">
                <ul className=" gap-1 flex align-baseline pr-[25px] cursor-pointer">
                    <li className=" text-[#FF7614] border-2 p-2 rounded-md cursor-pointer hover:scale-105"><FiEdit/></li>
                    <li className=" text-[#EB5056] border-2 p-2 rounded-md cursor-pointer hover:scale-105"><BsXCircle/></li>
                    <li className=" text-[#00914D] border-2 p-2 rounded-md cursor-pointer hover:scale-105"><BsCheckCircle/></li>


                </ul>
            </div>
        </div>
      </div>
    </>
  );
};

export default ListingBox;
