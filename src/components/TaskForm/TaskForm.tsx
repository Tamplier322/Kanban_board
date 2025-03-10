import { useCallback } from 'react';

import { BUTTON_CANCEL, BUTTON_SAVE, INPUT_TEXT, PRIORITY_HIGH, PRIORITY_LOW, PRIORITY_MEDIUM } from '../../constants/labels';
import { TaskFormProps } from '../../types';
import useTaskFormHandlers from '../../utils/useTaskFormHandlers';
import { PriorityLabel } from '../Card/Card.styles';
import { ButtonContainer, PrioritySelectContainer, SelectContainer, StyledButton, StyledInputDescription, StyledInputTitle, StyledSelect } from '../NewTaskCard/NewTaskCard.styles';

const TaskForm: React.FC<TaskFormProps> = ({ title, description, priority, setTitle, setDescription, setPriority, onSave, onCancel }) => {
    const {
        titleValue,
        descriptionValue,
        handleTitleFocus,
        handleTitleBlur,
        handleDescriptionFocus,
        handleDescriptionBlur,
        handleTitleChange,
        handleDescriptionChange,
    } = useTaskFormHandlers({ title, description, setTitle, setDescription });

    const handlePriorityChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setPriority(e.target.value);
    }, [setPriority]);

    return (
        <>
            <PrioritySelectContainer>
                <SelectContainer>
                    <PriorityLabel priority={priority} >
                        <StyledSelect value={priority} onChange={handlePriorityChange} aria-label="Priority">
                            <option value={PRIORITY_HIGH}>{PRIORITY_HIGH}</option>
                            <option value={PRIORITY_MEDIUM}>{PRIORITY_MEDIUM}</option>
                            <option value={PRIORITY_LOW}>{PRIORITY_LOW}</option>
                        </StyledSelect>
                    </PriorityLabel>
                </SelectContainer>
            </PrioritySelectContainer>
            <div>
                <StyledInputTitle
                    type={INPUT_TEXT}
                    value={titleValue}
                    onChange={handleTitleChange}
                    onFocus={handleTitleFocus}
                    onBlur={handleTitleBlur}
                    aria-label="Title"
                />
            </div>
            <div>
                <StyledInputDescription
                    value={descriptionValue}
                    onChange={handleDescriptionChange}
                    onFocus={handleDescriptionFocus}
                    onBlur={handleDescriptionBlur}
                    aria-label="Description"
                />
            </div>
            <ButtonContainer>
                <StyledButton onClick={onSave}>{BUTTON_SAVE}</StyledButton>
                <StyledButton onClick={onCancel}>{BUTTON_CANCEL}</StyledButton>
            </ButtonContainer>
        </>
    );
};

export default TaskForm;