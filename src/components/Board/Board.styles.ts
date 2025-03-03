import styled from 'styled-components';

export const BoardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xl};
  flex-direction: row;
  overflow-x: auto;
  padding: ${({ theme }) => theme.spacing.xl};
  gap: ${({ theme }) => theme.spacing.xl};
  min-height: ${({ theme }) => theme.app.minHeight};
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.appBackground};

  @media (max-width: 699px) {
    flex-direction: column;
    align-items: stretch;
  }
`;