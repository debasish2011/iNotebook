import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
require("dotenv").config({ path: "../../.env"});

const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let history = useNavigate();
  const handleClickSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    let url = `${process.env.applink}/api/auth/createuser` || "http://localhost:5000/api/auth/createuser"
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.authToken);
      history("/");
    } else {
      alert("Invalid Credentails!!!");
    }
  };
  const handleOnChanege = (e) => {
    setCredentials({ ...credentials, [e.target.id]: e.target.value });
  };
  return (
    <div className="container my-3">
      <form onSubmit={handleClickSignup}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={credentials.name}
            onChange={handleOnChanege}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            value={credentials.email}
            onChange={handleOnChanege}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={credentials.password}
            onChange={handleOnChanege}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            value={credentials.cpassword}
            onChange={handleOnChanege}
            required
            minLength={5}
          />
          <div>
            <p
              className={
                credentials.password === credentials.cpassword
                  ? "invisible"
                  : ""
              }
            >
              Passwords do not match.
            </p>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
