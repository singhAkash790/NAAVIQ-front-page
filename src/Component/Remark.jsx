import React from "react";

const Remark = () => {
  return (
    <div>
      <div className="">
        <ul className="bg-[#FFFF] pl-1">
          <li className="text-xl font-semibold pb-5">OCD & Remarks </li>
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-baseline">
              <p className="text-sm">OCD consignment</p>
              <p className="text-xs text-[#414042]">(Optional)</p>
            </div>
            <label class="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-700 peer-checked:bg-blue-500"></div>
            </label>
          </div>
          <p className="text-sm pt-4 pb-2">Remarks</p>
          <textarea
            name="No Remark"
            id=""
            className="bg-[#F6F6F6]  rounded-xl text-black"
            cols="50"
            rows="10"
            placeholder=" No Remark"
          ></textarea>
        </ul>
      </div>
    </div>
  );
};

export default Remark;
