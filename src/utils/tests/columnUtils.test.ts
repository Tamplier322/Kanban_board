import { CardType,ColumnType } from '../../types';
import { addCard,addNewColumn, deleteCard, deleteColumn } from '../columnUtils';

describe('Column Utils', () => {
    const initialColumns: ColumnType[] = [
        { id: '1', title: 'Column 1', color: '#fff', cards: [] },
        { id: '2', title: 'Column 2', color: '#fff', cards: [] },
    ];

    const newColumn: ColumnType = { id: '3', title: 'Column 3', color: '#fff', cards: [] };
    const newCard: CardType = { id: '1', title: 'Card 1', description: 'Description 1', priority: 'High' };

    it('should add a new column', () => {
        const updatedColumns = addNewColumn(initialColumns, newColumn);
        expect(updatedColumns).toHaveLength(3);
        expect(updatedColumns[2]).toEqual(newColumn);
    });

    it('should delete a column', () => {
        const updatedColumns = deleteColumn(initialColumns, '1');
        expect(updatedColumns).toHaveLength(1);
        expect(updatedColumns[0].id).toBe('2');
    });

    it('should delete a card from a column', () => {
        const columnsWithCard: ColumnType[] = [
            { id: '1', title: 'Column 1', color: '#fff', cards: [newCard] },
            { id: '2', title: 'Column 2', color: '#fff', cards: [] },
        ];

        const updatedColumns = deleteCard(columnsWithCard, '1', '1');
        expect(updatedColumns[0].cards).toHaveLength(0);
    });

    it('should add a card to a column', () => {
        const updatedColumns = addCard(initialColumns, '1', newCard);
        expect(updatedColumns[0].cards).toHaveLength(1);
        expect(updatedColumns[0].cards[0]).toEqual(newCard);
    });
});