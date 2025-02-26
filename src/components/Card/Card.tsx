import React, { useCallback } from 'react';

import { DELETE_CARD_LABEL } from "../../constants/labels";
import { CardProps } from '../../types';
import useContextMenu from '../../utils/useContextMenu';
import ContextMenu from "../ContextMenu/ContextMenu";
import { CardDescription, CardItem, CardTitle, PriorityLabel } from './Card.styles';

const Card: React.FC<CardProps> = ({ card, onDeleteCard, columnId, onDragStart }) => {
    const [contextMenu, handleContextMenu, handleCloseContextMenu] = useContextMenu();

    const handleDeleteCard = useCallback(() => {
        onDeleteCard(card.id, columnId);
        handleCloseContextMenu();
    }, [onDeleteCard, card.id, columnId, handleCloseContextMenu]);

    const handleDragStart = useCallback(() => {
        onDragStart(card.id, columnId);
    }, [onDragStart, card.id, columnId]);

    return (
        <CardItem onContextMenu={(event) => handleContextMenu(event, card.id)}
            draggable
            onDragStart={handleDragStart}
        >
            <PriorityLabel priority={card.priority}>{card.priority}</PriorityLabel>
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
            {contextMenu && (
                <ContextMenu
                    x={contextMenu.x}
                    y={contextMenu.y}
                    onClose={handleCloseContextMenu}
                    options={[{ label: DELETE_CARD_LABEL, onClick: handleDeleteCard }]}
                />
            )}
        </CardItem>
    );
};

export default Card;