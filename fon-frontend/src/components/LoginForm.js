import React, { useState } from "react";
import authController from "../controllers/auth";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ username: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    (async () => {
      const result = await authController.logIn(
        details.username,
        details.password
      );
      if (result.status === 200) {
        Login(details);
      } else {
        alert(result.response.data.error);
      }
    })();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>
        {error !== "" ? <div className="error">{error}</div> : ""}
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            name="username"
            id="username"
            onChange={(e) =>
              setDetails({ ...details, username: e.target.value })
            }
            value={details.name}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <input type="submit" value="LOGIN" />
      </div>
    </form>
  );
}

export default LoginForm;
