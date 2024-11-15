import React, { useState, useEffect } from 'react';
import { Button, Space, Typography } from 'antd';
import styled from 'styled-components';

const CounterWrapper = styled.div`
  padding: 16px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  display: inline-block;
`;

const CountDisplay = styled.span`
  font-size: 24px;
  margin: 0 16px;
  color: ${props => props.isPositive ? '#52c41a' : '#f5222d'};
`;

const Counter = ({ initialValue = 0, step = 1, onCountChange }) => {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    if (onCountChange) {
      onCountChange(count);
    }
  }, [count, onCountChange]);

  return (
    <CounterWrapper>
      <Space>
        <Button 
          onClick={() => setCount(prev => prev - step)}
          icon="−"
        >
          Decrease
        </Button>
        <CountDisplay isPositive={count >= 0}>
          {count}
        </CountDisplay>
        <Button 
          onClick={() => setCount(prev => prev + step)}
          type="primary"
          icon="+"
        >
          Increase
        </Button>
      </Space>
    </CounterWrapper>
  );
};

export default Counter;
