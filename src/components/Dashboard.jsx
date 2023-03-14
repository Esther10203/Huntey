import React from "react";
import BarChart from "./BarChart";
import { Doughnutt } from "./Doughnutt";
// import BarChart from "./BarChart";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import answered from "../assets/answered.png";
import enter from "../assets/enter.png";
import outingg from "../assets/outingg.png";
import money from "../assets/money.png";

export default function Dashboard() {
  const numbers = [
    { value: 1.234, title: "Total Surveys", img: answered },
    { value: 1.234, title: "Total Responses", img: enter },
    { value: 1.234, title: "Pending Surveys", img: outingg },
    { value: 1.234, title: "Money Spent", img: money },
  ];
  return (
    <React.Fragment>
      <Sidebar />
      <div className="82%" style={{width: "80%"}}>
        <Navbar />
        <div className={`bg-content_bg w-full`}>
          <div className={`px-10 pt-6 content_bg w-full`}>
            <div className="flex flex-row w-full">
              <h1 className="font-bold text-2xl">Overall Statistics</h1>
              <button class="bg-button_color hover:bg-icon_color text-white font-normal py-2 px-4 rounded inline-flex items-center absolute right-10">
                <span>Create New Survey</span>
              </button>
            </div>

            <div className="grid grid-cols-4 gap-6 py-4">
              {numbers.map((val, key) => (
                <div className="w-58 bg-white px-4 py-8 rounded-md flex flex-row">
                  <div className="w-3/5">
                    <h1 className="font-bold text-3xl">{val["value"]}</h1>
                    <p className="text-base text-gray-400 mt-2">
                      {val["title"]}
                    </p>
                  </div>
                  <img src={`${val["img"]}`} />
                </div>
              ))}
            </div>

            <div className="flex flex-row w-full ">
              <div class="w-1/2 mr-4 bg-white p-4">
                <h1 className="text-base font-bold">Recent Responses</h1>
                <BarChart />
              </div>
              <div class="w-1/2 bg-white p-4">
                <h1 className="text-base font-bold">Respondents Location</h1>
                <Doughnutt />
              </div>
              {/* Dashboard */}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
