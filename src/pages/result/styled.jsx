import styled from "styled-components";

export const BannerResult = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    max-width: 1920px;
   
    
    min-height: 100vh; 

    @media (max-width: 1366px) {
        max-width: 1366px;
    }

    @media (max-width: 768px) {
        padding: 10px;
    }

`;


   

export const LogoResult = styled.div`
top: 10px;
position: relative;
width: 327px;
right: 741px;
`;

export const CardsWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    

    @media (max-width: 1366px) {
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr; 
        gap: 15px;
    }
`;

export const SearchInputS = styled.div `
top: -536px;
position: relative;


`;
