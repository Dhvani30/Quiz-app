import React from "react";
import { Particles } from 'react-tsparticles';
// import { VscHome, VscPlay, VscSettingsGear, VscArrowLeft, VscAccount, VscMenu } from "react-icons/vsc";
import {BrowserRouter as Router,Route, Link, Routes, BrowserRouter} from "react-router-dom";
import Home from "./components/pages/Home";
import Side from "./components/Side";
import Setting from "./components/pages/Setting";
import Play from "./components/pages/Play";
import Score from "./components/pages/Score";
import Design from "./Design";


function App() {
  return (
    <div className="w-full h-screen bg-gray-800 bg-no-repeat bg-center relative overflow-hidden">
      <div className="max-w-6x1 mx-auto text-white">
        <BrowserRouter>
          <Side />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/play" element={<Play />} />
              <Route path="/settings" element={<Setting />} />
              <Route path="/score" element={<Score />} />
            </Routes>
          </div>
        </BrowserRouter>
        <Design />
      </div>
    </div>
  );
}

export default App;
