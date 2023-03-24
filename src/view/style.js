import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  border: 1px solid tomato;
 
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 80%;
  height: 10%;
  padding-right: 50px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 768px) {
    h3 {
      display: none;
    }
  }
`;

export const ContainerView = styled.div`
  border: 1px solid black;
  width: 80%;
`;

export const ContainerViewInfo = styled.div`
  background-color: aliceblue;
  border: 1px solid black;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
