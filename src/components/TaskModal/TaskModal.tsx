import React, { useState } from 'react';
import { ModalContainer, ModalContent, ModalTitle, ModalLabel, StyledInput, StyledTextarea, StyledSelect, StyledButton } from './TaskModal.styles';
import { v4 as uuidv4 } from 'uuid';

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  columnId: string | null;
  onAddCard: (columnId: string, newCard: { id: string; title: string; description: string; priority: string }) => void;
}

const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onClose, columnId, onAddCard }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');

  const handleSave = () => {
    if (columnId) {
      if (!title || !description || !priority) {
        alert('Please fill in all fields.');
        return;
      }
      const newCard = {
        id: uuidv4(),
        title: title,
        description: description,
        priority: priority
      };
      onAddCard(columnId, newCard);
      setTitle('');
      setDescription('');
      setPriority('Medium');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <ModalContainer>
      <ModalContent>
        <ModalTitle>Task description</ModalTitle>

        <ModalLabel htmlFor="priority">Priority:</ModalLabel>
        <StyledSelect id="priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </StyledSelect>

        <ModalLabel htmlFor="title">Task title:</ModalLabel>
        <StyledInput type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />

        <ModalLabel htmlFor="description">Add description:</ModalLabel>
        <StyledTextarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />

        <StyledButton backgroundColor="#007bff" color="#fff" onClick={handleSave}>Save</StyledButton>
        <StyledButton onClick={onClose}>Cancel</StyledButton>
      </ModalContent>
    </ModalContainer>
  );
};

export default TaskModal;