import styled from 'styled-components';

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  padding: 20px;
  gap: 20px;
  min-height: 100vh;
  align-items: flex-start;
  background-color: #FFFFFF;

  @media (max-width: 390px) {
    flex-direction: column;
    align-items: stretch;
  }
`;