import React from "react";

function About() {
  return (
    <>
      <div className="border p-8 rounded-lg">
        <h1 className="text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-1">
          Andika Yopi Prihartomo
        </h1>
        <p className="mb-6">Bekasi, Indonesia</p>
        <p>
          As a software engineer with over 5 years of experience, I have a
          strong background in developing and maintaining software systems. I am
          proficient in multiple programming languages and have experience with
          a variety of development tools and methodologies. I am a strong
          problem-solver and enjoy collaborating with others to create efficient
          and effective software solutions. In my current role, I am responsible
          for designing, implementing, and testing web applications using Java
          and Python. I have also contributed to the development of a
          cloud-based data processing platform, and have experience with agile
          methodologies and software testing.
        </p>
      </div>

      <div className="border p-8 mt-6 rounded-lg">
        <h2 className="text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
          Education
        </h2>
        <ul>
          <li>
            <h2 className="font-bold">Master of Computer Science</h2>
            September 2014 - May 2016, Northeastern University, Boston
          </li>
           
          <li>
            <h2 className="font-bold">Bachelor of Software Engineering</h2>
            September 2012 - May 2014, Boston College, Boston
          </li>
        </ul>
      </div>
    </>
  );
}

export default About;
