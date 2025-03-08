import { useCallback,useState } from 'react';

import { TASK_DESCRIPTION_PLACEHOLDER,TASK_TITLE_PLACEHOLDER } from '../constants/labels';
import { UseTaskFormHandlersProps, UseTaskFormHandlersResult } from '../types/index';


const useTaskFormHandlers = ({ title, description, setTitle, setDescription }: UseTaskFormHandlersProps): UseTaskFormHandlersResult => {
    const [titleValue, setTitleValue] = useState(title);
    const [descriptionValue, setDescriptionValue] = useState(description);

    const handleTitleFocus = useCallback(() => {
        if (titleValue === TASK_TITLE_PLACEHOLDER) {
            setTitleValue('');
            setTitle('');
        }
    }, [titleValue, setTitle]);

    const handleTitleBlur = useCallback(() => {
        if (titleValue === '') {
            setTitleValue(TASK_TITLE_PLACEHOLDER);
            setTitle(TASK_TITLE_PLACEHOLDER);
        }
    }, [titleValue, setTitle]);

    const handleDescriptionFocus = useCallback(() => {
        if (descriptionValue === TASK_DESCRIPTION_PLACEHOLDER) {
            setDescriptionValue('');
            setDescription('');
        }
    }, [descriptionValue, setDescription]);

    const handleDescriptionBlur = useCallback(() => {
        if (descriptionValue === '') {
            setDescriptionValue(TASK_DESCRIPTION_PLACEHOLDER);
            setDescription('');
        }
    }, [descriptionValue, setDescription]);

    const handleTitleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setTitleValue(e.target.value);
        setTitle(e.target.value);
    }, [setTitle]);

    const handleDescriptionChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setDescriptionValue(e.target.value);
        setDescription(e.target.value);
    }, [setDescription]);

    return {
        titleValue,
        descriptionValue,
        handleTitleFocus,
        handleTitleBlur,
        handleDescriptionFocus,
        handleDescriptionBlur,
        handleTitleChange,
        handleDescriptionChange,
    };
};

export default useTaskFormHandlers;