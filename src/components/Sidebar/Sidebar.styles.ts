import styled from 'styled-components';

import { SidebarContainerProps } from '../../types';

export const SidebarContainer = styled.div<SidebarContainerProps>`
    position: ${({ theme }) => theme.position.fixed};
    width: ${({ theme }) => theme.width.xl};
    height: ${({ theme }) => theme.height.page};
    background-color: ${({ theme }) => theme.colors.light};
    box-shadow:  ${({ theme }) => theme.boxShadow};
    transform: translateX(${props => props.isOpen ? ({ theme }) => theme.transform.m : ({ theme }) => theme.transform.xl});
    transition: transform ${({ theme }) => theme.transition.xl};
    padding: ${({ theme }) => theme.spacing.xl};
    z-index: ${({ theme }) => theme.z_index.xl};
`;

export const SidebarHeader = styled.div`
    display: ${({ theme }) => theme.display.flex};
    justify-content: ${({ theme }) => theme.justify.space};
    align-items: ${({ theme }) => theme.align_items.center};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const SidebarTitle = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes.large};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const SidebarButton = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border: ${({ theme }) => theme.nothing.none};
    border-radius: ${({ theme }) => theme.borderRadius.xxl};
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
    cursor: ${({ theme }) => theme.cursor.point};
    font-size: ${({ theme }) => theme.fontSizes.regular};
    transition: ${({ theme }) => theme.transition.sm};
`;

export const CloseButton = styled.button`
    background: ${({ theme }) => theme.nothing.none};
    border: ${({ theme }) => theme.nothing.none};
    font-size: ${({ theme }) => theme.fontSizes.extraLarge};
    cursor: ${({ theme }) => theme.cursor.point};
`;