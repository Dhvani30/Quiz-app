import React from "react";

const Setting = ({ darkTheme, toggleTheme }) => {
  return (
    <div className={`settings ${darkTheme ? "dark" : ""}`}>
      <h1>Settings</h1>
      <label>
        Dark Mode:
        <input type="checkbox" checked={darkTheme} onChange={toggleTheme} />
      </label>
    </div>
  );
};

export default Setting;
