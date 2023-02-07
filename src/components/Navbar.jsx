import React from "react";
import menu from "../assets/menu.png";

export default function Navbar() {
   return (
     <div className={`px-7 py-6 text-2xl font-semibold my-1 flex gap-x-4 items-center`}>
       <img
         src={menu}
         className={`cursor-pointer`}
       //   onClick={() => setOpen(!open)}
       />
       <h1 className="text-md font-bold">Dashboard</h1>
     </div>
   );
 }
