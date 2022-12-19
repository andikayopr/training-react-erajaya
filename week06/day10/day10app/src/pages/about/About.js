import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDataProfile } from "./redux/action";

function About() {
  const dispacth = useDispatch();
  const about = useSelector((state) => state.about);
  console.log(about);
  //   console.log(about.phone)

  return (
    <>
      <div>About</div>
      <button onClick={() => dispacth(setDataProfile())}>
        Click to Dispatch
      </button>
    </>
  );
}

export default About;
