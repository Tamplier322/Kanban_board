import styled from 'styled-components';

import { HALF, OPACITY_65, THIRD_PART_OPACITY, TRANSPARENT } from '@constants/labels';
import { AddCardButtonProps, AddTaskCardPropsStyles, ColumnContainerProps, ColumnHeaderProps, ColumnTitleProps, CountBadgeProps } from '@types';

export const ColumnContainer = styled.div < ColumnContainerProps > `
  background-color: ${({ theme }) => theme.colors.appBackground};
  border-radius: ${({ theme }) => theme.borderRadius.xxxl};
  padding: ${({ theme }) => theme.spacing.md};
  width: ${({ theme }) => theme.columnWidth};
  min-width: ${({ theme }) => theme.columnWidth};
  box-shadow: ${({ theme }) => theme.boxShadow};
  display: ${({ theme }) => theme.display.flex};
  flex-direction: ${({ theme }) => theme.flex_direction.column};
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.width.max}) {
    width: ${({ theme }) => theme.width.page};
    min-width: ${({ theme }) => theme.width.auto};
    box-sizing: ${({ theme }) => theme.box_sizing.box}; 
  }
`;

export const ColumnHeader = styled.div < ColumnHeaderProps > `
  display: ${({ theme }) => theme.display.flex};
  align-items: ${({ theme }) => theme.align_items.center};
  justify-content: ${({ theme }) => theme.justify.space};
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  background-color: ${ props => props.color };
  border-radius: ${({ theme }) => theme.borderRadius.xxxxl};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.ms};
  color: ${({ theme }) => theme.colors.white};
  height: ${({ theme }) => theme.hitZone.big};
`;

export const ColumnTitle = styled.h2 < ColumnTitleProps > `
  font-size: ${({ theme }) => theme.fontSizes.regular};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  text-align: ${({ theme }) => theme.align_items.center};
  padding: ${({ theme }) => theme.spacing.xxs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

export const ColumnTitleWrapper = styled.div`
  display: ${({ theme }) => theme.display.flex};
  align-items: ${({ theme }) => theme.align_items.center};
  flex-grow: ${({ theme }) => theme.flex_wrap.one};
  margin-right: ${({ theme }) => theme.spacing.xs};
  justify-content:${({ theme }) => theme.justify.flex};
`;

export const AddCardButton = styled.button < AddCardButtonProps > `
    color: ${({ theme }) => theme.colors.white};
    border: ${({ theme }) => theme.nothing.none};
    border-radius: ${({ theme }) => theme.borderRadius.circle};
    width: ${({ theme }) => theme.hitZone.small};
    height: ${({ theme }) => theme.hitZone.small};
    font-size: ${({ theme }) => theme.fontSizes.extraLarge};
    line-height: ${({ theme }) => theme.flex_wrap.one};
    cursor: ${({ theme }) => theme.cursor.point};
    display: ${({ theme }) => theme.display.flex};
    align-items: ${({ theme }) => theme.align_items.center};
    justify-content: ${({ theme }) => theme.justify.center};
    background-color: ${({ theme }) => theme.colors.addTaskCardButton};

    &:hover {
      background-color: ${({ theme }) => theme.colors.addTaskCardButtonHover};
    }

    margin-left: ${({ theme }) => theme.spacing.auto};
    padding: ${({ theme }) => theme.spacing.zero};
`;

export const CardContainer = styled.div`
  display: ${({ theme }) => theme.display.flex};
  flex-direction: ${({ theme }) => theme.flex_direction.column};
  gap: ${({ theme }) => theme.spacing.md};
`;

export const CountBadge = styled.span < CountBadgeProps > `
    background-color: ${({ theme }) => theme.colors.white};
    color: ${ props => `${props.color}${OPACITY_65}`};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    padding: ${({ theme }) => theme.spacing.xxs} ${({ theme }) => theme.spacing.sm};
    border-radius: ${({ theme }) => theme.borderRadius.circle};
    margin-right: ${({ theme }) => theme.spacing.xs};
    min-width: ${({ theme }) => theme.hitZone.medium};
    min-height: ${({ theme }) => theme.hitZone.medium};
    display: ${({ theme }) => theme.display.flex};
    justify-content:${({ theme }) => theme.justify.center};
    align-items: ${({ theme }) => theme.align_items.center};
`;

export const AddTaskCard = styled.button < AddTaskCardPropsStyles > `
  background-color:  ${ props => `${props.color}${THIRD_PART_OPACITY}`};
  border: ${({ theme }) => theme.nothing.none};
  color: ${ props => props.color };
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.xxs} ${({ theme }) => theme.spacing.sm};
  cursor: ${({ theme }) => theme.cursor.point};
  font-size: ${({ theme }) => theme.fontSizes.small};
  text-align: ${({ theme }) => theme.align_items.center};
  width: ${({ theme }) => theme.width.auto};
  display: ${({ theme }) => theme.display.inline_block};
  transition: ${({ theme }) => theme.transition.xxl};

  &:hover {
    background-color: ${ props => `${props.color}${HALF}`};
  }

  @media (max-width: ${({ theme }) => theme.width.max}) {
    display: ${({ theme }) => theme.nothing.none};
  }
`;

export const ColumnEditInput = styled.input`
  background-color: ${TRANSPARENT};
  border: ${({ theme }) => theme.nothing.none};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.regular};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: ${({ theme }) => theme.align_items.left};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.ms};
  border-radius: ${({ theme }) => theme.borderRadius.xxl};
  outline: ${({ theme }) => theme.nothing.none};
  width: ${({ theme }) => theme.width.page};
`;