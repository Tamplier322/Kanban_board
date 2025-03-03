import { useCallback } from 'react';

import { UseColumnHandlersProps,  UseColumnHandlersResult} from '../types';

const useColumnHandlers = ({ column, onDrop, dropPosition }: UseColumnHandlersProps): UseColumnHandlersResult => {

    const handleOnDrop = useCallback(() => {
        onDrop(column.id, dropPosition.index || 0);
    }, [onDrop, column.id, dropPosition]);

    return {
        handleOnDrop
    };
};

export default useColumnHandlers;