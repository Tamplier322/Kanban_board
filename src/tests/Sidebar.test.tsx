import '@testing-library/jest-dom';

import { fireEvent,render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import Sidebar from '@components/Sidebar/Sidebar';
import { ADD_COLUMN, CLOSE_BUTTON, MENU } from '@constants/labels';
import { theme } from '@theme/theme';

const mockOnClose = jest.fn();
const mockOnAddColumn = jest.fn();

describe('Sidebar Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render without errors', () => {
        render(
            <ThemeProvider theme={theme}>
                <Sidebar isOpen={true} onClose={mockOnClose} onAddColumn={mockOnAddColumn} />
            </ThemeProvider>
        );
    });

    it('should render the menu title', () => {
        render(
            <ThemeProvider theme={theme}>
                <Sidebar isOpen={true} onClose={mockOnClose} onAddColumn={mockOnAddColumn} />
            </ThemeProvider>
        );

        expect(screen.getByText(MENU)).toBeInTheDocument();
    });

    it('should render the add column button', () => {
        render(
            <ThemeProvider theme={theme}>
                <Sidebar isOpen={true} onClose={mockOnClose} onAddColumn={mockOnAddColumn} />
            </ThemeProvider>
        );

        expect(screen.getByText(ADD_COLUMN)).toBeInTheDocument();
    });

    it('should call onClose when the close button is clicked', () => {
        render(
            <ThemeProvider theme={theme}>
                <Sidebar isOpen={true} onClose={mockOnClose} onAddColumn={mockOnAddColumn} />
            </ThemeProvider>
        );

        const closeButton = screen.getByText(CLOSE_BUTTON);
        fireEvent.click(closeButton);

        expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

    it('should call onAddColumn when the add column button is clicked', () => {
        render(
            <ThemeProvider theme={theme}>
                <Sidebar isOpen={true} onClose={mockOnClose} onAddColumn={mockOnAddColumn} />
            </ThemeProvider>
        );

        const addColumnButton = screen.getByText(ADD_COLUMN);
        fireEvent.click(addColumnButton);

        expect(mockOnAddColumn).toHaveBeenCalledTimes(1);
    });
});