import React from "react";

function Footer() {
  return (
    <div className="bg-greydark">
      <div className="container m-auto grid grid-cols-5 gap-4 py-5 w-3/4 text-sm">
        <div className="tile">
          <div className="grid">
            <h1 className="tile-marker text-white font-bold mb-2">ABOUT US</h1>
            <a className="text-greyfont hover:text-white" href="#">Company Profile</a>
            <a className="text-greyfont hover:text-white" href="#">Vision & Mission</a>
            <a className="text-greyfont hover:text-white" href="#">Awards</a>
            <a className="text-greyfont hover:text-white" href="#">Milestones</a>
            <a className="text-greyfont hover:text-white" href="#">Management Profile</a>
          </div>
        </div>
        <div className="tile">
          <h1 className="tile-marker text-white font-bold mb-2">INVESTOR RELATIONS</h1>
          <div className="grid">
            <a className="text-greyfont hover:text-white" href="#">Financial Highlights</a>
            <a className="text-greyfont hover:text-white" href="#">Financial Reports</a>
            <a className="text-greyfont hover:text-white" href="#">Annual Reports</a>
            <a className="text-greyfont hover:text-white" href="#">Investor Update</a>
            <a className="text-greyfont hover:text-white" href="#">Prospectus</a>
            <a className="text-greyfont hover:text-white" href="#">General Meeting of Shareholders</a>
            <a className="text-greyfont hover:text-white" href="#">Stock Price Information</a>
          </div>
        </div>
        <div className="tile">
          <h1 className="tile-marker text-white font-bold mb-2">SOCIAL & EVENTS</h1>
          <div className="grid">
            <a className="text-greyfont hover:text-white" href="#">Newsroom</a>
            <a className="text-greyfont hover:text-white" href="#">Social Responsibilities</a>
            <a className="text-greyfont hover:text-white" href="#">CSR Events</a>
          </div>
        </div>
        <div className="tile">
          <h1 className="tile-marker text-white font-bold mb-2">CORPORATE GOVERNANCE</h1>
          <div className="grid">
            <a className="text-white font-bold py-1 hover:text-gray-400" href="#">SUBSIDIARIES & AFFILIATES</a>
            <a className="text-white font-bold py-1 hover:text-gray-400" href="#">CAREER</a>
            <a className="text-white font-bold py-1 hover:text-gray-400" href="#">CONTACT US</a>
            <a className="text-white font-bold py-1 hover:text-gray-400" href="#">E-COMMERCE</a>
            <a className="text-white font-bold py-1 hover:text-gray-400" href="#">DISCLAIMER</a>
          </div>
        </div>
        <div className="tile">
          <h1 className="tile-marker text-white font-bold mb-2">GET IN TOUCH</h1>
          <div className="text-greyfont">
            Jl. Bandengan Selatan No.19-20 Pekojan - Tambora, Jakarta Barat <br />
            11240, Indonesia P. +62 21 690 5788 F. +62 21 690 5789 M. <br />
            corporate@erajaya.com
          </div>
        </div>
      </div>
      <div className="border-t border-t-greyfont border-solid text-greyfont text-xs p-3">
        <p className="ml-56">Copyright &copy; 2020 Erajaya.com. ALL RIGHTS RESERVED</p>
      </div>
    </div>
  );
}

export default Footer;
