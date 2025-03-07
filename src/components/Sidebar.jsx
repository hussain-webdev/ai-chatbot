import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Context } from "../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt =async (prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <div className="sidebar bg-[#181818] transition duration-300 ease-in-out min-h-screen inline-flex flex-col py-6 px-3 justify-between ">
      <div className="top">
        <img
          onClick={() => setExtended(!extended)}
          className="menu invert block cursor-pointer w-5 ml-2.5"
          src={assets.menu_icon}
          alt=""
        />
        <div onClick={()=>newChat()} className="new-chat mt-12 text-sm cursor-pointer inline-flex items-center gap-2 px-4 py-3 bg-[#303030] rounded-full">
          <img className="w-5 invert" src={assets.plus_icon} alt="" />
          {extended ? <p>New chat</p> : null}
        </div>
        {extended ? (
          <div className="recent flex flex-col gap-3">
            <p className="recent-title mt-7 mb-5">Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <div key={index} onClick={()=>loadPrompt(item)} className="recent-entry flex items-center gap-2.5 p-2.5 pr-10 rounded-full bg-[#303030] cursor-pointer">
                  <img
                    className="w-5 invert"
                    src={assets.message_icon}
                    alt=""
                  />
                  <p>{item.slice(0,12)}...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom flex flex-col gap-3">
        <div className="bottom-item flex items-center gap-2.5 p-2.5 cursor-pointer">
          <img className="w-5 invert" src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item flex items-center gap-2.5 p-2.5 cursor-pointer">
          <img className="w-5 invert" src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item flex items-center gap-2.5 p-2.5 cursor-pointer">
          <img className="w-5 invert" src={assets.setting_icon} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
