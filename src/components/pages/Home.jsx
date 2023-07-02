import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login/authentication logic with username and password
    // You can use the entered username and password in this function
  };

  return (
    <div className="home">
      <h1>Welcome to the Quiz App!</h1>
      <p>Test your knowledge with our fun quizzes.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <Link to="/play">Start Quiz</Link>
    </div>
  );
};



export default Home;