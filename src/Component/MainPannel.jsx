import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { CiClock2 } from "react-icons/ci";
import {
  BsFillCheckCircleFill,
  BsRecordCircleFill,
  BsCircle,
} from "react-icons/bs";
import ListingBox from "./ListingBox";
import DetailBox from "./DetailBox";
import Remark from "./Remark";

const MainPannel = () => {
  return (
    <>
      <div className="p-12 font-Plus Jakarta Sans">
        <div className="col col-span-5 flex ">
          <div className=" col-span-2    ">
            <div className=" ">
              <ul className="flex justify-between items-center px-2">
                <li className="p-3 rounded-lg  border-2 cursor-pointer hover:scale-105 hover:to-blue-700">
                  <BiArrowBack />
                </li>
                <li className="flex justify-start items-baseline">
                <li className="mb-0">LoadID</li>
                <li className="text-[10px] border-2 px-4 rounded-2xl mb-2 border-[#C5CBD5] text-[#00914D] mr-10">
                  Active
                </li>
                </li>
                <li className="rounded-lg  border-2 p-2  scale-[120%] ">
                  <CiClock2 />
                </li>
              </ul>
              <div className="pt-10">
                <ul className="flex justify-between items-center">
                  <li className=" text-sm">
                    < BsFillCheckCircleFill />
                  </li>
                  <hr className="border-black border-1 w-full bg-black flex  " />
                  <li className="w-10">
                    <BsFillCheckCircleFill />
                  </li>
                  <hr className="border-black border-1 w-full bg-black flex  " />

                  <li className="">
                    <BsRecordCircleFill />
                  </li>
                  <hr className="border-black border-1 w-full bg-black flex  " />
                  <li className="">
                    <BsCircle />  
                  </li>
                </ul>
                <ul className="flex justify-between items-center ">
                  <li className=" text-sm cursor-pointer hover:scale-105">Posted</li>
                  <li className=" text-sm cursor-pointer hover:scale-105">Inprogress</li>
                  <li className=" text-sm cursor-pointer hover:scale-105">In transist</li>
                  <li className=" text-sm cursor-pointer hover:scale-105 text-[#9198A4]">Completed</li>

                </ul>
                <hr className="border-[#D5DCDC] border-1  flex m-2 w-full my-10" />

              </div>
              <DetailBox/>
            </div>
            <hr className="border-[#D5DCDC] border-1  flex m-2 w-full my-10" />
            <Remark/>
              
          </div>
          {/* lower part */}
          <div className=" col-span-3 p-5">
            <div className="">
              <div className="bg-[#F6F6F6] p-10 rounded-xl">
                <div className="">
                  <ul className="flex justify-start items-start  gap-10  ">
                    <li className="border-2  rounded-2xl border-black px-6 py-1 cursor-pointer hover:-translate-y-5 hover:scale-110">
                      Active Loads
                    </li>
                    <li className="border-2 rounded-2xl border-black px-6 py-1 cursor-pointer hover:-translate-y-5 hover:scale-110">
                      Bids Placed
                    </li>
                    <li className="border-2  rounded-2xl bg-black text-white px-6 py-1 cursor-pointer hover:-translate-y-5 hover:scale-110">
                      Booking Recived
                    </li>
                  </ul>

                </div>
                <hr className="border-[#D5DCDC] border-1  flex m-2 w-full my-10" />
                <div className=" grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2 gap-10 md:col-auto ">
                  <ListingBox />
                  <ListingBox />
                  <ListingBox />
                  <ListingBox />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPannel;
