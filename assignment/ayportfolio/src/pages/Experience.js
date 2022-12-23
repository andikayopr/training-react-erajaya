import React from "react";
import Navbar from "../components/Navbar";

function Experience() {
  return (
    <>
      <div className="flex flex-col p-8 border rounded-lg mb-4">
        <h1 className="text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Software Engineer ABC Corporation June 2020 - Present</h1>
        <ul>
          <li>
            - Developed and maintained web applications using languages such as
            Java and Python
          </li>
          <li>
            - Collaborated with other engineers and project managers to design
            and implement software solutions
          </li>
          <li>
            - Conducted testing and debugging to ensure the quality and
            reliability of software systems
          </li>
        </ul>
      </div>
      <div className="flex flex-col p-8 border rounded-lg mb-4">
        <h1 className="text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Software Engineer XYZ Inc. January 2018 - May 2020</h1>
        <ul>
          <li> - Worked on a team to develop and maintain a large-scale e-commerce
            platform
          </li>
          <li> - Used agile methodologies to plan and execute software development
            projects
          </li>
          <li> - Contributed to the design and implementation of new features and
            enhancements
          </li>
        </ul>
      </div>
    </>
  );
}

export default Experience;
