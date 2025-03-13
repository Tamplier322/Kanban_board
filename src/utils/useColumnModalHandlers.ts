import { useCallback, useEffect,useState } from "react";

import { ADD_TITLE_PLACEHOLDER } from '@constants/labels';
import { UseColumnModalHandlersProps, UseColumnModalHandlersResult } from '@types';

const useColumnModalHandlers = ({ title, setTitle, setColor, isOpen }: UseColumnModalHandlersProps): UseColumnModalHandlersResult => {
    const [titleValue, setTitleValue] = useState(title);

    const handleTitleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setTitleValue(e.target.value);
        setTitle(e.target.value);
    }, [setTitle]);

    const handleTitleFocus = useCallback(() => {
        if (titleValue === ADD_TITLE_PLACEHOLDER) {
            setTitleValue('');
            setTitle('');
        }
    }, [titleValue, setTitle]);

    const handleTitleBlur = useCallback(() => {
        if (titleValue === '') {
            setTitleValue(ADD_TITLE_PLACEHOLDER);
            setTitle(ADD_TITLE_PLACEHOLDER);
        }
    }, [titleValue, setTitle]);

    const handleColorChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value);
    }, [setColor]);

    useEffect(() => {
        if (!isOpen) return;
    }, [isOpen, handleTitleChange, handleTitleFocus, handleTitleBlur, handleColorChange]);

    return {
        titleValue,
        handleTitleChange,
        handleTitleFocus,
        handleTitleBlur,
        handleColorChange,
    };
};

export default useColumnModalHandlers;