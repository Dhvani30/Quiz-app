import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Side from "./components/Side";
import Setting from "./components/pages/Setting";
import Play from "./components/pages/Play";
import Score from "./components/pages/Score";
import Design from "./Design";
import Image from "./components/pages/Image.jpg"
import Logo from "./components/pages/Logo";
import logo from "./components/pages/logo.jpg"


const App = () => {
  return (
    <div
    className="w-full h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden"
    style={{
      backgroundImage: `url(${Image})`
    }}
    >
      
      <div className="max-w-6x1 mx-auto text-white">
        <Router>
          <Side />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/play" element={<Play />} />
              <Route path="/settings" element={<Setting />} />
              <Route path="/score" element={<Score />} />
              <Route path="/logo" element={<Logo/>}/>
            </Routes>
          </div>
        </Router>
        <Design />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div> 
    </div>
  );
};

export default App;
