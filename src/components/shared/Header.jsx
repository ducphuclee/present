import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import {
  HomeOutlined,
  AppstoreOutlined,
  ApiOutlined,
  BookOutlined,
  SettingOutlined,
  BgColorsOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';

const { Header: AntHeader } = Layout;

const StyledHeader = styled(AntHeader)`
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Logo = styled(Link)`
  float: left;
  color: #1890ff;
  font-size: 18px;
  font-weight: bold;
  margin-right: 40px;
`;

const menuItems = [
  {
    key: '/',
    icon: <HomeOutlined />,
    label: 'Home',
  },
  {
    key: '/components',
    icon: <AppstoreOutlined />,
    label: 'Components',
  },
  {
    key: '/props',
    icon: <ApiOutlined />,
    label: 'Props',
  },
  {
    key: '/state',
    icon: <SettingOutlined />,
    label: 'State',
  },
  {
    key: '/styles',
    icon: <BgColorsOutlined />,
    label: 'Styling',
  },
  {
    key: '/lifecycle',
    icon: <ClockCircleOutlined />,
    label: 'Lifecycle',
  },
  {
    key: '/api',
    icon: <ApiOutlined />,
    label: 'API Demo',
  },
  {
    key: '/library',
    icon: <BookOutlined />,
    label: 'Library',
  },
];
const Header = () => {
  const location = useLocation();

  return (
    <StyledHeader>
      <Logo to="/">React for Java Devs</Logo>
      <Menu
        mode="horizontal"
        selectedKeys={[location.pathname]}
        items={menuItems.map((item) => ({
          ...item,
          label: <Link to={item.key}>{item.label}</Link>,
        }))}
      />
    </StyledHeader>
  );
};

export default Header;
