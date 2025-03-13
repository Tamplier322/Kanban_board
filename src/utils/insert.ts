import { CardType } from "@types";

export const insertItem = (array: CardType[], item: CardType, index: number): CardType[] => {
    const newArray = [...array];
    newArray.splice(index, 0, item);
    return newArray;
};