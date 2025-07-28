import React from "react";
import "../assets/css/whiteNav.css";
import logo from "../assets/images/logo-blue.svg";
import callIcon from "../assets/images/callicon-black.svg";
import blackDropIcon from "../assets/images/blackdropIcon.svg";
import { Link, useNavigate } from "react-router-dom";
import indiaIcon from "../assets/images/india-flag-icon.svg";
import { DownOutlined } from "@ant-design/icons";

import { Dropdown, Space, Modal } from "antd";
import ContactPop from "./ContactPop.jsx";

const WhiteNav = () => {
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
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const navigate = useNavigate();
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleGetInTouchClick = () => {
    navigate("/contactus");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light over-flow-hidden">
        <div className="container-fluid">
          <a className="navbar-brand nav-img me-auto me-lg-none " href="/">
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
            <ul className="navbar-nav me-auto ">
              <li className="nav-item ">
                <a
                  className="nav-link hover-styles active text-black  text-lg-center text-start albert-sans "
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link hover-styles active text-black text-lg-center  text-start albert-sans"
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
                    className="nav-link hover-styles product-text-black product-text-styles text-lg-center text-start albert-sans "
                  >
                    <Space>
                      Products <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link hover-styles active text-black  text-lg-center  text-start albert-sans "
                  href="/saltDesign"
                >
                  Salt work Design
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link hover-styles active text-black  text-lg-center  text-start albert-sans "
                  href="/trading"
                >
                  Trading
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link hover-styles active text-black  text-lg-center  text-start albert-sans "
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
                    className="nav-link hover-styles text-white product-text-styles text-lg-center text-start albert-sans font-size"
                  >
                    <Space>
                      Our Expertise <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </li>
            </ul>
            <a className="navbar-brand nav-img2 me-auto me-lg-none " href="/">
              <img src={logo} alt="Brand Logo" />
            </a>

            <div className=" d-lg-flex align-items-start align-items-lg-center ">
              <div className="dropdown pe-3">
                <button
                  type="submit"
                  className="language-dds text-black px-md-4 px-4 py-md-2 py-2  my-3 albert-sans "
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
              <div className="contact-calls pe-3">
                <img src={callIcon} alt="Call Icon" className="me-2" />
                <Link to="tel:9003099999" className="callsStyle  albert-sans ">
                  +91 90030 99999
                </Link>
              </div>
              <button
                className="get-touch-btns px-md-3 px-3 py-md-2 py-2 my-lg-0 my-3 fw-semibold albert-sans"
                onClick={handleGetInTouchClick}
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={1000}
        centered
      >
        <ContactPop />
      </Modal>
    </>
  );
};

export default WhiteNav;
