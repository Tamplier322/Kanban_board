import styled from 'styled-components';

export const NotFoundContainer = styled.div`
    display: ${({ theme }) => theme.display.flex};
    flex-direction: ${({ theme }) => theme.flex_direction.column};
    align-items: ${({ theme }) => theme.align_items.center};
    justify-content:${({ theme }) => theme.justify.flex};
    height: ${({ theme }) => theme.height.xxl};
    background: ${({ theme }) => theme.colors.NotFoundColor};
    padding-top: ${({ theme }) => theme.spacing.xxxl};
`;

export const NotFoundTitle = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.superLarge};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: 
    margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const NotFoundMessage = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.ml};
    color: ${({ theme }) => theme.colors.textSecondary};
    text-align: ${({ theme }) => theme.align_items.center};
    max-width: ${({ theme }) => theme.width.xxxl};
    padding: ${({ theme }) => theme.spacing.zero} ${({ theme }) => theme.spacing.xl};
`;