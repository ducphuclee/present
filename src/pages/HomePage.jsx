import React, { useState } from 'react';
import { Card, Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AppstoreOutlined, ApiOutlined, ControlOutlined, ThunderboltOutlined } from '@ant-design/icons';

const StyledCard = styled(Card)`
  margin: 16px;
  height: 200px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const Title = styled.h1`
  text-align: center;
  margin: 24px 0;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 32px;
`;

const IconWrapper = styled.div`
  font-size: 32px;
  margin-bottom: 16px;
  color: #1890ff;
`;

const demoSections = [
  {
    title: 'Components',
    path: '/components',
    icon: <AppstoreOutlined />,
    description: 'Learn about React Components and their reusability',
  },
  {
    title: 'Props',
    path: '/props',
    icon: <ApiOutlined />,
    description: 'Understanding data flow with Props',
  },
  {
    title: 'State',
    path: '/state',
    icon: <ControlOutlined />,
    description: 'State management in React components',
  },
  {
    title: 'Styling',
    path: '/styles',
    icon: <ThunderboltOutlined />,
    description: 'Component styling approaches',
  },
];

const DemoComponent = function DemoComponent({ title, children }) {
  return <Card title={title}>{children}</Card>;
};

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <Title>React for Java Developers</Title>
      <Button onClick={() => setIsVisible(!isVisible)}>Thông tin cơ bản</Button>
      {isVisible && (
        <Description>
          <Row gutter={10}>
            <Col span={8}>
              <DemoComponent title="Vấn đề với phát triển giao diện truyền thống">
                <ul>
                  <li>Thao tác DOM bằng JavaScript khá phức tạp Khả năng tái sử dụng thấp Tính</li>
                  <li>Codebase cồng kềnh Testing phức tạp</li>
                  <li>Liên kết giữa các phần tử trên giao diện thấp</li>
                  <li>Thách thức khi dự án phát triển lớn hơn và trở nên phức tạp Việc</li>
                  <li>Giao tiếp với server không được linh hoạt, khiến trải nghiệm người dung kém</li>
                  <li> Hiệu năng thấp khi phải tương tác với DOM thật</li>
                </ul>
              </DemoComponent>
            </Col>
            <Col span={8}>
              <DemoComponent title="DOM là gì">
                <ul>
                  <li>DOM (Document Object Model) là một cây đại diện cho cấu trúc HTML của một trang web</li>
                  <li>Render lại toàn bộ trang: framework Java thường hoạt động theo server-side rendering</li>
                  <li>jQuery cho cập nhật cục bộ: phức tạp và khó maintain với dự án lớn</li>
                </ul>
              </DemoComponent>
            </Col>
          </Row>

          <br />

          <Row gutter={10}>
            <Col span={8}>
              <DemoComponent title="React">
                <ul>
                  <li>Được phát triển và sử dụng bởi Facebook</li>
                  <li>Là một thư viện JavaScript phổ biến</li>
                  <li>Linh hoạt, hiệu năng cao và khả năng tạo ra các UI phức tạp</li>
                  <li>Được dung để phát triển Single-Page Applications, React Native, React PWA</li>
                  <li>
                    React sử dụng kiến trúc component-based, cho phép chia nhỏ giao diện người dùng thành các component
                    độc lập và tái sử dụng được.
                  </li>
                </ul>
              </DemoComponent>
            </Col>
          </Row>
        </Description>
      )}

      <Row gutter={16}>
        {demoSections.map((section) => (
          <Col span={6} key={section.path}>
            <Link to={section.path}>
              <StyledCard>
                <IconWrapper>{section.icon}</IconWrapper>
                <h2>{section.title}</h2>
                <p>{section.description}</p>
              </StyledCard>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomePage;
