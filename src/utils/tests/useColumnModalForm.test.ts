import { act,renderHook } from '@testing-library/react';

import { DEFAULT_COLUMN_COLOR } from '../../constants/colors';
import { ADD_TITLE_PLACEHOLDER } from '../../constants/labels';
import { rgbToHex } from '../colorUtils';
import useColumnModalForm from '../useColumnModalForm';

const mockOnAddColumn = jest.fn();
const mockOnClose = jest.fn();

describe('useColumnModalForm Hook', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should initialize with correct default values', () => {
        const { result } = renderHook(() => useColumnModalForm({ onAddColumn: mockOnAddColumn, onClose: mockOnClose, isOpen: false }));
        expect(result.current.title).toBe(ADD_TITLE_PLACEHOLDER);
        expect(result.current.color).toBe(rgbToHex(DEFAULT_COLUMN_COLOR));
    });

    it('should set title and color', () => {
        const { result } = renderHook(() => useColumnModalForm({ onAddColumn: mockOnAddColumn, onClose: mockOnClose, isOpen: false }));
        act(() => {
            result.current.setTitle('New Title');
            result.current.setColor('#000000');
        });
        expect(result.current.title).toBe('New Title');
        expect(result.current.color).toBe('#000000');
    });
});