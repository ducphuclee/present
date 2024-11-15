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

const Library = () => {
  return (
    <div>
      <Title>Library</Title>
      <Description>
        <Row gutter={10}>
          <Col span={8}>
            <DemoComponent title="Redux">
              <ul>
                <li>
                  Observer Pattern: Redux hoạt động dựa trên mô hình Observer pattern, tương tự như cách hoạt động của
                  java.util.Observer
                </li>
                <li>
                  Singleton Pattern: Store trong Redux thường được thiết kế theo mô hình Singleton, nghĩa là chỉ có một
                  instance duy nhất của store trong toàn bộ ứng dụng
                  <br />
                  Single source of truth: Không thể thay đổi state trực tiếp
                  <br />
                </li>
                <li>
                  Event Bus: Redux có thể được xem như một event bus đơn giản, nơi các component có thể dispatch actions
                  (gửi events) và lắng nghe state changes (nhận events)
                </li>
                <li>
                  Data Transfer Object (DTO): Actions trong Redux có thể được so sánh với DTOs trong Java. Chúng là các
                  object đơn giản chứa dữ liệu cần được truyền đi
                </li>
              </ul>
            </DemoComponent>
          </Col>
          <Col span={8}>
            <DemoComponent title="Ant Design: Thư viện UI Component">
              <ul>
                <li>Tiết kiệm thời gian: Không cần phải tự thiết kế và implement các component UI cơ bản.</li>
                <li>Tiết kiệm thời gian</li>
                <li>Giao diện đẹp mắt và nhất quán</li>
                <li>Dễ sử dụng và tùy chỉnh</li>
                <li>Một số component phổ biến: Button, Form, Table, Modal</li>
              </ul>
            </DemoComponent>
          </Col>
        </Row>

        <br />

        <Row gutter={10}>
          <Col span={8}>
            <DemoComponent title="React SWR ">
              <ul>
                <li>Tối ưu hóa hiệu năng: Giảm thiểu số lần fetch data từ API bằng cách sử dụng cache.</li>
                <li>Cập nhật dữ liệu tự động: SWR tự động revalidate data khi cần thiết.</li>
                <li>
                  Các cơ chế kiểm tra dữ liệu: TTL, Revalidation Function, revalidateOnFocus, revalidateOnMount,
                  revalidateOnReconnect
                </li>
              </ul>
            </DemoComponent>
          </Col>
        </Row>
      </Description>
    </div>
  );
};

export default Library;
