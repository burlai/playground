import React, { useState } from "react";

const FormWithValidation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are required.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    setError("");

    // Send form data to server
    console.log("Form submitted!", { name, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="form-label me-2 d-block">
        Name:
        <input className="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label className="form-label me-2 d-block">
        Email:
        <input className="form-control" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label className="form-label me-2 d-block">
        Password:
        <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>

      {error && <div className="mt-2 alert alert-danger">{error}</div>}

      <button className="btn btn-primary mt-2" type="submit">Sign Up</button>
    </form>
  );
};

export default FormWithValidation;