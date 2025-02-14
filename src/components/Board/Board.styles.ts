import styled from 'styled-components';

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  padding: 20px;
  gap: 20px;
  min-height: 100vh;
  align-items: flex-start;
  background-color: #f0f2f5;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;