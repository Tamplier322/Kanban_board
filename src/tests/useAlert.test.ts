import { act,renderHook } from '@testing-library/react';

import useAlert from '@utils/useAlert';

describe('useAlert Hook', () => {
    it('should return initial state of null', () => {
        const { result } = renderHook(() => useAlert());
        expect(result.current[0]).toBeNull();
    });

    it('should set alert message when showAlert is called', () => {
        const { result } = renderHook(() => useAlert());
        act(() => {
            result.current[1]('Test message');
        });
        expect(result.current[0]).toBe('Test message');
    });

    it('should set alert message to null when closeAlert is called', () => {
        const { result } = renderHook(() => useAlert());
        act(() => {
            result.current[1]('Test message');
        });
        act(() => {
            result.current[2]();
        });
        expect(result.current[0]).toBeNull();
    });
});