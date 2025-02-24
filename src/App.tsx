import React, { useCallback,useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import ErrorBoundary from './/components/common/ErrorBoundary';
import { AddColumnButton,AppContainer, AppHeader, AppTitle } from './App.styles';
import Board from './components/Board';
import ColumnModal from './components/ColumnModal';
import { ADDING_CARD_DATA_ERROR, DELETING_CARD_DATA_ERROR, DELETING_COLUMN_DATA_ERROR, LOAD_DATA_ERROR, SAVING_COLUMN_DATA_ERROR, SAVING_DATA_ERROR } from './constants/errors';
import { initialData } from "./constants/initial-data";
import { LOCAL_STORAGE_KEY } from "./constants/labels";
import { theme } from './theme';

interface CardType {
    id: string;
    title: string;
    description: string;
    priority: string;
}

export interface ColumnType {
    id: string;
    title: string;
    color: string;
    cards: CardType[];
}

const App: React.FC = () => {
    const [columns, setColumns] = useState<ColumnType[]>(() => {
        try {
            const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
            if (storedData) {
                return JSON.parse(storedData);
            } else {
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(initialData));
                return initialData;
            }
        } catch (error) {
            console.error(LOAD_DATA_ERROR, error);
            return [];
        }
    });

    const [isColumnModalOpen, setColumnModalOpen] = useState(false);

    const handleAddColumn = useCallback(() => {
        setColumnModalOpen(true);
    }, [setColumnModalOpen]);

    const handleCloseColumnModal = useCallback(() => {
        setColumnModalOpen(false);
    }, [setColumnModalOpen]);

    const handleNewColumn = useCallback((newColumn: ColumnType) => {
        setColumns(prevColumns => {
            const updatedColumns = [...prevColumns, newColumn];
            try {
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedColumns));
            } catch (e) {
                console.error(SAVING_COLUMN_DATA_ERROR, e);
            }

            return updatedColumns
        });
    },[setColumns]);

    const handleDeleteColumn = useCallback((columnId: string) => {
        setColumns(prevColumns => {
            const updatedColumns = prevColumns.filter(col => col.id !== columnId);
            try {
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedColumns));
            } catch (e) {
                console.error(DELETING_COLUMN_DATA_ERROR, e);
            }

            return updatedColumns;
        });
    }, [setColumns]);

    const handleDeleteCard = useCallback((cardId: string, columnId: string) => {
        setColumns(prevColumns => {
            const updatedColumns = prevColumns.map(col => {
                if (col.id === columnId) {
                    const updatedCards = col.cards.filter(card => card.id !== cardId);
                    return {...col, cards: updatedCards};
                }
                return col;
            });

            try {
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedColumns));
            } catch (e) {
                console.error(DELETING_CARD_DATA_ERROR, e);
            }

            return updatedColumns;
        });
    }, [setColumns]);

    const handleAddCard = useCallback((columnId: string, newCard: CardType) => {
        setColumns(prevColumns => {
            const updatedColumns = prevColumns.map(col => {
                if (col.id === columnId) {
                    return {...col, cards: [...col.cards, newCard]};
                }
                return col;
            });

            try {
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedColumns));
            } catch (e) {
                console.error(ADDING_CARD_DATA_ERROR, e);
            }

            return updatedColumns;
        });
    }, [setColumns]);

    useEffect(() => {
        try {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(columns));
        } catch (error) {
            console.error(SAVING_DATA_ERROR, error);
        }
    }, [columns]);

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