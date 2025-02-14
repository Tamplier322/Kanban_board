import React from 'react';
import { ModalContainer, ModalContent, ModalTitle, ModalLabel, StyledInput, StyledButton } from './ColumnModal.styles';

interface ColumnModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ColumnModal: React.FC<ColumnModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <ModalContent>
        <ModalTitle>Column Description</ModalTitle>

        <ModalLabel htmlFor="title">Column Title:</ModalLabel>
        <StyledInput type="text" id="title" />

        <StyledButton backgroundColor="#007bff" color="#fff">Save</StyledButton>
        <StyledButton onClick={onClose}>Cancel</StyledButton>
      </ModalContent>
    </ModalContainer>
  );
};

export default ColumnModal;