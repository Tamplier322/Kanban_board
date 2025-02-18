import styled from 'styled-components';

export const AppContainer = styled.div`
  font-family: 'Plus Jakarta Sans', sans-serif;
  background-color: #F8FAFC;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const AppHeader = styled.div`
    background-color: transparent;
    color: #333;                      
    padding: 20px;                  
    display: flex;
    justify-content: space-between;  
    align-items: center;
`;

export const AppTitle = styled.h1`
  font-size: 2em;                    
  margin: 0;  
`;

export const AddColumnButton = styled.button`
    background-color: #e0e0e0;
    color: #555;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    font-size: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #d0d0d0;
    }
`;