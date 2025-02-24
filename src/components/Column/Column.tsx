import React, { useCallback } from 'react';

import { ADD_TASK_LABEL, DELETE_COLUMN_LABEL } from "../../constants/labels";
import { CardType, ColumnProps } from '../../types/index';
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

const Column: React.FC<ColumnProps> = ({ column, onAddCard, onDeleteCard, onDeleteColumn }) => {
    const [contextMenu, handleContextMenu, handleCloseContextMenu] = useContextMenu();
    const [isAddingTask, handleAddTaskClick, handleCloseNewTaskCard, handleSaveNewTask] = useTask({
        columnId: column.id,
        onAddCard
    });

    const handleDeleteCard = useCallback(() => {
        if (contextMenu && contextMenu.cardId) {
            onDeleteCard(contextMenu.cardId, column.id);
            handleCloseContextMenu();
        }
    }, [onDeleteCard, column.id, handleCloseContextMenu, contextMenu]);

    const handleDeleteColumn = useCallback(() => {
        if (contextMenu && contextMenu.columnId) {
            onDeleteColumn(contextMenu.columnId);
            handleCloseContextMenu();
        }
    }, [onDeleteColumn, handleCloseContextMenu, contextMenu]);

    const renderCard = useCallback((card: CardType) => (
        <Card
            key={card.id}
            card={card}
            onDeleteCard={onDeleteCard}
            columnId={column.id}
        />
    ), [onDeleteCard, column.id]);

    const cardElements = column.cards.map(renderCard);

    return (
        <ColumnContainer color={column.color}>
            <ColumnHeader
                color={column.color}
                onContextMenu={(event) => handleContextMenu(event, column.id)}
            >
                <ColumnTitleWrapper>
                    <CountBadge color={column.color}>{column.cards.length}</CountBadge>
                    <ColumnTitle color={column.color}>{column.title}</ColumnTitle>
                </ColumnTitleWrapper>
                <AddCardButton color={column.color} onClick={handleAddTaskClick}>+</AddCardButton>
            </ColumnHeader>
            <CardContainer>
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
                        { label: DELETE_COLUMN_LABEL, onClick: handleDeleteColumn },
                    ]}
                />
            )}
        </ColumnContainer>
    );
};

export default Column;