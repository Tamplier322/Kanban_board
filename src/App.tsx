import { useState } from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AddColumnButton, AppContainer, AppHeader, AppTitle, BurgerButton } from './App.styles';
import Board from './components/Board';
import ColumnModal from './components/ColumnModal';
import ErrorBoundary from './components/common/ErrorBoundary';
import NotFound from "./components/NotFound/NotFound";
import Sidebar from "./components/Sidebar/Sidebar";
import { DASH } from './constants/labels';
import { theme } from './theme/theme';
import useBoardActions from "./utils/useBoardActions";
import useBoardColumnDragAndDrop from "./utils/useBoardColumnDragAndDrop";
import useBoardDragAndDrop from "./utils/useBoardDragAndDrop";
import useLocalStorageColumns from './utils/useLocalStorage';

const App: React.FC = () => {
    const [columns, setColumns] = useLocalStorageColumns();
    const [isColumnModalOpen, setColumnModalOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const {handleNewColumn,
        handleCloseColumnModal,
        handleAddColumn,
        handleDeleteCard,
        handleAddCard,
        handleDeleteColumn, 
        handleEditCard,  
        handleEditColumn } = useBoardActions({setColumns, setColumnModalOpen})

    const {dropPosition, handleDragStart, handleDrop, handleOnDragEnter} = useBoardDragAndDrop({setColumns})
    const { handleColumnDrop, handleColumnDragStart } = useBoardColumnDragAndDrop({ setColumns });

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <AppContainer>
                    <AppHeader>
                        <BurgerButton onClick={toggleSidebar}>☰</BurgerButton>
                        <AppTitle>{DASH}</AppTitle>
                        <AddColumnButton onClick={handleAddColumn}>+</AddColumnButton>
                    </AppHeader>
                    <ErrorBoundary>
                        <Routes>
                            <Route path="/" element={<>
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
                                    onEditColumn = {handleEditColumn}
                                />
                                <ColumnModal
                                    isOpen={isColumnModalOpen}
                                    onClose={handleCloseColumnModal}
                                    onAddColumn={handleNewColumn}/>
                                    </>}/>
                                <Route path="*" element={<NotFound />} />
                        </Routes>
                    </ErrorBoundary>
                    <Sidebar
                        isOpen={isSidebarOpen}
                        onClose={toggleSidebar}
                        onAddColumn={handleAddColumn}
                    />
                </AppContainer>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;