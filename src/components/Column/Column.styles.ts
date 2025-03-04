import styled from 'styled-components';

import { AddCardButtonProps, AddTaskCardPropsStyles, ColumnContainerProps, ColumnHeaderProps, ColumnTitleProps, CountBadgeProps } from '../../types/index';

export const ColumnContainer = styled.div < ColumnContainerProps > `
  background-color: ${({ theme }) => theme.colors.appBackground};
  border-radius: ${({ theme }) => theme.borderRadius.xxxl};
  padding: ${({ theme }) => theme.spacing.md};
  width: ${({ theme }) => theme.columnWidth};
  min-width: ${({ theme }) => theme.columnWidth};
  box-shadow: ${({ theme }) => theme.boxShadow};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: 699px) {
        width: 100%;
        min-width: auto;
        box-sizing: border-box;
  }
`;

export const ColumnHeader = styled.div < ColumnHeaderProps > `
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

export const ColumnTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  margin-right: ${({ theme }) => theme.spacing.xs};
  justify-content: flex-start;
`;

export const AddCardButton = styled.button < AddCardButtonProps > `
    color: ${({ theme }) => theme.colors.white};
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.circle};
    width: ${({ theme }) => theme.hitZone.small};
    height: ${({ theme }) => theme.hitZone.small};
    font-size: ${({ theme }) => theme.fontSizes.extraLarge};
    line-height: 1;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.2);

    &:hover {
        background-color: rgba(255, 255, 255, 0.4);
    }

    margin-left: auto;
    padding: 0;
`;

export const DragLine = styled.div`
  border-bottom: 1px dashed rgb(78, 174, 187);
  margin-bottom: 5px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const CountBadge = styled.span < CountBadgeProps > `
    background-color: ${({ theme }) => theme.colors.white};
    color: ${ props => `${props.color}65`};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    padding: ${({ theme }) => theme.spacing.xxs} ${({ theme }) => theme.spacing.sm};
    border-radius: ${({ theme }) => theme.borderRadius.circle};
    margin-right: ${({ theme }) => theme.spacing.xs};
    min-width: ${({ theme }) => theme.hitZone.medium};
    min-height: ${({ theme }) => theme.hitZone.medium};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AddTaskCard = styled.button < AddTaskCardPropsStyles > `
  background-color:  ${ props => `${props.color}33`};
  border: none;
  color: ${ props => props.color };
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.xxs} ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.small};
  text-align: center;
  width: auto;
  display: inline-block;
  transition: background-color 0.2s ease;

  &:hover {
        background-color: ${ props => `${props.color}55`};
  }

  @media (max-width: 699px) {
        display: none;
  }
`;

export const ColumnEditInput = styled.input`
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  text-align: left;
  padding: 4px 8px;
  border-radius: 20px;
  outline: none;
  width: 100%;
`;