import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../logo.png"

const Home = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleButtonClick = () => {
    if (username && password) {
      // Both fields are filled, navigate to '/play'
      navigate("/play");
    } else {
      // At least one field is empty, display a prompt
      window.alert("Please fill in all fields.");
    }
  };

  return (
    <div className="home">
      <div className="title">Quizapp.in</div>
      <div className="logo-holder">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
      </div>
      <input
        type="text"
        className="input"
        placeholder="Username"
        value={username}
        onChange={handleUsernameChange}
      />
      <input
        type="password"
        className="input"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <div className="sign-in-button">
        <button onClick={handleButtonClick}>Sign in</button>
      </div>
    </div>
  );
};

export default Home;
