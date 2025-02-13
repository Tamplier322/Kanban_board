import React from 'react';
import Board from './components/Board';
import { AppContainer } from './App.styles';

const App: React.FC = () => {
  const initialColumns = [
    { id: 'todo', title: 'To Do', color: 'red' },
    { id: 'inprogress', title: 'In Progress', color: 'blue' },
    { id: 'done', title: 'Done', color: 'green' },
  ];

  return (
    <AppContainer>
      <Board columns={initialColumns} />
    </AppContainer>
  );
};

export default App;
