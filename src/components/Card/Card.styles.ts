import styled from 'styled-components';

interface CardItemProps {}

export const CardItem = styled.div<CardItemProps>`
  background-color: ${props => props.theme.colors.cardBackground};
  border-radius: ${props => props.theme.borderRadius.xxl};
  padding: ${props => props.theme.spacing.md};
  box-shadow: ${props => props.theme.boxShadow};
  cursor: grab;
  transition: ${props => props.theme.transition};
  min-height: 70px;
`;

interface PriorityLabelProps {
  priority: string | undefined;
}

const priorityColors: Record<string, string | undefined> = {
  High: '#f44336',
  Medium: '#ff9800',
  Low: '#4caf50',
  Important: '#f44336',
  'High Priority': '#f44336',
  'Low Priority': '#4caf50'
};

export const PriorityLabel = styled.span<PriorityLabelProps>`
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${(props) => (props.priority ? priorityColors[props.priority] : props.theme.colors.gray)};
  display: inline-block;
  margin-bottom: ${props => props.theme.spacing.xs};
  padding: ${props => props.theme.spacing.xxs} ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.xl};
  border: none;
  background-color: ${(props) => props.priority ? `${priorityColors[props.priority]}33` : 'transparent'};
`;

export const CardTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.regular};
  margin-bottom: ${props => props.theme.spacing.xs};
  word-wrap: break-word;
  overflow-wrap: break-word;
  max-height: 60px
`;

export const CardDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.textSecondary};
  word-wrap: break-word;
  overflow-wrap: break-word;
  max-height: 70px
`;

interface AddTaskCardProps {}

export const AddTaskCardItem = styled.div<AddTaskCardProps>`
  background-color: ${props => props.theme.colors.cardBackground};
  border-radius: ${props => props.theme.borderRadius.xxl};
  padding: ${props => props.theme.spacing.md};
  box-shadow: ${props => props.theme.boxShadow};
  transition: ${props => props.theme.transition};
  border: ${props => props.theme.borderWidth} ${props => props.theme.borderStyle} ${props => props.theme.colors.lightGray};
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:hover {
    box-shadow: ${props => props.theme.boxShadowHover};
    transform: translateY(-2px);
  }

  @media (max-width: 390px) {
    display: none;
  }
`;