import React from 'react';
import { Card, Avatar, Tag, Space } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  width: 300px;
  margin: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const UserInfo = styled.div`
  margin-top: 12px;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 4px 0;
  color: #666;
`;

const UserCard = ({ 
  name, 
  role, 
  email, 
  phone, 
  tags = [], 
  avatarUrl,
  description 
}) => {
  return (
    <StyledCard>
      <Card.Meta
        avatar={
          <Avatar 
            size={64} 
            src={avatarUrl} 
            icon={!avatarUrl && <UserOutlined />}
          />
        }
        title={name}
        description={
          <UserInfo>
            <Tag color="blue">{role}</Tag>
            {tags.map((tag, index) => (
              <Tag key={index} color="green">{tag}</Tag>
            ))}
            <Space direction="vertical" style={{ marginTop: 12 }}>
              {email && (
                <ContactInfo>
                  <MailOutlined /> {email}
                </ContactInfo>
              )}
              {phone && (
                <ContactInfo>
                  <PhoneOutlined /> {phone}
                </ContactInfo>
              )}
              {description && <p>{description}</p>}
            </Space>
          </UserInfo>
        }
      />
    </StyledCard>
  );
};

export default UserCard;
