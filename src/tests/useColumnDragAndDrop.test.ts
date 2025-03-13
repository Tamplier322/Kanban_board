import { act,renderHook } from '@testing-library/react';
import { DragEvent } from 'react';

import useColumnDragAndDrop from '../utils/useColumnDragAndDrop';

const mockOnSetDropPosition = jest.fn();
const mockOnColumnDragStart = jest.fn();
const mockOnColumnDrop = jest.fn();
const mockOnDrop = jest.fn();

describe('useColumnDragAndDrop Hook', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should handle drag over', () => {
        const { result } = renderHook(() => useColumnDragAndDrop({
            columnId: '1',
            onSetDropPosition: mockOnSetDropPosition,
            onColumnDragStart: mockOnColumnDragStart,
            onColumnDrop: mockOnColumnDrop,
            onDrop: mockOnDrop,
            dropPosition: { columnId: null, index: null },
        }));

        const mockEvent = { preventDefault: jest.fn() } as unknown as DragEvent<HTMLDivElement>;
        act(() => {
            result.current.handleDragOver(mockEvent);
        });
        expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
    });

    it('should handle drag enter', () => {
        const { result } = renderHook(() => useColumnDragAndDrop({
            columnId: '1',
            onSetDropPosition: mockOnSetDropPosition,
            onColumnDragStart: mockOnColumnDragStart,
            onColumnDrop: mockOnDrop,
            onDrop: mockOnDrop,
            dropPosition: { columnId: null, index: null },
        }));

        const mockEvent = {} as DragEvent<HTMLDivElement>;
        act(() => {
            result.current.handleDragEnter(0, mockEvent);
        });
        expect(mockOnSetDropPosition).toHaveBeenCalledWith('1', 0);
    });
});