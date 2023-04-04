import React, { useState } from "react";

// Technical interview live coding task from DAC (was made 04.04.2023)

const LoginForm: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [logIn, setLogIn] = useState("");

  const handleSubmit = async (event: any) => {
    event?.preventDefault();

    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      body: JSON.stringify({ userName, password }),
    });

    const responseMessage = await response.json();
    setLogIn(responseMessage.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      {logIn.length > 0 ? <span style={{ color: "red" }}>{logIn}</span> : null}
      <label>
        User name:
        <input
          required
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
