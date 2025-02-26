import styled from 'styled-components';

export const BoardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  gap: 20px;
  flex-direction: row;
  overflow-x: auto;
  padding: ${props => props.theme.spacing.xl};
  gap: ${props => props.theme.spacing.xl};
  min-height: ${props => props.theme.app.minHeight};
  align-items: flex-start;
  background-color: ${props => props.theme.colors.appBackground};

  @media (max-width: 699px) {
    flex-direction: column;
    align-items: stretch;
  }
`;