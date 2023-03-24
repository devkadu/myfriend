import styled from 'styled-components';

export const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    
    background-color: #564EFA;
    color: white;
    border-radius: 20px;
    margin: 10px;

    h2{
        font-size: 26px;
        margin-top: 50px;
    }

    @media (max-width: 768px) {
        display: none;
    }

`;

export const SidebarMenu = styled.div`
    display: flex;
    flex-direction: column;
`;
