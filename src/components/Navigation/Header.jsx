import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className="w-full">
      <div className="flex items-center justify-between border-b-2 h-16 px-4 md:px-20">
        <h1 className="font-semibold text-xl">
          <Link to={"/"}>Where in the world?</Link>
        </h1>
        <div
          className="theme flex items-center gap-3 cursor-pointer"
          onClick={() => {
            document.body.classList.toggle("dark");
            setIsDark(!isDark);
          }}
        >
          <i class={`fa-solid fa-${isDark ? "sun" : "moon"}`}></i>
          {/* <p>Dark mode</p> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
