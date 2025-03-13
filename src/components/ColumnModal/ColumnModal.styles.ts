import styled from 'styled-components';

import { TRANSPARENT } from '@constants/labels';

export const ModalContainer = styled.div`
  position: ${({ theme }) => theme.position.fixed};
  top: ${({ theme }) => theme.spacing.zero};
  left: ${({ theme }) => theme.spacing.zero};
  width: ${({ theme }) => theme.width.page};
  height: ${({ theme }) => theme.height.page100};
  background-color: ${({ theme }) => theme.colors.modalContainer};
  display: ${({ theme }) => theme.display.flex};
  align-items: ${({ theme }) => theme.align_items.center};
  justify-content: ${({ theme }) => theme.justify.center};
  z-index: ${({ theme }) => theme.z_index.xl};
`;

export const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.md};
  min-width: ${({ theme }) => theme.width.xxl};
  min-height: ${({ theme }) => theme.height.m};
  box-shadow: ${({ theme }) => theme.boxShadow};
  cursor: ${({ theme }) => theme.cursor.grab};;
  transition: ${({ theme }) => theme.transition.sm};

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadowHover};
    transform: ${({ theme }) => theme.transform.sm};
  }
`;

export const ModalTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: ${({ theme }) => theme.align_items.center};
`;

export const ModalLabel = styled.label`
  display: ${({ theme }) => theme.display.block};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const StyledInputTitle = styled.input`
  margin-left: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.big};
  border: ${({ theme }) => theme.nothing.none};
  font-size: ${({ theme }) => theme.fontSizes.regular};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  margin-top: ${({ theme }) => theme.spacing.md};
  width: ${({ theme }) => theme.width.page90};
  padding: ${({ theme }) => theme.spacing.zero};
  outline: ${({ theme }) => theme.nothing.none};
  opacity: ${({ theme }) => theme.opacity.xxl};
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
  cursor: ${({ theme }) => theme.cursor.point};
  font-size: ${({ theme }) => theme.fontSizes.small};
  text-align: ${({ theme }) => theme.align_items.center};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  width: ${({ theme }) => theme.width.auto};
  display: ${({ theme }) => theme.display.inline_block};
  padding-inline: ${({ theme }) => theme.spacing.zero};
  transition: ${({ theme }) => theme.transition.sm};
  opacity: ${({ theme }) => theme.opacity.disable};

  &:hover {
    background-color: ${ props => `${props.color}`};
  }
  background-color: ${TRANSPARENT};
`;

export const StyledButton1 = styled.button`
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  cursor: ${({ theme }) => theme.cursor.point};
  border: ${({ theme }) => theme.nothing.none};
`;

export const ButtonContainer = styled.div`
  display: ${({ theme }) => theme.display.flex};
  justify-content: ${({ theme }) => theme.justify.space};
  align-items: ${({ theme }) => theme.align_items.flex_start};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;