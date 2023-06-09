import styled from "styled-components";

const Footer1 = styled.footer`
    position: relative;
    padding-top: 12pt;
    background: linear-gradient(270deg, #032E6E 30%, #031735 60%);
    height: 11rem;
    width: 100%;
    user-select : none;
`;

const Container = styled.div`
    width: 30%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 50% 50%;
    column-gap: 30pt;
    padding-right: 30pt;

    @media (max-width: 1456px){
        width: 45%;
    }
    @media (max-width: 970px){
        width: 70%;
    }
    @media (max-width: 624px){
        width: 90%;
        column-gap: 20pt;
    }
    @media (max-width: 495px){
        width: 80%;
        column-gap: 30pt;
    }
`;

const Bloco = styled.div`
    margin-top: 0.5rem;
    height: 10rem;
    border-radius: 15px;
    text-align: center;
`;

const Texto = styled.span`
    color: white;
    font-size: 12pt;
`;     

export { Footer1, Texto, Bloco, Container };