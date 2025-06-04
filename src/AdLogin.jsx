import React, { useState } from "react";
import styles from "./AdLogin.module.css";
import pancakes from "./assets/logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const AdLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleLogin = () => {
    const usernameInput = document.querySelector("input[placeholder='Username']").value;
    const passwordInput = document.querySelector("input[placeholder='Password']").value;

    if (usernameInput === "admin" && passwordInput === "admin123") {
      setError(""); // clear previous error
      alert("Login successful!");
    } else {
      setError("Incorrect username or password.");
    }
  };

  return (
    <div className={styles.container}>
      <img src={pancakes} alt="USTP Logo" className={styles.logo} />
      <h1 className={styles.title}>USTP MARKET PLACE FOR STUDENTS</h1>
      <h2 className={styles.adminLabel}>Administrator</h2>

      <div className={styles.form}>
        <input
          type="text"
          placeholder="Username"
          className={styles.input}
        />

        <div className={styles.passwordWrapper}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className={styles.input}
          />
          <span onClick={togglePassword} className={styles.eyeIcon}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.links}>
          <a href="#" className={styles.link}>
            Create account
          </a>
          <a href="#" className={styles.link}>
            Forgot Password?
          </a>
        </div>

        <button className={styles.loginButton} onClick={handleLogin}>
          Login
        </button>
      </div>

      <footer className={styles.footer}>© 2025 All Rights Reserved.</footer>
    </div>
  );
};

export default AdLogin;
