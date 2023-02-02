import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Doors from "./Doors";
import Lights from "./Lights";

function Navbar() {
  return (
      <React.Fragment>
         <section>
            <Routes>
               <Route path="/dashboard" element={<Dashboard />}/>
               <Route path="/lights" element={<Lights />}/>
               <Route path="/doors" element={<Doors />}/>
            </Routes>
         </section>
      </React.Fragment>
  );
}

export default Navbar;
