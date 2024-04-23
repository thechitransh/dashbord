import React from "react";
import logo from "/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGaugeHigh,
  faEnvelopeOpenText,
  faBriefcase,
  faCalendarDays,
  faBell,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <section className="w-[8%] h-screen shadow-lg shadow-slate-600 bg-white">
      <div className="flex gap-2 items-center font-bold text-slate-500 w-full p-4">
        <img src={logo} alt="logo" className="w-8" />
        <p>FITTLE</p>
      </div>
      <div className="flex flex-col gap-1 justify-center items-center font-bold text-slate-400 w-ful h-[89px] hover:text-[#009587] cursor-pointer">
        <FontAwesomeIcon icon={faGaugeHigh} className="text-xl" />
        <p>Dashbord</p>
      </div>
      <div className="flex flex-col gap-1 justify-center items-center font-bold text-slate-400 w-ful h-[89px] hover:text-[#009587] cursor-pointer">
        <FontAwesomeIcon icon={faEnvelopeOpenText} className="text-xl" />
        <p>My Resume</p>
      </div>
      <div className="flex flex-col gap-1 justify-center items-center font-bold text-slate-400 w-ful h-[89px] hover:text-[#009587] cursor-pointer">
        <FontAwesomeIcon icon={faBriefcase} className="text-xl" />
        <p>Post A Job</p>
      </div>
      <div className="flex flex-col gap-1 justify-center items-center font-bold text-slate-400 w-ful h-[89px] hover:text-[#009587] cursor-pointer">
        <FontAwesomeIcon icon={faEnvelopeOpenText} className="text-xl" />
        <p>Job Offers</p>
      </div>
      <div className="flex flex-col gap-1 justify-center items-center font-bold text-slate-400 w-full h-[89px] hover:text-[#009587] cursor-pointer">
        <FontAwesomeIcon icon={faCalendarDays} className="text-xl" />
        <p>My Events</p>
      </div>
      <div className="flex flex-col gap-1 justify-center items-center font-bold text-slate-400 w-full h-[89px] hover:text-[#009587] cursor-pointer">
        <FontAwesomeIcon icon={faBell} className="text-xl" />
        <p>Notifications</p>
      </div>
      <div className="flex flex-col gap-1 justify-center items-center font-bold text-slate-400  w-full h-[89px] hover:text-[#009587] cursor-pointer">
        <FontAwesomeIcon icon={faGear} className="text-xl" />
        <p>Settings</p>
      </div>
    </section>
  );
}

export default Sidebar;
