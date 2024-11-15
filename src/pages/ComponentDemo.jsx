import React, { useState } from 'react';
import { Typography, Divider, Space, Button, Alert } from 'antd';
import styled from 'styled-components';
import { DemoCard, DemoSection } from '../styles/CommonStyles';
import UserCard from '../components/demo/UserCard';
import Counter from '../components/demo/Counter';

const { Title, Paragraph, Text } = Typography;

const CodeBlock = styled.pre`
  background-color: #f6f8fa;
  padding: 16px;
  border-radius: 6px;
  overflow-x: auto;
`;

const DemoBox = styled.div`
  border: 1px dashed #1890ff;
  padding: 16px;
  border-radius: 8px;
  margin: 16px 0;
`;

const ComponentDemo = () => {
  const [count, setCount] = useState(0);

  return (
    <DemoSection>
      <Title level={2}>React Components</Title>
      <Paragraph>React components are the building blocks of your UI, similar to Java classes. .</Paragraph>

      <DemoCard>
        <Title level={3}>1. Simple Function Component</Title>
        <CodeBlock>
          {`function Welcome(props) {
            return <h1>Hello, {props.name}</h1>;
          }`}
        </CodeBlock>
        <DemoBox>
          <Text>Example Output:</Text>
          <h1>Hello, Java Developer</h1>
        </DemoBox>
      </DemoCard>

      <DemoCard>
        <Title level={3}>2. Reusable Components</Title>
        <Paragraph>Components can be reused with different props:</Paragraph>
        <Space wrap>
          <UserCard
            name="John Doe"
            role="Java Developer"
            email="john@example.com"
            tags={['Spring', 'React']}
            description="Full-stack developer"
          />
          <UserCard
            name="Jane Smith"
            role="Tech Lead"
            email="jane@example.com"
            tags={['Architecture', 'Java']}
            description="System architect"
          />
        </Space>
      </DemoCard>

      <DemoCard>
        <Title level={3}>3. Stateful Components</Title>
        <Paragraph>Components can maintain their own state:</Paragraph>
        <Counter initialValue={0} step={1} onChange={setCount} />
        <Alert style={{ marginTop: 16 }} message={`Current count: ${count}`} type="info" />
      </DemoCard>

      <DemoCard>
        <Title level={3}>4. Component Composition</Title>
        <Paragraph>Components can be composed together to build complex UIs:</Paragraph>
        <DemoBox>
          <Space direction="vertical" style={{ width: '100%' }}>
            <Alert message="This is a composed UI example" type="success" />
            <Button type="primary">Interactive Button</Button>
            <Counter initialValue={5} />
          </Space>
        </DemoBox>
      </DemoCard>
    </DemoSection>
  );
};

export default ComponentDemo;
