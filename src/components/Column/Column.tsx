import React from 'react';
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
import { AddTaskCardItem } from '../Card/Card.styles';

interface ColumnProps {
  column: { id: string; title: string; color: string; cards: { id: string; title: string; description: string; priority: string }[] };
  onAddTask: (columnId: string) => void;
}

const Column: React.FC<ColumnProps> = ({ column, onAddTask }) => {
  const handleAddTaskClick = () => {
    onAddTask(column.id);
  };

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
        <AddTaskCardItem onClick={handleAddTaskClick}>
          <AddTaskCard color={column.color}>Add task...</AddTaskCard>
        </AddTaskCardItem>
      </CardContainer>
    </ColumnContainer>
  );
};

export default Column;