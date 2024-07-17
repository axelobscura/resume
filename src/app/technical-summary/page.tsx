"use client";
import Sidebar from "../components/Sidebar";
import Link from "next/link";

export default function TechnicalSummary() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="grid lg:grid-cols-[1fr_5fr] md:grid-cols-[2fr_5fr] sm:grid-cols-[3fr_5fr] gap-0">
        <div className="p-0">
          <Sidebar />
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <h1 className="text-4xl text-white uppercase mb-5 font-black">Technical Summary</h1>
          <hr />
          <p className="p-5 text-justify"><strong>Senior Full Stack Web Developer with 20 years of experience</strong> designing and developing backend architectures, decoupled and entier frontend web and backend applications using HTML, CSS, JavaScript, AJAX, JSON, XML, NodeJS, Express, PHP, MySQL, PosgressSQL,  Angular, ReactJS, VueJS, NextJS.<br/><br/>Full Stack Developer with hands on experience of designing, developing and maintaining web apps as well as mobile applications. Possesses diverse experience of creating multiple highly scalable applications <b>using different tech stacks</b>. Adept at understanding the requirements of the clients and delivering projects accordingly. Demonstrates the capability of maintaining code by fixing bugs as well as conducting end to end testing. Highly skilled at collaborating with team members to ship beautiful products within deadlines. Looking forward to applying the acquired gamut of skills in a challenging role.</p>
          <div className="flex flex-row mt-3">
            <i className="devicon-javascript-plain text-3xl m-2"></i>
            <i className="devicon-typescript-plain text-3xl m-2"></i>
            <i className="devicon-react-original text-3xl m-2"></i>
            <i className="devicon-angularjs-plain text-3xl m-2"></i>
            <i className="devicon-vuejs-plain text-3xl m-2"></i>
            <i className="devicon-git-plain text-3xl m-2"></i>
            <i className="devicon-jquery-plain text-3xl m-2"></i>
            <i className="devicon-html5-plain text-3xl m-2"></i>
            <i className="devicon-jasmine-plain text-3xl m-2"></i>
            <i className="devicon-bootstrap-plain text-3xl m-2"></i>
            <i className="devicon-css3-plain text-3xl m-2"></i>
            <i className="devicon-nodejs-plain text-3xl m-2"></i>
            <i className="devicon-express-original text-3xl m-2"></i>
            <i className="devicon-php-plain text-3xl m-2"></i>
            <i className="devicon-trello-plain text-3xl m-2"></i>
            <i className="devicon-visualstudio-plain text-3xl m-2"></i>
            <i className="devicon-webpack-plain text-3xl m-2"></i>
            <i className="devicon-wordpress-plain text-3xl m-2"></i>
            <i className="devicon-zend-plain text-3xl m-2"></i>
            <i className="devicon-mocha-plain text-3xl m-2"></i>
            <i className="devicon-laravel-plain text-3xl m-2"></i>
            <i className="devicon-less-plain-wordmark text-3xl m-2"></i>
            <i className="devicon-mongodb-plain text-3xl m-2"></i>
            <i className="devicon-mysql-plain text-3xl m-2"></i>
            <i className="devicon-sass-original text-3xl m-2"></i>
            <i className="devicon-ssh-plain text-3xl m-2"></i>
          </div>
          <div className="grid lg:grid-cols-[1fr_1fr_1fr_1fr] md:grid-cols-[1fr_1fr_1fr] sm:grid-cols-[1fr] w-full gap-0 mt-9 mb-5 pl-7 pr-7">
            <div>
              <h2 className="font-black mb-3">Front End</h2>
              <ul>
                <li>Javascript [ES5/ES6]</li>
                <li>Jquery</li>
                <li>Ajax</li>
                <li>HTML5, HTML5 Canvas</li>
                <li>ReactJS</li>
                <li>NextJS</li>
                <li>Angular</li>
                <li>VueJS</li>
                <li>JAMStack</li>
                <li>Hubspot Developer</li>
                <li>Bootstrap</li>
                <li>Tailwind</li>
                <li>Skeleton</li>
                <li>CSS, CSS3, Sass, Less, Bower</li>
              </ul>
            </div>
            <div>
              <h2 className="font-black mb-3">Back End</h2>
              <ul>
                <li>NodeJS</li>
                <li>Express</li>
                <li>PHP</li>
                <li>Java</li>
                <li>Python</li>
                <li>.NET</li>
                <li>SQL</li>
                <li>MongoDB</li>
                <li>Postgress</li>
                <li>Flux Pattern</li>
                <li>Model-View-Controller</li>
              </ul>
            </div>
            <div>
              <h2 className="font-black mb-3">Dev Ops</h2>
              <ul>
                <li>Elastik Beanstalk</li>
                <li>EC2</li>
                <li>Elasticache MS</li>
                <li>AWS</li>
                <li>Azure</li>
                <li>Digital Ocean</li>
              </ul>
            </div>
            <div>
              <h2 className="font-black mb-3">Miscellaneous</h2>
              <ul>
                <li>Git</li>
                <li>Bitbucket</li>
                <li>Test Driven Development</li>
                <li>Unit Testing, Mocha, Gruntt, Jest</li>
                <li>Python</li>
                <li>Java</li>
                <li>MicroServices</li>
                <li>Docker</li>
                <li>Kubernets</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
