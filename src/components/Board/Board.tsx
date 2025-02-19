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
      onAddCard: (columnId: string, newCard: CardType) => void;
}

const Board: React.FC<BoardProps> = ({ columns, onAddCard }) => {

  return (
    <BoardContainer>
      {columns.map((column) => (
        <Column key={column.id} column={column} onAddCard={onAddCard} />
      ))}
    </BoardContainer>
  );
};

export default Board;