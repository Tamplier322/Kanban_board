import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { AddColumnButton, AppContainer, AppHeader, AppTitle } from './App.styles';
import Board from './components/Board';
import ColumnModal from './components/ColumnModal';
import ErrorBoundary from './components/common/ErrorBoundary';
import { DASH } from './constants/labels';
import { theme } from './theme/theme';
import useBoardActions from "./utils/useBoardActions";
import useBoardColumnDragAndDrop from "./utils/useBoardColumnDragAndDrop";
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
        handleDeleteColumn, handleEditCard} = useBoardActions({setColumns, setColumnModalOpen})

    const {dropPosition, handleDragStart, handleDrop, handleOnDragEnter} = useBoardDragAndDrop({setColumns})
    const { handleColumnDrop, handleColumnDragStart } = useBoardColumnDragAndDrop({ setColumns });

    return (
        <ThemeProvider theme={theme}>
            <AppContainer>
                <AppHeader>
                    <AppTitle>{DASH}</AppTitle>
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
                        onColumnDrop = {handleColumnDrop}
                        onColumnDragStart = {handleColumnDragStart}
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