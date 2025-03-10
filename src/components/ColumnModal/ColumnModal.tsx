import { useCallback } from "react";

import { COLUMN_TITLE_ERROR } from "../../constants/errors";
import { ADD_TITLE_PLACEHOLDER, BUTTON_CANCEL, BUTTON_SAVE, INPUT_COLOR, INPUT_TEXT } from '../../constants/labels';
import { MAX_COLUMN_TITLE_LENGTH } from '../../constants/numbers';
import { ColumnModalProps } from "../../types/index";
import useAlert from "../../utils/useAlert";
import useColumnModalForm from "../../utils/useColumnModalForm";
import useColumnModalHandlers from "../../utils/useColumnModalHandlers";
import Alert from "../Alert/Alert";
import {
    ButtonContainer,
    ModalContainer,
    ModalContent,
    StyledButton1,
    StyledInputColor,
    StyledInputTitle,
} from './ColumnModal.styles';

const ColumnModal: React.FC<ColumnModalProps> = ({ isOpen, onClose, onAddColumn }) => {
    const {
        title,
        setTitle,
        color,
        setColor,
        handleSave
    } = useColumnModalForm({ onAddColumn, onClose, isOpen });

    const [alertMessage, showAlert, closeAlert] = useAlert();
    const {
        titleValue,
        handleTitleChange,
        handleTitleFocus,
        handleTitleBlur,
        handleColorChange,
    } = useColumnModalHandlers({ title, setTitle, color, setColor, handleSave, isOpen });

    const handleSaveClick = useCallback(() => {
        if (title !== ADD_TITLE_PLACEHOLDER) {
            handleSave();
            return;
        }
        else {
            showAlert(COLUMN_TITLE_ERROR);
        }
    }, [title, handleSave, showAlert]);

    return isOpen ? (
        <ModalContainer>
            <ModalContent>
                <div>
                    <StyledInputTitle
                        maxLength={MAX_COLUMN_TITLE_LENGTH}
                        type={INPUT_TEXT}
                        value={titleValue}
                        onChange={handleTitleChange}
                        onFocus={handleTitleFocus}
                        onBlur={handleTitleBlur}
                    />
                </div>
                <div>
                    <StyledInputColor
                        type={INPUT_COLOR}
                        id={INPUT_COLOR}
                        value={color}
                        onChange={handleColorChange}
                    />
                </div>
                <ButtonContainer>
                    <StyledButton1 onClick={handleSaveClick}>{BUTTON_SAVE}</StyledButton1>
                    <StyledButton1 onClick={onClose}>{BUTTON_CANCEL}</StyledButton1>
                </ButtonContainer>
            </ModalContent>
            {alertMessage && <Alert message={alertMessage} onClose={closeAlert} />}
        </ModalContainer>
    ) : null;
};

export default ColumnModal;