import { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={`bg-gray-900 text-white h-screen transition-all duration-300 z-10 flex items-center justify-between ${
          isOpen? 'w-full' : 'w-0 overflow-hidden'
        }`}
      >
        {/* Sidebar content */}
        <div className="flex flex-col items-center">
          <div className="mt-4">
            <a href="#" className="text-white hover:text-gray-300">
              Home
            </a>
          </div>
          <div className="mt-4">
            <a href="#" className="text-white hover:text-gray-300">
              About
            </a>
          </div>
          {/* Add more sidebar items here */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;