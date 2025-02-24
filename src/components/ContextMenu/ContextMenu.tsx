import React, { useCallback } from 'react';

import { ContextMenuProps } from '../../types/index';
import useClickOutside from '../../utils/useClickOutside';
import { ContextMenuContainer, ContextMenuOption } from './ContextMenu.styles';

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