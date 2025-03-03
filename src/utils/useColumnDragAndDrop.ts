import { useCallback } from 'react';

import { UseColumnDragAndDropProps, UseColumnDragAndDropResult } from '../types/index';

const useColumnDragAndDrop = ({ columnId, onSetDropPosition, onColumnDragStart, onColumnDrop, onDrop, dropPosition }: UseColumnDragAndDropProps): UseColumnDragAndDropResult => {

    const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }, []);

    const handleDragEnter = useCallback((index: number | null) => {
        onSetDropPosition(columnId, index)
    }, [onSetDropPosition, columnId])

    const handleOnColumnDragStart = useCallback(() => {
        onColumnDragStart(columnId);
    }, [onColumnDragStart, columnId]);

    const handleOnColumnDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        onColumnDrop(columnId, 0);
    }, [onColumnDrop, columnId]);

    const handleOnDropCb = useCallback(() => {
        onDrop(columnId, dropPosition?.index || 0);
    }, [onDrop, columnId, dropPosition]);

    return {
        handleDragOver,
        handleDragEnter,
        handleOnColumnDragStart,
        handleOnColumnDrop,
        handleOnDropCb
    };
};

export default useColumnDragAndDrop;