import React from 'react';
import { Layout as AntLayout } from 'antd';
import styled from 'styled-components';
import Header from './Header';

const { Content } = AntLayout;

const StyledLayout = styled(AntLayout)`
  min-height: 100vh;
`;

const StyledContent = styled(Content)`
  padding: 24px;
  margin: 24px;
  background: white;
  border-radius: 8px;
  min-height: calc(100vh - 140px);
`;

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <StyledContent>
        {children}
      </StyledContent>
    </StyledLayout>
  );
};

export default Layout;
