import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.md};
  min-width: 300px;
  min-height: 130px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  cursor: grab;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadowHover};
    transform: translateY(-2px);
  }
`;

export const ModalTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

export const ModalLabel = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const StyledInputTitle = styled.input`
  margin-left: ${({ theme }) => theme.spacing.md};
  margin-top: 100px;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.regular};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  margin-top: ${({ theme }) => theme.spacing.md};
  width: 90%;
  padding: 0;
  outline: none;
  opacity: 0.9;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const StyledInputColor = styled.input`
  margin-left: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;


export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${ props => props.color };
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.small};
  text-align: center;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  width: auto;
  display: inline-block;
  padding-inline: 0px;
  transition: ${({ theme }) => theme.transition};
  opacity: ${({ theme }) => theme.opacity.disable};

  &:hover {
    background-color: ${ props => `${props.color}55`};
  }
  background-color: transparent;
`;

export const StyledButton1 = styled.button`
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  cursor: pointer;
  border: none;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: ${({ theme }) => theme.spacing.xl};
`;