"use client";
import Sidebar from "./components/Sidebar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="grid grid-cols-[1fr_7fr] gap-0">
        <div className="p-0">
          <Sidebar />
        </div>
        <div className="flex flex-col items-center justify-center bg-gray-700 p-4">
          <h1 className="m-1 mb-3 text-white text-8xl">Welcome</h1>
          <h2 className="pt-0 text-4xl mt-2 mb-2">Axel Laurent Obscura Sarzotti</h2>
          <div className="flex icod m-1">
            <i className="devicon-javascript-plain m-2"></i>
            <i className="devicon-typescript-plain m-2"></i>
            <i className="devicon-react-original m-2"></i>
            <i className="devicon-angularjs-plain m-2"></i>
            <i className="devicon-vuejs-plain m-2"></i>
            <i className="devicon-git-plain m-2"></i>
            <i className="devicon-jquery-plain m-2"></i>
            <i className="devicon-html5-plain m-2"></i>
            <i className="devicon-jasmine-plain m-2"></i>
            <i className="devicon-bootstrap-plain m-2"></i>
            <i className="devicon-css3-plain m-2"></i>
            <i className="devicon-nodejs-plain m-2"></i>
          </div>
          <div className="icod m-1">
            <i className="devicon-express-original m-2"></i>
            <i className="devicon-php-plain m-2"></i>
            <i className="devicon-trello-plain m-2"></i>
            <i className="devicon-visualstudio-plain m-2"></i>
            <i className="devicon-webpack-plain m-2"></i>
            <i className="devicon-wordpress-plain m-2"></i>
            <i className="devicon-zend-plain m-2"></i>
            <i className="devicon-mocha-plain m-2"></i>
            <i className="devicon-laravel-plain m-2"></i>
            <i className="devicon-less-plain-wordmark m-2"></i>
            <i className="devicon-mongodb-plain m-2"></i>
            <i className="devicon-mysql-plain m-2"></i>
            <i className="devicon-sass-original m-2"></i>
            <i className="devicon-ssh-plain m-2"></i>
          </div>
          <hr />
          <h3 className="text-white font-extrabold mt-3 mb-3 text-3xl">Senior Full Stack Developer</h3>
          <p>
            With 20 years of experience designing, developing and maintaining
            web and mobile applications
            <br />
            extensive experience creating multiple highly scalable applications{" "}
            <b>using different modern tech stacks</b>
          </p>
          <Link href="/professional-summary">
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded mt-8">Professional Summary</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
