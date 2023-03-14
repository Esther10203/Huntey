import { useState } from "react";
import logo from "../assets/logo.png";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import home from "../assets/home.png";
import list from "../assets/list.png";
import eye from "../assets/eye.png";
import pen from "../assets/pen.png";
import user from "../assets/user.png";
import payment from "../assets/payment.png";
import profile from "../assets/profile.png";
import settings from "../assets/settings.png";
import logout from "../assets/logout.png";

function Sidebar() {
  const [open, setOpen] = useState(true);
  const activeLink = "bg-link_bg";
  const Menus = [
    { title: "Dashboard", src: home, url: "dashboard" },
    { title: "Surveys", src: list, url: "surveys", icon: true },
    { title: "View All", src: eye, url: "surveys", space: true },
    { title: "Create New ", src: pen, url: "new_survey", space: true },
    { title: "Surveyors", src: user, url: "surveyors", icon: true },
    { title: "View All", src: eye, url: "surveyors", space: true },
    { title: "Payment ", src: payment, url: "payment" },
    { title: "Profile ", src: profile, url: "profile" },
    { title: "Settings", src: settings, url: "setting" },
    { title: "Log Out", src: logout, gap: true, url: "logout" },
  ];
  return (
        <div
          className={`${
            open ? "" : " w-28"
          } duration-300 h-screen px-9 py-7 bg-bg_dark text-white_color`} style={{width: "20%"}} 
        >
          <div className={`flex gap-x-4 items-center`}>
            <img src={logo} className={`cursor-pointer duration-500 mt-1 w-13 ${open && 'rotate-[360deg]'}`} />
          </div>

          <div className="pt-6">
            <ul>
              {Menus.map((menu, index) => (
                <NavLink
                  to={`../${menu.url}`}
                  key={index}
                  className={`hover:bg-link_bg text-lg text-gray-400 rounded-md flex items-center gap-x-4 cursor-pointer p-2 mt-2 ${
                    menu.gap && !open ? "mt-12" : ""
                  } ${index === 0 && "bg-link_bg"} ${
                    menu.space ? "ml-10" : ""
                  }`}
                >
                  <img src={`${menu.src}`} />
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    {menu.title}
                  </span>{" "}
                  {menu.icon && open && <img src={`./src/assets/arrow.png`} />}{" "}
                </NavLink>
              ))}
            </ul>
          </div>
        </div>
  );
}

export default Sidebar;
