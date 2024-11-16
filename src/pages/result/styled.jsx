import styled from "styled-components";

export const BannerResult = styled.section`
    margin: 0;
    padding: 0;
    position: absolute;
    display: flex;
    width: 100%;
    height: 200px; 

    @media (max-width: 768px) {
        height: 150px;
    }
`;

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    max-width: 1920px;
    margin: 0 auto;
    background-color: #121212; 
    min-height: 100vh; 

    @media (max-width: 1366px) {
        max-width: 1366px;
    }

    @media (max-width: 768px) {
        padding: 10px;
    }
`;

export const CardsWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;

    @media (max-width: 1366px) {
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr; 
        gap: 15px;
    }
`;
