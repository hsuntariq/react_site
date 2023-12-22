import React, { useRef } from 'react'
import { CiCamera } from "react-icons/ci";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { RiArrowDropDownLine, RiArrowDropRightLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

import './nav.css'
import { Link, useLocation } from 'react-router-dom';
const Navbar = () => {
    const location = useLocation()
    console.log(location.pathname)
    const list = useRef();
    const ShowList = () => {
        list.current.style.transform = 'translateX(0)'
    }
    const closeList = () => {
        list.current.style.transform = 'translateX(100%)'
    }


    return (
        <>
            <div className="nv d-flex justify-content-between align-items-center px-4 py-2">
                <div className="brand d-flex align-items-center">
                    <CiCamera size={50} color='green' className='camera' />
                    <h1>PhotoFolio</h1>
                </div>
                <div className="items ">
                    <ul ref={list} className='menu d-flex justify-content-center align-items-center list-unstyled text-uppercase d-flex gap-4 p-0 m-0 '>
                        <li className={`${location.pathname === '/' ? 'active' : ''}`}>
                            <Link to={`/`} className='nav-link'>
                                Home
                            </Link>
                        </li>
                        <li className={`${location.pathname == '/about' ? 'active' : ''}`}>
                            <Link to="/about" className='nav-link' >
                                About
                            </Link>
                        </li>
                        <li className='d-flex align-items-center flex-column sub-parent '>
                            <div className="parent">gallery <RiArrowDropDownLine size={30} /></div>
                            <ul className='sub'>
                                <li className=''>Nature</li>
                                <li className=''>People</li>
                                <li className=''>Architecture</li>
                                <li className=''>Animals</li>
                                <li className=''>Sports</li>
                                <li className=''>Travel</li>
                                <li className='d-flex align-items-center  sub-parent2 '>
                                    <div className="parent2 align-items-center d-flex">Sub menu <RiArrowDropRightLine size={30} /></div>
                                    <ul className='sub2'>
                                        <li className={`${location.pathname == ''}`}>Nature</li>
                                        <li className={`${location.pathname == ''}`}>People</li>
                                        <li className={`${location.pathname == ''}`}>Architecture</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className={`${location.pathname == ''}`}>services</li>
                        <li className={`${location.pathname == ''}`}>contact</li>
                        <IoMdClose onClick={closeList} size={20} className='close' />
                    </ul>
                </div>
                <div className="social d-flex gap-3">
                    <FaTwitter className='s-icon' size={20} />
                    <FaFacebook className='s-icon' size={20} />
                    <FaInstagram className='s-icon' size={20} />
                    <FaLinkedin className='s-icon' size={20} />
                </div>
                <RxHamburgerMenu onClick={ShowList} className='hamburger' cursor='pointer' size={20} />
            </div>
        </>
    )
}

export default Navbar