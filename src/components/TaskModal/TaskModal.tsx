import React from 'react';
import { ModalContainer, ModalContent, ModalTitle, ModalLabel, StyledInput, StyledTextarea, StyledSelect, StyledButton } from './TaskModal.styles';

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <ModalContent>
        <ModalTitle>Task description</ModalTitle>

        <ModalLabel htmlFor="priority">Priority:</ModalLabel>
        <StyledSelect id="priority">
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </StyledSelect>

        <ModalLabel htmlFor="title">Task title:</ModalLabel>
        <StyledInput type="text" id="title" />

        <ModalLabel htmlFor="description">Add description:</ModalLabel>
        <StyledTextarea id="description"></StyledTextarea>

        <StyledButton backgroundColor="#007bff" color="#fff">Save</StyledButton>
        <StyledButton onClick={onClose}>Cancel</StyledButton>
      </ModalContent>
    </ModalContainer>
  );
};

export default TaskModal;