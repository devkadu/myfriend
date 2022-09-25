import styled from "styled-components";

export const ContainerDate = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 22px;
    width: 11.5%;
    height: 50px;
    margin-right: 20px;
  
    @media (max-width: 768px) {
        display: none;
    };
`;