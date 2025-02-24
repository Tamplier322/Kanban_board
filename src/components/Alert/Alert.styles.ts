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
    bottom: ${props => props.theme.spacing.xl};
    right: ${props => props.theme.spacing.xl};
    background-color: ${props => props.theme.colors.danger};
    color: ${props => props.theme.colors.white};
    padding: ${props => props.theme.spacing.md};
    border-radius: ${props => props.theme.borderRadius.xxl};
    box-shadow: ${props => props.theme.boxShadow};
    z-index: 1000;
    animation: ${props => props.isVisible ? fadeIn : fadeOut} 1s forwards;
    opacity: ${props => props.isVisible ? 1 : 0};
`;

