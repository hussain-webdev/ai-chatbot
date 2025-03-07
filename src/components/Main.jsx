import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Context } from "../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main flex-1 pb-[15vh] min-h-screen relative">
      <nav className="flex items-center justify-between p-5 text-2xl">
        <p>Chatbot</p>
        <img className="w-10 invert" src={assets.user_icon} alt="" />
      </nav>

      <div className="main-container max-w-[900px] m-auto">
        {!showResult ? (
          <>
            <div className="greet leading-14 sm:mx-12 text-[56px] p-5 font-semibold">
              <p>
                <span>Hi there,</span>
              </p>
              <p>What can I help with?</p>
            </div>
            <div className="cards">
              <div className="card h-[200px] p-3 bg-[#383838] rounded-xl relative cursor-pointer">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img
                  className="w-9 absolute invert bottom-2.5 right-2.5"
                  src={assets.compass_icon}
                  alt=""
                />
              </div>
              <div className="card h-[200px] p-3 bg-[#383838] rounded-xl relative cursor-pointer">
                <p>Breifly summarize this concept: urban planning</p>
                <img
                  className="w-9 absolute invert bottom-2.5 right-2.5"
                  src={assets.bulb_icon}
                  alt=""
                />
              </div>
              <div className="card h-[200px] p-3 bg-[#383838] rounded-xl relative cursor-pointer">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img
                  className="w-9 absolute invert bottom-2.5 right-2.5"
                  src={assets.message_icon}
                  alt=""
                />
              </div>
              <div className="card h-[200px] p-3 bg-[#383838] rounded-xl relative cursor-pointer">
                <p>Improve the readability of the following code</p>
                <img
                  className="w-9 absolute invert bottom-2.5 right-2.5"
                  src={assets.code_icon}
                  alt=""
                />
              </div>
            </div>
          </>
        ) : (
          <div className="result px-5 sm:px-0 py-[5%] max-h-[70vh] overflow-y-scroll">
            <div className="result-title my-10 flex items-center gap-5">
              <img className="invert w-10" src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data flex items-start gap-5">
              <img className="w-10" src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader w-full flex flex-col gap-2.5">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p
                  className="text-lg font-light leading-[1.8]"
                  dangerouslySetInnerHTML={{ __html: resultData }}
                ></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom absolute bottom-0 w-full px-5 max-w-[900px] pt-5 m-auto">
          <div className="search-box relative bg-[#383838] flex items-center justify-between gap-5 rounded-full p-3">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              className="flex-1 bg-transparent border-none outline-none text-lg"
              type="text"
              placeholder="Ask anything"
            />
            <div className="absolute right-3 top-3">
              <img
                onClick={() => onSent()}
                className="w-7 invert cursor-pointer"
                src={assets.send_icon}
                alt=""
              />
            </div>
          </div>
          <p className="text-xs sm:text-sm font-light my-2 mx-auto text-center">
            Chatbot may display inaccurate info, including about people, so
            double-check its responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
