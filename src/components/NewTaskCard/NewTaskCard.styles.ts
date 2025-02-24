import styled from 'styled-components';

export const StyledSelect = styled.select`
  padding: ${props => props.theme.spacing.xxs} ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.xl};
  border: none;
  width: auto;
  outline: none;
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${(props) => props.color};
  background-color: transparent; 
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export const StyledInputTitle = styled.input`
  border: none;
  font-size: ${props => props.theme.fontSizes.regular};
  margin-bottom: ${props => props.theme.spacing.xs};
  margin-top: ${props => props.theme.spacing.md};
  width: 100%;
  padding: 0;
  outline: none;
  opacity: 0.9;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.textPrimary};
`;

export const StyledInputDescription = styled.input`
  border: none;
  font-size: ${props => props.theme.fontSizes.medium};
  margin-bottom: ${props => props.theme.spacing.xs};
  width: 100%;
  padding: 0;
  outline: none;
  font-weight: normal;
  opacity: 0.7;
  color: ${props => props.theme.colors.textPrimary};
`;

export const StyledButton = styled.button`
  background-color:  ${(props) => `${props.color}33`};
  border: none;
  color: ${ props => props.color };
  cursor: pointer;
  font-size: ${props => props.theme.fontSizes.small};
  text-align: center;
  width: auto;
  display: inline-block;
  padding-inline: 0px;
  transition: ${props => props.theme.transition};
  opacity: ${props => props.theme.opacity.disable};

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
  color: ${props => props.theme.colors.danger};
  font-size: ${props => props.theme.fontSizes.regular};
  position: absolute;
  right: ${props => props.theme.spacing.md};
  top: ${props => props.theme.spacing.xs};
`;