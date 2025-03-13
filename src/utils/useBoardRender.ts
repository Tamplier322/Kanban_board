import { useCallback, useState } from 'react';

import { DropPosition,UseBoardRenderProps, UseBoardRenderResult } from '@types';

const useBoardRender = ({ onDrop }: UseBoardRenderProps): UseBoardRenderResult => {
    const [dropPosition, setDropPosition] = useState<DropPosition>({ columnId: null, index: null, position: 'before' });

    const handleOnDragEnter = useCallback((columnId: string, index: number | null) => {
        setDropPosition({ columnId: columnId, index: index, position: 'before' })
    }, [setDropPosition])

    const handleOnDrop = useCallback((targetColumnId: string, index: number | null) => {
        onDrop(targetColumnId, index);
        setDropPosition({ columnId: null, index: null, position: 'before' })
    }, [onDrop, setDropPosition]);

    return {
        dropPosition,
        handleOnDragEnter,
        handleOnDrop,
    };
};

export default useBoardRender;