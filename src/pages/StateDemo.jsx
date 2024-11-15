import React, { useState } from 'react';
import { Button, Input, Space } from 'antd';
import { DemoCard, DemoSection } from '../styles/CommonStyles';

const StateDemo = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  return (
    <DemoSection>
      <h1>State Management Demo</h1>
      
      <DemoCard>
        <h3>Counter Example</h3>
        <Space>
          <Button onClick={() => setCount(count - 1)}>-</Button>
          <span>{count}</span>
          <Button onClick={() => setCount(count + 1)}>+</Button>
        </Space>
      </DemoCard>

      <DemoCard>
        <h3>Input State Example</h3>
        <Space direction="vertical">
          <Input 
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type something..."
          />
          <p>You typed: {text}</p>
        </Space>
      </DemoCard>
    </DemoSection>
  );
};

export default StateDemo;
