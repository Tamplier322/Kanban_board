export interface CardType {
    id: string;
    title: string;
    description: string;
    priority: string;
}

export interface ColumnType {
    id: string;
    title: string;
    color: string;
    cards: CardType[];
}

export interface UseColumnModalFormProps {
    onAddColumn: (newColumn: ColumnType) => void;
    onClose: () => void;
    isOpen: boolean
}

export interface UseColumnModalFormResult {
    title: string;
    color: string;
    setTitle: (title: string) => void;
    setColor: (color: string) => void;
    handleSave: () => void;
}

export interface ContextMenuState {
    x: number;
    y: number;
    cardId: string | null;
    columnId: string | null;
}

export type UseContextMenuResult = [
    ContextMenuState | null,
    (event: React.MouseEvent, columnId: string) => void,
    () => void
];

export interface UseTaskProps {
    columnId: string;
    onAddCard: (columnId: string, newCard: CardType) => void;
}

export type UseTaskResult = [
    boolean,
    () => void,
    () => void,
    (newTask: { title: string; description: string; priority: string }) => void
];

export type UseTaskAddingResult = [
    boolean,
    () => void,
    () => void
];

export interface BoardProps {
    columns: ColumnType[];
    onAddCard: (columnId: string, newCard: CardType) => void;
    onDeleteCard: (cardId: string, columnId: string) => void;
    onDeleteColumn: (columnId: string) => void;
}

export interface CardProps {
    card: { id: string; title: string; description: string; priority: string };
    onDeleteCard: (cardId: string, columnId: string) => void;
    columnId: string;
}

export interface ColumnProps {
    column: ColumnType;
    onAddCard: (columnId: string, newCard: CardType) => void;
    onDeleteCard: (cardId: string, columnId: string) => void;
    onDeleteColumn: (columnId: string) => void;
}

export interface ErrorBoundaryProps {
    children: React.ReactNode;
}

export interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    errorInfo: React.ErrorInfo | null;
}

export interface ContextMenuProps {
    x: number;
    y: number;
    onClose: () => void;
    options: { label: string; onClick: () => void }[];
}
export interface NewTaskCardProps {
    color: string;
    onClose: () => void;
    onSave: (newTask: { title: string; description: string; priority: string }) => void;
}

export interface PriorityLabelProps {
    priority: string | undefined;
    color: string;
}

export type UseAlertResult = [
    string | null,
    (message: string) => void,
    () => void
];

export interface AlertProps {
    message: string;
    onClose: () => void;
}

export interface AlertContainerProps {
    isVisible: boolean;
}

export interface PriorityLabelPropsStyles {
    priority: string | undefined;
}


export interface ColumnContainerProps {
    color: string;
}

export interface ColumnHeaderProps {
    color: string;
}

export interface ColumnTitleProps {
    color: string;
}

export interface AddCardButtonProps {
    color: string;
}

export interface CountBadgeProps {
    color: string;
}

export interface AddTaskCardPropsStyles {
    color: string;
}

export interface ContextMenuContainerProps {
    x: number;
    y: number;
}

export type AddTaskCardProps = object;
export type CardItemPropsStyles = object;