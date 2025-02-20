import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #eee;
  }
`;

export const ContextMenuContainer = styled.div`
  position: absolute;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  padding: 5px 0;
  min-width: 150px;
  z-index: 1000;
`;

export const ContextMenuOption = styled.div`
  padding: 8px 15px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;