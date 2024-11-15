import styled from 'styled-components';
import { Typography } from 'antd';

const { Title } = Typography;

export const DemoCard = styled.div`
  padding: 24px;
  margin: 16px 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const DemoSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
`;

export const CodeExample = styled.pre`
  background: #f6f8fa;
  padding: 16px;
  border-radius: 6px;
  overflow-x: auto;
  font-family: 'Consolas', monospace;
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: ${props => props.gap || '16px'};
  flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 24px !important;
  color: #1890ff;
`;

export const Divider = styled.div`
  height: 1px;
  background: #f0f0f0;
  margin: 24px 0;
`;

export const Badge = styled.span`
  padding: 4px 8px;
  border-radius: 4px;
  background: ${props => props.color || '#1890ff'};
  color: white;
  font-size: 12px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  margin: 16px 0;
`;
