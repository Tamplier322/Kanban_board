import React, { useState, useCallback } from 'react';
import { CardItem, PriorityLabel } from '../Card/Card.styles';
import { StyledButton, StyledSelect, StyledInputTitle, StyledInputDescription, TaskCardHeader, CloseButton, PrioritySelectContainer, ButtonContainer, SelectContainer } from './NewTaskCard.styles';
import styled from 'styled-components';
import { priorityColors } from "../../constants/colors";
import { DEFAULT_PRIORITY, TASK_DESCRIPTION_PLACEHOLDER, TASK_TITLE_PLACEHOLDER } from "../../constants/labels";
import { FILL_ALL_FIELDS } from "../../constants/errors";
import { MAX_TITLE_LENGTH, MAX_DESCRIPTION_LENGTH } from '../../constants/numbers';

interface NewTaskCardProps {
    color: string;
    onClose: () => void;
    onSave: (newTask: { title: string; description: string; priority: string }) => void;
}

interface PriorityLabelProps {
    priority: string | undefined;
    color: string;
}

const NewTaskCard: React.FC<NewTaskCardProps> = ({ color, onClose, onSave }) => {
    const [title, setTitle] = useState(TASK_TITLE_PLACEHOLDER);
    const [description, setDescription] = useState(TASK_DESCRIPTION_PLACEHOLDER);
    const [priority, setPriority] = useState(DEFAULT_PRIORITY);
    const handleSaveClick = () => {
        if (title !== TASK_TITLE_PLACEHOLDER && description !== TASK_DESCRIPTION_PLACEHOLDER && priority) {
            onSave({ title, description, priority });
            setTitle(TASK_TITLE_PLACEHOLDER);
            setDescription(TASK_DESCRIPTION_PLACEHOLDER);
            setPriority(DEFAULT_PRIORITY);
        } else {
            alert(FILL_ALL_FIELDS);
        }
    };

    return (
        <CardItem>
            <PrioritySelectContainer>
                <SelectContainer>
                    <PriorityLabel priority={priority} >
                        <StyledSelect value={priority} onChange={(e) => setPriority(e.target.value)}>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </StyledSelect>
                    </PriorityLabel>
                </SelectContainer>
            </PrioritySelectContainer>
            <div>
                <StyledInputTitle maxLength={MAX_TITLE_LENGTH} type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <StyledInputDescription maxLength={MAX_DESCRIPTION_LENGTH} value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <ButtonContainer>
                <StyledButton onClick={handleSaveClick} >Save</StyledButton>
                <StyledButton onClick={onClose} >Close</StyledButton>
            </ButtonContainer>
        </CardItem>
    );
};

export default NewTaskCard;