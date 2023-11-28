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
import { Link, NavLink } from 'react-router-dom';
import ContactPage from '../../pages/contact';
import imgReplace from '../../assets/img6.jpg'

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((state)=> state.account.user)
    const admin = useSelector((state)=> state.account.admin)
    const role = useSelector((state)=> state.account.role)
   
   //console.log('admin >>>',admin);
    const [openModalContact, setOpenModalContact] = useState(false)

    const handleLogout = () => {
        dispatch(doLogoutAction());
        message.success("Đã đăng xuất thành công")
        navigate('/');
    }

    //Dropdown
    const items = [
        {
          label: 
            <label style={{cursor:'pointer'}} onClick={()=>navigate('/login')}> 
               Đăng nhập
            </label>,
             key: 'login',
        },
        // {
        //   label: 
        //     <label style={{cursor:'pointer'}} onClick={()=>navigate('/personal/profile')}> 
        //        Quản lý profile
        //     </label>,
        //      key: 'profile',
        // },
        // {
        //   label: 
        //   <label style={{cursor:'pointer'}} onClick={()=>navigate('/personal/history')}>
        //        Lịch sử đặt hàng
        //     </label>,
        //   key: 'order',
        // },
        // {
        //   label: 
        //   <label style={{cursor:'pointer'}} onClick={()=>handleLogout()}>
        //         Đăng xuất
        // </label>,
        //   key: 'logout',
        // },
    ];


    if(role === 'user'){
        items.unshift({
            label: 
              <label style={{cursor:'pointer'}} onClick={()=>navigate('/personal/profile')}> 
                 Quản lý profile
              </label>,
               key: 'profile',
          },
          {
            label: 
            <label style={{cursor:'pointer'}} onClick={()=>navigate('/personal/history')}>
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
          },)
    }

    if(role === 'admin' || role === 'staff'){
        items.unshift({
            label: 
            <label style={{cursor:'pointer'}} onClick={()=>navigate('/admin')}>
                  Trang quản trị
          </label>,
            key: 'adminPage',
        },
        {
            label: 
              <label style={{cursor:'pointer'}} onClick={()=>navigate('/personal/profile')}> 
                 Quản lý profile
              </label>,
               key: 'profile',
          },
          {
            label: 
            <label style={{cursor:'pointer'}} onClick={()=>navigate('/personal/history')}>
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
        )
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
                            <li className='navItem '>
                                <NavLink to={'/'} className='navLink' activeClassName="active">Trang chủ</NavLink>
                            </li>         
                            <li className='navItem'>
                                <NavLink to={'/room'} className='navLink' activeClassName="active">Room</NavLink>
                            </li>         
                            <li className='navItem'>
                                <NavLink to={'/tour'}  className='navLink' activeClassName="active">Tour</NavLink>
                            </li>         
                            <li className='navItem'>
                                <NavLink to={'/news'} className='navLink' activeClassName="active">Tin Tức</NavLink>
                            </li>         
                            <li className='navItem' onClick={()=>setOpenModalContact(true)}>
                                <a href="#" className='navLink'>Liên hệ</a>
                            </li>         
                        </ul>
                    </div>

                    <div className="toggleNavbar">
                        <Space>
                            <Avatar src={user?.avatar || admin?.avatar ||imgReplace} className='icon'/>
                            <Dropdown
                                menu={{items}}
                                trigger={['click']}
                            >
                                <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                   {user?.display_name || admin?.display_name || "BookingUltimate" }
                                    <DownOutlined />
                                </Space>
                                </a>
                            </Dropdown>
                        </Space>
                    </div>

            </header>  
            <ContactPage
                open = {openModalContact}
                setOpen = {setOpenModalContact}
            />
          </div> 
        </>
    )
};

export default Header;
