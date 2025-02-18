import React from 'react';
import { BoardContainer} from './Board.styles';
import Column from '../Column';

interface CardType {
  id: string;
  title: string;
  description: string;
  priority: string;
}

interface BoardProps {
    columns: {
      id: string;
      title: string;
      color: string;
      cards: CardType[];
    }[];
    onAddTask: (columnId: string) => void;
}

const Board: React.FC<BoardProps> = ({ columns, onAddTask }) => {

  const renderColumn = (column: { id: string; title: string; color: string; cards: CardType[]; }) => (
    <Column key={column.id} column={column} onAddTask={onAddTask} />
  );

  return (
    <BoardContainer>
      {columns.map(renderColumn)}
    </BoardContainer>
  );
};

export default Board;