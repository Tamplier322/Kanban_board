import { useCallback } from 'react';

import ContextMenu from "@components/ContextMenu";
import TaskForm from "@components/TaskForm/TaskForm";
import { DELETE_CARD_LABEL, EDIT_CARD_LABEL } from "@constants/labels";
import { CardProps } from '@types';
import useCardForm from "@utils/useCardForm";
import useContextMenu from '@utils/useContextMenu';

import { CardDescription, CardItem, CardTitle, PriorityLabel } from './Card.styles';

const Card: React.FC<CardProps> = ({ card, onDeleteCard, columnId, onDragStart, onEditCard }) => {
    const [contextMenu, handleContextMenu, handleCloseContextMenu] = useContextMenu();

    const { isEditing, title, description, priority, setTitle, setDescription, setPriority, handleEditClick, handleSaveClick, handleCancelClick } = useCardForm({ card, onEditCard, columnId });

    const handleDeleteCard = useCallback(() => {
        onDeleteCard(card.id, columnId);
        handleCloseContextMenu();
    }, [onDeleteCard, card.id, columnId, handleCloseContextMenu]);

    const handleDragStart = useCallback(() => {
        onDragStart(card.id, columnId);
    }, [onDragStart, card.id, columnId]);

    const handleOnContextMenu = useCallback((event: React.MouseEvent) => {
        handleContextMenu(event, card.id)
    }, [handleContextMenu, card.id])

    return (
        <CardItem onContextMenu={handleOnContextMenu}
            draggable = {!isEditing}
            onDragStart={handleDragStart}
        >
            {isEditing ? (
                <TaskForm
                    title={title}
                    description={description}
                    priority={priority}
                    setTitle={setTitle}
                    setDescription={setDescription}
                    setPriority={setPriority}
                    onSave={handleSaveClick}
                    onCancel={handleCancelClick}
                />
            ) : (
                <>
                <PriorityLabel priority={card.priority}>{card.priority}</PriorityLabel>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
                </>
            )}
            {contextMenu && (
                <ContextMenu
                    x={contextMenu.x}
                    y={contextMenu.y}
                    onClose={handleCloseContextMenu}
                    options={[
                        { label: EDIT_CARD_LABEL, onClick: handleEditClick },
                        { label: DELETE_CARD_LABEL, onClick: handleDeleteCard }
                    ]}
                />
            )}
        </CardItem>
    );
};

export default Card;