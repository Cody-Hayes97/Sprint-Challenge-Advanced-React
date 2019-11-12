import React, { useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode";

export const Nav = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <div>
      <h1>Women's World Cup Players</h1>
      <div
        style={{
          marginLeft: "70%"
        }}
        className="dark-mode__toggle"
      >
        <div
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        ></div>
      </div>
    </div>
  );
};
