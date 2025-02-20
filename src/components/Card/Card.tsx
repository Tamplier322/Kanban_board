import React, { useState, useRef, useEffect } from 'react';
import { CardItem, PriorityLabel, CardTitle, CardDescription } from './Card.styles';
import styled from 'styled-components';
import ContextMenu from "../ContextMenu/ContextMenu";

interface CardProps {
  card: { id: string; title: string; description: string; priority: string };
  onDeleteCard: (cardId:string, columnId: string) => void
  columnId: string
}

const Card: React.FC<CardProps> = ({ card, onDeleteCard, columnId }) => {

  const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null);

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setContextMenu({ x: event.clientX, y: event.clientY });
  };

  const handleCloseContextMenu = () => {
    setContextMenu(null);
  };

    const handleDeleteCard = () => {
        onDeleteCard(card.id, columnId);
        handleCloseContextMenu()
    }

  return (
    <CardItem onContextMenu={handleContextMenu}>
      <PriorityLabel priority={card.priority}>{card.priority}</PriorityLabel>
      <CardTitle>{card.title}</CardTitle>
      <CardDescription>{card.description}</CardDescription>
      {contextMenu && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          onClose={handleCloseContextMenu}
          options={[
            { label: 'Delete Card', onClick: () => handleDeleteCard() },
          ]}
        />
      )}
    </CardItem>
  );
};

export default Card;