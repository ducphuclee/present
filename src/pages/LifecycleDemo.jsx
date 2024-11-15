import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Typography, Button, Card, Space, Badge, Input } from 'antd';
import { DemoCard, DemoSection, CodeExample } from '../styles/CommonStyles';
import styled from 'styled-components';

const { Title, Paragraph, Text } = Typography;

const LogContainer = styled.div`
  background: #f6f8fa;
  padding: 16px;
  border-radius: 8px;
  max-height: 200px;
  overflow-y: auto;
`;

const LogEntry = styled.div`
  padding: 4px 8px;
  margin: 4px 0;
  border-radius: 4px;
  background: ${(props) => props.background || 'white'};
`;

const DemoComponent = function DemoComponent({ addLog }) {
  useEffect(() => {
    addLog('📦 Child Component Mounted', 'success');

    return () => {
      addLog('🔴 Child Component Will Unmount', 'error');
    };
  }, []);

  return (
    <Card title="Child Component">
      <Text>This component demonstrates mount/update lifecycle</Text>
    </Card>
  );
};

const LifecycleDemo = () => {
  const [logs, setLogs] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleLogChange = useCallback(
    (newLog) => {
      setLogs(newLog);
    },
    [setLogs],
  );

  const addLog = (message, type = 'info') => {
    setLogs((prev) => [...prev, { message, type, timestamp: new Date().toLocaleTimeString() }]);
  };

  // Component Mount
  useEffect(() => {
    addLog('🟢 Component Mounted', 'success');

    return () => {
      addLog('🔴 Component Will Unmount', 'error');
    };
  }, []);

  // Props/State Update
  useEffect(() => {
    if (count > 0) {
      addLog(`🔄 Count updated to: ${count}`, 'warning');
    }
  }, [count]);

  // Input Change
  useEffect(() => {
    if (inputValue) {
      addLog(`✏️ Input changed to: ${inputValue}`, 'info');
    }
  }, [inputValue]);

  // Log state changes
  useEffect(() => {
    console.log('isVisible changed:', isVisible);
  }, [isVisible]);

  // Log all renders
  useEffect(() => {
    console.log('LifecycleDemo mounted/updated');
  });

  return (
    <DemoSection>
      <Title level={2}>React Lifecycle Demo</Title>
      <Paragraph>Understanding component lifecycle using React Hooks (equivalent to Java object lifecycle)</Paragraph>

      <DemoCard>
        <Title level={3}>Interactive Lifecycle Demo</Title>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Space>
            <Button type="primary" onClick={() => setCount((c) => c + 1)}>
              Update Count: {count}
            </Button>
            <Button onClick={() => setIsVisible(!isVisible)}>Toggle Child Component</Button>
          </Space>

          <Input
            placeholder="Type to trigger update"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          {isVisible && <DemoComponent addLog={addLog} />}
        </Space>
      </DemoCard>

      <DemoCard>
        <Title level={3}>Lifecycle Logs</Title>
        <LogContainer>
          {logs.map((log, index) => (
            <LogEntry
              key={index}
              background={
                log.type === 'success'
                  ? '#f6ffed'
                  : log.type === 'error'
                    ? '#fff2f0'
                    : log.type === 'warning'
                      ? '#fffbe6'
                      : '#e6f7ff'
              }
            >
              <Badge
                status={
                  log.type === 'success'
                    ? 'success'
                    : log.type === 'error'
                      ? 'error'
                      : log.type === 'warning'
                        ? 'warning'
                        : 'processing'
                }
              />
              <Text code>{log.timestamp}</Text> {log.message}
            </LogEntry>
          ))}
        </LogContainer>
      </DemoCard>

      <DemoCard>
        <Title level={3}>Lifecycle Methods vs Hooks</Title>
        <CodeExample>
          {`// Class Component Lifecycle    // Functional Component (Hooks)
componentDidMount() {          useEffect(() => {
  // Mount                        // Mount
}, [])                        }, [])

componentDidUpdate() {         useEffect(() => {
  // Update                      // Update
}, [dependency])              }, [dependency])

componentWillUnmount() {      useEffect(() => {
  // Cleanup                     return () => {
}                               // Cleanup
                              }
                            }, [])`}
        </CodeExample>
      </DemoCard>
    </DemoSection>
  );
};

export default LifecycleDemo;
