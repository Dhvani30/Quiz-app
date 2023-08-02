import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Setting from "./components/pages/setting/Setting";
import Play from "./components/pages/play/Play";
import Score from "./components/pages/score/Score";
import Image from "./components/pages/3673457.png";
import preview from "./components/pages/preview.jpg";
import { ThemeProvider, useTheme } from "./components/ThemeContext"; // Import ThemeProvider and useTheme

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  const backgroundImage = darkTheme
    ? `url(${preview})`
    : `url(${Image})`;

  return (
    <div
      className={`w-full h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden ${
        darkTheme ? "dark-theme" : ""
      }`}
      style={{
        backgroundImage: backgroundImage,
      }}
    >
      <div className="max-w-6x1 mx-auto text-white">
        <Router>
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route
                path="/settings"
                element={<Setting darkTheme={darkTheme} toggleTheme={toggleTheme} />}
              />
              <Route path="/play" element={<Play />} />
              <Route path="/score" element={<Score />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
};

export default App;
