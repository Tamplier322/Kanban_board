import React, { useState, useCallback } from 'react';
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

interface CardType {
  id: string;
  title: string;
  description: string;
  priority: string;
}

interface ColumnProps {
  column: { id: string; title: string; color: string; cards: CardType[] };
  onAddCard: (columnId: string, newCard: CardType) => void;
}

const Column: React.FC<ColumnProps> = ({ column, onAddCard }) => {
  const [isAddingTask, setIsAddingTask] = useState(false);

  const handleAddTaskClick = () => {
    setIsAddingTask(true);
  };

  const handleCloseNewTaskCard = () => {
    setIsAddingTask(false);
  };

  const handleSaveNewTask = useCallback((newTask: { title: string; description: string; priority: string }) => {
    onAddCard(column.id, {
      id: Date.now().toString(),
      title: newTask.title,
      description: newTask.description,
      priority: newTask.priority,
    });
    setIsAddingTask(false);
  }, [column.id, onAddCard]);

  return (
    <ColumnContainer color={column.color}>
      <ColumnHeader color={column.color}>
        <ColumnTitleWrapper>
          <CountBadge color={column.color}>{column.cards.length}</CountBadge>
          <ColumnTitle color={column.color}>{column.title}</ColumnTitle>
        </ColumnTitleWrapper>
        <AddCardButton color={column.color} onClick={handleAddTaskClick}>+</AddCardButton>
      </ColumnHeader>
      <CardContainer>
        {column.cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
        {isAddingTask ? (
          <NewTaskCard
            color={column.color}
            onClose={handleCloseNewTaskCard}
            onSave={handleSaveNewTask}
          />
        ) : (
          <AddTaskCardItem onClick={handleAddTaskClick}>
            <AddTaskCard color={column.color}>Add task...</AddTaskCard>
          </AddTaskCardItem>
        )}
      </CardContainer>
    </ColumnContainer>
  );
};

export default Column;