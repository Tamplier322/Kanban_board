import { useEffect, useState } from 'react';

import { LOAD_DATA_ERROR, SAVING_DATA_ERROR } from '../constants/errors';
import { initialData } from '../constants/initial-data';
import { LOCAL_STORAGE_KEY } from '../constants/labels';
import { ColumnType } from '../types/index';

function useLocalStorageColumns(): [ColumnType[], React.Dispatch<React.SetStateAction<ColumnType[]>>] {
    const [columns, setColumns] = useState<ColumnType[]>(() => {
        try {
            const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
            return storedData ? JSON.parse(storedData) : (localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(initialData)), initialData);
        } catch (error) {
            console.error(LOAD_DATA_ERROR, error);
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(columns));
        } catch (error) {
            console.error(SAVING_DATA_ERROR, error);
        }
    }, [columns]);

    return [columns, setColumns];
}

export default useLocalStorageColumns;