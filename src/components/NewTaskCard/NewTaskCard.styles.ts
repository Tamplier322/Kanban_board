import styled from 'styled-components';

export const StyledSelect = styled.select`
  padding: ${({ theme }) => theme.spacing.xxs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  border: none;
  width: auto;
  outline: none;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.textPrimary};
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export const StyledInputTitle = styled.input`
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.regular};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  margin-top: ${({ theme }) => theme.spacing.md};
  width: 100%;
  padding: 0;
  outline: none;
  opacity: 0.9;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const StyledInputDescription = styled.input`
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  width: 100%;
  padding: 0;
  outline: none;
  font-weight: normal;
  opacity: 0.7;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const StyledButton = styled.button`
  background-color:  ${(props) => `${props.color}33`};
  border: none;
  color: ${ props => props.color };
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.small};
  text-align: center;
  width: auto;
  display: inline-block;
  padding-inline: 0px;
  transition: ${({ theme }) => theme.transition};
  opacity: ${({ theme }) => theme.opacity.disable};

  &:hover {
        background-color: ${ props => `${props.color}55`};
  }
  background-color: transparent;
`;

export const TaskCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const CloseButton = styled.span`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.danger};
  font-size: ${({ theme }) => theme.fontSizes.regular};
  position: absolute;
  right: ${({ theme }) => theme.spacing.md};
  top: ${({ theme }) => theme.spacing.xs};
`;

export const PrioritySelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: ${({ theme }) => theme.spacing.xl};
`;
export const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;