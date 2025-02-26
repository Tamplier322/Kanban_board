import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { AddColumnButton, AppContainer, AppHeader, AppTitle } from './App.styles';
import Board from './components/Board';
import ColumnModal from './components/ColumnModal';
import ErrorBoundary from './components/common/ErrorBoundary';
import { theme } from './theme';
import useBoardActions from "./utils/useBoardActions";
import useBoardDragAndDrop from "./utils/useBoardDragAndDrop";
import useLocalStorageColumns from './utils/useLocalStorage';

const App: React.FC = () => {
    const [columns, setColumns] = useLocalStorageColumns();
    const [isColumnModalOpen, setColumnModalOpen] = useState(false);
    const {handleNewColumn,
        handleCloseColumnModal,
        handleAddColumn,
        handleDeleteCard,
        handleAddCard,
        handleDeleteColumn,
        handleEditCard} = useBoardActions({setColumns, setColumnModalOpen})
    const { dropPosition, handleDragStart, handleDrop, handleOnDragEnter} = useBoardDragAndDrop({setColumns})

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
                        onDeleteColumn={handleDeleteColumn}
                        onDragStart={handleDragStart}
                        onDrop={handleDrop}
                        dropPosition = {dropPosition}
                        onSetDropPosition = {handleOnDragEnter}
                        onEditCard = {handleEditCard}
                    />
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