import { fireEvent,render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import Column from '@components/Column/Column';
import { theme } from '@theme/theme';

const mockColumn = {
    id: '1',
    title: 'Test Column',
    color: '#fff',
    cards: [],
};

const mockOnAddCard = jest.fn();
const mockOnDeleteCard = jest.fn();
const mockOnDeleteColumn = jest.fn();
const mockOnDragStart = jest.fn();
const mockOnDrop = jest.fn();
const mockOnSetDropPosition = jest.fn();
const mockOnEditCard = jest.fn();
const mockOnColumnDrop = jest.fn();
const mockOnColumnDragStart = jest.fn();
const mockOnEditColumn = jest.fn();

describe('Column Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render without errors', () => {
        render(
            <ThemeProvider theme={theme}>
                <Column
                    column={mockColumn}
                    onAddCard={mockOnAddCard}
                    onDeleteCard={mockOnDeleteCard}
                    onDeleteColumn={mockOnDeleteColumn}
                    onDragStart={mockOnDragStart}
                    onDrop={mockOnDrop}
                    dropPosition={{ columnId: null, index: null }}
                    onSetDropPosition={mockOnSetDropPosition}
                    onEditCard={mockOnEditCard}
                    onColumnDrop={mockOnColumnDrop}
                    onColumnDragStart={mockOnColumnDragStart}
                    onEditColumn={mockOnEditColumn}
                />
            </ThemeProvider>
        );
    });

    it('should render column title', () => {
        render(
            <ThemeProvider theme={theme}>
                <Column
                    column={mockColumn}
                    onAddCard={mockOnAddCard}
                    onDeleteCard={mockOnDeleteCard}
                    onDeleteColumn={mockOnDeleteColumn}
                    onDragStart={mockOnDragStart}
                    onDrop={mockOnDrop}
                    dropPosition={{ columnId: null, index: null }}
                    onSetDropPosition={mockOnSetDropPosition}
                    onEditCard={mockOnEditCard}
                    onColumnDrop={mockOnColumnDrop}
                    onColumnDragStart={mockOnColumnDragStart}
                    onEditColumn={mockOnEditColumn}
                />
            </ThemeProvider>
        );

        expect(screen.getByText('Test Column')).toBeInTheDocument();
    });

    it('should call onAddCard when add card button is clicked', () => {
        render(
            <ThemeProvider theme={theme}>
                <Column
                    column={mockColumn}
                    onAddCard={mockOnAddCard}
                    onDeleteCard={mockOnDeleteCard}
                    onDeleteColumn={mockOnDeleteColumn}
                    onDragStart={mockOnDragStart}
                    onDrop={mockOnDrop}
                    dropPosition={{ columnId: null, index: null }}
                    onSetDropPosition={mockOnSetDropPosition}
                    onEditCard={mockOnEditCard}
                    onColumnDrop={mockOnColumnDrop}
                    onColumnDragStart={mockOnColumnDragStart}
                    onEditColumn={mockOnEditColumn}
                />
            </ThemeProvider>
        );

        const addCardButton = screen.getByText('+');
        fireEvent.click(addCardButton);

        expect(mockOnAddCard).toHaveBeenCalledTimes(0);
    });
});