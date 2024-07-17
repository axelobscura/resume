import { useState } from 'react';
import Image from 'next/image';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={`bg-gray-900 text-white h-screen transition-all duration-300 z-10 flex flex-col items-center justify-center ${
          isOpen? 'w-full' : 'w-0 overflow-hidden'
        }`}
      >
        <div className='text-center flex flex-col items-center'>
          <Image
            src="/6198657.jpeg"
            width={75}
            height={75}
            alt="Full Stack Developer in Mexico Axel Laurent Obscura Sarzotti"
            className='rounded-full mb-3'
          />
          <p className='text-center font-extrabold text-2xl'>Axel Laurent<br/>Obscura Sarzotti</p>
          <p className='text-center font-thin text-gray-300 mt-3'>Sr. Full Stack Developer</p>
        </div>
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
        </div>
      </div>
    </div>
  );
};

export default Sidebar;