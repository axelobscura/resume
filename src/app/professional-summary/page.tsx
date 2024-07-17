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

  console.log(results);

  return (
    <main className="flex min-h-screen flex-col">
      <div className="grid lg:grid-cols-[1fr_5fr] md:grid-cols-[2fr_5fr] sm:grid-cols-[3fr_5fr] gap-0">
        <div className="p-0">
          <Sidebar />
        </div>
        <div className="flex flex-col items-center justify-center p-4 h-screen overflow-auto pt-20 pb-5">
          {!results.length ? 
            <h1 className="text-4xl text-white uppercase">Loading</h1>
          : 
            results.map((job:any) => {
              return (
                <div key={job} className="flex flex-col items-center justify-center p-4">
                  <h2 className="text-2xl text-white uppercase">{job.empresa}</h2>
                </div>
              );
            })
          }
        </div>
      </div>
    </main>
  );
}
