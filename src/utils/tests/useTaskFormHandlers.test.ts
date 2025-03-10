import { act,renderHook } from '@testing-library/react';
import { ChangeEvent } from 'react';

import useTaskFormHandlers from '../useTaskFormHandlers';

const mockSetTitle = jest.fn();
const mockSetDescription = jest.fn();

describe('useTaskFormHandlers Hook', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should handle title change', () => {
        const { result } = renderHook(() => useTaskFormHandlers({ title: 'Test Title', description: 'Test Description', setTitle: mockSetTitle, setDescription: mockSetDescription }));
        act(() => {
            result.current.handleTitleChange({ target: { value: 'New Title' } } as ChangeEvent<HTMLInputElement>);
        });
        expect(mockSetTitle).toHaveBeenCalledWith('New Title');
    });

    it('should handle description change', () => {
        const { result } = renderHook(() => useTaskFormHandlers({ title: 'Test Title', description: 'Test Description', setTitle: mockSetTitle, setDescription: mockSetDescription }));
        act(() => {
            result.current.handleDescriptionChange({ target: { value: 'New Description' } } as ChangeEvent<HTMLInputElement>);
        });
        expect(mockSetDescription).toHaveBeenCalledWith('New Description');
    });

    it('should handle title focus', () => {
        const { result } = renderHook(() => useTaskFormHandlers({ title: 'Task title', description: 'Test Description', setTitle: mockSetTitle, setDescription: mockSetDescription }));
        act(() => {
            result.current.handleTitleFocus();
        });
        expect(mockSetTitle).toHaveBeenCalledWith('');
    });

    it('should handle title blur', () => {
        const { result } = renderHook(() => useTaskFormHandlers({ title: '', description: 'Test Description', setTitle: mockSetTitle, setDescription: mockSetDescription }));
        act(() => {
            result.current.handleTitleBlur();
        });
        expect(mockSetTitle).toHaveBeenCalledWith('Task title');
    });
});