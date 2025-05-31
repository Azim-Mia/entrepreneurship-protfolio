'use client';
import { useState } from 'react';
import { MdDashboard } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { FaUser,FaCog,FaMoneyBillWave, FaUsers, FaBoxOpen } from "react-icons/fa";
const SideBar =({setIsListOpen})=>{
  const [isOpen, setIsOpen] = useState(false);
  return (<>
          <aside className="max-h-screen w-64 bg-white rounded-2xl shadow-lg p-4 space-y-4 xs:w-48 xs:text-sm">
        <div className="flex flex-1 gap-2 font-bold text-md xs:text-sm">আমাদের 
        <p className="text-green">সেবা</p></div>
        <nav className="space-y-4">
          {/* Dashboard toggle */}
          <div>
     <div className="mt-12">
        <strong className="block text-xl font-semibold text-blue-600 mb-2 opacity-30">
              ড্যাশবোর্ড 
            </strong>
     </div>
            <div onClick={() => setIsOpen((prev) => !prev)}
              className="flex items-center gap-2 cursor-pointer hover:bg-blue-100 px-2 py-1 rounded"
            >
              <MdDashboard className="text-xl" />
              <span className="text-red-500">ড্যাশবোর্ড</span>
            </div>
          </div>

          {/* Dropdown Section */}
          { isOpen && (
            <div className="space-y-3 ">
              <div className="bg-white rounded-xl shadow-md p-4 xs:text-1xl">
                <p className="text-gray-500 text-sm mb-1 opacity-25">ইউজার ম্যানেজমেন্ট</p>
                <div className="flex items-center gap-2 text-gray-800 font-semibold">
                  <FaUsers />
                  <span onClick={()=>setIsListOpen(true)} className="hover:bg-gray-light">উদ্যোক্তা</span>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-4">
                <p className="text-gray-500 text-sm mb-1 opacity-25">সেবা ম্যানেজমেন্ট</p>
                <div className="flex items-center gap-2 text-gray-800 font-semibold">
                  <FaBoxOpen />
                  <span>সেবা সমূহ</span>
                </div>
                <div className="flex items-center gap-2 text-gray-800 font-semibold mt-2">
                  <BsGraphUp />
                  <span>সেবা ইতিহাস</span>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-4">
                <p className="text-gray-500 text-sm mb-1 opacity-25">প্রোফাইল</p>
                <div className="flex items-center gap-2 text-gray-800 font-semibold">
                  <FaUser />
                  <span>প্রোফাইল</span>
                </div>
              </div>
            </div>
          )}
        </nav>
      </aside>
  </>)
}
export default SideBar;