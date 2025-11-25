import React, { useEffect, useState } from "react";
import {
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebase.js";
import { useNavigate } from "react-router-dom";

const Adminlogin = () => {
  let redirect = useNavigate();
  let [email, setemail] = useState("");
  let [password, setpass] = useState("");
  let [adminemail, setadmin] = useState(null);
  let [loginstatus, setislogin] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setislogin(true);
        setadmin(user.email);
      } else {
        setislogin(false);
        setadmin(null);
      }
    });
  }, []);

  let login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      redirect("/", {
        state: { login: true, admindata: email },
      });
    } catch (err) {
      console.error(err);
    }
  };

  let logout = async () => {
    try {
      await signOut(auth);
      redirect("/", {
        state: { login: false, admindata: null },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="admin-login">
      {loginstatus ? (
        <div className="admin-box">
          <h1 style={{ color: "#ffedd5" }}>{adminemail}</h1>
          <button onClick={logout}>LogOut</button>
        </div>
      ) : (
        <div className="admin-box">
          <input
            type="email"
            placeholder="Enter your email"
            required
            onChange={(e) => setemail(e.target.value)}
            value={email}
          />

          <input
            type="password"
            placeholder="Enter your password"
            required
            onChange={(e) => setpass(e.target.value)}
            value={password}
          />

          <button onClick={login}>LogIn</button>
        </div>
      )}
    </div>
  );
};

export default Adminlogin;
