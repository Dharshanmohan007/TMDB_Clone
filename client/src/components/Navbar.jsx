import React, { useEffect, useState } from "react";
import Navlogo from "../assets/navlogo.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { Languages, Plus, Search } from "lucide-react";

export default function Navbar() {
  // states
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [token, setToken] = useState("");

  // useEffect(() => {
  //   if (token !== "") {
  //     setIsLoggedIn(true);
  //   } else {
  //     setIsLoggedIn(false);
  //   }
  // }, [token]);

  const navigate = useNavigate();
  const location = useLocation();

  const navigationMenu = [
    { id: "movies", label: "Movies" },
    { id: "tvshows", label: "TV Shows" },
    { id: "peoples", label: "People" },
  ];

  const leftNavigstionMenu = [
    { id: "login", label: "Login" },
    { id: "signup", label: "Join TMDB" },
  ];
  return (
    <div className="bg-[#032541] w-full flex items-center justify-evenly py-6 gap-100">
      {/* Left Section */}
      <div className="flex items-center gap-8">
        <img
          src={Navlogo}
          alt="Navlogo"
          className="cursor-pointer h-6"
          onClick={() => navigate("/")}
        />

        <div className="flex gap-6">
          {navigationMenu.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => navigate(`/${id}`)}
              className="cursor-pointer text-white"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5 text-white">
        <Plus className="cursor-pointer" />
        <Languages className="cursor-pointer" />
        {/* {leftNavigstionMenu.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => navigate(`/${id}`)}
            className="cursor-pointer text-white"
          >
            {label}
          </button>
        ))} */}

        {isLoggedIn ? (
          <div className="profile-container bg-violet-800 text-white rounded-full w-8 h-8 flex items-center justify-center">
            D
          </div>
        ) : (
          <button className="login-btn">Login</button>
        )}

        <Search className="cursor-pointer" />
      </div>
    </div>
  );
}
