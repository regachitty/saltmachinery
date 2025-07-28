import React from "react";
import "../assets/css/navbar.css";
import logo from "../assets/images/logo.svg";
import logoBlue from "../assets/images/logo-blue.svg";

import callIcon from "../assets/images/call-icon.svg";
import blackDropIcon from "../assets/images/blackdropIcon.svg";
import { Link } from "react-router-dom";
import indiaIcon from "../assets/images/india-flag-icon.svg";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const Navbar = () => {
  const productsMenu = (
    <div className="custom-dropdown">
      <a className="menu-text-style" href="/refineryPage">
        Mechanical Salt Refinery
      </a>
      <a className="menu-text-style" href="/purvaccumSalt">
        Pure Vacuum Dried Salt Plant
      </a>
      <a className="menu-text-style" href="/saltWasheryPlant">
        Salt Washery Plant
      </a>
      <a className="menu-text-style" href="/saltIodization">
        Salt Iodization Plant
      </a>
      <a className="menu-text-style" href="/pharmaSaltPlant">
        Pharma Salt Plant
      </a>

      <div className="submenu-wrapper">
        <div className="menu-text-style submenu-title">
          Industrial Salt Plant
        </div>
        <div className="submenu-content">
          <a className="menu-text-style" href="/chlorAlkali">
            Chlor Alkali
          </a>
          <a className="menu-text-style" href="/oilAndGas">
            Oil and Gas
          </a>
        </div>
      </div>
    </div>
  );

  // OUR EXPERTISE dropdown
  const expertiseMenu = (
    <div className="custom-dropdown">
      <a className="menu-text-style" href="/ourExpertise">
        Plug In And Go
      </a>
      <a className="menu-text-style" href="/esg">
        ESG (Sustainability)
      </a>
    </div>
  );

  return (
    <>
      <nav className="navbar navbar-sticky navbar-expand-lg navbar-light over-flow-hidden">
        <div className="container-fluid">
          <a className="navbar-brand nav-img me-auto me-lg-none" href="#home">
            <img src={logo} alt="Brand Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a
                  className="nav-link hover-style active text-white text-lg-center text-start albert-sans font-size"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link hover-style active text-white text-lg-center text-start albert-sans font-size"
                  href="/aboutus"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item dropdown-container">
                <Dropdown
                  overlay={productsMenu}
                  trigger={["hover"]}
                  overlayClassName="dropdown-menu-custom"
                >
                  <a
                    onClick={(e) => e.preventDefault()}
                    className="nav-link hover-style text-white product-text-style text-lg-center text-start albert-sans font-size"
                  >
                    <Space>
                      Products <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link hover-style active text-white text-lg-center text-start albert-sans font-size"
                  href="/saltDesign"
                >
                  Salt work Design
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link hover-style active text-white text-lg-center text-start albert-sans font-size"
                  href="/trading"
                >
                  Trading
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link hover-style active text-white text-lg-center text-start albert-sans font-size"
                  href="/blogs"
                >
                  Blogs
                </a>
              </li>
              <li className="nav-item dropdown-container">
                <Dropdown
                  overlay={expertiseMenu}
                  trigger={["hover"]}
                  overlayClassName="dropdown-menu-custom"
                >
                  <a
                    onClick={(e) => e.preventDefault()}
                    className="nav-link hover-style text-white product-text-style text-lg-center text-start albert-sans font-size"
                  >
                    <Space>
                      Our Expertise <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </li>
            </ul>
            <a
              className="navbar-brand nav-img2 me-auto me-lg-none"
              href="#home"
            >
              <img src={logo} alt="Brand Logo" />
            </a>
            <div className="d-lg-flex align-items-start align-items-lg-center">
              <div className="dropdown pe-3">
                <button
                  type="submit"
                  className="language-dd text-black px-md-4 px-4 py-md-2 py-2 my-3 albert-sans font-size"
                >
                  <i className="icon">
                    <img
                      src={indiaIcon}
                      alt="Indian flag"
                      className="india-flag-icon-style pe-md-2 pe-2 mb-md-1 mb-1 img-fluid"
                    />
                  </i>
                  ENG{" "}
                  <span>
                    <img src={blackDropIcon} className="img-fluid" />
                  </span>
                </button>
              </div>
              <div className="contact-call pe-3">
                <img src={callIcon} alt="Call Icon" className="me-2" />
                <Link to="tel:9003099999" className="callStyle albert-sans">
                  +91 90030 99999
                </Link>
              </div>
              <Link
                to={"/contactUs"}
                className="get-touch-btn px-md-3 px-3 py-md-2 py-2 my-lg-0 my-3 fw-semibold albert-sans font-size"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
