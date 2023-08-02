import React from "react";
import { useTheme } from "./ThemeContext";

const Theme = () => {
  const { darkTheme, toggleTheme } = useTheme();

  return (
    <div className="dark-mode-toggle">
      <input
        type="checkbox"
        id="darkModeToggle"
        checked={darkTheme}
        onChange={toggleTheme}
      />
      <label htmlFor="darkModeToggle">Dark Mode</label>
    </div>
  );
};

export default Theme;
