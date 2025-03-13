import { fireEvent,render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../theme/theme';
import ContextMenu from '../components/ContextMenu/ContextMenu';

const mockOnClose = jest.fn();
const mockOptions = [
    { label: 'Option 1', onClick: jest.fn() },
    { label: 'Option 2', onClick: jest.fn() },
];

describe('ContextMenu Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render without errors', () => {
        render(
            <ThemeProvider theme={theme}>
                <ContextMenu x={100} y={100} onClose={mockOnClose} options={mockOptions} />
            </ThemeProvider>
        );
    });

    it('should render options', () => {
        render(
            <ThemeProvider theme={theme}>
                <ContextMenu x={100} y={100} onClose={mockOnClose} options={mockOptions} />
            </ThemeProvider>
        );

        expect(screen.getByText('Option 1')).toBeInTheDocument();
        expect(screen.getByText('Option 2')).toBeInTheDocument();
    });

    it('should call onClick when option is clicked', () => {
        render(
            <ThemeProvider theme={theme}>
                <ContextMenu x={100} y={100} onClose={mockOnClose} options={mockOptions} />
            </ThemeProvider>
        );

        const option1 = screen.getByText('Option 1');
        fireEvent.click(option1);

        expect(mockOptions[0].onClick).toHaveBeenCalledTimes(1);
    });

    it('should call onClose when clicked outside the menu', () => {
        render(
            <ThemeProvider theme={theme}>
                <ContextMenu x={100} y={100} onClose={mockOnClose} options={mockOptions} />
            </ThemeProvider>
        );

        fireEvent.mouseDown(document);

        expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
});