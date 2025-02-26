import React from 'react';

import { COLUMN_TITLE_ERROR } from "../../constants/errors";
import { ADD_TITLE_PLACEHOLDER } from '../../constants/labels';
import { MAX_COLUMN_TITLE_LENGTH } from '../../constants/numbers';
import useAlert from "../../utils/useAlert";
import useColumnModalForm from "../../utils/useColumnModalForm";
import Alert from "../Alert/Alert";
import {
    ButtonContainer,
    ModalContainer,
    ModalContent,
    StyledButton1,
    StyledInputColor,
    StyledInputTitle,
} from './ColumnModal.styles';
import { ColumnModalProps } from './interface';

const ColumnModal: React.FC<ColumnModalProps> = ({ isOpen, onClose, onAddColumn }) => {
    const {
        title,
        setTitle,
        color,
        setColor,
        handleSave
    } = useColumnModalForm({ onAddColumn, onClose, isOpen });

    const [alertMessage, showAlert, closeAlert] = useAlert();  
    
    if (!isOpen) return null;

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value);
    };

    const handleSaveClick = () => {
        if (title !== ADD_TITLE_PLACEHOLDER) {
            handleSave();
            return;
        }
        else {
            showAlert(COLUMN_TITLE_ERROR);
        }
    };

    return (
        <ModalContainer>
            <ModalContent>
                <div>
                    <StyledInputTitle
                        maxLength={MAX_COLUMN_TITLE_LENGTH}
                        type="text"
                        value={title}
                        onChange={handleTitleChange}
                    />
                </div>
                <div>
                    <StyledInputColor
                        type="color"
                        id="color"
                        value={color}
                        onChange={handleColorChange}
                    />
                </div>
                <ButtonContainer>
                    <StyledButton1 onClick={handleSaveClick}>Save</StyledButton1>
                    <StyledButton1 onClick={onClose}>Close</StyledButton1>
                </ButtonContainer>
            </ModalContent>
            {alertMessage && <Alert message={alertMessage} onClose={closeAlert} />}
        </ModalContainer>
    );
};

export default ColumnModal;