import { useCallback,useState } from 'react';

import { CardType, ColumnType } from '@types';
import { DraggedItem, DropPositionDND, UseBoardDragAndDropProps, UseBoardDragAndDropResult } from '@types';
import { insertItem } from "@utils/insert";

const useBoardDragAndDrop = ({ setColumns }: UseBoardDragAndDropProps): UseBoardDragAndDropResult => {
    const [draggedItem, setDraggedItem] = useState<DraggedItem | null>(null);
    const [dropPosition, setDropPosition] = useState<DropPositionDND>({ columnId: null, index: null, position: null });

    const handleDragStart = useCallback((cardId: string, columnId: string) => {
        setDraggedItem({ cardId: cardId, sourceColumnId: columnId });
    }, [setDraggedItem]);

    const handleDrop = useCallback((targetColumnId: string, dropIndex: number | null) => {
        if (!draggedItem) return;

        setColumns(prevColumns => {
            let draggedCard: CardType | null = null;
            const sourceColumns: ColumnType[] = prevColumns.map(col => {
                if (col.id === draggedItem.sourceColumnId) {
                    const card = col.cards.find(c => c.id === draggedItem.cardId) || null;
                    if(card) draggedCard = card
                    return { ...col, cards: col.cards.filter(c => c.id !== draggedItem.cardId && card != null) };
                }
                return col;
            });

            if (!draggedCard) return prevColumns;

            const targetColumns = sourceColumns.map(col => {
                if (col.id === targetColumnId) {
                    const newCards = draggedCard ? insertItem(col.cards, draggedCard, dropIndex !== null ? dropIndex : col.cards.length) : col.cards;
                    return { ...col, cards: newCards };
                }
                return col;
            });

            return targetColumns;
        });

        setDraggedItem(null);
        setDropPosition({columnId: null, index: null, position: null})
    }, [setColumns, draggedItem]);

    const handleOnDragEnter = useCallback((columnId:string, index: number | null) => {
        setDropPosition({columnId: columnId, index: index, position: 'before' })
    }, [setDropPosition])

    return {
        draggedItem,
        dropPosition,
        handleDragStart,
        handleDrop,
        handleOnDragEnter,
    };
};

export default useBoardDragAndDrop;