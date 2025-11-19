import React, { useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import Research from "./components/Research";
import People from "./components/People";
import Publications from "./components/Publications";
import News from "./components/News";
import Contact from "./components/Contact";
import Login from "./components/Login";
import SiteNavbar from "./components/SiteNavbar";

function Layout() {
  const location = useLocation();
  const navRef = useRef(null);

  // treat / or /index.html as home
  const isHome =
    location.pathname === "/" || location.pathname === "/index.html";

  useEffect(() => {
    const adjust = () => {
      if (!navRef.current) return;
      if (isHome) {
        // bar at bottom
        document.body.style.paddingTop = "0px";
        document.body.style.paddingBottom = `${navRef.current.offsetHeight}px`;
      } else {
        // bar at top
        document.body.style.paddingBottom = "0px";
        document.body.style.paddingTop = `${navRef.current.offsetHeight}px`;
      }
    };
    adjust();
    window.addEventListener("resize", adjust);
    return () => window.removeEventListener("resize", adjust);
  }, [isHome]);

  return (
    <div
      className="d-flex flex-column min-vh-100"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* top on non-home, bottom on home */}
      <SiteNavbar ref={navRef} place={isHome ? "bottom" : "top"} />

      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/research" element={<Research />} />
          <Route path="/people" element={<People />} />
          <Route path="/current-members" element={<People />} />
          <Route path="/alumni" element={<People />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
