import styled from 'styled-components';

import { priorityColors } from '@constants/colors';
import { THIRD_PART, TRANSPARENT } from '@constants/labels';
import { AddTaskCardProps,CardItemPropsStyles,PriorityLabelPropsStyles } from '@types';

export const CardItem = styled.div<CardItemPropsStyles>`
background-color: ${({ theme }) => theme.colors.cardBackground};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.xxxl};
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.boxShadow};
  cursor: ${({ theme }) => theme.cursor.grab};
  transition: ${({ theme }) => theme.transition.sm};

  @media (max-width: ${({ theme }) => theme.width.max}) {
    width: ${({ theme }) => theme.width.page};
    margin-left: ${({ theme }) => theme.spacing.zero};
    margin-right: ${({ theme }) => theme.spacing.zero};
    box-sizing: ${({ theme }) => theme.box_sizing.box};
  }
  min-height: ${({ theme }) => theme.height.xs};
`;

export const PriorityLabel = styled.span<PriorityLabelPropsStyles>`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${(props) => (props.priority ? priorityColors[props.priority] : props.theme.colors.gray)};
  display: ${({ theme }) => theme.display.inline_block};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.xxs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  border: ${({ theme }) => theme.nothing.none};
  background-color: ${(props) => props.priority ? `rgba(${priorityColors[props.priority]?.match(/\d+/g)?.join(',')}, ${THIRD_PART})` : `${TRANSPARENT}`}
`;

export const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.regular};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  word-wrap: ${({ theme }) => theme.word_wrap.break};
  overflow-wrap: ${({ theme }) => theme.word_wrap.break};
  max-height: ${({ theme }) => theme.height.xxs};
`;

export const CardDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
  word-wrap: ${({ theme }) => theme.word_wrap.break};
  overflow-wrap: ${({ theme }) => theme.word_wrap.break};
  max-height: ${({ theme }) => theme.height.xs};
`;

export const AddTaskCardItem = styled.div<AddTaskCardProps>`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.xxxl};
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: ${({ theme }) => theme.transition.sm};
  border: ${({ theme }) => theme.borderWidth} ${({ theme }) => theme.borderStyle} ${({ theme }) => theme.colors.lightGray};
  display: ${({ theme }) => theme.display.flex};
  justify-content:${({ theme }) => theme.justify.flex};
  align-items: ${({ theme }) => theme.align_items.center};

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadowHover};
    transform: ${({ theme }) => theme.transform.sm};
  }

  @media (max-width: ${({ theme }) => theme.width.max}) {
    display: ${({ theme }) => theme.nothing.none};
  }
`;