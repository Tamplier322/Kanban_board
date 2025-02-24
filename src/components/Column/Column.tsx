import React, { useState, useCallback, useRef, useEffect } from 'react';
import {
  ColumnContainer,
  ColumnHeader,
  ColumnTitle,
  AddCardButton,
  CardContainer,
  CountBadge,
  ColumnTitleWrapper,
  AddTaskCard,
} from './Column.styles';
import Card from '../Card';
import { AddTaskCardItem } from "../Card/Card.styles";
import NewTaskCard from "../NewTaskCard/NewTaskCard";
import ContextMenu from "../ContextMenu/ContextMenu";
import { ADD_TASK_LABEL, DELETE_COLUMN_LABEL } from "../../constants/labels";

interface CardType {
  id: string;
  title: string;
  description: string;
  priority: string;
}

interface ColumnProps {
  column: { id: string; title: string; color: string; cards: CardType[] };
  onAddCard: (columnId: string, newCard: CardType) => void;
  onDeleteCard: (cardId: string, columnId: string) => void;
  onDeleteColumn : (columnId: string) => void;
}

const Column: React.FC<ColumnProps> = ({ column, onAddCard, onDeleteCard, onDeleteColumn }) => {
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number, cardId: string, columnId: string } | null>(null);


  const handleAddTaskClick = useCallback(() => {
    setIsAddingTask(true);
  }, [setIsAddingTask]);

  const handleCloseNewTaskCard = useCallback(() => {
    setIsAddingTask(false);
  }, [setIsAddingTask]);

  const handleContextMenu = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>, columnId: string) => {
    event.preventDefault();
    setContextMenu({ x: event.clientX, y: event.clientY, cardId: "", columnId: columnId });
  }, [setContextMenu, column.id]);

  const handleCloseContextMenu = useCallback(() => {
    setContextMenu(null);
  }, [setContextMenu]);

  const handleSaveNewTask = useCallback((newTask: { title: string; description: string; priority: string }) => {
    onAddCard(column.id, {
      id: Date.now().toString(),
      title: newTask.title,
      description: newTask.description,
      priority: newTask.priority
    });
    setIsAddingTask(false);
  }, [column.id, onAddCard,setIsAddingTask]);

  const handleDeleteCard = useCallback(() => {
    if (contextMenu) {
      onDeleteCard(contextMenu.cardId, column.id)
      handleCloseContextMenu()
    }
  },[onDeleteCard, column.id, handleCloseContextMenu, contextMenu]);

  const handleDeleteColumn = useCallback(() => {
    if (contextMenu) {
      onDeleteColumn(contextMenu.columnId)
      handleCloseContextMenu()
    }
  },[onDeleteColumn, handleCloseContextMenu, contextMenu]);

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
      <ColumnHeader color={column.color} onContextMenu={(event) => handleContextMenu(event, column.id)}>
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