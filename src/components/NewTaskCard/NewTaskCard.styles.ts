import styled from 'styled-components';

import { THIRD_PART_OPACITY, TRANSPARENT } from '../../constants/labels';

export const StyledSelect = styled.select`
  padding: ${({ theme }) => theme.spacing.xxs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  border: ${({ theme }) => theme.nothing.none};
  width: ${({ theme }) => theme.width.auto};
  outline: ${({ theme }) => theme.nothing.none};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.textPrimary};
  background-color: ${TRANSPARENT};
  -webkit-appearance: ${({ theme }) => theme.nothing.none};
  -moz-appearance: ${({ theme }) => theme.nothing.none};
  appearance: ${({ theme }) => theme.nothing.none};
`;

export const StyledInputTitle = styled.input`
  border: ${({ theme }) => theme.nothing.none};
  font-size: ${({ theme }) => theme.fontSizes.regular};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  margin-top: ${({ theme }) => theme.spacing.md};
  width: ${({ theme }) => theme.width.page};
  padding: ${({ theme }) => theme.spacing.zero};
  outline: ${({ theme }) => theme.nothing.none};
  opacity: ${({ theme }) => theme.opacity.xxl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const StyledInputDescription = styled.input`
  border: ${({ theme }) => theme.nothing.none};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  width: ${({ theme }) => theme.width.page};
  padding: ${({ theme }) => theme.spacing.zero};
  outline: ${({ theme }) => theme.nothing.none};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  opacity: ${({ theme }) => theme.opacity.xl};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const StyledButton = styled.button`
  background-color:  ${(props) => `${props.color}${THIRD_PART_OPACITY}`};
  border: ${({ theme }) => theme.nothing.none};
  color: ${ props => props.color };
  cursor: ${({ theme }) => theme.cursor.point};
  font-size: ${({ theme }) => theme.fontSizes.small};
  text-align: ${({ theme }) => theme.align_items.center};
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

export const TaskCardHeader = styled.div`
  display: ${({ theme }) => theme.display.flex};
  justify-content: ${({ theme }) => theme.justify.space};
  align-items: ${({ theme }) => theme.align_items.center};
  position: ${({ theme }) => theme.position.relative};
`;

export const CloseButton = styled.span`
  cursor: ${({ theme }) => theme.cursor.point};
  color: ${({ theme }) => theme.colors.danger};
  font-size: ${({ theme }) => theme.fontSizes.regular};
  position: ${({ theme }) => theme.position.absolute};
  right: ${({ theme }) => theme.spacing.md};
  top: ${({ theme }) => theme.spacing.xs};
`;

export const PrioritySelectContainer = styled.div`
  display: ${({ theme }) => theme.display.flex};
  justify-content: ${({ theme }) => theme.justify.space};
  align-items: ${({ theme }) => theme.align_items.center};
`;

export const ButtonContainer = styled.div`
  display: ${({ theme }) => theme.display.flex};
  justify-content: ${({ theme }) => theme.justify.space};
  align-items: ${({ theme }) => theme.align_items.flex_start};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;
export const SelectContainer = styled.div`
  display: ${({ theme }) => theme.display.flex};
  justify-content: ${({ theme }) => theme.justify.space};
  align-items: ${({ theme }) => theme.align_items.center};
`;

export const StyledDiv = styled.div`
  
`;