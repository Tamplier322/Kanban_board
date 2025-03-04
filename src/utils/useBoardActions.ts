import { useCallback } from 'react';

import { ADDING_CARD_DATA_ERROR, DELETING_CARD_DATA_ERROR, DELETING_COLUMN_DATA_ERROR } from "../constants/errors";
import { LOCAL_STORAGE_KEY } from "../constants/labels"
import { CardType,ColumnType } from '../types';
import { UseBoardActionsProps, UseBoardActionsResult } from '../types';
import { addCard, addNewColumn, deleteCard, deleteColumn } from '../utils/columnUtils';

export const useBoardActions = ({ setColumns, setColumnModalOpen }: UseBoardActionsProps): UseBoardActionsResult => {

    const handleAddColumn = useCallback(() => {
        setColumnModalOpen(true);
    }, [setColumnModalOpen]);

    const handleCloseColumnModal = useCallback(() => {
        setColumnModalOpen(false);
    }, [setColumnModalOpen]);

    const handleNewColumn = useCallback((newColumn: ColumnType) => {
        setColumns(prevColumns => {
            try {
                return addNewColumn(prevColumns, newColumn)
            } catch (e) {
                console.error(ADDING_CARD_DATA_ERROR, e);
                return prevColumns
            }
        });
    }, [setColumns]);

    const handleDeleteColumn = useCallback((columnId: string) => {
        setColumns(prevColumns => {
            try {
                return deleteColumn(prevColumns, columnId)
            } catch (e) {
                console.error(DELETING_COLUMN_DATA_ERROR, e);
                return prevColumns
            }
        });
    }, [setColumns]);

    const handleDeleteCard = useCallback((cardId: string, columnId: string) => {
        setColumns(prevColumns => {
            try {
                return deleteCard(prevColumns, cardId, columnId)
            } catch (e) {
                console.error(DELETING_CARD_DATA_ERROR, e);
                return prevColumns
            }
        });
    }, [setColumns]);

    const handleAddCard = useCallback((columnId: string, newCard: CardType) => {
        setColumns(prevColumns => {
            try {
                return addCard(prevColumns, columnId, newCard)
            } catch (e) {
                console.error(ADDING_CARD_DATA_ERROR, e);
                return prevColumns
            }
        });
    }, [setColumns]);
    const handleEditCard = useCallback((cardId: string, columnId: string, newCard: { title: string; description: string; priority: string }) => {
        setColumns(prevColumns => {
            const updatedColumns = prevColumns.map(col => {
                if (col.id === columnId) {
                    const updatedCards = col.cards.map(card => {
                        if (card.id === cardId) {
                            return { ...card, ...newCard };
                        }
                        return card;
                    });
                    return { ...col, cards: updatedCards };
                }
                return col;
            });
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedColumns));
            return updatedColumns;
        });
    }, [setColumns]);

    const handleEditColumn = useCallback((columnId: string, newColumn: { title: string;}) => {
        setColumns(prevColumns => {
            return prevColumns.map(col => {
                if (col.id === columnId) {
                    return { ...col, ...newColumn };
                }
                return col;
            });
        });
    }, [setColumns]);

    return {
        handleAddColumn,
        handleCloseColumnModal,
        handleNewColumn,
        handleDeleteColumn,
        handleDeleteCard,
        handleAddCard,
        handleEditCard,
        handleEditColumn
    };
};

export default useBoardActions;