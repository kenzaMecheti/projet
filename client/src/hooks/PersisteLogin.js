import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { Appcontext } from "../App";
import Login from "../pages/Login";

import axios from "axios";

function PersisteLogin() {
  const { token, setToken } = useContext(Appcontext);
  useEffect(() => {
    const verifyRefreshToken = () => {
      axios
        .get("http://localhost:5000/guest/refresh", { withCredentials: true })
        .then((res) => {
          setToken(res?.data?.accesToken);
        })
        .catch((err) => console.log("err"));
    };
    if (!token) verifyRefreshToken();
  }, [token]);

  return token ? <Outlet /> : <Login />;
}

export default PersisteLogin;
