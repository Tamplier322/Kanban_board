import styled from 'styled-components';

export const StyledSelect = styled.select`
  padding: 4px 8px;
  border-radius: 15px;
  border: none;
  width: auto;
  outline: none;
  font-size: 0.7rem;
  font-weight: bold;
  color: ${(props) => props.color};
  background-color: transparent; 
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export const StyledInputTitle = styled.input`
  border: none;
  font-size: 1rem;
  margin-bottom: 5px;
  margin-top: 10px;
  width: 100%;
  padding: 0;
  outline: none;
  opacity: 0.9;
  font-weight: bold;
  color: #222;
`;

export const StyledInputDescription = styled.input`
  border: none;
  font-size: 0.8rem;
  margin-bottom: 5px;
  width: 100%;
  padding: 0;
  outline: none;
  font-weight: normal;
  opacity: 0.7;
  color: #222;
`;

export const StyledButton = styled.button`
  background-color:  ${(props) => `${props.color}33`};
  border: none;
  color: ${ props => props.color };
  cursor: pointer;
  font-size: 0.8rem;
  text-align: center;
  width: auto;
  display: inline-block;
  padding-inline: 0px;
  transition: background-color 0.2s ease;
  opacity: 0.55;

  &:hover {
        background-color: ${ props => `${props.color}55`};
  }
  background-color: transparent;
`;

export const TaskCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const CloseButton = styled.span`
  cursor: pointer;
  color: red;
  font-size: 1rem;
  position: absolute;
  right: 10px;
  top: 5px;
`;