import React, { useCallback,useEffect, useState } from 'react';

import { AlertProps } from '../../types/index'
import { AlertContainer } from './Alert.styles';

const Alert: React.FC<AlertProps> = ({ message, onClose }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = useCallback(() => {
        setIsVisible(false);
        setTimeout(() => {
            onClose();
        }, 1000);
    }, [onClose, setIsVisible])

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
                onClose();
            }, 1000);
        }, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <AlertContainer isVisible={isVisible}>
            {message}
        </AlertContainer>
    );
};

export default Alert;