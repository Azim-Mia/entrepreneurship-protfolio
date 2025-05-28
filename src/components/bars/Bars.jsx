'use client';
import { useState } from 'react';
import "./bars.css";
import Link from 'next/link';
import { Menu } from 'lucide-react'; // Burger icon

const Bars = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false); // Simulated auth status
const [burger_class, setBurgerClass] =useState("burger-bar unClicked");
  const toggleDropdown = () => {
 if(!isDropdownOpen){
  setDropdownOpen(true);
  setBurgerClass("burger-bar clicked");
  }else{
  setBurgerClass("burger-bar unClicked");
  setDropdownOpen(false)
  }
  }
  const handleAuthClick = () => {
    setLoggedIn(!isLoggedIn);
    setDropdownOpen(false); // Hide menu after action
  };

  return (
    <header className="relative px-4">
      {/* Menu Icon */}
      <div className="cursor-pointer absolute" onClick={toggleDropdown}>
     <div className={burger_class}></div>
    <div className={burger_class}></div>
    <div className={burger_class}></div>
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
<div className="absolute top-14 right-4 bg-white border text-black border-gray-200 shadow-md rounded-md">
          {isLoggedIn ? (
            <button
              onClick={handleAuthClick}
              className="block w-full px-4 py-2 hover:bg-gray-100"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={handleAuthClick}
              className="block w-full px-4 py-2 hover:bg-gray-100"
            >
              Login
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Bars;