import styled from 'styled-components';
import { StyledInput } from '../common/StyledInput';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 14px;
  padding: 10px;
  min-width: 300px;
  min-height: 130px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  cursor: grab;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`;

export const ModalTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 15px;
  text-align: center;
`;

export const ModalLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const StyledInputTitle = styled.input`
  margin-left: 12px;
  margin-top: 100px;
  border: none;
  font-size: 1rem;
  margin-bottom: 5px;
  margin-top: 10px;
  width: 90%;
  padding: 0;
  outline: none;
  opacity: 0.9;
  font-weight: bold;
  color: #222;
`;

export const StyledInputColor = styled.input`
  margin-left: 12px;
  margin-top: 20px;
`;


export const StyledButton = styled.button`
  background-color: #ffffff};
  color: ${ props => props.color };
  cursor: pointer;
  font-size: 0.8rem;
  text-align: center;
  border-radius: 20px;
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

export const StyledButton1 = styled.button`
  border-radius: 14px;
  background-color:rgb(230, 230, 230);
  padding: 5px 10px;
  cursor: pointer;
  border: none;
`;

export { StyledInput };