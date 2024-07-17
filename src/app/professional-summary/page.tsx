"use client";
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Link from "next/link";

export default function ProfessionalSummary() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(`/api/portfolio`)
      .then((res) => res.json())
      .then((data) => setResults(data.msg));
  },[]);

  return (
    <main className="flex min-h-screen flex-col">
      <div className="grid lg:grid-cols-[1fr_5fr] md:grid-cols-[2fr_5fr] sm:grid-cols-[3fr_5fr] gap-0">
        <div className="p-0">
          <Sidebar />
        </div>
        <div className="p-4 h-screen overflow-auto pt-0 pb-5">
          {!results.length ? 
            <h1 className="flex items-center min-h-screen min-w-full justify-center text-4xl text-white uppercase">Loading</h1>
          : 
            <div className="grid lg:grid-cols-[1fr_1fr] gap-2 mt-3">
              {results.map((job:any) => {
                return (
                  <div key={job.empresa} className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 shadow-gray-500">
                      <Link href="#">
                          <p className="text-yellow-600">{job.periodo}</p>
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white uppercase">{job.empresa}</h5>
                          <p>{job.rol}</p>
                      </Link>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{job.client}</p>
                      <Link href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-yellow-600 dark:hover:bg-gray-700 dark:focus:ring-gray-100 transition-all duration-500">
                          Read more
                          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                          </svg>
                      </Link>
                  </div>
                );
              })}
            </div>
          }
        </div>
      </div>
    </main>
  );
}
