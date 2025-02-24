import React, { useState, useEffect, useCallback } from 'react';
import Board from './components/Board';
import ColumnModal from './components/ColumnModal';
import { AppContainer, AppHeader, AppTitle, AddColumnButton } from './App.styles';
import { v4 as uuidv4 } from 'uuid';
import ErrorBoundary from './/components/common/ErrorBoundary';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

interface CardType {
    id: string;
    title: string;
    description: string;
    priority: string;
}

interface ColumnType {
    id: string;
    title: string;
    color: string;
    cards: CardType[];
}

const LOCAL_STORAGE_KEY = 'kanban-data';

const App: React.FC = () => {
    const [columns, setColumns] = useState<ColumnType[]>(() => {
        try {
            const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
            if (storedData) {
                return JSON.parse(storedData);
            } else {
                const initialData: ColumnType[] = [
                    {id: 'todo', title: 'To Do', color: '#4F46E5', cards: []},
                    {id: 'inprogress', title: 'In Progress', color: '#F59E0B', cards: []},
                    {id: 'done', title: 'Done', color: '#22C55E', cards: []},
                ];
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(initialData));
                return initialData;
            }
        } catch (error) {
            console.error('Error loading data from localStorage:', error);
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
                console.error("Error saving new column to localStorage", e);
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
                console.error("Error deleting column from localStorage", e);
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
                console.error("Error deleting card from localStorage", e);
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
                console.error("Error adding card to localStorage", e);
            }

            return updatedColumns;
        });
    }, [setColumns]);

    useEffect(() => {
        try {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(columns));
        } catch (error) {
            console.error('Error saving data to localStorage:', error);
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