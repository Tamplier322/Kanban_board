import { act,fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../theme/theme';
import ColumnModal from './ColumnModal';

const mockOnAddColumn = jest.fn();
const mockOnClose = jest.fn();

describe('ColumnModal Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render without errors when isOpen is true', () => {
        render(
            <ThemeProvider theme={theme}>
                <ColumnModal isOpen={true} onClose={mockOnClose} onAddColumn={mockOnAddColumn} />
            </ThemeProvider>
        );
    });

    it('should not render when isOpen is false', () => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <ColumnModal isOpen={false} onClose={mockOnClose} onAddColumn={mockOnAddColumn} />
            </ThemeProvider>
        );

        expect(container.firstChild).toBeNull();
    });

    it('should call onAddColumn when save button is clicked and title is not empty', async () => {
        render(
            <ThemeProvider theme={theme}>
                <ColumnModal isOpen={true} onClose={mockOnClose} onAddColumn={mockOnAddColumn} />
            </ThemeProvider>
        );

        const titleInput = screen.getByRole('textbox');
        await act(async () => {
            fireEvent.change(titleInput, { target: { value: 'Test Column' } });
        });

        const saveButton = screen.getByText('Save');
        await act(async () => {
            fireEvent.click(saveButton);
        });

        expect(mockOnAddColumn).toHaveBeenCalledTimes(1);
    });

    it('should call showAlert when save button is clicked and title is empty', async () => {
        render(
            <ThemeProvider theme={theme}>
                <ColumnModal isOpen={true} onClose={mockOnClose} onAddColumn={mockOnAddColumn} />
            </ThemeProvider>
        );

        const saveButton = screen.getByText('Save');
        await act(async () => {
            fireEvent.click(saveButton);
        });

        expect(screen.getByText('Please enter a column title.')).toBeInTheDocument();
    });
});