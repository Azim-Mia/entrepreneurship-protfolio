'use client';
import { useState } from 'react';
import { MdDashboard } from "react-icons/md";
import { FaUser,FaMoneyBillWave, FaUsers, FaBoxOpen } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import Cart from '@/components/Cart';
import SearchItems from '@/components/SearchItems';
//FaCog,
const DeshboardNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchText = (text) => {
    alert(text);
  };

  return (
    <div className="min-h-screen flex bg-gray-100 p-4 gap-2 xs:small">
      {/* Sidebar */}
      <aside className="w-64 bg-white rounded-2xl shadow-lg p-4 space-y-6 xs:w-48">
        <h1 className="font-bold text-gray-800">আমাদের সেবা</h1>
        <nav className="space-y-4">
          {/* Dashboard toggle */}
          <div>
            <strong className="block text-xl font-semibold text-blue-600 mb-2">
              ড্যাশবোর্ড পরিচিতি
            </strong>
            <div
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex items-center gap-2 cursor-pointer hover:bg-blue-100 px-2 py-1 rounded"
            >
              <MdDashboard className="text-xl" />
              <span className="text-gray-700">ড্যাশবোর্ড</span>
            </div>
          </div>

          {/* Dropdown Section */}
          {isOpen && (
            <div className="space-y-3 ">
              <div className="bg-white rounded-xl shadow-md p-4 xs:text-1xl">
                <p className="text-gray-500 text-sm mb-1 opacity-25">ইউজার ম্যানেজমেন্ট</p>
                <div className="flex items-center gap-2 text-gray-800 font-semibold">
                  <FaUsers />
                  <span>উদ্যোক্তা</span>
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

      {/* Main Content */}
      <main className="flex flex-col">
        <div className="bg-white p-4 rounded shadow">
          <SearchItems onSearchText={handleSearchText} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-4 gap-6 bg-white p-4 rounded shadow">
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
