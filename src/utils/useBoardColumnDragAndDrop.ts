import { useCallback,useState } from 'react';

import { UseBoardColumnDragAndDropProps, UseBoardColumnDragAndDropResult } from '../types';

const useBoardColumnDragAndDrop = ({ setColumns }: UseBoardColumnDragAndDropProps): UseBoardColumnDragAndDropResult => {
    const [draggedColumnId, setDraggedColumnId] = useState<string | null>(null);

    const handleColumnDragStart = useCallback((columnId: string) => {
        setDraggedColumnId(columnId);
    }, [setDraggedColumnId]);

    const handleColumnDrop = useCallback((targetColumnId: string) => {
        if (!draggedColumnId || draggedColumnId === targetColumnId) return;

        setColumns(prevColumns => {
            const sourceIndex = prevColumns.findIndex(col => col.id === draggedColumnId);
            const targetIndex = prevColumns.findIndex(col => col.id === targetColumnId);

            if (sourceIndex === -1 || targetIndex === -1) return prevColumns;

            const newColumns = [...prevColumns];
            const [draggedColumn] = newColumns.splice(sourceIndex, 1);
            newColumns.splice(targetIndex, 0, draggedColumn);

            return newColumns;
        });

        setDraggedColumnId(null);
    }, [setColumns, draggedColumnId]);

    return {
        draggedColumnId,
        handleColumnDragStart,
        handleColumnDrop,
    };
};

export default useBoardColumnDragAndDrop;