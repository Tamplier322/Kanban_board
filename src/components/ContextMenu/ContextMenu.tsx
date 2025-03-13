import { useCallback, useMemo } from 'react';

import { ContextMenuProps } from '@types';
import useClickOutside from '@utils/useClickOutside';

import { ContextMenuContainer, ContextMenuOption } from './ContextMenu.styles';

const ContextMenu: React.FC<ContextMenuProps> = ({ x, y, onClose, options }) => {
    const menuRef = useClickOutside<HTMLDivElement>(onClose);

    const renderOption = useCallback((option: { label: string; onClick: () => void }, index: number) => (
        <ContextMenuOption key={index} onClick={option.onClick} role="menuitem">
            {option.label}
        </ContextMenuOption>
    ), []);

    const optionElements = useMemo(() => {
        return options.map(renderOption);
    }, [options, renderOption]);

    return (
        <ContextMenuContainer ref={menuRef} x={x} y={y} role="menu">
            {optionElements}
        </ContextMenuContainer>
    );
};

export default ContextMenu;