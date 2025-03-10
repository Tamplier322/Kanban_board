import { fireEvent,render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { DEFAULT_COLUMN_COLOR } from '../../constants/colors';
import { theme } from '../../theme/theme';
import NewTaskCard from './NewTaskCard';

const mockOnClose = jest.fn();
const mockOnSave = jest.fn();

describe('NewTaskCard Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should call onSave with task data when all fields are filled', () => {
        render(
            <ThemeProvider theme={theme}>
                <NewTaskCard onClose={mockOnClose} onSave={mockOnSave} color={DEFAULT_COLUMN_COLOR} />
            </ThemeProvider>
        );
    });

    it('should call onClose when cancel button is clicked', () => {
        render(
            <ThemeProvider theme={theme}>
                <NewTaskCard onClose={mockOnClose} onSave={mockOnSave} color={DEFAULT_COLUMN_COLOR} />
            </ThemeProvider>
        );

        const cancelButton = screen.getByText('Cancel');
        fireEvent.click(cancelButton);

        expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
});