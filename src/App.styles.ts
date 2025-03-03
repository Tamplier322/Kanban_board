import styled from 'styled-components';

export const AppContainer = styled.div`
  font-family: ${({ theme }) => theme.fontFamily};
  background-color: ${({ theme }) => theme.colors.appBackground};
  min-height: ${({ theme }) => theme.app.minHeight};
  display: flex;
  flex-direction: column;
`;

export const AppHeader = styled.div`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.textPrimary};
    padding: ${({ theme }) => theme.spacing.xl};
    display: flex;
    justify-content: space-between;  
    align-items: center;
`;

export const AppTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.extraLarge};
  margin: 0;  
`;

export const AddColumnButton = styled.button`
  background-color: ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.textSecondary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  width: ${({ theme }) => theme.hitZone.small};
  height: ${({ theme }) => theme.hitZone.small};
  font-size: ${({ theme }) => theme.fontSizes.large};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverColor};
  }
`;