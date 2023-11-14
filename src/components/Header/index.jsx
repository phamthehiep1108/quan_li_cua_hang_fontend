import React, { useState } from 'react';
import { FaReact } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi';
import { VscSearchFuzzy } from 'react-icons/vsc';
import {MdOutlineTravelExplore } from 'react-icons/md';
import {IoMdArrowDropdownCircle} from 'react-icons/io'
import { Divider, Badge, Drawer, message, Dropdown, Space, Avatar} from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { doLogoutAction } from '../../redux/account/accountSlice';
import './header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((state)=> state.account.user)
    const role = useSelector((state)=> state.account.role)
   
    console.log(role);

    const handleLogout = () => {
        dispatch(doLogoutAction());
        message.success("Đã đăng xuất thành công")
        navigate('/');
    }

    //Dropdown
    const items = [
        
        {
          label: 
            <label style={{cursor:'pointer'}} onClick={()=>navigate('/profile')}> 
               Quản lý profile
            </label>,
             key: 'profile',
        },
        {
          label: 
          <label style={{cursor:'pointer'}} onClick={()=>navigate('/order')}>
               Lịch sử đặt hàng
            </label>,
          key: 'order',
        },
        {
          label: 
          <label style={{cursor:'pointer'}} onClick={()=>handleLogout()}>
                Đăng xuất
        </label>,
          key: 'logout',
        },
    ];

    if(role === 'admin' || role === 'staff'){
        items.unshift({
            label: 
            <label style={{cursor:'pointer'}} onClick={()=>navigate('/admin')}>
                  Trang quản trị
          </label>,
            key: 'adminPage',
        })
    }
   
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
                        <Space>

                            <Avatar icon={<UserOutlined/>} className='icon'/>
                            <Dropdown
                                menu={{items}}
                                trigger={['click']}
                            >
                                <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    {user?.display_name}
                                    <DownOutlined />
                                </Space>
                                </a>
                            </Dropdown>
                        </Space>
                    </div>

            </header>  
          </div> 
        </>
    )
};

export default Header;
