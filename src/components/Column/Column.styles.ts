import styled from 'styled-components';

interface ColumnContainerProps {
  color: string;
}

export const ColumnContainer = styled.div<ColumnContainerProps>`
  background-color: rgba(248, 250, 252, 0.01);
  border-radius: 32px;
  padding: 10px;
  width: 300px;
  min-width: 300px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #e0e0e0;

  @media (max-width: 768px) {
    width: 100%;
    min-width: auto;
  }
`;

interface ColumnHeaderProps {
  color: string;
}

export const ColumnHeader = styled.div<ColumnHeaderProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  margin-bottom: 5px;
  background-color: ${(props) => props.color};
  border-radius: 30px;
  padding: 4px 8px;
  color: #fff;
  height: 35px;
`;

interface ColumnTitleProps {
  color: string;
}

export const ColumnTitle = styled.h2<ColumnTitleProps>`
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  text-align: center;
  padding: 4px 8px;
  border-radius: 20px;
`;

export const ColumnTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  margin-right: 5px;
  justify-content: flex-start;
`;

interface AddCardButtonProps {
  color: string;
}

export const AddCardButton = styled.button<AddCardButtonProps>`
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.2);
  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
  margin-left: auto;
  padding: 0;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

interface CountBadgeProps {
  color: string;
}

export const CountBadge = styled.span<CountBadgeProps>`
  background-color: #fff;
  color: ${(props) => props.color};
  font-size: 0.7rem;
  padding: 3px 6px;
  border-radius: 50%;
  margin-right: 5px;
  min-width: 20px;
  min-height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface AddTaskCardProps {
  color: string;
}

export const AddTaskCard = styled.button<AddTaskCardProps>`
  background-color:  ${(props) => `${props.color}33`};
  border: none;
  color: ${(props) => props.color};
  border-radius: 30px;
  padding: 4px 8px;                      
  cursor: pointer;
  font-size: 0.8rem;
  text-align: center;
  width: auto;
  display: inline-block;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => `${props.color}55`};
  }
  border-radius: 15px;
`;