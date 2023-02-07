import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  return (
    <React.Fragment>
      <Sidebar />
      <div className="w-4/5"> 
      <Navbar />
        <div className={`bg-content_bg w-full`}>
          <div className={`px-7 content_bg w-full h-96`}>Dashboard</div>
        </div>
      </div>
    </React.Fragment>
  );
}
