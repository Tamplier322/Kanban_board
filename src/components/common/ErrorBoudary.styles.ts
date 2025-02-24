import styled from 'styled-components';

export const ErrorMessage = styled.details`
    white-space: pre-wrap;
    margin-top: ${props => props.theme.spacing.md};
    font-size: ${props => props.theme.fontSizes.small};
    color: ${props => props.theme.colors.danger};
    display: none;
`;

export const StyledButton = styled.button`
    padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
    border-radius: ${props => props.theme.borderRadius.sm};
    border: ${props => props.theme.borderWidth} ${props => props.theme.borderStyle} ${props => props.theme.colors.lightGray};
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.textPrimary};
    cursor: pointer;
    transition: ${props => props.theme.transition};

    &:hover {
        background-color: ${props => props.theme.colors.light};
    }
`;