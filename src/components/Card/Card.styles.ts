import styled from 'styled-components';

export const CardItem = styled.div`
  background-color: #fff;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  cursor: grab;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }

  h3 {
    font-size: 1rem;
    margin-bottom: 5px;
  }

  p {
    font-size: 0.8rem;
    color: #555;
  }

  small {
    font-size: 0.7rem;
    color: #888;
  }
`;
