import React, { useState } from 'react';
import FormData from "/client/src/components/FormData";
const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  
  const handleCategoryClick = (category) => {
    setIsDropdownOpen(false);
    onCategoryChange(category);
  };
  const handleLinkClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    setShowForm(true); // Update state to show the form
  };
  
  return (
     
    <header className="flex justify-center w-full px-5 py-4 bg-gray-300 border-b shadow-md item-center text-gray">
      {/* Logo */}
      <div className="mr-64 text-2xl font-bold">HannahPhotoGalary</div>
      {/* Navigation Menu */}
      <nav className="flex gap-8 ">
        <a href="#" className="ml-10 hover:text-blue-500">Home</a>
        <div className="relative">
          <button
            className="z-20 hover:text-gray-400"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            Category
          </button>
          {isDropdownOpen && (
            <ul
              className="absolute py-2 mt-2 bg-gray-200 rounded shadow-lg"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              {['Street', 'Sport', 'Fashion', 'Nature', 'Outdoor'].map((category) => (
                <li
                  key={category}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-500"
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          )}
        </div>
        <a href="#" className="hover:text-gray-400" onClick={handleLinkClick}>
        InsertPhoto
      </a>

      {/* Conditionally render the FormData component */}
      {showForm && <FormData />}
        <a href="#" className="text-xl hover:text-gray-400">Contact Us</a>
        <a href="#" className="hover:text-gray-400">About Me</a>
        <a href="#" className="hover:text-gray-400">Login</a>
        
      </nav>
    </header>
  )
  }
      

export default Header;
