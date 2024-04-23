import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCalendarDays,
  faAngleRight,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  return (
    <section>
      <div className="flex flex-col gap-3 ">
        <p className=" font-semibold text-lg">Dashbord</p>
        <p className=" text-slate-500 text-sm">
          Hellow Anjali checkout happening!
        </p>
        <div className="bg-white h-[120px] p-8 flex shadow shadow-slate-400">
          <div className="flex items-center gap-6 w-1/3 justify-between p-6">
            <div className="flex items-center gap-5">
              <FontAwesomeIcon
                icon={faBriefcase}
                className="text-[65px] text-[#009587]"
              />
              <div>
                <p className="font-bold">{props.job} Jobs</p>
                <p className="text-slate-400">Posted this week</p>
              </div>
            </div>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="text-slate-300 text-xl"
            />
          </div>
          <div className="flex items-center gap-6 w-1/3 justify-between p-6">
            <div className="flex items-center gap-5">
              <FontAwesomeIcon
                icon={faCalendarDays}
                className="text-[65px] text-[#009587]"
              />
              <div>
                <p className="font-bold">{props.event} Events</p>
                <p className="text-slate-400">Posted this week</p>
              </div>
            </div>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="text-slate-300 text-xl"
            />
          </div>
          <div className="flex items-center gap-6 w-1/3 justify-between p-6">
            <div className="flex items-center gap-5">
              <FontAwesomeIcon
                icon={faNewspaper}
                className="text-[65px] text-[#009587]"
              />
              <div>
                <p className="font-bold">{props.article} Articles</p>
                <p className="text-slate-400">Posted this week</p>
              </div>
            </div>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="text-slate-300 text-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
