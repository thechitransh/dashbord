import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Main(props) {
  return (
    <section className="flex justify-between">
      <div className="w-full">
        <div className="bg-white">
          <div className="flex justify-between items-center p-2">
            <div className="p-2">
              <p className="py-2">{props.name}</p>
              <div className="flex gap-5 text-slate-400 pb-3">
                <p>{props.time}</p>
                <p>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="px-2 w-[11px]"
                  />
                  {props.location}
                </p>
              </div>
              <div className="flex gap-3 text-slate-400">
                <p className=" rounded-full border w-max px-3">Part time</p>
                <p className=" rounded-full border w-max px-3">Anual Yoga</p>
                <p className=" rounded-full border w-max px-3">Yoga</p>
              </div>
            </div>
            <p>{props.update}</p>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default Main;
