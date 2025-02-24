import { useCallback,useState } from 'react';

import { UseTaskAddingResult } from '../types/index';

function useTaskAdding(): UseTaskAddingResult {
    const [isAddingTask, setIsAddingTask] = useState(false);

    const handleAddTaskClick = useCallback(() => {
        setIsAddingTask(true);
    }, [setIsAddingTask]);

    const handleCloseNewTaskCard = useCallback(() => {
        setIsAddingTask(false);
    }, [setIsAddingTask]);

    return [isAddingTask, handleAddTaskClick, handleCloseNewTaskCard];
}

export default useTaskAdding;