import React, { useState } from 'react';
import {
    AppstoreOutlined,
    ExceptionOutlined,
    DollarCircleOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    DownOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Dropdown, Space, message } from 'antd';
import { Outlet, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './layoutHis.scss';
import { useDispatch, useSelector } from 'react-redux';
import { doLogoutAction } from '../../redux/account/accountSlice';

const { Content, Footer, Sider } = Layout;

const items = [
    {
        label: <Link to='/personal'>Dashboard Personal</Link>,
        key: 'dashboard',
        icon: <AppstoreOutlined />
    },
   
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

//fuck

const HistoryLayout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [collapsed, setCollapsed] = useState(false);
    const [activeMenu, setActiveMenu] = useState('dashboard');

    const user = useSelector(state => state.account.user);
  


    const handleLogout = async () => {
        dispatch(doLogoutAction());
        message.success("Đã đăng xuất thành công")
        navigate('/');
    }


    const itemsDropdown = [
        {
            label: <label style={{ cursor: 'pointer' }}>Quản lý tài khoản</label>,
            key: 'account',
        },
        {
            label: <label
                style={{ cursor: 'pointer' }}
                onClick={() => handleLogout()}
            >Đăng xuất</label>,
            key: 'logout',
        },

    ];


    return (
        <Layout
            style={{ minHeight: '100vh' }}
            className="layout-admin"
        >
            <Sider
                theme='light'
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}>
                <div style={{ height: 32, margin: 16, textAlign: 'center' }}>
                    Công ty du lịch Việt Nam
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
                    <Dropdown menu={{ items: itemsDropdown }} trigger={['click']}>
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                Welcome {user?.display_name}
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