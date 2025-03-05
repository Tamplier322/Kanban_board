import React from 'react';

import { NOT_FOUND, NOT_FOUND_TEXT } from '../../constants/errors';
import { NotFoundContainer, NotFoundMessage,NotFoundTitle } from './NotFound.styles';

const NotFound: React.FC = () => {
    return (
        <NotFoundContainer>
            <NotFoundTitle>{NOT_FOUND}</NotFoundTitle>
            <NotFoundMessage>{NOT_FOUND_TEXT}</NotFoundMessage>
        </NotFoundContainer>
    );
};

export default NotFound;