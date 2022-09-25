import styled from "styled-components";

export const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    height: 100%;
    background-color: #564EFA;
    color: white;
    border-radius: 0px 16px 16px 0px;

    h2{
        font-size: 20px
    }

    @media (max-width: 768px) {
        display: none;
    }

`;