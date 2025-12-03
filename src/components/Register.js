import React, { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      //   style={{
      //     height: "88vh", // remove scroll
      //     maxHeight: "100vh",
      //     overflow: "hidden", // hides scrollbar,
      //     backgroundColor: "#E9E3DF",
      //   }}
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
          maxWidth: "380px", // smaller width
          backgroundColor: "#ffffff",
          color: "#143D6D",
          padding: "1.5rem", // tighter padding
        }}
      >
        <h3 className="text-center fw-bold mb-3" style={{ fontSize: "1.5rem" }}>
          Create Account
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="fw-semibold" style={{ fontSize: ".9rem" }}>
              Name
            </label>
            <input
              type="text"
              className="form-control clean"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              style={{ padding: ".6rem .8rem" }}
            />
          </div>

          <div className="mb-2">
            <label className="fw-semibold" style={{ fontSize: ".9rem" }}>
              Email address
            </label>
            <input
              type="email"
              className="form-control clean"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              style={{ padding: ".6rem .8rem" }}
            />
          </div>

          <div className="mb-3">
            <label className="fw-semibold" style={{ fontSize: ".9rem" }}>
              Password
            </label>
            <input
              type="password"
              className="form-control clean"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              style={{ padding: ".6rem .8rem" }}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 btn-navy">
            Register
          </button>

          {submitted && (
            <p
              className="text-center mt-2 fw-semibold"
              style={{ fontSize: ".9rem", color: "#143D6D" }}
            >
              Successfully registered!
            </p>
          )}
        </form>

        <div className="text-center mt-2">
          <a href="/login" className="text-decoration-none text-navy">
            Back to Login
          </a>
        </div>
      </div>

      {/* Style kept same as login */}
      <style>{`
        .btn-navy {
          background: #143D6D;
          border: none;
          border-radius: .8rem;
          padding: .75rem 1rem;
        }
        .btn-navy:hover {
          filter: brightness(.98);
        }
        .form-control.clean {
          border-radius: .6rem;
          border: 1px solid #e5e7eb;
          background: #fff;
          color: #143D6D;
        }
      `}</style>
    </div>
  );
}
