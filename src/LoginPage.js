import React, { useState } from 'react';
import './LoginPage.css'; // Import your styles

function LoginPage() {
  // Use state hooks to manage the input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Stop the browser from refreshing
    console.log('Login attempt with:', { email, password });
    // This is where you'd typically send data to a backend server
  };

  return (
    <div className="login-container">
      <div className="left-panel">
        <header className="logo">
          {/* Note: React uses the image path differently, usually imported or from the public folder */}
          <img src="/Lee lab banner_TWL.jpg" alt="Lee Lab Banner" />
        </header>
        <div className="login-form">
          <h2>WELCOME</h2>
          <p>Please enter your credentials.</p>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // JS to update state on change
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // JS to update state on change
                required
              />
            </div>

            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>

      <div className="right-panel">
        <img src="/christmas lab.jpg" alt="Christmas Decorated Lab" className="lab-photo" />
      </div>
    </div>
  );
}

export default LoginPage;