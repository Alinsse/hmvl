import styled from "styled-components";

export const ApresentacaoStyled  = styled.section`
   
   text-align: justify; /* Centraliza o texto horizontalmente */
    left:325px;
    position: absolute;
    top: 512px;
    width: 100%;
    

    h1 { color: #F46D1B;
        font-size: 16px;
        font-weight: 600;
        line-height: 16px;

        @media (max-width: 768px) {
            font-size: 1.2rem; /* Ajuste de tamanho para telas menores */
        }
    }


h2 { font-weight: 500;
        font-size: 64px;
        line-height: 62px;
        color: #FFFFFF;
        width: 94%;

}

h3 { font-weight: 600;
    size: 18px;
    line-height: 18px;
    color: #FFFFFF;
    width: 108%;
}
`;