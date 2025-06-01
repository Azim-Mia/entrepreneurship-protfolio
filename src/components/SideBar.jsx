'use client';
import { useState } from 'react';
import { MdDashboard } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { FaUser,FaCog,FaMoneyBillWave, FaUsers, FaBoxOpen } from "react-icons/fa";
const SideBar =({setIsListOpen})=>{
  const [isOpen, setIsOpen] = useState(false);
  return (<>
          <aside className="max-h-screen w-64  p-2 space-y-4 xs:w-48 xs:text-sm">
        <div className="flex flex-1 gap-2 font-bold sm:text-sm xs:text-sm lg:text-md">আমাদের 
        <p className="text-green">সেবা</p></div>
        <nav className="space-y-1">
          {/* Dashboard toggle */}
          <div>
     <div className="mt-12">
        <strong className="block text-xl font-semibold text-blue-600 mb-2 opacity-30">
              ড্যাশবোর্ড 
            </strong>
     </div>
            <div onClick={() => setIsOpen((prev) => !prev)}
              className="flex items-center gap-2 cursor-pointer hover:bg-blue-100 px-6 py-1 rounded"
            >
              <MdDashboard className="text-xl text-yellow" />
              <span className="text-red-500">ড্যাশবোর্ড</span>
            </div>
          </div>

          {/* Dropdown Section */}
          { isOpen && (
            <div className="space-y-4 md:text-md sm:text-sm lg:text-md">
              <div className="text-md bg-white rounded-xl shadow-md p-0.5 xs:text-sm">
                <p className="text-gray-500 text-sm mb-1 mt-4 opacity-40">ইউজার ম্যানেজমেন্ট</p>
                <div className="flex items-center gap-2 text-gray-800 font-semibold mt-2 p-2">
                  <FaUsers className="text-gray-400" />
                  <span onClick={()=>setIsListOpen(true)} className="hover:hover_item">উদ্যোক্তা</span>
                </div>
              </div>

              <div className="flex flex-col gap-4 bg-white rounded-xl shadow-md p-2">
                <p className="text-gray-900 text-sm mb-1opacity-40">সেবা ম্যানেজমেন্ট</p>
                <div className="flex items-center gap-2 text-gray-800 font-semibold">
                  <FaBoxOpen className="text-gray-400" />
                  <span className="hover:hover_item">সেবা সমূহ</span>
                </div>
                <div className="flex items-center gap-2 text-gray-800 font-semibold">
                  <BsGraphUp />
                  <span className="hover:hover_item">সেবা ইতিহাস</span>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-4">
                <p className="text-gray-500 text-sm mb-1 opacity-40">প্রোফাইল</p>
                <div className="flex items-center gap-2 text-gray-800 font-semibold">
                  <FaUser className="text-gray-400" />
                  <span className="hover:hover_item">প্রোফাইল</span>
                </div>
              </div>
            </div>
          )}
        </nav>
      </aside>
  </>)
}
export default SideBar;