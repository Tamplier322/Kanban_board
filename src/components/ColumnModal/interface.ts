export interface ColumnModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAddColumn: (newColumn: { id: string; title: string; color: string; cards: CardType[]; }) => void;
}

export interface CardType {
    id: string;
    title: string;
    description: string;
    priority: string;
}