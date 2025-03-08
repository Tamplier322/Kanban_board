import styled from 'styled-components';

export const BoardContainer = styled.div`
  display: ${({ theme }) => theme.display.flex};
  flex-wrap: ${({ theme }) => theme.flex_wrap.wrap};
  gap: ${({ theme }) => theme.spacing.xl};
  flex-direction: ${({ theme }) => theme.flex_direction.row};
  overflow-x: ${({ theme }) => theme.overflow.x};
  padding: ${({ theme }) => theme.spacing.xl};
  gap: ${({ theme }) => theme.spacing.xl};
  min-height: ${({ theme }) => theme.app.minHeight};
  align-items: ${({ theme }) => theme.align_items.flex_start};
  background-color: ${({ theme }) => theme.colors.appBackground};

  @media (max-width: ${({ theme }) => theme.width.max}) {
    flex-direction: ${({ theme }) => theme.flex_direction.column};
    align-items: ${({ theme }) => theme.align_items.stretch};
  }
`;