import React, { useCallback } from 'react';

import Column from '../Column';
import { BoardContainer } from './Board.styles';

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

interface BoardProps {
  columns: ColumnType[];
  onAddCard: (columnId: string, newCard: CardType) => void;
  onDeleteCard: (cardId: string, columnId: string) => void;
  onDeleteColumn: (columnId: string) => void;
}

const Board: React.FC<BoardProps> = ({ columns, onAddCard, onDeleteCard, onDeleteColumn }) => {

  const renderColumn = useCallback((column: ColumnType) => (
    <Column
      key={column.id}
      column={column}
      onAddCard={onAddCard}
      onDeleteCard={onDeleteCard}
      onDeleteColumn={onDeleteColumn}
    />
  ), [onAddCard, onDeleteCard, onDeleteColumn]);

  const columnElements = columns.map(renderColumn);

  return (
    <BoardContainer>
      {columnElements}
    </BoardContainer>
  );
};

export default Board;