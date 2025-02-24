import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.sm};
  border: ${props => props.theme.borderWidth} ${props => props.theme.borderStyle} ${props => props.theme.colors.lightGray};
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.textPrimary};
  cursor: pointer;
  transition: ${props => props.theme.transition};

  &:hover {
    background-color: ${props => props.theme.colors.light};
  }
`;

interface ContextMenuContainerProps {
  x: number;
  y: number;
}


export const ContextMenuContainer = styled.div<ContextMenuContainerProps>`
  position: absolute;
  background-color: ${props => props.theme.colors.cardBackground};
  border: ${props => props.theme.borderWidth} ${props => props.theme.borderStyle} ${props => props.theme.colors.lightGray};
  border-radius: ${props => props.theme.borderRadius.sm};
  box-shadow: ${props => props.theme.boxShadow};
  padding: ${props => props.theme.spacing.xs} 0;
  min-width: 150px;
  z-index: 1000;
  
`;

export const ContextMenuOption = styled.div`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.xl};
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.colors.light};
  }
`;