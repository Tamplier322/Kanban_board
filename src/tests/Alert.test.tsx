import { act,render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../theme/theme';
import Alert from '../components/Alert/Alert';

const mockOnClose = jest.fn();

describe('Alert Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
    });

    it('should render without errors', () => {
        render(
            <ThemeProvider theme={theme}>
                <Alert message="Test message" onClose={mockOnClose} />
            </ThemeProvider>
        );
    });

    it('should render the message', () => {
        render(
            <ThemeProvider theme={theme}>
                <Alert message="Test message" onClose={mockOnClose} />
            </ThemeProvider>
        );

        expect(screen.getByText('Test message')).toBeInTheDocument();
    });

    it('should call onClose after the alert disappears', () => {
        render(
            <ThemeProvider theme={theme}>
                <Alert message="Test message" onClose={mockOnClose} />
            </ThemeProvider>
        );

        act(() => {
            jest.advanceTimersByTime(4000);
        });

        expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
});