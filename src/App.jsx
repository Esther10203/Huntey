import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Dashboard from "./components/Dashboard";
import ViewAllSurveys from "./components/ViewAllSurveys";
import NewSurvey from "./components/NewSurvey";
import Payment from "./components/Payment";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Surveyors from "./components/Surveyors";

function App() {
  return (
    <React.Fragment>
      <div className="App flex grid-cols-12">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/surveys" element={<ViewAllSurveys />} />
              <Route path="/new_survey" element={<NewSurvey />} />
              <Route path="/surveyors" element={<Surveyors />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/setting" element={<Settings />} />
              <Route path="/surveys" element={<ViewAllSurveys />} />
              <Route path="/register" element={<Register />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
}

export default App;
