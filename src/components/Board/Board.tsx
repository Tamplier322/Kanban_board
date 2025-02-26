import React, { useCallback, useState } from 'react';

import { BoardProps, ColumnType } from '../../types/index';
import { DropPositionBoard } from '../../types/index';
import Column from '../Column';
import { BoardContainer } from './Board.styles';

const Board: React.FC<BoardProps> = ({ columns, onAddCard, onDeleteCard, onDeleteColumn, onDragStart, onDrop, onEditCard }) => {

    const [dropPosition, setDropPosition] = useState<DropPositionBoard>({ columnId: null, index: null, position: 'before' });

    const handleOnDragEnter = useCallback((columnId:string, index: number | null) => {
        setDropPosition({columnId: columnId, index: index, position: 'before' })
    }, [setDropPosition])

    const handleOnDrop = useCallback((targetColumnId: string, index: number | null) => {
        onDrop(targetColumnId, index);
        setDropPosition({columnId: null, index: null, position: 'before' })
    }, [onDrop, setDropPosition]);

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
        />
    ), [onAddCard, onDeleteCard, onDeleteColumn, onDragStart, dropPosition, handleOnDragEnter, handleOnDrop]);

    const columnElements = columns.map(renderColumn);

    return (
        <BoardContainer>
            {columnElements}
        </BoardContainer>
    );
};

export default Board;