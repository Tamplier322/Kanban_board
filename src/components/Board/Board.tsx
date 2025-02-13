import React from 'react';
import { BoardContainer } from '../Board/Board.styles';
import Column from '../Column';

interface BoardProps {
  columns: { id: string; title: string; color: string }[];
}

const Board: React.FC<BoardProps> = ({ columns }) => {
  const renderColumn = (column: {
    id: string;
    title: string;
    color: string;
  }) => <Column key={column.id} column={column} />;

  return <BoardContainer>{columns.map(renderColumn)}</BoardContainer>;
};

export default Board;
