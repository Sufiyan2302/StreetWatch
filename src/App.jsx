import React from "react";
import Home from "./Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Createreportform from "./Createreportform";
import Recentreport from "./Recentreport";
import Adminlogin from "./Adminlogin";

const App = () => {
  return (
    <div>
      <h1 className="app-logo">StreetWatch</h1>

      <div>
        <Routes>
          <Route path="/" element={<Home> </Home>}></Route>
          <Route path="/FormDetails" element={<Createreportform />}></Route>
          <Route path="/RecentReport" element={<Recentreport />}></Route>
          <Route path="/admin" element={<Adminlogin />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
