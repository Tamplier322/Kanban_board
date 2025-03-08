import styled from 'styled-components';

import { TRANSPARENT } from './constants/labels';

export const AppContainer = styled.div`
  font-family: ${({ theme }) => theme.fontFamily};
  background-color: ${({ theme }) => theme.colors.appBackground};
  min-height: ${({ theme }) => theme.app.minHeight};
  display: ${({ theme }) => theme.display.flex};
  flex-direction: ${({ theme }) => theme.flex_direction.column};
`;

export const AppHeader = styled.div`
    background-color: ${TRANSPARENT};
    color: ${({ theme }) => theme.colors.textPrimary};
    padding: ${({ theme }) => theme.spacing.xl};
    display: ${({ theme }) => theme.display.flex};
    justify-content: ${({ theme }) => theme.justify.space};  
    align-items: ${({ theme }) => theme.align_items.center};

    @media (max-width: ${({ theme }) => theme.width.max}) {
      justify-content:${({ theme }) => theme.justify.flex};
    }
`;

export const AppTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.extraLarge};
  margin: ${({ theme }) => theme.spacing.zero};
`;

export const AddColumnButton = styled.button`
  background-color: ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.textSecondary};
  border: ${({ theme }) => theme.nothing.none};
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  width: ${({ theme }) => theme.hitZone.small};
  height: ${({ theme }) => theme.hitZone.small};
  font-size: ${({ theme }) => theme.fontSizes.large};
  cursor: ${({ theme }) => theme.cursor.point};
  display: ${({ theme }) => theme.display.flex};
  align-items: ${({ theme }) => theme.align_items.center};
  justify-content:${({ theme }) => theme.justify.center};

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverColor};
  }

  @media (max-width: ${({ theme }) => theme.width.max}) {
    display: ${({ theme }) => theme.nothing.none};
  }
`;

export const BurgerButton = styled.button`
  background-color: ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.textSecondary};
  border: ${({ theme }) => theme.nothing.none};
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  width: ${({ theme }) => theme.hitZone.small};
  height: ${({ theme }) => theme.hitZone.small};
  font-size: ${({ theme }) => theme.fontSizes.large};
  cursor: ${({ theme }) => theme.cursor.point};
  display: ${({ theme }) => theme.nothing.none};
  align-items: ${({ theme }) => theme.align_items.center};
  justify-content:${({ theme }) => theme.justify.center};
  margin-right: ${({ theme }) => theme.spacing.md};

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverColor};
  }

  @media (max-width: ${({ theme }) => theme.width.max}) {
    display: ${({ theme }) => theme.display.flex};
  }
`;