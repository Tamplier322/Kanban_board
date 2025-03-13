import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../theme/theme';
import ErrorBoundary from '../components/common/ErrorBoundary';

const ThrowError = () => {
    throw new Error('Test error');
};

describe('ErrorBoundary Component', () => {
    it('should render without errors when no error occurs', () => {
        render(
            <ThemeProvider theme={theme}>
                <ErrorBoundary>
                    <div>Test Content</div>
                </ErrorBoundary>
            </ThemeProvider>
        );

        expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    it('should render error message when an error occurs', () => {
        const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

        render(
            <ThemeProvider theme={theme}>
                <ErrorBoundary>
                    <ThrowError />
                </ErrorBoundary>
            </ThemeProvider>
        );

        expect(screen.getByText('Something went wrong.')).toBeInTheDocument();
        consoleErrorSpy.mockRestore();
    });
});