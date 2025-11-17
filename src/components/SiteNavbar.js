// components/SiteNavbar.jsx
import React, { forwardRef } from "react";
import logo from "../images/Lee_lab_banner_TWL.png";

const SiteNavbar = forwardRef(function SiteNavbar({ place = "top" }, ref) {
  // place: "top" | "bottom"
  const atTop = place === "top";

  return (
    <nav
      ref={ref}
      className="navbar navbar-expand-lg navbar-dark py-2 position-fixed w-100"
      style={{
        backgroundColor: "#FF7A30",
        zIndex: 1030,
        ...(atTop ? { top: 0 } : { bottom: 0 }),
      }}
    >
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src={logo}
            alt="Lee Lab"
            style={{ height: 44, width: "auto", display: "block" }}
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto" style={{ gap: "1rem" }}>
            {[
              { label: "RESEARCH", href: "/research" },
              { label: "PEOPLE", href: "/people" },
              { label: "PUBLICATIONS", href: "/publications" },
              { label: "LAB NEWS", href: "/news" },
              { label: "CONTACT", href: "/contact" },
              { label: "LOGIN", href: "/login" },
            ].map((item) => (
              <li className="nav-item" key={item.label}>
                <a className="nav-link text-white" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
});

export default SiteNavbar;
