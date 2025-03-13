import { act,renderHook } from '@testing-library/react';

import useBoardDragAndDrop from '../utils/useBoardDragAndDrop';

const mockSetColumns = jest.fn();

describe('useBoardDragAndDrop Hook', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should handle drag start', () => {
        const { result } = renderHook(() => useBoardDragAndDrop({ setColumns: mockSetColumns }));
        act(() => {
            result.current.handleDragStart('1', '1');
        });
        expect(result.current.draggedItem).toEqual({ cardId: '1', sourceColumnId: '1' });
    });

    it('should handle drop', () => {
        const { result } = renderHook(() => useBoardDragAndDrop({ setColumns: mockSetColumns }));
        act(() => {
            result.current.handleDragStart('1', '1');
        });
        act(() => {
            result.current.handleDrop('2', 0);
        });
        expect(mockSetColumns).toHaveBeenCalledTimes(1);
        expect(result.current.draggedItem).toBeNull();
        expect(result.current.dropPosition).toEqual({ columnId: null, index: null, position: null });
    });

    it('should handle onDragEnter', () => {
        const { result } = renderHook(() => useBoardDragAndDrop({ setColumns: mockSetColumns }));
        act(() => {
            result.current.handleOnDragEnter('2', 0);
        });
        expect(result.current.dropPosition).toEqual({ columnId: '2', index: 0, position: 'before' });
    });
});