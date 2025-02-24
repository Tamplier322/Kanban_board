import React, { useState, useEffect } from 'react';
import { ModalContainer, ModalContent, ModalTitle, ModalLabel, StyledButton1, StyledInputColor, StyledInputTitle } from './ColumnModal.styles';
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
  const [title, setTitle] = useState('Add title');
  const [color, setColor] = useState('#3242a8');

  useEffect(() => {
    if (isOpen) {
      setTitle('Add title');
    }
  }, [isOpen]);

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
      setColor('#3242a8');
      onClose();
    } else {
      alert('Please enter a column title.');
    }
  };

  if (!isOpen) return null;

  return (
    <ModalContainer>
      <ModalContent>
        <div>
        <StyledInputTitle maxLength={15} type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
        <StyledInputColor type="color" id="color" value={color} onChange={(e) => setColor(e.target.value)} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '20px' }}>
        <StyledButton1 onClick={handleSave} >Save</StyledButton1>
        <StyledButton1 onClick={onClose} >Close</StyledButton1>
        </div>
      </ModalContent>
    </ModalContainer>
  );
};

export default ColumnModal;