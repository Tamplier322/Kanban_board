import { fireEvent,render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../theme/theme';
import Card from '../components/Card/Card';

const mockCard = {
    id: '1',
    title: 'Test Card',
    description: 'Test Description',
    priority: 'High',
};

const mockOnDeleteCard = jest.fn();
const mockOnDragStart = jest.fn();
const mockOnEditCard = jest.fn();

describe('Card Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render without errors', () => {
        render(
            <ThemeProvider theme={theme}>
                <Card
                    card={mockCard}
                    onDeleteCard={mockOnDeleteCard}
                    columnId="1"
                    onDragStart={mockOnDragStart}
                    onEditCard={mockOnEditCard}
                />
            </ThemeProvider>
        );
    });

    it('should render card title and description', () => {
        render(
            <ThemeProvider theme={theme}>
                <Card
                    card={mockCard}
                    onDeleteCard={mockOnDeleteCard}
                    columnId="1"
                    onDragStart={mockOnDragStart}
                    onEditCard={mockOnEditCard}
                />
            </ThemeProvider>
        );

        expect(screen.getByText('Test Card')).toBeInTheDocument();
        expect(screen.getByText('Test Description')).toBeInTheDocument();
    });

    it('should call onDragStart when drag starts', () => {
        render(
            <ThemeProvider theme={theme}>
                <Card
                    card={mockCard}
                    onDeleteCard={mockOnDeleteCard}
                    columnId="1"
                    onDragStart={mockOnDragStart}
                    onEditCard={mockOnEditCard}
                />
            </ThemeProvider>
        );

        const cardItem = screen.getByText('Test Card');
        fireEvent.dragStart(cardItem);

        expect(mockOnDragStart).toHaveBeenCalledTimes(1);
    });

    it('should open context menu when right-clicked', () => {
        render(
            <ThemeProvider theme={theme}>
                <Card
                    card={mockCard}
                    onDeleteCard={mockOnDeleteCard}
                    columnId="1"
                    onDragStart={mockOnDragStart}
                    onEditCard={mockOnEditCard}
                />
            </ThemeProvider>
        );

        const cardItem = screen.getByText('Test Card');
        fireEvent.contextMenu(cardItem);

        expect(screen.getByRole('menu')).toBeInTheDocument();
    });
});