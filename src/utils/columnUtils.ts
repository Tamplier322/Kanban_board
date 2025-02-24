import { CardType, ColumnType } from '../types/index';

export const addNewColumn = (prevColumns: ColumnType[], newColumn: ColumnType): ColumnType[] => {
    return [...prevColumns, newColumn];
};

export const deleteColumn = (prevColumns: ColumnType[], columnId: string): ColumnType[] => {
    return prevColumns.filter(col => col.id !== columnId);
};

export const deleteCard = (prevColumns: ColumnType[], cardId: string, columnId: string): ColumnType[] => {
    return prevColumns.map(col => {
        if (col.id === columnId) {
            const updatedCards = col.cards.filter(card => card.id !== cardId);
            return { ...col, cards: updatedCards };
        }
        return col;
    });
};

export const addCard = (prevColumns: ColumnType[], columnId: string, newCard: CardType): ColumnType[] => {
    return prevColumns.map(col => {
        if (col.id === columnId) {
            return { ...col, cards: [...col.cards, newCard] };
        }
        return col;
    });
};