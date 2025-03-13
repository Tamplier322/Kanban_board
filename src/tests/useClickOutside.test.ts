import { renderHook } from '@testing-library/react';

import useClickOutside from '@utils/useClickOutside';

describe('useClickOutside Hook', () => {
    it('should call onClose when clicked outside the ref', () => {
        const onClose = jest.fn();
        const { result } = renderHook(() => useClickOutside(onClose));

        const ref = result.current;
        const mockElement = document.createElement('div');
        ref.current = mockElement;

        const outsideClickEvent = new MouseEvent('mousedown', {
            bubbles: true,
            cancelable: true,
        });

        document.dispatchEvent(outsideClickEvent);

        expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('should not call onClose when clicked inside the ref', () => {
        const onClose = jest.fn();
        const { result } = renderHook(() => useClickOutside(onClose));

        const ref = result.current;
        const mockElement = document.createElement('div');
        ref.current = mockElement;

        const insideClickEvent = new MouseEvent('mousedown', {
            bubbles: true,
            cancelable: true,
        });

        mockElement.dispatchEvent(insideClickEvent);

        expect(onClose).not.toHaveBeenCalled();
    });
});