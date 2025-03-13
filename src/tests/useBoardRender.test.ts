import { act,renderHook } from '@testing-library/react';

import useBoardRender from '../utils/useBoardRender';

const mockOnDrop = jest.fn();

describe('useBoardRender Hook', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should handle onDragEnter', () => {
        const { result } = renderHook(() => useBoardRender({ onDrop: mockOnDrop }));
        act(() => {
            result.current.handleOnDragEnter('1', 0);
        });
        expect(result.current.dropPosition).toEqual({ columnId: '1', index: 0, position: 'before' });
    });

    it('should handle onDrop', () => {
        const { result } = renderHook(() => useBoardRender({ onDrop: mockOnDrop }));
        act(() => {
            result.current.handleOnDrop('1', 0);
        });
        expect(mockOnDrop).toHaveBeenCalledTimes(1);
        expect(mockOnDrop).toHaveBeenCalledWith('1', 0);
        expect(result.current.dropPosition).toEqual({ columnId: null, index: null, position: 'before' });
    });
});