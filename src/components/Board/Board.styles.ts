import styled from 'styled-components';

export const BoardContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 20px;
  gap: 20px;
  min-height: 100vh;

  @media (max-width: 390px) {
    padding: 10px;
    gap: 10px;
  }
`;
