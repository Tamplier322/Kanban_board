import { useCallback, useEffect,useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { DEFAULT_COLUMN_COLOR } from "@constants/colors";
import { ADD_TITLE_PLACEHOLDER, EMPLTY_INPUT } from "@constants/labels";
import { UseColumnModalFormProps, UseColumnModalFormResult } from '@types';
import { rgbToHex } from "@utils/colorUtils";


const useColumnModalForm = ({ onAddColumn, onClose, isOpen }: UseColumnModalFormProps): UseColumnModalFormResult => {
    const [title, setTitle] = useState(ADD_TITLE_PLACEHOLDER);
    const [color, setColor] = useState(rgbToHex(DEFAULT_COLUMN_COLOR));

    useEffect(() => {
        if (isOpen) {
            setTitle(ADD_TITLE_PLACEHOLDER);
        }
    }, [isOpen]);

    const handleSave = useCallback(() => {
        if (title) {
            const newColumn = {
                id: uuidv4(),
                title: title,
                color: color,
                cards: [],
            };
            onAddColumn(newColumn);
            setTitle(EMPLTY_INPUT);
            setColor(rgbToHex(DEFAULT_COLUMN_COLOR));
            onClose();
        }
    }, [title, color, onAddColumn, onClose]);

    return {
        title,
        color,
        setTitle,
        setColor,
        handleSave,
    };
};

export default useColumnModalForm;