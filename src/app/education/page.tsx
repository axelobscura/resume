"use client";
import Sidebar from "../components/Sidebar";
import Link from "next/link";
import Image from 'next/image';

export default function Education() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="grid lg:grid-cols-[1fr_5fr] md:grid-cols-[2fr_5fr] sm:grid-cols-[3fr_5fr] gap-0 overflow-hidden">
        <div className="p-0">
          <Sidebar />
        </div>
        <div className="flex flex-col justify-center p-10 h-full overflow-auto">
          <h1 className="text-4xl text-white uppercase mt-5 mb-5 font-black text-center">Education</h1>
          <hr />

          <Link href="#" className="flex flex-col w-full items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-3">
            <Image
              src="/6198657.jpeg"
              width={75}
              height={75}
              alt="Full Stack Developer in Mexico Axel Laurent Obscura Sarzotti"
              className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg'
            />
            <div className="flex flex-col justify-between p-2 leading-normal">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">UNIVERSIDAD AUTÓNOMA METROPOLITANA</p>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BACHELOR’S DEGREE IN GRAPHIC & DIGITAL COMMUNICATIONS<br/>WEB DESIGN AND DEVELOPMENT</h5>
                <p className="text-sm">1999 - 2004, YEAR OF COMPLETION: 2004</p>
            </div>
          </Link>

          <Link href="#" className="flex flex-col w-full items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-3">
            <Image
              src="/6198657.jpeg"
              width={75}
              height={75}
              alt="Full Stack Developer in Mexico Axel Laurent Obscura Sarzotti"
              className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg'
            />
            <div className="flex flex-col justify-between p-2 leading-normal">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">UNIVERSIDAD NACIONAL AUTÓNOMA DE MÉXICO</p>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">MASTER’S DEGREE IN VISUAL ARTS<br/>BRANCH WEB DESIGN AND DIGITAL DEVELOPMENT</h5>
                <p className="text-sm">2006 - 2008, YEAR OF COMPLETION: 2008</p>
            </div>
          </Link>

          <Link href="#" className="flex flex-col w-full items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-3">
            <Image
              src="/6198657.jpeg"
              width={75}
              height={75}
              alt="Full Stack Developer in Mexico Axel Laurent Obscura Sarzotti"
              className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg'
            />
            <div className="flex flex-col justify-between p-2 leading-normal">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">UNIVERSIDAD INTERNACIONAL DE LA RIOJA</p>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">MASTER’S DEGREE IN SYSTEM ENGINEERING (IN PROCESS)</h5>
                <p className="text-sm">2019 - 2020, YEAR OF COMPLETION: 2020</p>
            </div>
          </Link>

          <Link href="#" className="flex flex-col w-full items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-3">
            <Image
              src="/6198657.jpeg"
              width={75}
              height={75}
              alt="Full Stack Developer in Mexico Axel Laurent Obscura Sarzotti"
              className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg'
            />
            <div className="flex flex-col justify-between p-2 leading-normal">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">CODE ACADEMY</p>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">FULL-STACK ENGINEER PROGRAM</h5>
                <p className="text-sm">IN PROCESS: 2021 - 2022</p>
            </div>
          </Link>
          {/*
          <hr />
          <h2 className="p-2 font-bold">COURSES</h2>
          <hr />
          <p className="p-0 m-0"><b>Angular: From Zero to Hero</b></p>
          <p className="p-0 m-0">Asim Hussain</p>
          <hr />
          <p className="p-0 m-0"><b>Advanced Javascript</b></p>
          <p className="p-0 m-0">Asim Hussain</p>
          <hr />
          <p className="p-0 m-0"><b>Modern React with Redux</b></p>
          <p className="p-0 m-0">Stephen Grider</p>
          <hr />
          <p className="p-0 m-0"><b>Angular (2/4) NodeJS – The MEAN Stack</b></p>
          <p className="p-0 m-0">Maximilian Schwarzmüller</p>
          <hr />
          <p className="p-0 m-0"><b>Angular – The complete Guide</b></p>
          <p className="p-0 m-0">Maximilian Schwarzmüller</p>
          <hr />
          <p className="p-0 m-0"><b>The complete Javascript Course: Build a Real-World APP</b></p>
          <p className="p-0 m-0">Jonas Schmedtmann</p>
          <hr />
          <p className="p-0 m-0"><b>Web Design for Web Developers: Build Beautiful</b></p>
          <p className="p-0 m-0">Jonas Schmedtmann</p>
          <hr />
          <p className="p-0 m-0"><b>Learn and Understand NodeJS</b></p>
          <p className="p-0 m-0">Anthony Alicea</p>
          */}
        </div>
      </div>
    </main>
  );
}
