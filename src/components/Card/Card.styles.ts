import styled from 'styled-components';

interface CardItemProps {}

export const CardItem = styled.div<CardItemProps>`
  background-color: #fff;
  border-radius: 24px;
  padding: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  cursor: grab;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 7px 17px rgba(0, 0, 0, 0.15);
  }
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
  'Low Priority': '#4caf50',
};

export const PriorityLabel = styled.span<PriorityLabelProps>`
  font-size: 0.7rem;
  font-weight: bold;
  color: ${(props) => (props.priority ? priorityColors[props.priority] : '#888')};
  display: inline-block;
  margin-bottom: 5px;
  padding: 3px 5px;
  border-radius: 24px;
  border: none;
  background-color: ${(props) => props.priority ? `${priorityColors[props.priority]}33` : 'transparent'};
`;

export const CardTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 5px;
`;

export const CardDescription = styled.p`
  font-size: 0.8rem;
  color: #555;
`;

interface AddTaskCardProps {}

export const AddTaskCardItem = styled.div<AddTaskCardProps>`
  background-color: #fff;
  border-radius: 24px;
  padding: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  border: 1px solid #e0e0e0;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:hover {
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }

   /* Hide on small screens */
  @media (max-width: 390px) {
    display: none;
  }
`;