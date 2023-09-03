import React from "react";
import { useRef, useState, useEffect } from "react";
import axios from "../api/axios";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

const LOGIN_URL = "employee/api/token/";

const Login = () => {
  // State and Refs
  const userRef = useRef(); //set focus on input
  const errRef = useRef();
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState(""); //for error that we might get back when we authenticate
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  }, []);

  // Effect to clear error message when user or password changes
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);
 
  const handleSubmit = async (e) => {
    e.preventDefault(); //prevent default which will reload the page
    try {
      const response = await axios.post(LOGIN_URL, {
        username: user,
        password: pwd,
      });

      // If authentication is successful, response will have a valid token
      const token = response.data.access;
      if (token) {
        localStorage.setItem("token", token);
        navigate("/home");
      } else {
        setError("Authentication failed. Please check your credentials.");
      }

      console.log("Response data:", response.data);
    } catch (err) {
      console.error("An error occurred:", err);
    }
  };

  return (
    <>
      <section>
        {/* error message display / aria-live ->screen reader  */}
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          // aria-live="assertive"
        >
          {errMsg}
        </p>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            //makes it a controlled value
            value={user}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
          <button onClick={handleSubmit}>Sign In</button>
        </form>
        <p>
          Need an Account?
          <br />
          <span className="line">
            <Link to="/register">Sign Up</Link>
          </span>
        </p>
      </section>
    </>
  );
};

export default Login;
