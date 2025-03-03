import React, { useCallback } from 'react';

import { BoardProps, ColumnType } from '../../types/index';
import useBoardRender from "../../utils/useBoardRender";
import Column from '../Column';
import { BoardContainer } from './Board.styles';

const Board: React.FC<BoardProps> = ({ columns, onAddCard, onDeleteCard, onDeleteColumn, onDragStart, onDrop, onEditCard }) => {

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
        />
    ), [onAddCard, onDeleteCard, onDeleteColumn, onDragStart,dropPosition, handleOnDragEnter, handleOnDrop, onEditCard]);

    const columnElements = columns.map(renderColumn);

    return (
        <BoardContainer>
            {columnElements}
        </BoardContainer>
    );
};

export default Board;