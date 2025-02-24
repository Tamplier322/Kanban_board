import React, { useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { AddColumnButton, AppContainer, AppHeader, AppTitle } from './App.styles';
import Board from './components/Board';
import ColumnModal from './components/ColumnModal';
import ErrorBoundary from './components/common/ErrorBoundary';
import {
    ADDING_CARD_DATA_ERROR,
    DELETING_CARD_DATA_ERROR,
    DELETING_COLUMN_DATA_ERROR
} from "./constants/errors";
import { theme } from './theme';
import { CardType,ColumnType } from './types/index';
import { addCard,addNewColumn, deleteCard, deleteColumn } from './utils/columnUtils';
import useLocalStorageColumns from './utils/useLocalStorage';

const App: React.FC = () => {
    const [columns, setColumns] = useLocalStorageColumns();
    const [isColumnModalOpen, setColumnModalOpen] = useState(false);

    const handleAddColumn = useCallback(() => {
        setColumnModalOpen(true);
    }, [setColumnModalOpen]);

    const handleCloseColumnModal = useCallback(() => {
        setColumnModalOpen(false);
    }, [setColumnModalOpen]);

    const handleNewColumn = useCallback((newColumn: ColumnType) => {
        try {
            setColumns(prevColumns => addNewColumn(prevColumns, newColumn));
        } catch (e) {
            console.error(ADDING_CARD_DATA_ERROR, e);
        }
    }, [setColumns]);

    const handleDeleteColumn = useCallback((columnId: string) => {
        try {
            setColumns(prevColumns => deleteColumn(prevColumns, columnId));
        } catch (e) {
            console.error(DELETING_COLUMN_DATA_ERROR, e);
        }
    }, [setColumns]);

    const handleDeleteCard = useCallback((cardId: string, columnId: string) => {
        try {
            setColumns(prevColumns => deleteCard(prevColumns, cardId, columnId));
        } catch (e) {
            console.error(DELETING_CARD_DATA_ERROR, e);
        }
    }, [setColumns]);

    const handleAddCard = useCallback((columnId: string, newCard: CardType) => {
        try {
            setColumns(prevColumns => addCard(prevColumns, columnId, newCard));
        } catch (e) {
            console.error(ADDING_CARD_DATA_ERROR, e);
        }
    }, [setColumns]);

    return (
        <ThemeProvider theme={theme}>
            <AppContainer>
                <AppHeader>
                    <AppTitle>Kanban Dashboard</AppTitle>
                    <AddColumnButton onClick={handleAddColumn}>+</AddColumnButton>
                </AppHeader>
                <ErrorBoundary>
                    <Board
                        columns={columns}
                        onAddCard={handleAddCard}
                        onDeleteCard={handleDeleteCard}
                        onDeleteColumn={handleDeleteColumn}/>
                </ErrorBoundary>
                <ColumnModal
                    isOpen={isColumnModalOpen}
                    onClose={handleCloseColumnModal}
                    onAddColumn={handleNewColumn}/>
            </AppContainer>
        </ThemeProvider>
    );
};

export default App;