import React, { useState, useEffect } from 'react';
import { Typography, Table, Button, Space, Input, Card, message } from 'antd';
import { SearchOutlined, ReloadOutlined } from '@ant-design/icons';
import { DemoCard, DemoSection } from '../styles/CommonStyles';
import styled from 'styled-components';

const { Title, Paragraph, Text } = Typography;

const SearchBar = styled.div`
  margin-bottom: 16px;
  display: flex;
  gap: 16px;
`;

const ApiDemo = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Company',
      dataIndex: ['company', 'name'],
      key: 'company',
    },
  ];

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
      message.success('Data loaded successfully');
    } catch (error) {
      message.error('Failed to fetch users');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <DemoSection>
      <Title level={2}>API Integration Demo</Title>
      <Paragraph>Demonstrating API integration with React using the Fetch API (similar to Java HttpClient)</Paragraph>

      <DemoCard>
        <Title level={3}>User Data Example</Title>
        <SearchBar>
          <Input
            placeholder="Search by name"
            prefix={<SearchOutlined />}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: 200 }}
          />
          <Button icon={<ReloadOutlined />} onClick={fetchUsers} loading={loading}>
            Refresh
          </Button>
        </SearchBar>

        <Table dataSource={filteredUsers} columns={columns} rowKey="id" loading={loading} />
      </DemoCard>

      <DemoCard>
        <Title level={3}>Code Example</Title>
        <Card>
          <pre>
            {`// Fetch API Example
const fetchUsers = async () => {
  try {
    const response = await fetch('https://api.example.com/users');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Usage in React
useEffect(() => {
  fetchUsers()
    .then(data => setUsers(data))
    .catch(error => handleError(error));
}, []);`}
          </pre>
        </Card>
      </DemoCard>
    </DemoSection>
  );
};

export default ApiDemo;
