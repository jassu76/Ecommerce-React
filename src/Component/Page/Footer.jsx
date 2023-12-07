import React from 'react'
import { NavLink } from 'react-router-dom'
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
const Footer = () => {
    return (
        <div>
            <footer className="bg-dark text-white pt-5 pb-3">
                <div className="container">
                    <div className="row">
                        {/* <!-- About Us --> */}
                        <div className="col-md-4">
                            <h5>About Us</h5>
                            <p>Your company description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>

                        {/* <!-- Quick Links --> */}
                        <div className="col-md-4">
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled">
                                <li><NavLink className="text-white text-decoration-none" to="/">Home</NavLink></li>
                                <li><NavLink  className="text-white text-decoration-none"to="/About">About</NavLink></li>
                                <li><NavLink className="text-white text-decoration-none" to="/Product">Products</NavLink></li>
                                <li><NavLink className="text-white text-decoration-none" to="/Contect">Contact</NavLink></li>
                            </ul>
                        </div>

                        {/* <!-- Contact --> */}
                        <div className="col-md-4">
                            <h5>Contact</h5>
                            <p> <IoIosMail /> Email: info@example.com</p>
                            <p> <IoCall />Phone: +1 (123) 456-7890</p>
                        </div>
                    </div>

                    {/* <!-- Social Media Icons --> */}
                    <div className=" mt-4 d-flex  justify-content-center gap-2 fs-4 ">
                        <NavLink to="" className="text-white mr-3"><i >
                            <CiFacebook /></i></NavLink>
                        <NavLink to="" className="text-white mr-3"><i >
                            <FaTwitter />
                        </i></NavLink>
                        <NavLink to="" className="text-white mr-3"><i >
                        <CiLinkedin /></i></NavLink>
                        <NavLink to="" className="text-white"><i >
                        <FaInstagramSquare /></i></NavLink>
                    </div>
                </div>

                {/* <!-- Copyright --> */}
                <div className="text-center mt-4">
                    <p>&copy; 2023 Your Website. All rights reserved.</p>
                </div>
            </footer>

        </div>
    )
}

export default Footer