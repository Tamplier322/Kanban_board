import styled from 'styled-components';

export const ErrorBoundaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: ${({ theme }) => theme.height.xxl};
  background: ${({ theme }) => theme.colors.NotFoundColor};
  padding-top: ${({ theme }) => theme.spacing.xxxl};
  font-family: ${({ theme }) => theme.fontFamily};
`;

export const ErrorBoundaryTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.extraLarge};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const ErrorMessage = styled.details`
    white-space: pre-wrap;
    margin-top: ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: ${({ theme }) => theme.colors.danger};
    display: none;
`;

export const StyledButton = styled.button`
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xxl};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    border: none;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    font-size: ${props => props.theme.fontSizes.regular};
    font-weight: ${props => props.theme.fontWeights.bold};
    cursor: pointer;
    transition: ${props => props.theme.transition};
    box-shadow: ${props => props.theme.boxShadow};

    &:hover {
        background-color: ${({ theme }) => theme.colors.primary_hover};
        transform: ${({ theme }) => theme.transform.sm};
        box-shadow: ${props => props.theme.boxShadowHover};
    }
`;