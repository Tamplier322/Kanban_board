import { act,renderHook } from '@testing-library/react';

import useContextMenu from '../utils/useContextMenu';

describe('useContextMenu Hook', () => {
    it('should initialize with contextMenu as null', () => {
        const { result } = renderHook(() => useContextMenu());
        expect(result.current[0]).toBeNull();
    });

    it('should set contextMenu when handleContextMenu is called', () => {
        const { result } = renderHook(() => useContextMenu());
        const mockEvent = { 
            preventDefault: jest.fn(), 
            clientX: 100, 
            clientY: 200,
            target: {
                closest: jest.fn().mockReturnValue(null),
            }
        } as unknown as React.MouseEvent<HTMLDivElement>;
        act(() => {
            result.current[1](mockEvent, '1');
        });
        expect(result.current[0]).toEqual({ x: 100, y: 200, cardId: null, columnId: '1' });
    });

    it('should set contextMenu to null when handleCloseContextMenu is called', () => {
        const { result } = renderHook(() => useContextMenu());
        const mockEvent = { 
            preventDefault: jest.fn(), 
            clientX: 100, 
            clientY: 200,
            target: {
                closest: jest.fn().mockReturnValue(null),
            }
        } as unknown as React.MouseEvent<HTMLDivElement>;
        act(() => {
            result.current[1](mockEvent, '1');
        });
        act(() => {
            result.current[2]();
        });
        expect(result.current[0]).toBeNull();
    });
});