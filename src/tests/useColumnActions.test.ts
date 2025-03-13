import { act,renderHook } from '@testing-library/react';

import { ColumnType } from '../types';
import useColumnActions from '../utils/useColumnActions';

const mockOnDeleteColumn = jest.fn();
const mockHandleCloseContextMenu = jest.fn();

describe('useColumnActions Hook', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    const mockColumn: ColumnType = { id: '1', title: 'Column 1', color: '#fff', cards: [] };
    const mockContextMenu = { x: 0, y: 0, cardId: null, columnId: '1' };

    it('should call onDeleteColumn and handleCloseContextMenu when handleDeleteColumn is called', () => {
        const { result } = renderHook(() => useColumnActions({
            onDeleteColumn: mockOnDeleteColumn,
            handleCloseContextMenu: mockHandleCloseContextMenu,
            contextMenu: mockContextMenu,
            column: mockColumn,
        }));

        act(() => {
            result.current.handleDeleteColumn();
        });

        expect(mockOnDeleteColumn).toHaveBeenCalledWith('1');
        expect(mockHandleCloseContextMenu).toHaveBeenCalledTimes(1);
    });
});