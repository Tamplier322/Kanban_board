import { useCallback } from 'react';

import Column from '@components/Column';
import { BoardProps, ColumnType } from '@types';
import useBoardRender from "@utils/useBoardRender";

import { BoardContainer } from './Board.styles';

const Board: React.FC<BoardProps> = ({ columns, onAddCard, onDeleteCard, onDeleteColumn, onDragStart, onDrop, onEditCard, onColumnDrop, onColumnDragStart, onEditColumn }) => {

    const {handleOnDrop, handleOnDragEnter, dropPosition} = useBoardRender({ onDrop})

    const renderColumn = useCallback((column: ColumnType) => (
        <Column
            key={column.id}
            column={column}
            onAddCard={onAddCard}
            onDeleteCard={onDeleteCard}
            onDeleteColumn={onDeleteColumn}
            onDragStart={onDragStart}
            onDrop={handleOnDrop}
            dropPosition = {dropPosition}
            onSetDropPosition = {handleOnDragEnter}
            onEditCard = {onEditCard}
            onColumnDragStart= {onColumnDragStart}
            onColumnDrop = {onColumnDrop}
            onEditColumn = {onEditColumn}
        />
    ), [onAddCard, onDeleteCard, onDeleteColumn, onDragStart, dropPosition, handleOnDragEnter, handleOnDrop, onEditCard, onColumnDragStart, onColumnDrop, onEditColumn]);

    const columnElements = columns.map(renderColumn);

    return (
        <BoardContainer>
            {columnElements}
        </BoardContainer>
    );
};

export default Board;