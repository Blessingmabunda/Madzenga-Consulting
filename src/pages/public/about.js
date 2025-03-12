import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import globalImage from "./../../assets/about.jpg"; // Import the image
import Footer from "../../components/landingpage/Footer.js"; // Import the Footer component

const AboutUs = () => {
  const [headerColor, setHeaderColor] = useState("orange");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      setHeaderColor(window.scrollY > 50 ? "orange" : "orange");
    });
  }, []);

  useEffect(() => {
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowX = "hidden";

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflowX = "";
      document.documentElement.style.overflowX = "";
    };
  }, [handleScroll]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [sidebarOpen]);

  const scrollToSection = (id) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        setSidebarOpen(false);
      }
    }, 100);
  };

  // Handler for navigation to Home page
  const navigateToHome = (e) => {
    e.preventDefault();
    navigate("/LandingPAge");
    setSidebarOpen(false);
  };

  // Handler for navigation to Projects page
  const navigateToProjects = (e) => {
    e.preventDefault();
    navigate("/projects");
    setSidebarOpen(false);
  };

  return (
    <div className={`page-wrapper ${sidebarOpen ? "sidebar-active" : ""}`}>
      {/* Header Section */}
      <header
        className={`main-header ${sidebarOpen ? "header-shifted" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: headerColor,
          zIndex: 1000,
          padding: "10px 15px",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}>
          Madzenga Consulting
        </div>

        <nav className="desktop-nav">
          <ul className="nav-list">
            <li>
              <a
                href="/LandingPAge"
                onClick={navigateToHome}
                className="nav-link"
                style={{ color: "white" }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/projects"
                onClick={navigateToProjects}
                className="nav-link"
                style={{ color: "white" }}
              >
                Projects
              </a>
            </li>
          </ul>
        </nav>

        <div className="mobile-menu-icon" onClick={toggleSidebar}>
          <div className={`hamburger ${sidebarOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div style={{ display: "flex", justifyContent: "center", padding: "0px", marginTop: "-50px" }}>
          <img
            src={require("./../../assets/logo.png")}
            alt="Logo"
            style={{ height: "60px", width: "60px" }}
          />
        </div>
        <div className="sidebar-close" onClick={toggleSidebar}>
          ✕
        </div>
        <ul className="sidebar-nav-list" style={{ marginTop: "10px" }}>
          <li>
            <a href="/" onClick={navigateToHome} className="sidebar-nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="/projects" onClick={navigateToProjects} className="sidebar-nav-link">
              Projects
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}

      {/* About Us Content */}
      <div 
        className={`page-content ${sidebarOpen ? "content-shifted" : ""}`} 
        style={{ 
          paddingTop: "80px", 
          width: "100vw", 
          overflowX: "hidden",
          backgroundImage: `url(${globalImage})`, // Set the background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div 
          style={{ 
            minHeight: "100vh", 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            padding: "20px",
          }}
        >
          <div 
            style={{ 
              maxWidth: "1200px", 
              width: "100%", 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
              gap: "20px" 
            }}
          >
            {/* Card 1 */}
            <div className="card-animation" style={{ backgroundColor: "white", padding: "20px", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
              <h2 style={{ color: "green", fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>
                About Us
              </h2>
              <p style={{ color: "#4b5563" }}>
                Madzenga Consulting Company is a South African Environmental Consulting firm headquartered in Pretoria. This consulting firm was established in 2018 by Ms. Delani Mathebula.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card-animation" style={{ backgroundColor: "white", padding: "20px", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
              <h2 style={{ color: "green", fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>
                Our Services
              </h2>
              <p style={{ color: "#4b5563" }}>
                We offer specialist consulting services in environmental management, climate change, social facilitation, and public participation.
              </p>
            </div>

            {/* Card 3 */}
            <div className="card-animation" style={{ backgroundColor: "white", padding: "20px", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
              <h2 style={{ color: "green", fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>
                Our Approach
              </h2>
              <p style={{ color: "#4b5563" }}>
                We take pride in our value-added services as we take on advisory roles throughout different phases of our clients’ projects.
              </p>
            </div>

            {/* Card 4 */}
            <div className="card-animation" style={{ backgroundColor: "white", padding: "20px", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
              <h2 style={{ color: "green", fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>
                Our Commitment
              </h2>
              <p style={{ color: "#4b5563" }}>
                Through voluntary international standards embedded in the three pillars of sustainability, we offer services that will take your company beyond compliance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />

      {/* CSS Styles */}
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            overflow-x: hidden;
          }

          body, html {
            width: 100%;
            overflow-x: hidden;
          }

          .page-wrapper {
            position: relative;
            width: 100vw;
            overflow-x: hidden;
          }

          .sidebar-active {
            transition: transform 0.5s ease;
          }

          .content-shifted, .header-shifted {
            transform: translateX(-180px);
            transition: transform 0.5s ease;
          }

          .nav-list {
            display: flex;
            list-style-type: none;
            margin: 0;
            padding: 0;
            gap: 60px;
            align-items: center;
          }

          .nav-link {
            color: white;
            text-decoration: none;
            font-weight: normal;
            font-size: 18px;
            transition: color 0.3s;
          }

          .nav-link:hover {
            color: #FFD700;
          }

          .mobile-menu-icon {
            display: none;
            cursor: pointer;
          }

          .hamburger {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 30px;
            height: 20px;
          }

          .hamburger span {
            display: block;
            height: 3px;
            width: 100%;
            background-color: white;
            border-radius: 3px;
            transition: all 0.3s ease;
          }

          .hamburger.open span:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
          }

          .hamburger.open span:nth-child(2) {
            opacity: 0;
          }

          .hamburger.open span:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
          }

          .mobile-sidebar {
            position: fixed;
            top: 0;
            right: -280px;
            width: 280px;
            height: 100vh;
            background-color: white;
            z-index: 2000;
            padding: 60px 20px 20px;
            transition: right 0.5s ease;
            box-shadow: -5px 0 15px rgba(0,0,0,0.2);
            overflow-y: auto;
          }

          .mobile-sidebar.open {
            right: 0;
          }

          .sidebar-close {
            position: absolute;
            top: 20px;
            right: 20px;
            font-size: 24px;
            color: #333;
            cursor: pointer;
          }

          .sidebar-nav-list {
            list-style-type: none;
            padding: 0;
            margin: 0;
          }

          .sidebar-nav-list li {
            margin-bottom: 20px;
          }

          .sidebar-nav-link {
            color: black;
            text-decoration: none;
            font-size: 18px;
            display: block;
            padding: 10px 0;
            border-bottom: 1px solid rgba(0,0,0,0.1);
          }

          .sidebar-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.5);
            z-index: 1500;
            opacity: 0;
            animation: fadeIn 0.3s forwards;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes slideInFromLeft {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          .card-animation {
            animation: slideInFromLeft 0.5s ease-out forwards;
            opacity: 0;
          }

          .card-animation:nth-child(1) {
            animation-delay: 0.2s;
          }

          .card-animation:nth-child(2) {
            animation-delay: 0.6s;
          }

          .card-animation:nth-child(3) {
            animation-delay: 0.8s;
          }

          .card-animation:nth-child(4) {
            animation-delay: 1.0s;
          }

          @media (max-width: 768px) {
            .desktop-nav {
              display: none;
            }

            .mobile-menu-icon {
              display: block;
            }
          }

          @media (min-width: 769px) {
            .mobile-sidebar, .mobile-menu-icon, .sidebar-overlay {
              display: none !important;
            }

            .content-shifted, .header-shifted {
              transform: none !important;
              opacity: 1 !important;
            }
          }

          .main-header, .page-content {
            will-change: transform;
            transform-style: preserve-3d;
            backface-visibility: hidden;
          }
        `}
      </style>
    </div>
  );
};

export default AboutUs;