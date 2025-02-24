import React, { useCallback } from 'react';
import styled from 'styled-components';

import useClickOutside from '../../utils/useClickOutside';
import { ContextMenuContainer, ContextMenuOption } from './ContextMenu.styles';

interface ContextMenuProps {
    x: number;
    y: number;
    onClose: () => void;
    options: { label: string; onClick: () => void }[];
}

const ContextMenu: React.FC<ContextMenuProps> = ({ x, y, onClose, options }) => {
    const menuRef = useClickOutside<HTMLDivElement>(onClose);

    const renderOption = useCallback((option: { label: string; onClick: () => void }, index: number) => (
        <ContextMenuOption key={index} onClick={option.onClick}>
            {option.label}
        </ContextMenuOption>
    ), []);

    return (
        <ContextMenuContainer ref={menuRef} x={x} y={y}>
            {options.map(renderOption)}
        </ContextMenuContainer>
    );
};

export default ContextMenu;