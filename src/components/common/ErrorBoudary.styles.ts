import styled from 'styled-components';

export const ErrorMessage = styled.details`
    white-space: pre-wrap;
    margin-top: ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: ${({ theme }) => theme.colors.danger};
    display: none;
`;

export const StyledButton = styled.button`
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    border: ${({ theme }) => theme.borderWidth} ${({ theme }) => theme.borderStyle} ${({ theme }) => theme.colors.lightGray};
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.textPrimary};
    cursor: pointer;
    transition: ${({ theme }) => theme.transition};

    &:hover {
        background-color: ${({ theme }) => theme.colors.light};
    }
`;