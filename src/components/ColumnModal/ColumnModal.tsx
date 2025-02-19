import React, { useState } from 'react';
import { ModalContainer, ModalContent, ModalTitle, ModalLabel, StyledInput, StyledButton } from './ColumnModal.styles';
import { v4 as uuidv4 } from 'uuid';

interface ColumnModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddColumn: (newColumn: { id: string; title: string; color: string; cards: CardType[]; }) => void;
}

interface CardType {
  id: string;
  title: string;
  description: string;
  priority: string;
}

const ColumnModal: React.FC<ColumnModalProps> = ({ isOpen, onClose, onAddColumn }) => {
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('#ffffff');

  const handleSave = () => {
    if (title) {
      const newColumn = {
        id: uuidv4(),
        title: title,
        color: color,
        cards: [],
      };
      onAddColumn(newColumn);
      setTitle('');
      setColor('#ffffff');
      onClose();
    } else {
      alert('Please enter a column title.');
    }
  };

  if (!isOpen) return null;

  return (
    <ModalContainer>
      <ModalContent>
        <ModalTitle>Column Description</ModalTitle>

        <ModalLabel htmlFor="title">Column Title:</ModalLabel>
        <StyledInput type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />

        <ModalLabel htmlFor="color">Column Color:</ModalLabel>
        <StyledInput type="color" id="color" value={color} onChange={(e) => setColor(e.target.value)} />

        <StyledButton backgroundColor="#007bff" color="#fff" onClick={handleSave}>Save</StyledButton>
        <StyledButton onClick={onClose}>Cancel</StyledButton>
      </ModalContent>
    </ModalContainer>
  );
};

export default ColumnModal;