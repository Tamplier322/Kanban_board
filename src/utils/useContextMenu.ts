import { useState } from 'react';

import { ContextMenuState, UseContextMenuResult } from '@types';

function useContextMenu(): UseContextMenuResult {
    const [contextMenu, setContextMenu] = useState<ContextMenuState | null>(null);

    const handleContextMenu = (event: React.MouseEvent, columnId: string) => {
        event.preventDefault();
        setContextMenu({ x: event.clientX, y: event.clientY, cardId: null, columnId: columnId });
    };

    const handleCloseContextMenu = () => {
        setContextMenu(null);
    };

    return [contextMenu, handleContextMenu, handleCloseContextMenu];
}

export default useContextMenu;