import React, { useCallback } from 'react';

import { UseColumnDragAndDropProps, UseColumnDragAndDropResult } from '../types/index';

const useColumnDragAndDrop = ({ columnId, onSetDropPosition }: UseColumnDragAndDropProps): UseColumnDragAndDropResult => {

    const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }, []);

    const handleDragEnter = useCallback((index: number | null) => {
        onSetDropPosition(columnId, index)
    }, [onSetDropPosition, columnId])

    return {
        handleDragOver,
        handleDragEnter,
    };
};

export default useColumnDragAndDrop;