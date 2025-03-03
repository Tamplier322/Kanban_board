import styled from 'styled-components';

import { ContextMenuContainerProps } from '../../types/index';

export const StyledButton = styled.button`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: ${({ theme }) => theme.borderWidth} ${({ theme }) => theme.borderStyle} ${({ theme }) => theme.colors.lightGray};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    background-color: ${({ theme }) => theme.colors.light};
  }
`;

export const ContextMenuContainer = styled.div<ContextMenuContainerProps>`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => theme.borderWidth} ${({ theme }) => theme.borderStyle} ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: ${({ theme }) => theme.spacing.xs} 0;
  min-width: 150px;
  z-index: 1000;
  
`;

export const ContextMenuOption = styled.div`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.xl};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.light};
  }
`;