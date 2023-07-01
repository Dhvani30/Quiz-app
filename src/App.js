import React from "react";
// import { VscHome, VscPlay, VscSettingsGear, VscArrowLeft, VscAccount, VscMenu } from "react-icons/vsc";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Side from "./components/Side";
import Setting from "./components/pages/Setting";
import Play from "./components/pages/Play";
import Score from "./components/pages/Score";
// import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Side>
        <Routes>
          <Route path="/" element={<Side />} />
          <Route path="/home" element={<Home />} />
          <Route path="/play" element={<Play />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/score" element={<Score/>} />
        </Routes>

      </Side>
    </BrowserRouter>
  );
}

export default App;
