import React, { useCallback } from 'react';

import { ADD_LABEL, ADD_TASK_LABEL, DELETE_COLUMN_LABEL } from "../../constants/labels";
import { CardType, ColumnProps } from '../../types/index';
import useColumnDragAndDrop from "../../utils/useColumnDragAndDrop";
import useContextMenu from '../../utils/useContextMenu';
import useTask from '../../utils/useTask';
import Card from '../Card';
import { AddTaskCardItem } from "../Card/Card.styles";
import ContextMenu from "../ContextMenu/ContextMenu";
import NewTaskCard from "../NewTaskCard/NewTaskCard";
import {
    AddCardButton,
    AddTaskCard,
    CardContainer,
    ColumnContainer,
    ColumnHeader,
    ColumnTitle,
    ColumnTitleWrapper,
    CountBadge,
} from './Column.styles';

const Column: React.FC<ColumnProps> = ({ column, onAddCard, onDeleteCard, onDeleteColumn, onDragStart, onDrop, dropPosition, onSetDropPosition, onEditCard, 
    onColumnDrop, onColumnDragStart }) => {
    const [contextMenu, handleContextMenu, handleCloseContextMenu] = useContextMenu();
    const [isAddingTask, handleAddTaskClick, handleCloseNewTaskCard, handleSaveNewTask] = useTask({
        columnId: column.id,
        onAddCard
    });

    const { handleDragOver, handleDragEnter, handleOnColumnDragStart, handleOnColumnDrop, handleOnDropCb } = useColumnDragAndDrop({
        columnId: column.id,
        onSetDropPosition,
        dropPosition,
        onColumnDragStart,
        onColumnDrop,
        onDrop
    });

    const handleContextMenuCb = useCallback((event:React.MouseEvent) => {
        handleContextMenu(event, column.id)
    }, [handleContextMenu, column.id]);

    const handleDeleteColumnCb = useCallback(() => {
        onDeleteColumn(column.id)
    }, [onDeleteColumn, column.id]);


    const renderCard = useCallback((card: CardType, index: number) => (
        <>
            <div
                onDragEnter={(event) => handleDragEnter(index, event)}
            >
                <Card
                    card={card}
                    onDeleteCard={onDeleteCard}
                    columnId={column.id}
                    onDragStart={onDragStart}
                    onEditCard = {onEditCard}
                />
            </div>
        </>
    ), [onDeleteCard, column.id, onDragStart, handleDragEnter, onEditCard]);

    const cardElements = column.cards.map(renderCard);

    return (
        <ColumnContainer
            color={column.color}
            onDragOver={handleDragOver}
            onDrop={handleOnColumnDrop}
        >
            <ColumnHeader
                color={column.color}
                onContextMenu={handleContextMenuCb}
                draggable
                onDragStart={handleOnColumnDragStart}
            >
                <ColumnTitleWrapper>
                    <CountBadge color={column.color}>{column.cards.length}</CountBadge>
                    <ColumnTitle color={column.color}>{column.title}</ColumnTitle>
                </ColumnTitleWrapper>
                <AddCardButton color={column.color} onClick={handleAddTaskClick}>{ADD_LABEL}</AddCardButton>
            </ColumnHeader>
            <CardContainer onDrop={handleOnDropCb}>
                {cardElements}
                {!isAddingTask && (
                    <AddTaskCardItem onClick={handleAddTaskClick}>
                        <AddTaskCard color={column.color}>{ADD_TASK_LABEL}</AddTaskCard>
                    </AddTaskCardItem>
                )}
                {isAddingTask && (
                    <NewTaskCard
                        color={column.color}
                        onClose={handleCloseNewTaskCard}
                        onSave={handleSaveNewTask}
                    />
                )}
            </CardContainer>
            {contextMenu && (
                <ContextMenu
                    x={contextMenu.x}
                    y={contextMenu.y}
                    onClose={handleCloseContextMenu}
                    options={[
                        { label: DELETE_COLUMN_LABEL, onClick: handleDeleteColumnCb },
                    ]}
                />
            )}
        </ColumnContainer>
    );
}

export default Column;