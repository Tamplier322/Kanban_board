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
    onDeleteCard: (cardId: string, columnId: string) => void;
    onDeleteColumn: (columnId:string) => void;
}

const Board: React.FC<BoardProps> = ({ columns, onAddCard, onDeleteCard, onDeleteColumn }) => {

  const renderColumn = (column: { id: string; title: string; color: string; cards: CardType[]; }) => (
    <Column key={column.id} column={column} onAddCard={onAddCard} onDeleteCard = {onDeleteCard} onDeleteColumn = {onDeleteColumn}/>
  );

  return (
    <BoardContainer>
      {columns.map(renderColumn)}
    </BoardContainer>
  );
};

export default Board;