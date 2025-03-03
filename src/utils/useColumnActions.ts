import { useCallback } from 'react';

import { UseColumnActionsProps, UseColumnActionsResult } from '../types/index';

const useColumnActions = ({ onDeleteColumn, handleCloseContextMenu, contextMenu, column }: UseColumnActionsProps): UseColumnActionsResult => {

    const handleDeleteColumnCb = useCallback(() => {
        if (contextMenu && contextMenu.columnId) {
            onDeleteColumn(column.id);
            handleCloseContextMenu();
        }
    }, [onDeleteColumn, handleCloseContextMenu, contextMenu, column.id]);

    return {
        handleDeleteColumn: handleDeleteColumnCb
    };
};

export default useColumnActions;