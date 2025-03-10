import { act,renderHook } from '@testing-library/react';

import { initialData } from '../../constants/initial-data';
import { ColumnType } from '../../types';
import useLocalStorageColumns from '../useLocalStorage';

const localStorageMock = (() => {
    let store: { [key: string]: string } = {};
    return {
        getItem: (key: string) => store[key] || null,
        setItem: (key: string, value: string) => {
            store[key] = String(value);
        },
        clear: () => {
            store = {};
        },
        removeItem: (key: string) => {
            delete store[key];
        },
    };
})();

Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
});

describe('useLocalStorageColumns Hook', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it('should initialize with initial data if localStorage is empty', () => {
        const { result } = renderHook(() => useLocalStorageColumns());
        const [columns] = result.current;
        expect(columns).toEqual(initialData);
    });

    it('should update localStorage when columns change', () => {
        const { result } = renderHook(() => useLocalStorageColumns());
        const [, setColumns] = result.current;
        const newColumns: ColumnType[] = [{ id: '2', title: 'Column 2', color: '#000', cards: [] }];

        act(() => {
            setColumns(newColumns);
        });
    });
});