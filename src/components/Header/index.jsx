import React, { useState } from 'react';
import { FaReact } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi';
import { VscSearchFuzzy } from 'react-icons/vsc';
import {MdOutlineTravelExplore } from 'react-icons/md';
import {IoMdArrowDropdownCircle} from 'react-icons/io'
import { Divider, Badge, Drawer, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { useNavigate } from 'react-router';
import { callLogout } from '../../services/api';
import { doLogoutAction } from '../../redux/account/accountSlice';
import './header.scss';

const Header = () => {
   
    return (
        <>
          <div className="navBarSection">
            <header className="header flex">

                    <div className="logoDiv">
                        <a href="#" className='logo flex'>
                            <h1>
                                <MdOutlineTravelExplore className='icon'/>
                                Travel.
                            </h1>
                        </a>
                    </div>

                    <div className="navBar">
                        <ul className="navList flex">
                            <li className='navItem'>
                                <a href="#" className='navLink'>Trang chủ</a>
                            </li>         
                            <li className='navItem'>
                                <a href="#" className='navLink'>Nơi cư trú</a>
                            </li>         
                            <li className='navItem'>
                                <a href="#" className='navLink'>Tour</a>
                            </li>         
                            <li className='navItem'>
                                <a href="#" className='navLink'>Tin Tức</a>
                            </li>         
                            <li className='navItem'>
                                <a href="#" className='navLink'>Liên hệ</a>
                            </li>         
                        </ul>
                    </div>

                    <div className="toggleNavbar">
                        <IoMdArrowDropdownCircle className='icon'/>
                    </div>

            </header>  
          </div> 
        </>
    )
};

export default Header;
