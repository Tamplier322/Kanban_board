import styled from 'styled-components';

interface ColumnContainerProps {
  color: string;
}

export const ColumnContainer = styled.div<ColumnContainerProps>`
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 15px;
  width: 300px;
  min-width: 300px;
  flex: 0 0 auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 390px) {
    width: 90%;
    min-width: 0;
  }
`;

interface ColumnTitleProps {
  color: string;
}

export const ColumnTitle = styled.h2<ColumnTitleProps>`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: ${(props) => props.color};
  text-align: center;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
