import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBell } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <section className="flex justify-between text-slate-400">
      <div className="flex items-center gap-3">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-slate-300" />
        <p>Search</p>
      </div>
      <div className="flex items-center gap-5">
        <FontAwesomeIcon icon={faBell} />
        <p>Anjali</p>
        <img
          src="https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="user"
          className="w-8 rounded-full bg-cover"
        />
      </div>
    </section>
  );
}

export default Nav;
