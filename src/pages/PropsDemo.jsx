import React, { useState } from 'react';
import { Typography, Space, Card, Switch, Input, Select } from 'antd';
import { UserOutlined, SettingOutlined, BellOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { DemoCard, DemoSection, CodeExample } from '../styles/CommonStyles';
import UserCard from '../components/demo/UserCard';

const { Title, Paragraph, Text } = Typography;
const { Option } = Select;

const NotificationCard = styled(Card)`
  width: 300px;
  margin: 8px;
  border-left: 4px solid ${props => props.type === 'success' ? '#52c41a' : 
    props.type === 'warning' ? '#faad14' : 
    props.type === 'error' ? '#f5222d' : '#1890ff'};
`;

const ConfigPanel = styled.div`
  background: #fafafa;
  padding: 16px;
  border-radius: 8px;
  margin: 16px 0;
`;

const PropsDemo = () => {
  const [userConfig, setUserConfig] = useState({
    name: 'John Doe',
    role: 'Developer',
    isActive: true,
    notificationType: 'info'
  });

  const handleConfigChange = (key, value) => {
    setUserConfig(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <DemoSection>
      <Title level={2}>Understanding Props in React</Title>
      <Paragraph>
        Props in React are similar to method parameters in Java - they allow data to be passed to components.
      </Paragraph>

      <DemoCard>
        <Title level={3}>1. Basic Props Example</Title>
        <CodeExample>
          {`// Component definition
const UserCard = ({ name, role, isActive }) => {
  return <Card>...</Card>
};

// Component usage
<UserCard 
  name="John Doe"
  role="Developer"
  isActive={true}
/>`}
        </CodeExample>
      </DemoCard>

      <DemoCard>
        <Title level={3}>2. Interactive Props Demo</Title>
        <Space direction="vertical" style={{ width: '100%' }}>
          <ConfigPanel>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Input
                prefix={<UserOutlined />}
                placeholder="Name"
                value={userConfig.name}
                onChange={e => handleConfigChange('name', e.target.value)}
              />
              <Input
                prefix={<SettingOutlined />}
                placeholder="Role"
                value={userConfig.role}
                onChange={e => handleConfigChange('role', e.target.value)}
              />
              <Space>
                <Text>Active Status:</Text>
                <Switch
                  checked={userConfig.isActive}
                  onChange={value => handleConfigChange('isActive', value)}
                />
              </Space>
              <Space>
                <BellOutlined />
                <Select
                  value={userConfig.notificationType}
                  onChange={value => handleConfigChange('notificationType', value)}
                  style={{ width: 120 }}
                >
                  <Option value="info">Info</Option>
                  <Option value="success">Success</Option>
                  <Option value="warning">Warning</Option>
                  <Option value="error">Error</Option>
                </Select>
              </Space>
            </Space>
          </ConfigPanel>

          <NotificationCard type={userConfig.notificationType}>
            <UserCard
              name={userConfig.name}
              role={userConfig.role}
              isActive={userConfig.isActive}
              tags={[userConfig.notificationType]}
            />
          </NotificationCard>
        </Space>
      </DemoCard>

      <DemoCard>
        <Title level={3}>3. Props Best Practices</Title>
        <Paragraph>
          <ul>
            <li>Props are read-only (immutable)</li>
            <li>Props can be of any type (strings, numbers, objects, functions)</li>
            <li>Props enable component reusability</li>
            <li>Default props can be specified</li>
            <li>Props validation can be implemented</li>
          </ul>
        </Paragraph>
      </DemoCard>
    </DemoSection>
  );
};

export default PropsDemo;
