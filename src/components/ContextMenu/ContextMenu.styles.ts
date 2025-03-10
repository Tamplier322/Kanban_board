import styled from 'styled-components';

import { ContextMenuContainerProps } from '../../types/index';

export const StyledButton = styled.button`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: ${({ theme }) => theme.borderWidth} ${({ theme }) => theme.borderStyle} ${({ theme }) => theme.colors.lightGray};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: ${({ theme }) => theme.cursor.point};
  transition: ${({ theme }) => theme.transition.sm};

  &:hover {
    background-color: ${({ theme }) => theme.colors.light};
  }
`;

export const ContextMenuContainer = styled.div<ContextMenuContainerProps>`
  position: ${({ theme }) => theme.position.absolute};
  background-color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => theme.borderWidth} ${({ theme }) => theme.borderStyle} ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.zero};
  min-width: ${({ theme }) => theme.width.sm};
  z-index: ${({ theme }) => theme.z_index.xl};
  role: menu;
`;

export const ContextMenuOption = styled.div`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.xl};
  cursor: ${({ theme }) => theme.cursor.point};
  &:hover {
    background-color: ${({ theme }) => theme.colors.light};
  }
  role: menuitem;
`;