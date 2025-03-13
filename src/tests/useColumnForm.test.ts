import { act,renderHook } from '@testing-library/react';

import { ColumnType } from '../types';
import useColumnForm from '../utils/useColumnForm';

const mockOnEditColumn = jest.fn();
const mockHandleCloseContextMenu = jest.fn();

describe('useColumnForm Hook', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    const mockColumn: ColumnType = { id: '1', title: 'Column 1', color: '#fff', cards: [] };

    it('should handle edit click', () => {
        const { result } = renderHook(() => useColumnForm({
            column: mockColumn,
            onEditColumn: mockOnEditColumn,
            handleCloseContextMenu: mockHandleCloseContextMenu,
        }));

        act(() => {
            result.current.handleEditClick();
        });

        expect(result.current.isEditing).toBe(true);
        expect(mockHandleCloseContextMenu).toHaveBeenCalledTimes(1);
    });

    it('should handle save click', () => {
        const { result } = renderHook(() => useColumnForm({
            column: mockColumn,
            onEditColumn: mockOnEditColumn,
            handleCloseContextMenu: mockHandleCloseContextMenu,
        }));

        act(() => {
            result.current.handleEditClick();
        });

        act(() => {
            result.current.handleSaveClick();
        });

        expect(mockOnEditColumn).toHaveBeenCalledTimes(1);
        expect(result.current.isEditing).toBe(false);
    });

    it('should handle cancel click', () => {
        const { result } = renderHook(() => useColumnForm({
            column: mockColumn,
            onEditColumn: mockOnEditColumn,
            handleCloseContextMenu: mockHandleCloseContextMenu,
        }));

        act(() => {
            result.current.handleEditClick();
        });

        act(() => {
            result.current.handleCancelClick();
        });

        expect(result.current.isEditing).toBe(false);
        expect(result.current.title).toBe('Column 1');
    });
});