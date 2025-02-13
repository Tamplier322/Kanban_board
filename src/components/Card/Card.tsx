import React from 'react';
import { CardItem } from './Card.styles';

interface CardProps {
  card: { id: string; title: string; description: string; priority: string };
}

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <CardItem>
      <h3>{card.title}</h3>
      <p>{card.description}</p>
      <small>Priority: {card.priority}</small>
    </CardItem>
  );
};

export default Card;
