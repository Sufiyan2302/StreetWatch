import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Createreportform from "./Createreportform";

const Home = () => {
  let data = useLocation();

  let navigate = useNavigate();
  let reportnavigate = useNavigate();
  let fillform = () => {
    navigate("/FormDetails", {
      state: {
        login: data.login,
        admindata: data.admin,
      },
    });
  };

  let recentform = () => {
    reportnavigate("/RecentReport", {
      state: {
        login: data.state.login,
        admindata: data.state.admindata,
      },
    });
  };

  return (
    
    <div>
      <NavLink
        to={"/admin"}
        style={{
          color: " #fb923c",
        }}
      >
        Admin
      </NavLink>
      <div className="HomeContainer">
        <button onClick={fillform}>Create Report</button>
        <button onClick={recentform}>Recent Report</button>
      </div>
    </div>
  );
};

export default Home;
