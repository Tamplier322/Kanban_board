import { act,renderHook } from '@testing-library/react';

import { useBoardActions } from '@utils/useBoardActions';

const mockSetColumns = jest.fn();
const mockSetColumnModalOpen = jest.fn();

describe('useBoardActions Hook', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should call setColumnModalOpen with true when handleAddColumn is called', () => {
        const { result } = renderHook(() => useBoardActions({ setColumns: mockSetColumns, setColumnModalOpen: mockSetColumnModalOpen }));
        act(() => {
            result.current.handleAddColumn();
        });
        expect(mockSetColumnModalOpen).toHaveBeenCalledWith(true);
    });

    it('should call setColumnModalOpen with false when handleCloseColumnModal is called', () => {
        const { result } = renderHook(() => useBoardActions({ setColumns: mockSetColumns, setColumnModalOpen: mockSetColumnModalOpen }));
        act(() => {
            result.current.handleCloseColumnModal();
        });
        expect(mockSetColumnModalOpen).toHaveBeenCalledWith(false);
    });
});