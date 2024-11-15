import React from 'react';
import { Typography, Button } from 'antd';
import styled from 'styled-components';
import { DemoCard, DemoSection } from '../styles/CommonStyles';

const { Title, Paragraph } = Typography;

const StyledButton = styled(Button)`
  background: ${props => props.primary ? '#1890ff' : 'white'};
  color: ${props => props.primary ? 'white' : '#1890ff'};
  border-radius: 20px;
  margin: 8px;
`;

const GradientBox = styled.div`
  background: linear-gradient(45deg, #1890ff, #722ed1);
  color: white;
  padding: 20px;
  border-radius: 8px;
  margin: 16px 0;
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin: 16px 0;
`;

const StyleDemo = () => {
  return (
    <DemoSection>
      <Title level={2}>Styling in React</Title>
      <Paragraph>
        React offers multiple ways to style components, with styled-components being a popular choice.
      </Paragraph>

      <DemoCard>
        <Title level={3}>Styled Components</Title>
        <FlexContainer>
          <StyledButton primary>Primary Button</StyledButton>
          <StyledButton>Secondary Button</StyledButton>
        </FlexContainer>
      </DemoCard>

      <DemoCard>
        <Title level={3}>Dynamic Styling</Title>
        <GradientBox>
          <h3>Gradient Background</h3>
          <p>Styling with CSS-in-JS allows dynamic styles based on props and state</p>
        </GradientBox>
      </DemoCard>
    </DemoSection>
  );
};

export default StyleDemo;
