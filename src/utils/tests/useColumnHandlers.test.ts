import { act,renderHook } from '@testing-library/react';

import { ColumnType, DropPosition } from '../../types';
import useColumnHandlers from '../useColumnHandlers';

const mockOnDrop = jest.fn();
const mockOnDeleteColumn = jest.fn();

describe('useColumnHandlers Hook', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    const mockColumn: ColumnType = { id: '1', title: 'Column 1', color: '#fff', cards: [] };
    const mockDropPosition: DropPosition = { columnId: null, index: null, position: null };

    it('should handle onDrop', () => {
        const { result } = renderHook(() => useColumnHandlers({
            column: mockColumn,
            onDrop: mockOnDrop,
            onDeleteColumn: mockOnDeleteColumn,
            dropPosition: mockDropPosition,
        }));

        act(() => {
            result.current.handleOnDrop();
        });

        expect(mockOnDrop).toHaveBeenCalledWith(mockColumn.id, mockDropPosition.index || 0);
    });
});