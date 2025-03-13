import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import Board from '@components/Board/Board';
import { theme } from '@theme/theme';

const mockColumns = [
    { id: '1', title: 'Column 1', color: '#fff', cards: [] },
    { id: '2', title: 'Column 2', color: '#fff', cards: [] },
];

describe('Board Component', () => {
    it('should render without errors', () => {
        render(
            <ThemeProvider theme={theme}>
                <Board
                    columns={mockColumns}
                    onAddCard={() => {}}
                    onDeleteCard={() => {}}
                    onDeleteColumn={() => {}}
                    onDragStart={() => {}}
                    onDrop={() => {}}
                    dropPosition={{columnId: null, index: null, position: null}}
                    onSetDropPosition={() => {}}
                    onEditCard={() => {}}
                    onColumnDrop={() => {}}
                    onColumnDragStart={() => {}}
                    onEditColumn={() => {}}
                />
            </ThemeProvider>
        );
    });

    it('should render columns', () => {
        render(
            <ThemeProvider theme={theme}>
                <Board
                    columns={mockColumns}
                    onAddCard={() => {}}
                    onDeleteCard={() => {}}
                    onDeleteColumn={() => {}}
                    onDragStart={() => {}}
                    onDrop={() => {}}
                    dropPosition={{columnId: null, index: null, position: null}}
                    onSetDropPosition={() => {}}
                    onEditCard={() => {}}
                    onColumnDrop={() => {}}
                    onColumnDragStart={() => {}}
                    onEditColumn={() => {}}
                />
            </ThemeProvider>
        );

        expect(screen.getByText('Column 1')).toBeInTheDocument();
        expect(screen.getByText('Column 2')).toBeInTheDocument();
    });
});