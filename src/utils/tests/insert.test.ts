import { CardType } from '../../types';
import { insertItem } from '../insert';

describe('insertItem Function', () => {
    const initialArray: CardType[] = [
        { id: '1', title: 'Card 1', description: 'Description 1', priority: 'High' },
        { id: '2', title: 'Card 2', description: 'Description 2', priority: 'Medium' },
    ];

    const newItem: CardType = { id: '3', title: 'Card 3', description: 'Description 3', priority: 'Low' };

    it('should insert an item at the beginning of the array', () => {
        const updatedArray = insertItem(initialArray, newItem, 0);
        expect(updatedArray).toHaveLength(3);
        expect(updatedArray[0]).toEqual(newItem);
    });

    it('should insert an item at the end of the array', () => {
        const updatedArray = insertItem(initialArray, newItem, initialArray.length);
        expect(updatedArray).toHaveLength(3);
        expect(updatedArray[2]).toEqual(newItem);
    });

    it('should insert an item in the middle of the array', () => {
        const updatedArray = insertItem(initialArray, newItem, 1);
        expect(updatedArray).toHaveLength(3);
        expect(updatedArray[1]).toEqual(newItem);
    });
});