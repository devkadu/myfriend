import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
height: 100vh;
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
        h3{
        display: none;
    }
   
`;