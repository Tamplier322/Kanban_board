import { ColumnType } from '../types/index';

export const initialData: ColumnType[] = [
    { id: 'todo', title: 'To Do', color: 'rgb(79, 70, 229)', cards: [] },
    { id: 'inprogress', title: 'In Progress', color: 'rgb(245, 158, 11)', cards: [] },
    { id: 'done', title: 'Done', color: 'rgb(34, 197, 94)', cards: [] },
];