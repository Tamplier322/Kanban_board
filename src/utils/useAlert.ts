import { useCallback,useState } from 'react';

import { UseAlertResult } from '@types'

function useAlert(): UseAlertResult {
    const [AlertMessage, setAlertMessage] = useState<string | null>(null);

    const showAlert = useCallback((message: string) => {
        setAlertMessage(message);
    }, [setAlertMessage]);

    const closeAlert = useCallback(() => {
        setAlertMessage(null);
    }, [setAlertMessage]);

    return [AlertMessage, showAlert, closeAlert];
}

export default useAlert;