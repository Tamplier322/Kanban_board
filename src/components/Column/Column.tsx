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


  const handleAddTaskClick = () => {
    setIsAddingTask(true);
  };

  const handleCloseNewTaskCard = () => {
    setIsAddingTask(false);
  };

    const handleContextMenu = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, columnId: string) => {
        event.preventDefault();
        setContextMenu({ x: event.clientX, y: event.clientY, cardId: "", columnId: columnId });
    };

  const handleCloseContextMenu = () => {
      setContextMenu(null);
  };

  const handleSaveNewTask = (newTask: { title: string; description: string; priority: string }) => {
    onAddCard(column.id, {
      id: Date.now().toString(),
      title: newTask.title,
      description: newTask.description,
      priority: newTask.priority,
    });
    setIsAddingTask(false);
  };

    const handleDeleteCard = () => {
        if(contextMenu) {
            onDeleteCard(contextMenu?.cardId, column.id)
            handleCloseContextMenu()
        }
    };

    const handleDeleteColumn = () => {
      if(contextMenu) {
          onDeleteColumn(contextMenu?.columnId)
          handleCloseContextMenu()
      }
  };

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
        {column.cards.map((card) => (
          <Card 
              key={card.id} 
              card={card}
              onDeleteCard = {onDeleteCard}
              columnId = {column.id}
              />
        ))}
        {!isAddingTask && (
            <AddTaskCardItem onClick={handleAddTaskClick}>
            <AddTaskCard color={column.color}>Add task...</AddTaskCard>
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
            { label: 'Delete Column', onClick: () => handleDeleteColumn() },
          ]}
        />
      )}
    </ColumnContainer>
  );
};

export default Column;