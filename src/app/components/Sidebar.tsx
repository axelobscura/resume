'use client'
import { useState } from 'react';
import { useParams, usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

const Sidebar = () => {
  const params = useParams();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={`bg-gray-900 text-white h-screen transition-all duration-300 z-10 flex flex-col items-center justify-center ${
          isOpen? 'w-full' : 'w-0 overflow-hidden'
        }`}
      >
        <div className='text-center flex flex-col items-center'>
          <Link href="/">
            <Image
              src="/6198657.jpeg"
              width={75}
              height={75}
              alt="Full Stack Developer in Mexico Axel Laurent Obscura Sarzotti"
              className='rounded-full mb-3 border-2 border-solid border-gray-500 shadow-md shadow-gray-900'
            />
          </Link>
          <p className='text-center font-extrabold text-2xl'>Axel Laurent<br/>Obscura Sarzotti</p>
          <p className='text-center font-thin text-gray-300 mt-3'>Sr. Full Stack Developer</p>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-full mt-4">
            <Link href="/technical-summary" className='flex'>
              <button className={`w-full block text-xs ${pathname === "/technical-summary" ? "bg-yellow-500 text-gray-900" : "bg-gray-500 text-gray-100"}  hover:bg-yellow-600 transition-all duration-500 hover:text-gray-100 uppercase font-bold py-3 px-4 mt-0 text-left`}>Technical Summary</button>
              <div className='bg-gray-600 p-1'>
                <FaChevronRight style={{
                  color: '#fff',
                  height: '100%',
                  background: `${pathname === "/technical-summary" ? "#ca8a04" : "#111"}`,
                  fontSize: '20px',
                  padding: '5px',
                }} />
              </div>
            </Link>
          </div>
          <div className="w-full mt-1">
            <Link href="/professional-summary" className='flex'>
              <button className={`w-full block text-xs ${pathname === "/professional-summary" ? "bg-yellow-500 text-gray-900" : "bg-gray-500 text-gray-100"}  hover:bg-yellow-600 transition-all duration-500 hover:text-gray-100 uppercase font-bold py-3 px-4 mt-0 text-left`}>Professional Summary</button>
              <div className='bg-gray-600 p-1'>
                <FaChevronRight style={{
                  color: '#fff',
                  height: '100%',
                  background: `${pathname === "/professional-summary" ? "#ca8a04" : "#111"}`,
                  fontSize: '20px',
                  padding: '5px',
                }} />
              </div>
            </Link>
          </div>
          <div className="w-full mt-1">
            <Link href="/education" className='flex'>
              <button className={`w-full block text-xs ${pathname === "/education" ? "bg-yellow-500 text-gray-900" : "bg-gray-500 text-gray-100"}  hover:bg-yellow-600 transition-all duration-500 hover:text-gray-100 uppercase font-bold py-3 px-4 mt-0 text-left`}>Education</button>
              <div className='bg-gray-600 p-1'>
                <FaChevronRight style={{
                  color: '#fff',
                  height: '100%',
                  background: `${pathname === "/education" ? "#ca8a04" : "#111"}`,
                  fontSize: '20px',
                  padding: '5px',
                }} />
              </div>
            </Link>
          </div>
          <div className="w-full mt-1">
            <Link href="/languages" className='flex'>
              <button className={`w-full block text-xs ${pathname === "/languages" ? "bg-yellow-500 text-gray-900" : "bg-gray-500 text-gray-100"}  hover:bg-yellow-600 transition-all duration-500 hover:text-gray-100 uppercase font-bold py-3 px-4 mt-0 text-left`}>Languages</button>
              <div className='bg-gray-600 p-1'>
                <FaChevronRight style={{
                  color: '#fff',
                  height: '100%',
                  background: `${pathname === "/languages" ? "#ca8a04" : "#111"}`,
                  fontSize: '20px',
                  padding: '5px',
                }} />
              </div>
            </Link>
          </div>
          <div className="w-full mt-1">
            <Link href="/contact" className='flex'>
              <button className={`w-full block text-xs ${pathname === "/contact" ? "bg-yellow-500 text-gray-900" : "bg-gray-500 text-gray-100"}  hover:bg-yellow-600 transition-all duration-500 hover:text-gray-100 uppercase font-bold py-3 px-4 mt-0 text-left`}>Contact</button>
              <div className='bg-gray-600 p-1'>
                <FaChevronRight style={{
                  color: '#fff',
                  height: '100%',
                  background: `${pathname === "/contact" ? "#ca8a04" : "#111"}`,
                  fontSize: '20px',
                  padding: '5px',
                }} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;