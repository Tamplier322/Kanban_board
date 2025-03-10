import { act,renderHook } from '@testing-library/react';

import useColumnModalHandlers from '../useColumnModalHandlers';

const mockSetTitle = jest.fn();
const mockSetColor = jest.fn();

describe('useColumnModalHandlers Hook', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should handle title change', () => {
        const { result } = renderHook(() => useColumnModalHandlers({ title: 'Test Title', setTitle: mockSetTitle, color: '#fff', setColor: mockSetColor, handleSave: () => {}, isOpen: true }));
        act(() => {
            result.current.handleTitleChange({ target: { value: 'New Title' } } as React.ChangeEvent<HTMLInputElement>);
        });
        expect(mockSetTitle).toHaveBeenCalledWith('New Title');
    });

    it('should handle color change', () => {
        const { result } = renderHook(() => useColumnModalHandlers({ title: 'Test Title', setTitle: mockSetTitle, color: '#fff', setColor: mockSetColor, handleSave: () => {}, isOpen: true }));
        act(() => {
            result.current.handleColorChange({ target: { value: '#000000' } } as React.ChangeEvent<HTMLInputElement>);
        });
        expect(mockSetColor).toHaveBeenCalledWith('#000000');
    });
});