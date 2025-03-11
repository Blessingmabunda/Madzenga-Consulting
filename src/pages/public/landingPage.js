import React, { useEffect, useState, useCallback } from "react";
import HeroSection from "../../components/landingpage/HeroSection.js";
import AboutUs from "../../components/landingpage/AboutUs";
import Services from "../../components/landingpage/Services";
import Quality from "../../components/landingpage/QualityAssurance.js";
import ContactUs from "../../components/landingpage/ContactUs";
import Footer from "../../components/landingpage/Footer.js";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [headerColor, setHeaderColor] = useState("green");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSqueezing, setIsSqueezing] = useState(false);

  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      setHeaderColor(window.scrollY > 50 ? "green" : "green");
    });
  }, []);

  const navigate = useNavigate();
  const handleNavigation = (e) => {
    e.preventDefault();
    navigate("/proofreading-services");
  };

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
    if (sidebarOpen) {
      setSidebarOpen(false);
      setIsSqueezing(false);
    } else {
      setIsSqueezing(true);
      setTimeout(() => {
        setSidebarOpen(true);
      }, 1000); // Wait for the content to disappear before opening the sidebar
    }
  };

  useEffect(() => {
    if (sidebarOpen || isSqueezing) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [sidebarOpen, isSqueezing]);

  const scrollToSection = (id) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        setSidebarOpen(false);
        setIsSqueezing(false);
      }
    }, 100);
  };

  return (
    <div className={`page-wrapper ${isSqueezing ? "squeezing" : ""} ${sidebarOpen ? "sidebar-active" : ""}`}>
      {/* Header Section */}
      <header
        className={`main-header ${isSqueezing ? "header-squeezing" : ""} ${sidebarOpen ? "header-shifted" : ""}`}
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
                href="#about-us"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about-us");
                }}
                className="nav-link"
                style={{ color: "white" }}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("services");
                }}
                className="nav-link"
                style={{ color: "white" }}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/proofreading-services"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("proofreading");
                }}
                className="nav-link"
                style={{ color: "white" }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/proofreading-services"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("proofreading");
                }}
                className="nav-link"
                style={{ color: "white" }}
              >
                Quality Assurance
              </a>
            </li>
            <li>
              <a
                href="#"
                className="nav-link-button"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                Get Started
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
            <a href="#about-us" onClick={(e) => { e.preventDefault(); scrollToSection("about-us"); }} className="sidebar-nav-link">
              About Us
            </a>
          </li>
          <li>
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }} className="sidebar-nav-link">
              Services
            </a>
          </li>
          <li>
            <a href="/proofreading-services" onClick={(e) => { e.preventDefault(); scrollToSection("proofreading"); }} className="sidebar-nav-link">
              Projects
            </a>
          </li>
          <li>
            <a href="/proofreading-services" onClick={(e) => { e.preventDefault(); scrollToSection("proofreading"); }} className="sidebar-nav-link">
              Quality Assurance
            </a>
          </li>
          <li>
            <a href="" className="sidebar-nav-button" target="_blank" rel="noopener noreferrer">
              Get Started
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {(sidebarOpen || isSqueezing) && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}

      {/* Page Content */}
      <div
        className={`page-content ${isSqueezing ? "content-squeezing" : ""} ${sidebarOpen ? "content-shifted" : ""}`}
        style={{ paddingTop: "80px", width: "100vw", overflowX: "hidden" }}
      >
        <HeroSection />
        <div id="about-us"><AboutUs /></div>
        <Services />
        <Quality />
        <ContactUs />
        <Footer />
      </div>

      {/* Global Styles */}
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

          .squeezing {
            transition: all 1s ease;
          }

          .content-squeezing, .header-squeezing {
            opacity: 0;
            transform: scale(0);
            transition: all 2s ease;
            transform-origin: center center;
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

          .nav-link-button {
            color: white;
            background-color: transparent;
            text-decoration: none;
            font-weight: bold;
            font-size: 16px;
            padding: 12px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            display: inline-block;
            text-align: center;
            transition: all 0.3s;
          }

          .nav-link-button:hover {
            background-color: #8A2BE2;
            color: white;
            cursor: pointer;
            box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
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

          .sidebar-nav-button {
            color: #000000;
            background-color: orange;
            text-decoration: none;
            font-weight: bold;
            font-size: 16px;
            padding: 12px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            display: block;
            text-align: center;
            margin-top: 20px;
            transition: all 0.3s;
          }

          .sidebar-nav-button:hover {
            background-color: #8A2BE2;
            color: white;
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

            .content-squeezing, .content-shifted,
            .header-squeezing, .header-shifted {
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

export default LandingPage;