import styled from "styled-components";


export const SectionHome = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    min-height: 100vh;
    width: 100%;
    background-color: #121212;

    @media (max-width: 768px) {
        padding: 10px;
    }
`;


export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 500px;
    margin-top: 20px;
    position: relative;

    @media (max-width: 768px) {
        flex-direction: row;
        max-width: 100%;
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

    @media (max-width: 768px) {
        padding: 8px;
        padding-right: 40px;
    }
`;
