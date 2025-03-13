import { act,renderHook } from '@testing-library/react';

import useCardForm from '../utils/useCardForm';

const mockOnEditCard = jest.fn();

describe('useCardForm Hook', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    const mockCard = {
        id: '1',
        title: 'Test Card',
        description: 'Test Description',
        priority: 'High',
    };

    it('should handle edit click', () => {
        const { result } = renderHook(() => useCardForm({ card: mockCard, onEditCard: mockOnEditCard, columnId: '1' }));
        act(() => {
            result.current.handleEditClick();
        });
        expect(result.current.isEditing).toBe(true);
    });

    it('should handle save click', () => {
        const { result } = renderHook(() => useCardForm({ card: mockCard, onEditCard: mockOnEditCard, columnId: '1' }));
        act(() => {
            result.current.handleEditClick();
        });
        act(() => {
            result.current.handleSaveClick();
        });
        expect(mockOnEditCard).toHaveBeenCalledTimes(1);
        expect(result.current.isEditing).toBe(false);
    });

    it('should handle cancel click', () => {
        const { result } = renderHook(() => useCardForm({ card: mockCard, onEditCard: mockOnEditCard, columnId: '1' }));
        act(() => {
            result.current.handleEditClick();
        });
        act(() => {
            result.current.handleCancelClick();
        });
        expect(result.current.isEditing).toBe(false);
    });
});