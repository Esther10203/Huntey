import React, { useState } from "react";
import menu from "../assets/menu.png";
import search from "../assets/search_icon.png";
import bell from "../assets/bell.png";
import profile from "../assets/profile_picture.jpeg";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname.substring(1, location.pathname.length);

  const handleSubmit = (e) => e.preventDefault();
  return (
    <div className={`px-7 py-4 font-semibold flex gap-x-4 items-center bg-white`}>
      <div className="flex">
        <img src={menu} className={`cursor-pointer mr-4 `} />
      </div>
      <div className="flex-1">
        <h1 className="text-lg font-bold">{path}</h1>
      </div>
      <div className="flex w-72"></div>
      <form
        className="flex-1 search relative inline-block"
        onSubmit={handleSubmit}
      >
        <input
          className="search__input bg-transparent text-lg  font-medium px-10 w-52 rounded-full"
          type="text"
          id="search example"
          placeholder="Search"
        />
        <img
          className="absolute left-4 top-1"
          src={search}
          style={{ color: "gray", fontSize: 15 }}
        />
      </form>

      <div className="flex ml-5">
        <button className={`cursor-pointer`}>
          <div className="p-2 relative">
            <img src={bell} className="w-5" />
            <div className="w-2 h-2 rounded-full bg-yellow-700 absolute top-2 right-3"></div>
          </div>
        </button>
        <p className="text-sm self-center ml-3">John Smith Doe</p>
        <div className="flex-1 ml-3">
          <img src={profile} className="w-12 h-12 rounded-full" />
        </div>
      </div>
    </div>
  );
}
