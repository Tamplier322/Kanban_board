import React, { useState, useEffect, useCallback } from 'react';
import Board from './components/Board';
import TaskModal from './components/TaskModal';
import ColumnModal from './components/ColumnModal';
import { AppContainer, AppHeader, AppTitle, AddColumnButton } from './App.styles';
import { v4 as uuidv4 } from 'uuid';

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
          { id: 'todo', title: 'To Do', color: '#4F46E5', cards: [] },
          { id: 'inprogress', title: 'In Progress', color: '#F59E0B', cards: [] },
          { id: 'done', title: 'Done', color: '#22C55E', cards: [] },
        ];
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(initialData));
        return initialData;
      }
    } catch (error) {
      console.error('Error loading data from localStorage:', error);
      return [];
    }
  });

  const [isTaskModalOpen, setTaskModalOpen] = useState(false);
  const [columnIdForTask, setColumnIdForTask] = useState<string | null>(null);

  const [isColumnModalOpen, setColumnModalOpen] = useState(false);

  const handleAddTask = useCallback((columnId: string) => {
    setColumnIdForTask(columnId);
    setTaskModalOpen(true);
  }, []);

  const handleCloseTaskModal = () => {
    setTaskModalOpen(false);
    setColumnIdForTask(null);
  };
    const handleAddColumn = () => {
    setColumnModalOpen(true);
  };

  const handleCloseColumnModal = () => {
    setColumnModalOpen(false);
  };

  const handleNewColumn = (newColumn: {id: string;
  title: string;
  color: string;
  cards: CardType[];}) => {
        setColumns(prevColumns => {
            const updatedColumns = [...prevColumns, newColumn];
            try {
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedColumns));
            } catch (e) {
                console.log("Error saving column")
            }

            return updatedColumns
        })

    }

  const handleAddCard = (columnId: string, newCard: CardType) => {
      setColumns(prevColumns => {
        const updatedColumns = prevColumns.map(col => {
          if (col.id === columnId) {
            return { ...col, cards: [...col.cards, newCard] };
          }
          return col;
        });
        try {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedColumns));
        } catch (e) {
          console.log("Error saving data to localStorage")
        }
        
        return updatedColumns;
      });
  };

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(columns));
    } catch (error) {
      console.error('Error saving data to localStorage:', error);
    }
  }, [columns]);

  return (
    <AppContainer>
      <AppHeader>
        <AppTitle>Kanban Dashboard</AppTitle>
        <AddColumnButton onClick={handleAddColumn}>+</AddColumnButton>
      </AppHeader>
      <Board columns={columns} onAddTask={handleAddTask} />
      <TaskModal 
      isOpen={isTaskModalOpen} 
      onClose={handleCloseTaskModal} 
      columnId={columnIdForTask}
      onAddCard={handleAddCard}
      />
      <ColumnModal 
      isOpen={isColumnModalOpen} 
      onClose={handleCloseColumnModal} 
      onAddColumn={handleNewColumn}/>
    </AppContainer>
  );
};

export default App;