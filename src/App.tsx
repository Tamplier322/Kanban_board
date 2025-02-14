import React, { useState } from 'react';
import Board from './components/Board';
import TaskModal from './components/TaskModal';
import ColumnModal from './components/ColumnModal';
import { AppContainer, AppHeader, AppTitle, AddColumnButton } from './App.styles';

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
  onAddTask: () => void;
}

const App: React.FC = () => {
  const [columns, setColumns] = useState<ColumnType[]>([
    { id: 'todo', title: 'To Do', color: '#4F46E5', cards: [
      { id: '1', title: 'Task 1', description: 'Description 1', priority: 'High' },
      { id: '2', title: 'Task 2', description: 'Description 2', priority: 'Medium' },
    ], onAddTask: () => handleAddTask() },
    { id: 'inprogress', title: 'In Progress', color: '#F59E0B', cards: [
      { id: '3', title: 'Task 3', description: 'Description 3', priority: 'Medium' },
      { id: '4', title: 'Task 4', description: 'Description 4', priority: 'Low' },
    ], onAddTask: () => handleAddTask() },
    { id: 'done', title: 'Done', color: '#22C55E', cards: [
      { id: '5', title: 'Task 5', description: 'Description 5', priority: 'High' },
      { id: '6', title: 'Task 6', description: 'Description 6', priority: 'Medium' },
      { id: '7', title: 'Task 7', description: 'Description 7', priority: 'Low' },
    ], onAddTask: () => handleAddTask() },
  ]);
  const [isTaskModalOpen, setTaskModalOpen] = useState(false);
  const [isColumnModalOpen, setColumnModalOpen] = useState(false);

  const handleAddTask = () => {
    setTaskModalOpen(true);
  };

  const handleCloseTaskModal = () => {
    setTaskModalOpen(false);
  };
    const handleAddColumn = () => {
    setColumnModalOpen(true);
  };

  const handleCloseColumnModal = () => {
    setColumnModalOpen(false);
  };

  return (
    <AppContainer>
      <AppHeader>
        <AppTitle>Kanban Dashboard</AppTitle>
        <AddColumnButton onClick={handleAddColumn}>+</AddColumnButton>
      </AppHeader>
      <Board columns={columns} onAddTask={handleAddTask} />
      <TaskModal isOpen={isTaskModalOpen} onClose={handleCloseTaskModal} />
      <ColumnModal isOpen={isColumnModalOpen} onClose={handleCloseColumnModal} />
    </AppContainer>
  );
};

export default App;