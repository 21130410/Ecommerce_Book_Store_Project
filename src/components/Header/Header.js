import React from 'react';
import "./Header.css";
import {Link} from 'react-router-dom';
import Navigationbar from "../Navigationbar/Navigationbar";

const Header = () => {
    return (
        <header className='header text-white'>
            <div className='container'>
                <div className='header-cnt'>
                    <div className='header-cnt-top fs-13 py-2 flex align-center justify-between'>
                        <div className='header-cnt-top-l'>
                            <ul className='flex top-links align-center'>
                                <li>
                                    <Link to="/">WEB BÁN ĐỒNG PHỤC</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='header-cnt-top-r'>
                            <ul className='top-links flex align-center'>
                                <li>
                                    <Link to = "/" className='top-link-itm'>
                    <span className='top-link-itm-ico mx-2'>
                      <i className='fa-solid fa-circle-question'></i>
                    </span>
                                        <span className='top-link-itm-txt'>Hỗ trợ</span>
                                    </Link>
                                </li>
                                <li className='vert-line'></li>
                                <li>
                                    <Link to = "/register">
                                        <span className='top-link-itm-txt'>Đăng kí</span>
                                    </Link>
                                </li>
                                <li className='vert-line'></li>
                                <li>
                                    <Link to = "/login">
                                        <span className='top-link-itm-txt'>Đăng nhập</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='header-cnt-bottom'>
                    </div>
                </div>
            </div>
            <Navigationbar />
        </header>
    )
}

export default Header