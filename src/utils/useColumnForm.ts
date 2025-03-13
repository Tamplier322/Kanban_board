import { useCallback, useEffect,useRef, useState } from 'react';

import { ColumnType } from '@types';

interface UseColumnFormProps {
    column: ColumnType;
    onEditColumn: (columnId: string, newColumn: { title: string;}) => void;
    handleCloseContextMenu: () => void;
}

interface UseColumnFormResult {
    isEditing: boolean;
    title: string;
    inputRef: React.RefObject<HTMLInputElement | null>;
    handleEditClick: () => void;
    handleSaveClick: () => void;
    handleCancelClick: () => void;
    handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const useColumnForm = ({ column, onEditColumn, handleCloseContextMenu }: UseColumnFormProps): UseColumnFormResult => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(column.title);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleEditClick = useCallback(() => {
        setIsEditing(true);
        handleCloseContextMenu();
    }, [handleCloseContextMenu, setIsEditing]);

    const handleSaveClick = useCallback(() => {
        onEditColumn(column.id, { title });
        setIsEditing(false);
    }, [onEditColumn, column.id, title, setIsEditing]);

    const handleCancelClick = useCallback(() => {
        setTitle(column.title);
        setIsEditing(false);
    }, [column.title, setIsEditing]);

    const handleTitleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }, [setTitle]);

    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSaveClick();
        } else if (e.key === 'Escape') {
            handleCancelClick();
        }
    }, [handleSaveClick, handleCancelClick]);

    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isEditing]);

    return {
        isEditing,
        title,
        inputRef,
        handleEditClick,
        handleSaveClick,
        handleCancelClick,
        handleTitleChange,
        handleKeyDown,
    };
};

export default useColumnForm;