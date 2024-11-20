import styled from "styled-components";


export const SectionHome = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
    min-height: calc(100vh - 200px); /* Desconta o espaço ocupado pelo logo */
    width: 100%;
    background-color: #121212;
    margin-top: 150px; /* Garante que fique abaixo do logo */

    @media (max-width: 768px) {
        padding: 10px;
        margin-top: 120px; /* Ajuste para telas menores */
    }
`;


export const SearchContainer = styled.div`
   display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 500px;
    margin: 20px 0; /* Espaço entre o input e outros elementos */
    position: relative;
    z-index: 1; /* Garante que apareça sobre outros elementos */

    @media (max-width: 768px) {
        max-width: 100%;
        flex-direction: row;
    }

`;

export const ButtonSearch = styled.button`
    background-color: #ff3d00;
    border: none;
    padding: 10px;
    cursor: pointer;
    position: absolute;
    right: 0;
    border-radius: 0 5px 5px 0;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #e63900;
    }

    @media (max-width: 768px) {
        padding: 8px;
        right: 5px;
    }
`;


export const Input = styled.input`
     width: 100%;
    padding: 10px;
    padding-right: 50px;
    border: 1px solid #ddd;
    border-radius: 5px;
    outline: none;
    z-index: 1;

    @media (max-width: 768px) {
        padding: 8px;
        padding-right: 40px;
    }
`;

export const SectionLogo= styled.section`
left:335px;
position: absolute;
top: 162px;
width: 25%;
`;