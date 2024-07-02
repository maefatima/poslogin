import React, { useState } from "react";
import InputFields from "../../components/fields/InputFields";
import MainButton from "../../components/buttons/PrimaryButton";
import logo from "../../assets/business_logo.png";
import eyeIcon from "../../assets/eye_open.png";
import eyeOffIcon from "../../assets/eye_close.png";
import exitIcon from "../../assets/exitButton.png";
import "./LoginForm.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please fill in both fields");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await axios.post("/api/login", { username, password });
      // Handle successful login (e.g., redirect to dashboard)
      navigate("/TransactionScreen"); // Redirect to dashboard on successful login
    } catch (error) {
      setError("Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  const handleExit = () => {
    navigate("/SetupWizard"); // Redirect to home page or desired route
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="loginform-page">
      <div className="exit-icon-container" onClick={handleExit}>
        <img src={exitIcon} alt="Exit" className="exit-icon" />
        <span className="exit-tooltip">Exit</span>
      </div>
      <div className="login-bname-container">
        <h1>
          <img src={logo} alt="Logo" className="logo-img" />
          Business Name
        </h1>
        <div className="input-container">
          <h2>Retail Login</h2>
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleLogin}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <InputFields
                placeholder="Enter Username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <div className="password-container">
                <InputFields
                  placeholder="Enter Password"
                  type={passwordVisible ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <img
                  src={passwordVisible ? eyeIcon : eyeOffIcon}
                  alt="Toggle Password Visibility"
                  className="toggle-password-icon"
                  onClick={togglePasswordVisibility}
                />
              </div>
            </div>
            <MainButton buttonText="Login" disabled={loading} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
