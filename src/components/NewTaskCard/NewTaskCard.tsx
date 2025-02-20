import React, { useState } from 'react';
import { CardItem, PriorityLabel } from '../Card/Card.styles';
import { StyledButton, StyledSelect, StyledInputTitle, StyledInputDescription, TaskCardHeader, CloseButton } from './NewTaskCard.styles';
import styled from 'styled-components';

interface NewTaskCardProps {
    color: string;
    onClose: () => void;
    onSave: (newTask: { title: string; description: string; priority: string }) => void;
}

interface PriorityLabelProps {
    priority: string | undefined;
    color: string;
}

const PriorityColors: Record<string, string | undefined> = {
    High: '#f44336',
    Medium: '#ff9800',
    Low: '#4caf50',
    Important: '#f44336',
    'High Priority': '#f44336',
    'Low Priority': '#4caf50'
};

const NewTaskCard: React.FC<NewTaskCardProps> = ({ color, onClose, onSave }) => {
    const [title, setTitle] = useState('Task title');
    const [description, setDescription] = useState('Add description');
    const [priority, setPriority] = useState('Medium');
    const handleSaveClick = () => {
    if (title !== 'Task title' && description !== 'Add description' && priority) {
        onSave({ title, description, priority });
        setTitle('Task title');
        setDescription('Add description');
        setPriority('Medium');
    } else {
        alert('Please fill all the fields!');
    }
};

return (
    <CardItem>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <PriorityLabel priority={priority} >
            <StyledSelect style={{fontSize: "0.7rem",border:"none", outline: "none", padding: "0", color:" #222222", fontWeight:"bold"}} value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
        </StyledSelect>
        </PriorityLabel>
        </div>
        <div>
        <StyledInputTitle maxLength={40} type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
        <StyledInputDescription maxLength={100} value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '20px' }}>
        <StyledButton onClick={handleSaveClick} >Save</StyledButton>
        <StyledButton onClick={onClose} >Close</StyledButton>
        </div>
    </CardItem>
    );
};

export default NewTaskCard;