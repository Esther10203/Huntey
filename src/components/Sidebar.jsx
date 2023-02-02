import { useState } from "react";
// import logo from "../assets/logo.png";
import menu from "../assets/menu.png";
import { NavLink, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Auth/Login";
import NewSurvey from "./NewSurvey";
import ViewAllSurveys from "./ViewAllSurveys";
import Surveyors from "./Surveyors";
import Payment from "./Payment";
import Profile from "./Profile";
import Settings from "./Settings";

function Sidebar() {
  const [open, setOpen] = useState(true);
  const activeLink = 'bg-link_bg';
  const Menus = [
    { title: "Dashboard", src: "home", url: "dashboard" },
    { title: "Surveys", src: "list", url: "surveys", icon: true},
    { title: "View All", src: "eye", url: "surveys", space: true},
    { title: "Create New ", src: "pen", url: "new_survey", space: true },
    { title: "Surveyors", src: "user", url: "surveyors", icon: true },
    { title: "View All", src: "eye", url: "surveyors", space: true },
    { title: "Payment ", src: "payment", url: "payment"},
    { title: "Profile ", src: "profile", url: "profile"},
    { title: "Settings", src: "settings", url: "setting" },
    { title: "Log Out", src: "logout", gap: true, url: "logout" },
  ]
  return (
    <div className="App flex grid-cols-12">
      <div className={`${open ? "w-1/5":" w-28"} duration-300 h-screen px-9 py-7 bg-bg_dark text-white_color`}>
        <div className={`flex gap-x-4 items-center`}>
          {/* <img src={logo} className={`cursor-pointer duration-500 mt-1 w-13 h-10 ${open && 'rotate-[360deg]'}`} /> */}
          <h1 className={`text-icon_color text-2xl origin-left font-bold text-right duration-300 ${!open && 'scale-0'}`}>HUNTEY</h1>
        </div>

        <div className="pt-10">
          <ul>
            {Menus.map((menu, index) => (
              <NavLink to={`${menu.url}`} key={index} className={`hover:bg-link_bg text-md rounded-md flex items-center gap-x-4 cursor-pointer p-2 mt-3 ${(menu.gap && !open) ? "mt-12":""} ${index === 0 && 'bg-link_bg'} ${menu.space ? "ml-10": ""}`}>
                <img src={`./src/assets/${menu.src}.png`} /> 
                <span className={`${!open && 'hidden' } origin-left duration-200`}>{menu.title}</span> {menu.icon && open && <img src={`./src/assets/arrow.png`}/>} </NavLink>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-4/5">
         <div className={`px-7 py-6 text-2xl font-semibold my-1 flex gap-x-4 items-center`}>
            <img src={menu} className={`cursor-pointer`} onClick={() => setOpen(!open)} />
            <h1 className="text-md font-bold">Dashboard</h1>
        </div>
        <div className={`bg-content_bg w-full`}>
            <Routes>
               <Route path="/" element={<Login />}/>
               <Route path="/dashboard" element={<Dashboard />}/>
               <Route path="/surveys" element={<ViewAllSurveys />}/>
               <Route path="/new_survey" element={<NewSurvey />}/>
               <Route path="/surveyors" element={<Surveyors />}/>
               <Route path="/payment" element={<Payment />}/>
               <Route path="/profile" element={<Profile />}/>
               <Route path="/setting" element={<Settings />}/>
            </Routes>
         </div>
      </div>
    </div>
  );
}

export default Sidebar;
