import { useCallback } from 'react';

import { ADDING_CARD_DATA_ERROR, DELETING_CARD_DATA_ERROR, DELETING_COLUMN_DATA_ERROR } from "../constants/errors";
import { CardType,ColumnType } from '../types';
import { addCard, addNewColumn, deleteCard, deleteColumn } from '../utils/columnUtils';
import { UseBoardActionsProps, UseBoardActionsResult } from '../types';

const useBoardActions = ({ setColumns, setColumnModalOpen }: UseBoardActionsProps): UseBoardActionsResult => {

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

    return {
        handleAddColumn,
        handleCloseColumnModal,
        handleNewColumn,
        handleDeleteColumn,
        handleDeleteCard,
        handleAddCard,
    };
};

export default useBoardActions;