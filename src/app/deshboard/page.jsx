'use client';
import { useState } from 'react';
import { FaUser,FaCog,FaMoneyBillWave, FaUsers, FaBoxOpen } from "react-icons/fa";
import { Bell } from "lucide-react";
import { BsGraphUp } from "react-icons/bs";
// Lucide is a great icon library
import Cart from '@/components/Cart';
import SearchItems from '@/components/SearchItems';
import UddoktaList from '@/components/UddoktaList'
import SideBar from '@/components/SideBar'
const DeshboardNav = () => {
const [isListOpen, setIsListOpen] =useState(false);
  const handleSearchText = (text) => {
    alert(text);
  };

  return (
    <div className="text-md font-sans h-screen w-full flex p-2 gap-2 xs:text-small ">
      {/* Sidebar */}
      <SideBar setIsListOpen={setIsListOpen} />
      {/* Main Content */}
      <main className="w-full flex flex-col bg-rose-50">
        <nav className="flex w-full justify-between flex-wrap gap-4 p-4 rounded shadow-md ">
      <div>
         <SearchItems onSearchText={handleSearchText} />  
      </div>
       <div className="flex gap-4 p-2">
         <span><FaCog /></span>
<div className="relative w-8 h-9">
      <Bell className="w-6 h-7 text-gray-700" />
       <span className="absolute -top-1 -left-1 bg-red-500 text-white text-xs font-semibold px-1 py-0.3 rounded-full">
          0
        </span>
    </div>
         <span><FaUser /></span>
       </div>
        </nav>
        {isListOpen && <UddoktaList /> }
        <div className="bg-rose-50 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-4 gap-6 bg-white p-4 rounded shadow ">
          <Cart title="মোট ব্যবহারকারী" value="1250" icon={<FaUsers />} />
          <Cart title="মোট সেবা সংখ্যা" value="120" icon={<FaBoxOpen />} />
          <Cart title="উদ্যোক্তা" value="500" icon={<FaUser />} />
          <Cart title="জমা" value="125000 টাকা" icon={<FaMoneyBillWave />} />
          <Cart title="মোট ব্যয়" value="123000 টাকা" icon={<FaMoneyBillWave />} />
          <Cart title="বর্তমান ব্যালেন্স" value="2000 টাকা" icon={<BsGraphUp />} />
        </div>
      </main>
    </div>
  );
};

export default DeshboardNav;
