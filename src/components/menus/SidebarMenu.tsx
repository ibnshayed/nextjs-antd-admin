import { SettingOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import Link from "next/link";
import React from "react";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    label,
    key,
    icon,
    children,
    type,
  } as MenuItem;
}

const items: MenuProps["items"] = [
  // getItem('Navigation One', 'sub1', <MailOutlined />, [
  //   getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
  //   getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  // ]),

  // getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
  //   getItem('Option 5', '5'),
  //   getItem('Option 6', '6'),
  //   getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  // ]),

  // { type: 'divider' },
  getItem("Menu", "1", null, [], "group"),

  getItem("Users", "2", <SettingOutlined />, [
    getItem(<Link href={"/dashboard/users/admins"}>Admins</Link>, "3"),
    // getItem("Option 10", "10"),
    // getItem("Option 11", "11"),
    // getItem("Option 12", "12"),
  ]),

  // getItem(
  //   "Group",
  //   "grp",
  //   null,
  //   [getItem("Option 13", "13"), getItem("Option 14", "14")],
  //   "group"
  // ),
];

const SidebarMenu: React.FC = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    <Menu
      onClick={onClick}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
      theme="dark"
    />
  );
};

export default SidebarMenu;
