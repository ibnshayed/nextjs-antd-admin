"use client";

import SidebarOne from "@/components/sidebars/SidebarOne";
import {
  ArrowLeftOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Dropdown, Layout, MenuProps, theme } from "antd";
import { Footer } from "antd/es/layout/layout";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const { Header, Content } = Layout;

const items: MenuProps["items"] = [
  {
    label: <a href="https://www.antgroup.com">Profile</a>,
    key: "0",
  },
  {
    type: "divider",
  },
  {
    label: <a href="https://www.aliyun.com">Log out</a>,
    key: "1",
  },
];

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout hasSider className="h-screen overflow-hidden">
      <SidebarOne open={collapsed} setOpen={setCollapsed} />
      <Layout>
        <Header className="sticky top-0 z-10 flex justify-between items-center !pl-2 !pr-4 !bg-white">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="!w-10 !h-10 !text-lg"
          />

          <Dropdown
            menu={{ items }}
            trigger={["click"]}
            arrow
            overlayStyle={{ width: 150 }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Avatar icon={<UserOutlined />} size={40} />
            </a>
          </Dropdown>
        </Header>
        <Content
          className="overflow-y-auto mx-6 mt-4"
          style={{
            // margin: "24px 16px",
            padding: 24,
            // minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            position: "relative",
          }}
        >
          <>
            {children}

            <div className="absolute bottom-5 right-5">
              <Button
                onClick={() => router.back()}
                icon={<ArrowLeftOutlined />}
                type="primary"
                shape="circle"
                size="large"
              />
            </div>
          </>
        </Content>
        <Footer className="text-center !py-4">
          Copyrights ©{new Date().getFullYear()} Created by Emran Ibn Shayed
        </Footer>
      </Layout>
    </Layout>
  );
}
