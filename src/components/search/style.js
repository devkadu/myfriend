import styled from 'styled-components';

export const ContainerSearch = styled.div`
background-color: white;
gap: 10px;
    display: flex;
    justify-content: space-between;
    padding: 0px 20px 0px 20px;
    align-items: center;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 22px;
    width: 25%;
    height: 50px;

    input{
        width: 90%;
        height: 29px;
       
        border: none;
    }

    input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
}

@media (max-width: 768px) {
        display: none;
    };
`;
