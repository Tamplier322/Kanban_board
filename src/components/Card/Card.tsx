import React, { useCallback, useState } from 'react';

import { DELETE_CARD_LABEL, EDIT_CARD_LABEL } from "../../constants/labels";
import { CardProps } from '../../types';
import useContextMenu from '../../utils/useContextMenu';
import ContextMenu from "../ContextMenu/ContextMenu";
import { ButtonContainer, PrioritySelectContainer, SelectContainer,StyledButton, StyledInputDescription, StyledInputTitle, StyledSelect } from '../NewTaskCard/NewTaskCard.styles';
import { CardDescription, CardItem, CardTitle, PriorityLabel } from './Card.styles';

    const Card: React.FC<CardProps> = ({ card, onDeleteCard, columnId, onDragStart, onEditCard }) => {
        const [contextMenu, handleContextMenu, handleCloseContextMenu] = useContextMenu();
        const [isEditing, setIsEditing] = useState(false);
        const [title, setTitle] = useState(card.title);
        const [description, setDescription] = useState(card.description);
        const [priority, setPriority] = useState(card.priority);

        const handleDeleteCard = useCallback(() => {
            onDeleteCard(card.id, columnId);
            handleCloseContextMenu();
        }, [onDeleteCard, card.id, columnId, handleCloseContextMenu]);

        const handleDragStart = useCallback(() => {
            onDragStart(card.id, columnId);
        }, [onDragStart, card.id, columnId]);

        const handleEditClick = useCallback(() => {
            setIsEditing(true);
            handleCloseContextMenu();
        }, [handleCloseContextMenu]);

        const handleSaveClick = useCallback(() => {
            onEditCard(card.id, columnId, { title, description, priority });
            setIsEditing(false);
        }, [onEditCard, card.id, columnId, title, description, priority, setIsEditing]);

        const handleCancelClick = useCallback(() => {
            setTitle(card.title);
            setDescription(card.description);
            setPriority(card.priority);
            setIsEditing(false);
        }, [card.title, card.description, card.priority]);

        const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
        };

        const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setDescription(e.target.value);
        };

        const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
            setPriority(e.target.value);
        };

    return (
        <CardItem onContextMenu={(event) => handleContextMenu(event, card.id)}
            draggable = {!isEditing}
            onDragStart={handleDragStart}
        >
            {isEditing ? (
                <>
                <PrioritySelectContainer>
                    <SelectContainer>
                        <PriorityLabel priority={priority} >
                            <StyledSelect value={priority} onChange={handlePriorityChange}>
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </StyledSelect>
                        </PriorityLabel>
                    </SelectContainer>
                </PrioritySelectContainer>
                <div>
                    <StyledInputTitle type="text" value={title} onChange={handleTitleChange} />
                </div>
                <div>
                    <StyledInputDescription type="text" value={description} onChange={handleDescriptionChange} />
                </div>
                <ButtonContainer>
                    <StyledButton onClick={handleSaveClick}>Save</StyledButton>
                    <StyledButton onClick={handleCancelClick}>Cancel</StyledButton>
                </ButtonContainer>
                </>
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