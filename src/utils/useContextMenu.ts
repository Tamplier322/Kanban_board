import { useState } from 'react';

interface ContextMenuState {
    x: number;
    y: number;
    cardId: string | null;
    columnId: string | null;
}

type UseContextMenuResult = [
    ContextMenuState | null,
    (event: React.MouseEvent, columnId: string) => void,
    () => void
    ];

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