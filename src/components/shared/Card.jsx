import React from 'react';
import { Card as AntCard } from 'antd';
import styled from 'styled-components';

const StyledCard = styled(AntCard)`
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`;

const Card = ({ title, children, ...props }) => {
  return (
    <StyledCard title={title} {...props}>
      {children}
    </StyledCard>
  );
};

// Additional card variants
export const InfoCard = styled(Card)`
  border-left: 4px solid #1890ff;
`;

export const SuccessCard = styled(Card)`
  border-left: 4px solid #52c41a;
`;

export const WarningCard = styled(Card)`
  border-left: 4px solid #faad14;
`;

export const ErrorCard = styled(Card)`
  border-left: 4px solid #f5222d;
`;

export default Card;
