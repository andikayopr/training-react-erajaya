import React from "react";
import profile from "../profile.svg";

function Home() {
  return (
    <React.Fragment>
      <div className="flex flex-row p-10 border rounded-lg">
        <div className="basis-1/2 p-4">
          <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Hello.
          </h1>
          <p className="pt-6">
            I'm Yopi. Experienced software engineer with a strong background
            in developing and maintaining software systems. Skilled in multiple
            programming languages and development tools, with a focus on
            creating efficient and scalable solutions.
          </p>
        </div>
        <div className="basis-1/2 p-4">
          <img src={profile} alt="" width={500} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
