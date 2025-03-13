import { ADD_COLUMN, CLOSE_BUTTON, MENU } from '@constants/labels';
import { SidebarProps } from '@types';

import { CloseButton, SidebarButton, SidebarContainer, SidebarHeader, SidebarTitle } from './Sidebar.styles';

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onAddColumn }) => {
    return (
        <SidebarContainer isOpen={isOpen}>
            <SidebarHeader>
                <SidebarTitle>{MENU}</SidebarTitle>
                <CloseButton onClick={onClose}>{CLOSE_BUTTON}</CloseButton>
            </SidebarHeader>
            <SidebarButton onClick={onAddColumn}>{ADD_COLUMN}</SidebarButton>
        </SidebarContainer>
    );
};

export default Sidebar;