import styled, { keyframes } from "styled-components";

import { AlertContainerProps } from '../../types/index';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

export const AlertContainer = styled.div<AlertContainerProps>`
    position: fixed;
    bottom: ${({ theme }) => theme.spacing.xl};
    right: ${({ theme }) => theme.spacing.xl};
    background-color: ${({ theme }) => theme.colors.danger};
    color: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.borderRadius.xxl};
    box-shadow: ${({ theme }) => theme.boxShadow};
    z-index: 1000;
    animation: ${props => props.isVisible ? fadeIn : fadeOut} 1s forwards;
    opacity: ${props => props.isVisible ? 1 : 0};
`;

