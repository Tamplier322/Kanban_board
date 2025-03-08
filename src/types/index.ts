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
    onAddCard: (columnId: string, newCard: CardType, index: number | null) => void;
}

export type UseTaskResult = [
    boolean,
    () => void,
    () => void,
    (newTask: { title: string; description: string; priority: string }) => void,
    (index: number | null) => void
];

export interface BoardProps {
    columns: ColumnType[];
    onAddCard: (columnId: string, newCard: CardType) => void;
    onDeleteCard: (cardId: string, columnId: string) => void;
    onDeleteColumn: (columnId: string) => void;
    onDragStart: (cardId: string, columnId: string) => void;
    onDrop: (targetColumnId: string, index: number | null) => void;
    dropPosition:{ columnId: string | null;
        index: number | null;
        position: string | null },
    onSetDropPosition:(columnId: string, index: number | null) => void
    onEditCard: (cardId:string, columnId: string, newCard: { title: string; description: string; priority: string }) => void
    onColumnDragStart: (columnId: string) => void
    onColumnDrop: (targetColumnId: string, index: number | null) => void
    onEditColumn: (columnId: string, newColumn: { title: string;}) => void;
}

export interface CardProps {
    card: { id: string; title: string; description: string; priority: string };
    onDeleteCard: (cardId: string, columnId: string) => void;
    columnId: string;
    onDragStart: (cardId: string, columnId: string) => void;
    onEditCard: (cardId:string, columnId: string, newCard: { title: string; description: string; priority: string }) => void
    index?: number | null;
}
export interface ColumnProps {
    column: ColumnType;
    onAddCard: (columnId: string, newCard: CardType) => void;
    onDeleteCard: (cardId: string, columnId: string) => void;
    onDeleteColumn: (columnId: string) => void;
    onDragStart: (cardId: string, columnId: string) => void;
    onDrop: (targetColumnId: string, index: number | null) => void;
    dropPosition: { columnId: string | null; index: number | null };
    onSetDropPosition: (columnId: string, index: number | null) => void
    onEditCard: (cardId:string, columnId: string, newCard: { title: string; description: string; priority: string }) => void
    onColumnDragStart:(columnId: string) => void;
    onColumnDrop: (targetColumnId: string, index: number | null) => void
    onEditColumn: (columnId: string, newColumn: { title: string;}) => void;
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
    columnId?: string;
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

export interface UseBoardRenderProps {
    onDrop: (targetColumnId: string, index: number | null) => void;
    onEditCard?: (cardId: string, columnId: string, newCard: { title: string; description: string; priority: string }) => void;
    onAddCard?: (columnId: string, newCard: CardType) => void;
    onDeleteCard?: (cardId: string, columnId: string) => void;
    onDeleteColumn?: (columnId: string) => void;
    onDragStart?: (cardId: string, columnId: string) => void;
}

export interface UseColumnHandlersProps {
    column: ColumnProps['column'];
    onDrop: (targetColumnId: string, index: number | null) => void;
    onDeleteColumn: (columnId: string) => void;
    dropPosition: { columnId: string | null; index: number | null; };
}

export interface UseColumnHandlersResult {
    handleOnDrop: () => void;
}

export interface UseBoardRenderResult {
    dropPosition: DropPosition;
    handleOnDragEnter: (columnId: string, index: number | null) => void;
    handleOnDrop: (targetColumnId: string, index: number | null) => void;
}

export interface UseCardFormProps {
    card: {id:string,title:string,description:string,priority:string}
    onEditCard: (cardId: string, columnId: string, newCard: { title: string; description: string; priority: string }) => void;
    columnId: string
}

export interface UseCardFormResult {
    isEditing: boolean;
    title: string;
    description: string;
    priority: string;
    setTitle: (value: string) => void;
    setDescription: (value: string) => void;
    setPriority: (value: string) => void;
    handleEditClick: () => void;
    handleSaveClick: () => void;
    handleCancelClick: () => void;
}

export type AddTaskCardProps = object;
export type CardItemPropsStyles = object;

export interface DropPosition {
    columnId: string | null;
    index: number | null;
    position: 'before' | 'after' | null;
}

export interface DropPositionBoard {
    columnId: string | null;
    index: number | null;
    position: 'before' | 'after' | null;
}

export interface DraggedItem {
    cardId: string;
    sourceColumnId: string;
}

export interface DropPositionDND {
    columnId: string | null;
    index: number | null;
    position: string | null;
}

export interface UseBoardDragAndDropProps {
    setColumns: React.Dispatch<React.SetStateAction<ColumnType[]>>;
}

export interface UseBoardDragAndDropResult {
    draggedItem: DraggedItem | null;
    dropPosition: DropPositionDND;
    handleDragStart: (cardId: string, columnId: string) => void;
    handleDrop: (targetColumnId: string, dropIndex: number | null) => void;
    handleOnDragEnter: (columnId: string, index: number | null) => void;
}

export interface UseColumnActionsProps {
    column: ColumnProps["column"];
    onDeleteColumn: ColumnProps["onDeleteColumn"];
    handleCloseContextMenu: () => void;
    contextMenu: ContextMenuState | null
}
export interface UseColumnActionsResult {
    handleDeleteColumn: () => void;
}

export interface UseBoardColumnDragAndDropProps {
    setColumns: React.Dispatch<React.SetStateAction<ColumnType[]>>;
}

export interface UseBoardColumnDragAndDropResult {
    draggedColumnId: string | null;
    handleColumnDragStart: (columnId: string) => void;
    handleColumnDrop: (targetColumnId: string, dropIndex: number | null) => void;
}

export interface UseColumnDragAndDropProps {
    columnId: string;
    onSetDropPosition: (columnId: string, index: number | null) => void;
    dropPosition: {columnId: string | null; index: number | null; }
    onColumnDragStart: (columnId: string) => void;
    onColumnDrop:  (targetColumnId: string, index: number | null) => void,
    onDrop: (targetColumnId: string, index: number | null) => void;
}

export interface UseColumnDragAndDropResult {
    handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
    handleDragEnter: (index: number | null, event: React.DragEvent<HTMLDivElement>) => void;
    handleOnColumnDragStart:  (event: React.DragEvent<HTMLDivElement>) => void,
    handleOnColumnDrop: (event: React.DragEvent<HTMLDivElement>) => void
    handleOnDropCb: () => void;
}

export interface UseBoardActionsProps {
    setColumns: React.Dispatch<React.SetStateAction<ColumnType[]>>;
    setColumnModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export interface UseBoardActionsResult {
    handleAddColumn: () => void;
    handleCloseColumnModal: () => void;
    handleNewColumn: (newColumn: ColumnType) => void;
    handleDeleteColumn: (columnId: string) => void;
    handleDeleteCard: (cardId: string, columnId: string) => void;
    handleAddCard: (columnId: string, newCard: CardType) => void;
    handleEditCard: (cardId: string, columnId: string, newCard: { title: string; description: string; priority: string }) => void;
    handleEditColumn: (columnId: string, newColumn: { title: string;}) => void;
}

export interface TaskFormProps {
    title: string;
    description: string;
    priority: string;
    setTitle: (value: string) => void;
    setDescription: (value: string) => void;
    setPriority: (value: string) => void;
    onSave: () => void;
    onCancel: () => void;
}

export interface UseTaskFormHandlersProps {
    title: string;
    description: string;
    setTitle: (value: string) => void;
    setDescription: (value: string) => void;
}

export interface UseTaskFormHandlersResult {
    titleValue: string;
    descriptionValue: string;
    handleTitleFocus: () => void;
    handleTitleBlur: () => void;
    handleDescriptionFocus: () => void;
    handleDescriptionBlur: () => void;
    handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleDescriptionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface UseColumnModalHandlersProps {
    title: string;
    setTitle: (value: string) => void;
    color: string;
    setColor: (value: string) => void;
    handleSave: () => void;
    isOpen: boolean;
}

export interface UseColumnModalHandlersResult {
    titleValue: string;
    handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleTitleFocus: () => void;
    handleTitleBlur: () => void;
    handleColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SidebarContainerProps {
    isOpen: boolean;
}

export interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
    onAddColumn: () => void;
}