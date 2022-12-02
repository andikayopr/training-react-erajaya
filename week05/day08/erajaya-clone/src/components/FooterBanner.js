import React from "react";
import banner_1 from "../assets/our-responsibility-thumb.jpg";
import banner_2 from "../assets/latest-annual-report-thumb.png";

function FooterBanner() {
  return (
    <div className="grid grid-cols-2">
      <div className="flex h-96 justify-center items-center flex-col">
        <div
          className="w-full h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${banner_1})` }}
        >
          <div className="w-full h-full flex  justify-center items-center backdrop-brightness-50"></div>
        </div>
        <div className="absolute text-center">
          <h1 className="text-white text-3xl">Our Responsibility</h1>
          <p className="text-white text-lg">We are here, we care, and we are responsible</p>
          <button className="bg-eraspace my-4 py-2 px-6 text-sm text-white rounded-lg">See More</button>
        </div>
      </div>

      <div className="flex h-96 justify-center items-center flex-col">
        <div
          className="w-full h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${banner_2})` }}
        >
          <div className="w-full h-full flex  justify-center items-center backdrop-brightness-50"></div>
        </div>
        <div className="absolute text-center">
          <h1 className="text-white text-3xl">Get our latest annual report</h1>
          <p className="text-white text-lg">Check out our performance over the past year our ambitions for the years ahead</p>
          <button className="bg-eraspace my-4 py-2 px-6 text-sm text-white rounded-lg">Download</button>
        </div>
      </div>
    </div>
  );
}

export default FooterBanner;
