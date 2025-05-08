import React from 'react'
import "../assets/css/footer.css";
import logoimg from "../assets/images/logo.svg";

const Footer = () => {
    return (
        <>
            <div className="background-cl  overflow-hidden">
                <div className="container-fluid">
                    <div className="footer-section">
                        <div className="row pt-lg-5">
                            <div className="col-lg-12 col-12 mb-1 mt-3 d-flex d-md-none text-start">
                                <img src={logoimg} alt="logo" />
                            </div>
                            <div className="col-lg-12 col-12 mb-1 mt-4 d-flex d-md-none flex-column">
                                <hr className='hr-border-line' />
                            </div>
                            <div className="col-lg-3 col-12  pt-lg-5 pt-lg-5">
                                <h5 className='footer-heading1 text-white albert-sans text-uppercase fw-semibolder pb-lg-2 pb-2'>Factory Address</h5>
                                <ul className="list-unstyled">
                                    <li className="mb-2 albert-sans-400"><a href="/#">356, V.E. Road, Tuticorin- 628002.Tamilnadu, INDIA</a></li>
                                    <li className="mb-2 albert-sans-400"><a href="tel: 90030 99999">+91 90030 99999</a></li>
                                    <li className="mb-2 albert-sans-400"><a href="/#">info@shriramengg.com</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-1 d-flex justify-content-end ">
                                <div className="vertical-line-footer"></div>
                            </div>
                            <div className="col-lg-2 col-6 pt-lg-5">
                                <h5 className='footer-heading1 text-white albert-sans text-uppercase fw-semibolder pb-lg-2 pb-2'>Quick Links</h5>
                                <ul className="list-unstyled ">
                                    <li className="mb-2 albert-sans-400"><a href="/home">Home</a></li>
                                    <li className="mb-2 albert-sans-400"><a href="/news">News</a></li>
                                    <li className="mb-2 albert-sans-400"><a href="/aboutUs">About Us</a></li>
                                    <li className="mb-2 albert-sans-400"><a href="/services">Services</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-1 d-flex justify-content-end ">
                                <div className="vertical-line-footer"></div>
                            </div>
                            <div className="col-lg-2 col-6  pt-lg-5">
                                <h5 className='footer-heading1 text-white albert-sans text-uppercase fw-semibolder pb-lg-2 pb-2'>Social</h5>
                                <ul className="list-unstyled ">
                                    <li className="mb-2 albert-sans-400"><a href="/#">Youtube</a></li>
                                    <li className="mb-2 albert-sans-400"><a href="/#">Facebook</a></li>
                                    <li className="mb-2 albert-sans-400"><a href="/#">LinkedIn</a></li>
                                    <li className="mb-2 albert-sans-400"><a href="/#">Instagram</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-1 d-flex justify-content-end ">
                                <div className="vertical-line-footer"></div>
                            </div>
                            <div className="col-lg-2 col-12  pt-lg-5 pt-2">
                                <h5 className='footer-heading1 text-white albert-sans text-uppercase fw-semibolder pb-lg-2 pb-2'>Useful Links</h5>
                                <ul className="list-unstyled">
                                    <li className="mb-2 albert-sans-400"><a href="/terms">Terms and condition</a></li>
                                    <li className="mb-2 albert-sans-400"><a href="/cookiesPolicy">Cookies Policy</a></li>
                                    <li className="mb-2 albert-sans-400"><a href="/privacy">Privacy Policy</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-12  col-12 mb-3">
                                <hr className='hr-border-line' />
                            </div>
                            <div className="col-lg-12 col-12  mt-lg-2 mt-2 ">
                                <div className="move-text">
                                    {Array(3)
                                        .fill("shriraam.engineering")
                                        .map((items, index1) => (
                                            <h2
                                                key={index1}
                                                className="move-text-style  text-uppercase "
                                            >
                                                {items}
                                            </h2>
                                        ))}
                                </div>
                            </div>
                            <div className="col-lg-12 col-12 mb-5 mt-4 d-flex flex-column flex-md-row justify-content-between align-items-center">
                                <p className="text-white mb-2 mb-md-0 albert-sans-400 ">© 2024 Shriraam Engineering</p>
                                <p className="text-white albert-sans-400">All rights reserved.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Footer;