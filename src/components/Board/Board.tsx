import React, { useCallback } from 'react';

import { BoardProps,ColumnType } from '../../types/index';
import Column from '../Column';
import { BoardContainer } from './Board.styles';

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