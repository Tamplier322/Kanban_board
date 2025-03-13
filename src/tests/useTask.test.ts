import { act,renderHook } from '@testing-library/react';

import useTask from '@utils/useTask';

const mockOnAddCard = jest.fn();

describe('useTask Hook', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should initialize with correct default values', () => {
        const { result } = renderHook(() => useTask({ columnId: '1', onAddCard: mockOnAddCard }));
        expect(result.current[0]).toBe(false);
    });

    it('should set isAddingTask to true when handleAddTaskClick is called', () => {
        const { result } = renderHook(() => useTask({ columnId: '1', onAddCard: mockOnAddCard }));
        act(() => {
            result.current[1]();
        });
        expect(result.current[0]).toBe(true);
    });

    it('should set isAddingTask to false when handleCloseNewTaskCard is called', () => {
        const { result } = renderHook(() => useTask({ columnId: '1', onAddCard: mockOnAddCard }));
        act(() => {
            result.current[1]();
        });
        act(() => {
            result.current[2]();
        });
        expect(result.current[0]).toBe(false);
    });

    it('should call onAddCard with correct arguments when handleSaveNewTask is called', () => {
        const { result } = renderHook(() => useTask({ columnId: '1', onAddCard: mockOnAddCard }));
        const newTask = { title: 'Test Title', description: 'Test Description', priority: 'High' };
        act(() => {
            result.current[3](newTask);
        });
        expect(mockOnAddCard).toHaveBeenCalledWith('1', expect.objectContaining({
            title: 'Test Title',
            description: 'Test Description',
            priority: 'High',
        }), null);
    });
});