import React, { useState } from 'react'
import { Layout, Menu, theme } from "antd";
import items from './Items';
import { Outlet, useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import logo from "../assets/icon.png"
import { IoIosNotifications } from "react-icons/io";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const MainLayout = () => {
    // const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo">
                    <h2 className="text-white fs-5 text-center py-3 mb-0">
                        <span className="sm-logo"><img src={logo} alt='s' /></span>
                        <span className="lg-logo">Admin Dashboard</span>
                    </h2>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={[""]}
                    items={items}
                />
            </Sider>
            <Layout className='site-layout'>
                <Header
                    className="d-flex justify-content-between ps-1 pe-5"
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    {React.createElement(
                        collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                        {
                            className: "trigger",
                            onClick: () => setCollapsed(!collapsed),
                        }
                    )}
                    <div className="d-flex gap-4 align-items-center">
                        <div className="position-relative">
                            <IoIosNotifications className="fs-4" />
                            <span className="badge bg-warning rounded-circle p-1 position-absolute">
                                3
                            </span>
                        </div>

                        <div className="d-flex gap-3 align-items-center dropdown">
                            <div>
                                <img
                                    width={32}
                                    height={32}
                                    src="https://robohash.org/hack"
                                    alt=""
                                />
                            </div>
                            <div
                                role="button"
                                id="dropdownMenuLink"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <h5 className="mb-0">Yusuf</h5>
                                <p className="mb-0">yusuf@gmail.com</p>
                            </div>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li>
                                    <a
                                        className="dropdown-item py-1 mb-1"
                                        style={{ height: "auto", lineHeight: "20px" }}
                                        to="/"
                                    >
                                     Profile
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item py-1 mb-1"
                                        style={{ height: "auto", lineHeight: "20px" }}
                                        to="/"
                                    >
                                        Logout
                                    </a>
                                </li>
                            </div>
                        </div>
                    </div>
                </Header>
                <Content
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                    >
                    <ToastContainer
                        position="top-right"
                        autoClose={250}
                        hideProgressBar={false}
                        newestOnTop={true}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        theme="lighdat"
                        
                    />
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}

export default MainLayout