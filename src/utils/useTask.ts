import { useCallback, useState } from 'react';

import { UseTaskProps, UseTaskResult } from '../types/index';

const useTask = ({ columnId, onAddCard }: UseTaskProps): UseTaskResult => {
    const [isAddingTask, setIsAddingTask] = useState(false);
    const [isDropPosition, setIsDropPosition] = useState<number | null>(null);

    const handleAddTaskClick = useCallback(() => {
        setIsAddingTask(true);
    }, [setIsAddingTask]);

    const handleCloseNewTaskCard = useCallback(() => {
        setIsAddingTask(false);
    }, [setIsAddingTask]);

    const handleSetDropPosition = useCallback((index: number | null) => {
        setIsDropPosition(index);
    }, [setIsDropPosition]);

    const handleSaveNewTask = useCallback((newTask: { title: string; description: string; priority: string }) => {
        onAddCard(columnId, {
            id: Date.now().toString(),
            title: newTask.title,
            description: newTask.description,
            priority: newTask.priority
        }, isDropPosition);
        setIsAddingTask(false);
    }, [columnId, onAddCard, isDropPosition]);

    return [isAddingTask, handleAddTaskClick, handleCloseNewTaskCard, handleSaveNewTask, handleSetDropPosition];
}

export default useTask;