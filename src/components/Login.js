import React, { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", form);
    alert("Login submitted! (Implement authentication here)");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        position: "fixed", // fill entire viewport
        inset: 0, // top:0, right:0, bottom:0, left:0
        backgroundColor: "#E9E3DF",
        zIndex: 0,
        marginTop: "70px",
      }}
    >
      <div
        className="card border-0 shadow-xs p-4 rounded-4"
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "#ffffff",
          color: "#143D6D", // navy text
        }}
      >
        <h3
          className="text-center mb-4 fw-bold text-navy"
          style={{ marginBottom: "1.5rem" }}
        >
          Lab Portal Login
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold text-navy">
              Email address
            </label>
            <input
              type="email"
              className="form-control clean"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="password"
              className="form-label fw-semibold text-navy"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control clean"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg w-100 btn-navy"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-3">
          <a href="/register" className="text-decoration-none text-navy">
            Create an account
          </a>
        </div>
      </div>

      {/* Reuse same palette + utility classes as ContactPage */}
      <style>{`
        :root {
          --navy: #143D6D;         /* deep blue for text/buttons */
          --accent-blue: #1CC0F0;  /* bright accent blue */
          --card-bg: #ffffff;
          --muted: #6b7280;
        }

        .text-navy { 
          color: var(--navy) !important; 
        }

        .shadow-xs { 
          box-shadow: 0 4px 18px rgba(0,0,0,.06); 
        }

        /* Inputs — same style as contact form */
        .form-control.clean {
          border-radius: .6rem;
          border: 1px solid #e5e7eb;
          padding: .8rem 1rem;
          background: #fff;
          color: var(--navy);
        }
        .form-control.clean:focus {
          border-color: var(--navy);
          box-shadow: 0 0 0 .2rem rgba(20,61,109,.12);
        }

        /* Button — same navy style */
        .btn-navy {
          background: var(--navy);
          border: none;
          border-radius: .8rem;
          padding: .9rem 1.1rem;
        }
        .btn-navy:hover { 
          filter: brightness(.98); 
        }
        .btn-navy:active { 
          transform: translateY(1px); 
        }
      `}</style>
    </div>
  );
}
