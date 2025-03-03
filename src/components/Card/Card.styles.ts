import styled from 'styled-components';

import { priorityColors } from '../../constants/colors';
import { AddTaskCardProps,CardItemPropsStyles,PriorityLabelPropsStyles } from '../../types/index';

export const CardItem = styled.div<CardItemPropsStyles>`
background-color: ${({ theme }) => theme.colors.cardBackground};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.xxxl};
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.boxShadow};
  cursor: grab;
  transition: ${({ theme }) => theme.transition};

  @media (max-width: 699px) {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    box-sizing: border-box;
  }
  min-height: ${({ theme }) => theme.height.xxl};
`;

export const PriorityLabel = styled.span<PriorityLabelPropsStyles>`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${(props) => (props.priority ? priorityColors[props.priority] : props.theme.colors.gray)};
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.xxs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  border: none;
  background-color: ${(props) => props.priority ? `rgba(${priorityColors[props.priority]?.match(/\d+/g)?.join(',')}, 0.33)` : 'transparent'}
`;

export const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.regular};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  word-wrap: break-word;
  overflow-wrap: break-word;
  max-height: 60px
`;

export const CardDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
  word-wrap: break-word;
  overflow-wrap: break-word;
  max-height: 70px
`;

export const AddTaskCardItem = styled.div<AddTaskCardProps>`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.xxxl};
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: ${({ theme }) => theme.transition};
  border: ${({ theme }) => theme.borderWidth} ${({ theme }) => theme.borderStyle} ${({ theme }) => theme.colors.lightGray};
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadowHover};
    transform: translateY(-2px);
  }

  @media (max-width: 699px) {
    display: none;
  }
`;