import styled from 'styled-components';

import { AddCardButtonProps, AddTaskCardPropsStyles,ColumnContainerProps, ColumnHeaderProps, ColumnTitleProps, CountBadgeProps } from '../../types/index';

export const ColumnContainer = styled.div < ColumnContainerProps > `
  background-color: ${props => props.theme.colors.appBackground};
  border-radius: ${props => props.theme.borderRadius.xxxl};
  padding: ${props => props.theme.spacing.md};
  width: ${props => props.theme.columnWidth};
  min-width: ${props => props.theme.columnWidth};
  box-shadow: ${props => props.theme.boxShadow};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};

  @media (max-width: 390px) {
        width: 100%;
        min-width: auto;
  }
`;

export const ColumnHeader = styled.div < ColumnHeaderProps > `
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.sm};
  background-color: ${ props => props.color };
  border-radius: ${props => props.theme.borderRadius.xxxxl};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.ms};
  color: ${props => props.theme.colors.white};
  height: ${props => props.theme.hitZone.big};
`;

export const ColumnTitle = styled.h2 < ColumnTitleProps > `
  font-size: ${props => props.theme.fontSizes.regular};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.white};
  text-align: center;
  padding: ${props => props.theme.spacing.xxs} ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.md};
`;

export const ColumnTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  margin-right: ${props => props.theme.spacing.xs};
  justify-content: flex-start;
`;

export const AddCardButton = styled.button < AddCardButtonProps > `
    color: ${props => props.theme.colors.white};
    border: none;
    border-radius: ${props => props.theme.borderRadius.circle};
    width: ${props => props.theme.hitZone.small};
    height: ${props => props.theme.hitZone.small};
    font-size: ${props => props.theme.fontSizes.xl};
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

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
`;

export const CountBadge = styled.span < CountBadgeProps > `
    background-color: ${props => props.theme.colors.white};
    color: ${ props => `${props.color}65`};
    font-size: ${props => props.theme.fontSizes.medium};
    padding: ${props => props.theme.spacing.xxs} ${props => props.theme.spacing.sm};
    border-radius: ${props => props.theme.borderRadius.circle};
    margin-right: ${props => props.theme.spacing.xs};
    min-width: ${props => props.theme.hitZone.medium};
    min-height: ${props => props.theme.hitZone.medium};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AddTaskCard = styled.button < AddTaskCardPropsStyles > `
  background-color:  ${ props => `${props.color}33`};
  border: none;
  color: ${ props => props.color };
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing.xxs} ${props => props.theme.spacing.sm};
  cursor: pointer;
  font-size: ${props => props.theme.fontSizes.small};
  text-align: center;
  width: auto;
  display: inline-block;
  transition: background-color 0.2s ease;

  &:hover {
        background-color: ${ props => `${props.color}55`};
  }

  @media (max-width: 390px) {
        display: none;
  }
`;