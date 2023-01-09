import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Modal(props) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = React.useState(true);
  
  const queryParams = new URLSearchParams(useLocation().search)
  const source = queryParams.get("s")

  useEffect(() => {
    // console.log(source, "source");
    if (!showModal) {
      if (source === "fav") {
        navigate("/favorite");
      } else {
        navigate("/");
      }
    }
  }, [showModal]);

  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none pt-32 mt-5"
            onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-6xl ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-800 outline-none focus:outline-none">
                <div className="relative p-6 flex-auto mt-5">
                  <div className="my-4 text-slate-500 p-6 text-lg leading-relaxed">
                    {props.children}
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-2 border-t border-solid border-slate-700 rounded-b">
                  <button
                    className="btn rounded-full m-4 p-4 h-fit bg-gradient-to-t text-sm from-teal-600 to-cyan-600 text-white font-bold tracking-widest uppercase bg-size-200 bg-pos-0 hover:bg-pos-100"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-80 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
