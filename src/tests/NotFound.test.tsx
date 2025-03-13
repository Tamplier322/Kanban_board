
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import NotFound from '@components/NotFound/NotFound';
import { NOT_FOUND, NOT_FOUND_TEXT } from '@constants/errors';
import { theme } from '@theme/theme';

describe('NotFound Component', () => {
    it('should render without errors', () => {
        render(
            <ThemeProvider theme={theme}>
                <NotFound />
            </ThemeProvider>
        );
    });

    it('should render the 404 title', () => {
        render(
            <ThemeProvider theme={theme}>
                <NotFound />
            </ThemeProvider>
        );

        expect(screen.getByText(NOT_FOUND)).toBeInTheDocument();
    });

    it('should render the not found message', () => {
        render(
            <ThemeProvider theme={theme}>
                <NotFound />
            </ThemeProvider>
        );

        expect(screen.getByText(NOT_FOUND_TEXT)).toBeInTheDocument();
    });
});