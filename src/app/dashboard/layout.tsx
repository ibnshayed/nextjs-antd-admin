"use client";

import SidebarOne from "@/components/sidebars/SidebarOne";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Layout, theme } from "antd";
import { Footer } from "antd/es/layout/layout";
import React, { useState } from "react";

const { Header, Content } = Layout;

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <SidebarOne open={collapsed} setOpen={setCollapsed} />
      <Layout className="h-screen overflow-y-auto">
        <Header
          // style={{ background: colorBgContainer }}
          className="sticky top-0 z-10 flex justify-between items-center !pl-2 !pr-4 !bg-white"
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            // style={{
            //   fontSize: "16px",
            //   width: 50,
            //   height: 50,
            // }}
            className="!w-10 !h-10 !text-lg"
          />
          <Avatar icon={<UserOutlined />} size={40} />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Copyrights ©{new Date().getFullYear()} Created by Emran Ibn Shayed
        </Footer>
      </Layout>
    </Layout>
  );
}
