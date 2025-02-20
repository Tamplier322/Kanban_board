import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import {ContextMenuContainer, ContextMenuOption} from '../ContextMenu/ContextMenu.styles'

interface ContextMenuProps {
    x: number;
    y: number;
    onClose: () => void;
    options: { label: string; onClick: () => void }[];
}

const ContextMenu: React.FC<ContextMenuProps> = ({ x, y, onClose, options }) => {
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
        }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
    }, [onClose]);

return (
    <ContextMenuContainer ref={menuRef} style={{ left: x, top: y }}>
        {options.map((option, index) => (
        <ContextMenuOption key={index} onClick={() => {
            option.onClick();
            onClose();
        }}>
            {option.label}
        </ContextMenuOption>
        ))}
    </ContextMenuContainer>
    );
};

export default ContextMenu;