import React, { useEffect, useRef, useState } from "react";
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
import Register from "./components/Register";

function Layout() {
  const location = useLocation();
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  // treat / or /index.html as home
  const isHome =
    location.pathname === "/" || location.pathname === "/index.html";

  useEffect(() => {
    const updateNavHeight = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.offsetHeight || 0);
      }
    };
    updateNavHeight();
    window.addEventListener("resize", updateNavHeight);
    return () => window.removeEventListener("resize", updateNavHeight);
  }, []);

  const mainStyle = isHome
    ? {
        paddingBottom: navHeight,
        minHeight: `calc(100vh - ${navHeight}px)`,
      }
    : {
        paddingTop: navHeight,
        minHeight: `calc(100vh - ${navHeight}px)`,
      };

  return (
    <div
      className="d-flex flex-column"
      style={{ minHeight: "100vh", fontFamily: "Inter, sans-serif" }}
    >
      {/* top on non-home, bottom on home */}
      <SiteNavbar ref={navRef} place={isHome ? "bottom" : "top"} />

      <main className="flex-grow-1" style={mainStyle}>
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
          <Route path="/register" element={<Register />} />
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
