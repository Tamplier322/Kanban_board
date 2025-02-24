import { ColumnType } from '../types/index';

export const initialData: ColumnType[] = [
    { id: 'todo', title: 'To Do', color: '#4F46E5', cards: [] },
    { id: 'inprogress', title: 'In Progress', color: '#F59E0B', cards: [] },
    { id: 'done', title: 'Done', color: '#22C55E', cards: [] },
];