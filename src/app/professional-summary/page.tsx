"use client";
import Sidebar from "../components/Sidebar";
import Link from "next/link";

export default function ProfessionalSummary() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="grid lg:grid-cols-[1fr_5fr] md:grid-cols-[2fr_5fr] sm:grid-cols-[3fr_5fr] gap-0">
        <div className="p-0">
          <Sidebar />
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <h1 className="text-4xl text-white uppercase">Professional Summary</h1>
        </div>
      </div>
    </main>
  );
}
