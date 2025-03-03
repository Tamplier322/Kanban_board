import React from 'react';

import { BUTTON_CANCEL,BUTTON_SAVE, INPUT_TEXT, PRIORITY_HIGH, PRIORITY_LOW, PRIORITY_MEDIUM } from '../../constants/labels';
import { PriorityLabel } from '../Card/Card.styles';
import { ButtonContainer, PrioritySelectContainer, SelectContainer, StyledButton, StyledInputDescription, StyledInputTitle, StyledSelect } from '../NewTaskCard/NewTaskCard.styles';
interface TaskFormProps {
    title: string;
    description: string;
    priority: string;
    setTitle: (value: string) => void;
    setDescription: (value: string) => void;
    setPriority: (value: string) => void;
    onSave: () => void;
    onCancel: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ title, description, priority, setTitle, setDescription, setPriority, onSave, onCancel }) => {
    return (
        <>
            <PrioritySelectContainer>
                <SelectContainer>
                    <PriorityLabel priority={priority} >
                        <StyledSelect value={priority} onChange={(e) => setPriority(e.target.value)}>
                            <option value={PRIORITY_HIGH}>{PRIORITY_HIGH}</option>
                            <option value={PRIORITY_MEDIUM}>{PRIORITY_MEDIUM}</option>
                            <option value={PRIORITY_LOW}>{PRIORITY_LOW}</option>
                        </StyledSelect>
                    </PriorityLabel>
                </SelectContainer>
            </PrioritySelectContainer>
            <div>
                <StyledInputTitle type={INPUT_TEXT} value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <StyledInputDescription value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <ButtonContainer>
                <StyledButton onClick={onSave}>{BUTTON_SAVE}</StyledButton>
                <StyledButton onClick={onCancel}>{BUTTON_CANCEL}</StyledButton>
            </ButtonContainer>
        </>
    );
};

export default TaskForm;