import { useCallback, useState } from 'react';

import { UseCardFormProps, UseCardFormResult } from '@types';

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
    }, [onEditCard, card.id, columnId, title, description, priority, setIsEditing]);

    const handleCancelClick = useCallback(() => {
        setTitle(card.title);
        setDescription(card.description);
        setPriority(card.priority);
        setIsEditing(false);
    }, [card.title, card.description, card.priority, setIsEditing]);

    const setTitleCb = useCallback((title: string) => {
        setTitle(title)
    }, [setTitle])

    const setDescriptionCb = useCallback((description: string) => {
        setDescription(description)
    }, [setDescription])

    const setPriorityCb = useCallback((priority: string) => {
        setPriority(priority)
    }, [setPriority])

    return {
        isEditing,
        title,
        description,
        priority,
        setTitle: setTitleCb,
        setDescription: setDescriptionCb,
        setPriority: setPriorityCb,
        handleEditClick,
        handleSaveClick,
        handleCancelClick,
    };
};

export default useCardForm;