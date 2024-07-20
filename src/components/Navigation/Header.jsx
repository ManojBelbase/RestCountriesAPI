import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDarkMode"))
  );
  if (isDark) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  // console.log(JSON.parse(localStorage.getItem("isDarkMode")));
  localStorage.getItem("isDarkMode");
  return (
    <div className="max-w-full top-0 fist w-full">
      <div className=" w-full flex items-center justify-between border-b-2 h-16 px-4 md:px-20">
        <h1 className="font-semibold text-xl">
          <Link to={"/"}>Where in the world?</Link>
        </h1>
        <div
          className="theme flex items-center gap-3 cursor-pointer"
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("isDarkMode", !isDark);
          }}
        >
          <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`}></i>
          <p>{isDark ? "Light" : "Dark"} mode</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
