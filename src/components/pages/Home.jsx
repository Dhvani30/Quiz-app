import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "../pages/home.css"

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
    // <div className="flex justify-center items-center h-screen">
      <div className="home">
        <div className="image-holder">
          <div className="image"></div>
        </div>
        <div className="title">Quizapp.in</div>
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

        

        <div className="sign-in-button flex justify-center">
          <button onClick={handleButtonClick}>Sign in</button>
        </div>
      </div>
    // </div>
  );
};

export default Home;
