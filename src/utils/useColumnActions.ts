import { useCallback } from 'react';

import { UseColumnActionsProps, UseColumnActionsResult } from '../types/index';

const useColumnActions = ({ onDeleteColumn, handleCloseContextMenu, contextMenu }: UseColumnActionsProps): UseColumnActionsResult => {

    const handleDeleteColumn = useCallback(() => {
        if (contextMenu && contextMenu.columnId) {
            onDeleteColumn(contextMenu.columnId);
            handleCloseContextMenu();
        }
    }, [onDeleteColumn, handleCloseContextMenu, contextMenu]);

    return {
        handleDeleteColumn
    };
};

export default useColumnActions;