import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import Table from './surveys/Table';


export default function ViewAllSurveys() {
  return (
    <React.Fragment >
      <div className="w-full flex flex-row bg-content_bg">
      {/* <Navbar/> */}
      <Sidebar />
      <div  style={{width: "80%"}}>
        <Navbar />
        <div className={`bg-content_bg w-full`}></div>
        <div className="mt-4 px-4">
          <Table/>
        </div>
      </div>
      </div>

    </React.Fragment>
  );
}
