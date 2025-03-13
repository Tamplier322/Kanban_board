import { act,renderHook } from '@testing-library/react';

import useBoardColumnDragAndDrop from '../utils/useBoardColumnDragAndDrop';

const mockSetColumns = jest.fn();

describe('useBoardColumnDragAndDrop Hook', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should handle column drag start', () => {
        const { result } = renderHook(() => useBoardColumnDragAndDrop({ setColumns: mockSetColumns }));
        act(() => {
            result.current.handleColumnDragStart('1');
        });
        expect(result.current.draggedColumnId).toBe('1');
    });

    it('should handle column drop', () => {
        const { result } = renderHook(() => useBoardColumnDragAndDrop({ setColumns: mockSetColumns }));
        act(() => {
            result.current.handleColumnDragStart('1');
        });
        act(() => {
            result.current.handleColumnDrop('2', 1);
        });
        expect(mockSetColumns).toHaveBeenCalledTimes(1);
        expect(result.current.draggedColumnId).toBeNull();
    });
});