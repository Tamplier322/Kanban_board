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
  background-color: ${props => props.theme.colors.cardBackground};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing.md};
  min-width: 300px;
  min-height: 130px;
  box-shadow: ${props => props.theme.boxShadow};
  cursor: grab;
  transition: ${props => props.theme.transition};

  &:hover {
    box-shadow: ${props => props.theme.boxShadowHover};
    transform: translateY(-2px);
  }
`;

export const ModalTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.large};
  margin-bottom: ${props => props.theme.spacing.lg};
  text-align: center;
`;

export const ModalLabel = styled.label`
  display: block;
  margin-bottom: ${props => props.theme.spacing.xs};
  font-weight: ${props => props.theme.fontWeights.bold};
`;

export const StyledInputTitle = styled.input`
  margin-left: ${props => props.theme.spacing.md};
  margin-top: 100px;
  border: none;
  font-size: ${props => props.theme.fontSizes.regular};
  margin-bottom: ${props => props.theme.spacing.xs};
  margin-top: ${props => props.theme.spacing.md};
  width: 90%;
  padding: 0;
  outline: none;
  opacity: 0.9;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.textPrimary};
`;

export const StyledInputColor = styled.input`
  margin-left: ${props => props.theme.spacing.md};
  margin-top: ${props => props.theme.spacing.xl};
`;


export const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.white};
  color: ${ props => props.color };
  cursor: pointer;
  font-size: ${props => props.theme.fontSizes.small};
  text-align: center;
  border-radius: ${props => props.theme.borderRadius.xl};
  width: auto;
  display: inline-block;
  padding-inline: 0px;
  transition: ${props => props.theme.transition};
  opacity: ${props => props.theme.opacity.disable};

  &:hover {
    background-color: ${ props => `${props.color}55`};
  }
  background-color: transparent;
`;

export const StyledButton1 = styled.button`
  border-radius: ${props => props.theme.borderRadius.md};
  background-color: ${props => props.theme.colors.lightGray};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  cursor: pointer;
  border: none;
`;