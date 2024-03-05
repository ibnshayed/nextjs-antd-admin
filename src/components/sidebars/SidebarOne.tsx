import { RubyOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import React from "react";
import SidebarMenu from "../menus/SidebarMenu";

const { Sider } = Layout;

const SidebarOne = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Function;
}) => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={open}
      className="h-screen overflow-auto fixed left-0 top-0 bottom-0"
      width={280}
      breakpoint="lg"
      onBreakpoint={(broken) => {
        setOpen(broken);
        console.log(broken);
      }}
    >
      <div className="flex justify-center items-center space-x-2 p-2">
        <RubyOutlined className="text-2xl" style={{ color: "#fff" }} />
        {!open && <p className="text-white text-2xl font-bold">Next Admin</p>}
      </div>
      <SidebarMenu />
    </Sider>
  );
};

export default SidebarOne;
