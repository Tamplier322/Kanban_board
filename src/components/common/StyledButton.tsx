import styled from 'styled-components';

interface StyledButtonProps {
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.borderColor || '#ccc'};
  background-color: ${(props) => props.backgroundColor || '#fff'};
  color: ${(props) => props.color || '#333'};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.backgroundColor ? 'darken(0.1, props.backgroundColor)' : '#eee')};
  }
`;