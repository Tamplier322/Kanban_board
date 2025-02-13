import React from 'react';
import { ColumnContainer, ColumnTitle, CardContainer } from './Column.styles';
import Card from '../Card';

interface ColumnProps {
  column: { id: string; title: string; color: string };
}

const Column: React.FC<ColumnProps> = ({ column }) => {
  const cards = [
    {
      id: '1',
      title: 'Task 1',
      description: 'Description 1',
      priority: 'High',
    },
    {
      id: '2',
      title: 'Task 2',
      description: 'Description 2',
      priority: 'Medium',
    },
  ];

  const renderCard = (card: {
    id: string;
    title: string;
    description: string;
    priority: string;
  }) => <Card key={card.id} card={card} />;

  return (
    <ColumnContainer color={column.color}>
      <ColumnTitle color={column.color}>{column.title}</ColumnTitle>
      <CardContainer>{cards.map(renderCard)}</CardContainer>
    </ColumnContainer>
  );
};

export default Column;
