import styled from 'styled-components';

export const ErrorMessage = styled.details`
    white-space: pre-wrap;
    margin-top: 10px;
    font-size: 0.8rem;
    color: #f44336;
    display: none;
`;

export const StyledButton = styled.button`
    padding: 8px 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
    background-color: #fff;
    color: #333;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: #eee;
    }
`;