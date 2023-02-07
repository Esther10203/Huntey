import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function NewSurvey() {
  return (
    <React.Fragment>
      <Sidebar />
      <div className="w-4/5">
        <Navbar />
        <div className={`bg-content_bg w-full`}></div>
        <div>NewSurvey</div>
      </div>
    </React.Fragment>
  );
}
