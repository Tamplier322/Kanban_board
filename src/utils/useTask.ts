import { useCallback, useState } from 'react';

import { UseTaskProps, UseTaskResult } from '../types/index';

function useTask({ columnId, onAddCard }: UseTaskProps): UseTaskResult {
    const [isAddingTask, setIsAddingTask] = useState(false);

    const handleAddTaskClick = useCallback(() => {
        setIsAddingTask(true);
    }, [setIsAddingTask]);

    const handleCloseNewTaskCard = useCallback(() => {
        setIsAddingTask(false);
    }, [setIsAddingTask]);

    const handleSaveNewTask = useCallback((newTask: { title: string; description: string; priority: string }) => {
        onAddCard(columnId, {
            id: Date.now().toString(),
            title: newTask.title,
            description: newTask.description,
            priority: newTask.priority
        });
        setIsAddingTask(false);
    }, [columnId, onAddCard, setIsAddingTask]);

    return [isAddingTask, handleAddTaskClick, handleCloseNewTaskCard, handleSaveNewTask];
}

export default useTask;