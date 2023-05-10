import React, { useContext, useState } from "react";
import { Link } from "@remix-run/react";
import { HeartOutlined, BulbOutlined, HomeFilled } from "@ant-design/icons";
import { Menu } from "antd";

import { authContext } from "~/auth/providers/ProvideAuth";

import type { MenuProps } from "antd";

const authenticatedItems: MenuProps["items"] = [
  {
    label: <Link to="/">Home</Link>,
    key: "home",
    icon: <HomeFilled />,
  },
  {
    label: <Link to="/memories">Memories</Link>,
    key: "memories",
    icon: <HeartOutlined />,
  },
  {
    label: <Link to="/thoughts">Thoughts</Link>,
    key: "thoughts",
    icon: <BulbOutlined />,
  },
  {
    label: "Messages",
    key: "messages",
  },
];

const unauthenticatedItems: MenuProps["items"] = [
  {
    label: <Link to="/">Home</Link>,
    key: "home",
    icon: <HomeFilled />,
  },
];

export const Navbar: React.FC = () => {
  const [current, setCurrent] = useState("mail");

  let auth = useContext(authContext);

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={
        !auth.loading && auth.sessionData
          ? authenticatedItems
          : unauthenticatedItems
      }
    />
  );
};
