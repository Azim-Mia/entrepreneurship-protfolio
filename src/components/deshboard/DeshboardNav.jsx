'use client';
import {useState} from 'react';
import { MdDashboard } from "react-icons/md";
import { FaUser, FaCog } from "react-icons/fa";
import Cart from '@/components/Cart'
import SearchItems from '@/components/SearchItems'
const DeshboardNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSearchText =(text)=>{
    alert(text)
  }
  return (
    <div className="min-h-screen flex bg-gray-100 p-4">
      {/* Sidebar */}
      <aside className="w-64 bg-white rounded-2xl shadow-lg p-6 space-y-6 xs:w-auto">
        <h1 className="text-2xl font-bold text-gray-800">আমাদের সেবা</h1>
        <nav className="space-y-4">
          <div>
            <strong className="block text-xl font-semibold text-blue-600 mb-2">
              ড্যাশবোর্ড পরিচিতি
            </strong>
            <div onClick={()=>setIsOpen((prev)=>!prev)} className="flex flex-1 justify-center gap-2 items-start">
              <p className="pt-2.5"><MdDashboard/></p>
              <p className="w-full text-left px-2 py-1 rounded hover:bg-blue-100">
              ড্যাশবোর্ড
            </p>
            </div>
          </div>
  {isOpen && <div className="flex flex-col gap-1.5"> 
   <div className='bg-white rounded-2xl shadow-lg p-6'>
            <p className="text-gray-600 font-medium mb-1 opacity-30">ইউজার ম্যানেজমেন্ট</p>
            <strong className="block text-2xl text-gray-800 pl-2">উদ্যোক্তা</strong>
          </div>

          <div className='bg-white rounded-2xl shadow-lg p-6'>
            <p className="text-gray-600 font-medium mb-1 opacity-30">সেবা ম্যানেজমেন্ট</p>
            <strong className="block text-2xl text-gray-800 pl-2">সেবা সমূহ</strong>
            <strong className="block text-gray-800 text-2xl pl-2">সেবা ইতিহাস</strong>
          </div>

          <div className='bg-white rounded-2xl shadow-lg p-6'>
            <p className="text-gray-600 font-medium mb-1 opacity-30">প্রোফাইল</p>
            <strong className="flex flex-1 block text-2xl text-gray-800 pl-2">
            <FaUser className="mr-2" /> প্রোফাইল</strong>
          </div>
          </div>}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-6 space-y-4">
         <div className="bg-white p-4 rounded shadow">
           <SearchItems onSearchText ={handleSearchText}/>
        </div>
         <p className="text-lg font-medium text-gray-700">ড্যাশবোর্ড</p>
        <div className="flex gap-6 flex-wrap bg-white p-4 rounded shadow">
        <Cart title="মোট ব্যবহারকারী" value={ 1250 } />
          <Cart title="মোট ব্যবহারকারী" value={ 1250 } />
        <Cart title="মোট ব্যবহারকারী" value={ 1250 } />
        <Cart title="মোট ব্যবহারকারী" value={ 1250 } />        </div>
      </main>
    </div>
  );
};

export default DeshboardNav;
