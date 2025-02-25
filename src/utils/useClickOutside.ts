import { useCallback,useEffect, useRef } from 'react';

function useClickOutside<T extends HTMLElement>(onClose: () => void) {
    const ref = useRef<T>(null);

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside]);

    return ref;
}

export default useClickOutside;