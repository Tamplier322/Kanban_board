import styled, { keyframes } from "styled-components";

import { ONE, ZERO } from "@constants/labels";
import { AlertContainerProps } from '@types';

const fadeIn = keyframes`
    from {
        opacity: ${ZERO};
    }
    to {
        opacity: ${ONE};
    }
`;

const fadeOut = keyframes`
    from {
        opacity: ${ONE};
    }
    to {
        opacity: ${ZERO};
    }
`;

export const AlertContainer = styled.div<AlertContainerProps>`
    position: ${({ theme }) => theme.position.fixed};
    bottom: ${({ theme }) => theme.spacing.xl};
    right: ${({ theme }) => theme.spacing.xl};
    background-color: ${({ theme }) => theme.colors.danger};
    color: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.borderRadius.xxl};
    box-shadow: ${({ theme }) => theme.boxShadow};
    z-index: ${({ theme }) => theme.z_index.xl};
    animation: ${props => props.isVisible ? fadeIn : fadeOut} ${({ theme }) => theme.transform.anim};
    opacity: ${props => props.isVisible ? 1 : 0};
`;

