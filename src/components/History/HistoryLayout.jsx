import React, { useState } from 'react';
import {
    AppstoreOutlined,
    ExceptionOutlined,
    DollarCircleOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    DownOutlined,
    UserOutlined,
    DownCircleTwoTone
} from '@ant-design/icons';

import { Layout, Menu, Dropdown, Space, message, Avatar, Tag } from 'antd';
import { Outlet, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './layoutHis.scss';
import { useDispatch, useSelector } from 'react-redux';
import { doLogoutAction } from '../../redux/account/accountSlice';

const { Content, Footer, Sider } = Layout;

const items = [
    // {
    //     label: <Link to='/personal'>Dashboard Personal</Link>,
    //     key: 'dashboard',
    //     icon: <AppstoreOutlined />
    // },
   
    {
        label: <Link to='/personal/history'>Lịch sử đặt hàng</Link>,
        key: 'history',
        icon: <DollarCircleOutlined />
    },
    {
        label: <Link to='/personal/profile'>Thông tin cá nhân</Link>,
        key: 'profile',
        icon: <ExceptionOutlined />
    },
    {
        label: <Link to='/personal/change-pass'>Đổi mật khẩu</Link>,
        key: 'change-pass',
        icon: <ExceptionOutlined />
    },
    

];

const HistoryLayout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [collapsed, setCollapsed] = useState(false);
    const [activeMenu, setActiveMenu] = useState('dashboard');

    const user = useSelector(state => state.account.user);

    //onsole.log("check user his =>>>",user );
  
    const handleLogout = async () => {
        dispatch(doLogoutAction());
        message.success("Đã đăng xuất thành công")
        navigate('/');
    }


    const itemsDropdown = [
        {
            label: <a style={{ cursor: 'pointer' }} onClick={()=>navigate('/')}> Trang chủ</a>,
            key: 'account',
        },
        {
            type: 'divider',
        },
        // {
        //     label: <a style={{ cursor: 'pointer' }}>Quản lý tài khoản</a>,
        //     key: 'account',
        // },
        {
            label: <a
                style={{ cursor: 'pointer' }}
                onClick={() => handleLogout()}
            >Đăng xuất</a>,
            key: 'logout',
        },

    ];

   


    return (
        <Layout
            style={{ minHeight: '100vh' }}
            className="layout-admin"
        >
            <Sider
                width={255}
                theme='light'
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}>
                <div style={{ height: 60, marginTop: 28, textAlign: 'center' }}>
                    
                    <Tag color="geekblue" style={{ fontSize: "14px" }}>
                        Công ty quản lý sản phẩm
                    </Tag>

                </div>
                <Menu
                    defaultSelectedKeys={[activeMenu]}
                    mode="inline"
                    items={items}
                    onClick={(e) => setActiveMenu(e.key)}
                />
            </Sider>

            
            <Layout>
                <div className='history-header'>
                    <span>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed),
                        })}
                    </span>
                    <Dropdown 
                    menu={{ items: itemsDropdown }} 
                    trigger={['click']} 
                    arrow={false} 
                    
                    
                    >
                        <a onClick={(e) => e.preventDefault()} style={{padding:'0 20px'}}>
                            <Avatar size="large" src={user?.avatar} /> {user?.display_name}
                            <Space >
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                    
                </div>
                <Content>
                    <Outlet />
                </Content>

            </Layout>
        
        </Layout>
    );
};

export default HistoryLayout;