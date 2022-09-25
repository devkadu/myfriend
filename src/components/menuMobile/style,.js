import styled from "styled-components";

export const ContainerMenuMobile = styled.div`
    border: 1px solid red;
    width: 60px;
    padding-top: 30px;

    @media (min-width: 768px) {
        display: none;
    }
`;