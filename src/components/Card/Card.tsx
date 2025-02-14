import React from 'react';
import { CardItem, PriorityLabel, CardTitle, CardDescription } from './Card.styles';

interface CardProps {
  card: { id: string; title: string; description: string; priority: string };
}

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <CardItem>
      <PriorityLabel priority={card.priority}>{card.priority}</PriorityLabel>
      <CardTitle>{card.title}</CardTitle>
      <CardDescription>{card.description}</CardDescription>
    </CardItem>
  );
};

export default Card;