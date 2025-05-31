'use client';
import { FaUser,FaCog,FaMoneyBillWave, FaUsers, FaBoxOpen } from "react-icons/fa";
import { Bell } from "lucide-react";
import SearchItems from '@/components/SearchItems';
const Navbar =()=>{
  const handleSearchText = (text) => {
    alert(text);
  };
  return (<>
            <nav className="flex w-full justify-between flex-wrap gap-4 p-4 rounded shadow-md ">
      <div>
         <SearchItems onSearchText={handleSearchText} />  
      </div>
       <div className="flex gap-4 p-2">
         <div className="relative w-12 h-11 bg-white p-1.5 rounded-full ring-1  ring-blue-200">
     <span className="w-6 h-7 text-gray-700"><FaCog /></span>   
         </div>
<div className="relative w-12 h-11 bg-white p-1.5 rounded-full ring-1  ring-blue-200">
      <Bell className="w-6 h-7 text-gray-700" />
       <span className="absolute -top-1 -left-1 bg-red-500 text-white text-xs font-semibold px-1 py-0.3 rounded-full">
          0
        </span>
    </div>
<div className='flex flex-1 gap-2 md:gap-4 lg:gap-6'>
  <p className="opacity-20">|</p>
  <span className="text-blue-300">Azim Islam</span>
  <div className="relative w-12 h-11 bg-white p-1.5 rounded-full ring-1  ring-blue-200">
    <span className="w-6 h-7 text-gray-700"><FaUser /></span>
    </div>
</div>
       </div>
        </nav>
  </>)
}
export default Navbar