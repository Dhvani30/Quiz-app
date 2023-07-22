import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Side from "./components/Side";
import Setting from "./components/pages/setting/Setting";
import Play from "./components/pages/play/Play";
import Score from "./components/pages/score/Score";
import Image from "./components/pages/3673457.png";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <div
      className={`w-full h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden ${
        darkTheme ? "dark" : ""
      }`}
      style={{
        backgroundImage: `url(${Image})`
      }}
    >
      <div className="max-w-6x1 mx-auto text-white">
        <Router>
          <Side toggleTheme={toggleTheme} />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/play" element={<Play />} />
              <Route
                path="/settings"
                element={<Setting darkTheme={darkTheme} />}
              />
              <Route path="/score" element={<Score />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
};

export default App;
