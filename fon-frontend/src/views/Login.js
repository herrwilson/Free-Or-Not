import axios from "axios";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "../assets/css/Login.css";

//import authController from "../controllers/auth"

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();

  // Login the user
  const submitHandler = async (e) => {
    e.preventDefault();
    const user = { username, password };
    const response = await axios.post(
      "http://localhost:3001/api/auth/login",
      user
    );
    setUser(response.data);
    localStorage.setItem("user", JSON.stringify(response.data));
  };

  // Logout the user
  const Logout = () => {
    setUser({});
    setUsername("");
    setPassword("");
    localStorage.clear();
  };

  // Is the user already logged in
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const userFound = JSON.parse(loggedInUser);
      setUser(userFound);
    }
  }, []);

  if (user) {
    return (
      <div>
        {user.name} is logged in
        <button onClick={Logout}>Logout</button>
      </div>
    );
  }

  return (
    <div className="LoginForm">
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          value={username}
          placeholder="Enter a username"
          onChange={({ target }) => setUsername(target.value)}
        />
        <div className="TextBox">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            value={password}
            placeholder="Enter a password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <Button type="submit" value="LOGIN">
          Login
        </Button>
      </form>
    </div>
  );
}

export default SignIn;
