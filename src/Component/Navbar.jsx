import React from 'react'
// import Link from 'react'


const Navbar = () => {
  return (
   <>
   <div className=' font-Plus Jakarta Sans  '>
    <div className="flex justify-between items-center w-full h-full px-2 2xl:px-12 shadow-lg">
      <div className="">
           <img className=" w-[142px] p-2"
              src={require('./picture.png')}
              alt="/"
            ></img>
      </div> 
      <div className="hidden md:flex">
        <ul className="flex justify-between items-center gap-12">
          <li className=' text-[#9198A4] '>Load Market</li>
          <li className='p-2'>Lorry Maker</li>
          <li className=' text-[#9198A4] '>Network</li>
          <li className=' text-[#9198A4] '>Transport Directory</li>
          <li className='p-4'><img className="  w-[60px]"
              src={require('./Picture2.png')}
              alt="/"
            ></img></li>

        </ul>
        </div>       
    </div>
   </div>
   </> 
  )
}

export default Navbar;