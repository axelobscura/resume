"use client";
import Sidebar from "../components/Sidebar";
import Link from "next/link";

export default function Education() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="grid lg:grid-cols-[1fr_5fr] md:grid-cols-[2fr_5fr] sm:grid-cols-[3fr_5fr] gap-0">
        <div className="p-0">
          <Sidebar />
        </div>
        <div className="flex flex-col justify-center p-10">
          <h1 className="text-4xl text-white uppercase mt-5 mb-5 font-black text-center">Education</h1>
          <hr />
          <h2 className="text-left pt-2 font-extrabold">BACHELOR’S DEGREE IN GRAPHIC & DIGITAL COMMUNICATIONS | WEB DEVELOPMENT</h2>
          <h3>UNIVERSIDAD AUTÓNOMA METROPOLITANA</h3>
          <p className="pb-2 text-2xs">YEAR OF COMPLETION: 2004</p>
          <hr />
          <h2 className="text-left pt-2 font-extrabold">MASTER’S DEGREE IN VISUAL ARTS / BRANCH WEB DESIGN AND DIGITAL DEVELOPMENT</h2>
          <h3>UNIVERSIDAD NACIONAL AUTÓNOMA DE MÉXICO</h3>
          <p className="pb-2 text-2sm">YEAR OF COMPLETION: 2008</p>
          <hr />
          <h2 className="text-left pt-2 font-extrabold">MASTER’S DEGREE IN SYSTEM ENGINEERING (IN PROCESS)</h2>
          <h3>UNIVERSIDAD INTERNACIONAL DE LA RIOJA</h3>
          <p className="pb-2 text-2sm">IN PROCESS: 2019</p>
          <hr />
          <h2 className="text-left pt-2 font-extrabold">FULL-STACK ENGINEER</h2>
          <h3>CODE ACADEMY</h3>
          <p className="pb-2 text-2sm">IN PROCESS: 2021 - 2022</p>
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
