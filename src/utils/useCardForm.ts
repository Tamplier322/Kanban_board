import { useCallback, useState } from 'react';

import { UseCardFormProps, UseCardFormResult } from '../types';

const useCardForm = ({ card, onEditCard, columnId }: UseCardFormProps): UseCardFormResult => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(card.title);
    const [description, setDescription] = useState(card.description);
    const [priority, setPriority] = useState(card.priority);

    const handleEditClick = useCallback(() => {
        setIsEditing(true);
    }, [setIsEditing]);

    const handleSaveClick = useCallback(() => {
        onEditCard(card.id, columnId, { title, description, priority });
        setIsEditing(false);
    }, [onEditCard, card.id, columnId, title, description, priority]);

    const handleCancelClick = useCallback(() => {
        setTitle(card.title);
        setDescription(card.description);
        setPriority(card.priority);
        setIsEditing(false);
    }, [card.title, card.description, card.priority]);

    const setTitleCb = useCallback((value: string) => {
        setTitle(value);
    }, [setTitle]);

    const setDescriptionCb = useCallback((value: string) => {
        setDescription(value);
    }, [setDescription]);

    const setPriorityCb = useCallback((value: string) => {
        setPriority(value);
    }, [setPriority]);

    return {
        isEditing,
        title,
        description,
        priority,
        handleEditClick,
        handleSaveClick,
        handleCancelClick,
        setTitle: setTitleCb,
        setDescription: setDescriptionCb,
        setPriority: setPriorityCb,
    };
};

export default useCardForm;