import React, { useState, useEffect } from 'react';
import { ModalContainer, ModalContent, ModalTitle, ModalLabel, StyledButton1, StyledInputColor, StyledInputTitle, ButtonContainer  } from './ColumnModal.styles';
import { v4 as uuidv4 } from 'uuid';
import { DEFAULT_COLUMN_COLOR } from "../../constants/colors";
import { ADD_TITLE_PLACEHOLDER, EMPLTY_INPUT } from "../../constants/labels";
import { COLUMN_TITLE_ERROR } from "../../constants/errors";
import { MAX_COLUMN_TITLE_LENGTH } from '../../constants/numbers';

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
  const [title, setTitle] = useState(ADD_TITLE_PLACEHOLDER);
  const [color, setColor] = useState(DEFAULT_COLUMN_COLOR);

  useEffect(() => {
    if (isOpen) {
      setTitle(ADD_TITLE_PLACEHOLDER);
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
      setTitle(EMPLTY_INPUT);
      setColor(DEFAULT_COLUMN_COLOR);
      onClose();
    } else {
      alert(COLUMN_TITLE_ERROR);
    }
  };

  if (!isOpen) return null;

  return (
    <ModalContainer>
      <ModalContent>
        <div>
        <StyledInputTitle maxLength={MAX_COLUMN_TITLE_LENGTH} type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
        <StyledInputColor type="color" id="color" value={color} onChange={(e) => setColor(e.target.value)} />
        </div>
        <ButtonContainer>
          <StyledButton1 onClick={handleSave} >Save</StyledButton1>
          <StyledButton1 onClick={onClose} >Close</StyledButton1>
        </ButtonContainer>
      </ModalContent>
    </ModalContainer>
  );
};

export default ColumnModal;