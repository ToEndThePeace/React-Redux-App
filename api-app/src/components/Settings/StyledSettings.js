import styled from "styled-components";

export const StyledSettings = styled.div`
    z-index: 25;
    font-family: "Ubuntu", sans-serif;
    width: 40%;
    position: absolute;
    top: 15vh;
    height: 100%;
    right: -40%;
    transition: 1s right;
    transition-timing-function: ease-in-out;
    background-color: #0009;
    color: white;
    text-shadow: 0 0 10px black;

    overflow: scroll;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }

    @media screen and (max-width: 500px) {
        width: 100%;
        right: -100%;
        padding-top: 10px;
    }

    &.open {
        right: 0;
    }
    h2 {
        text-align: right;
        font-size: 2rem;
        padding: 20px 10%;
        text-decoration: underline;
        text-decoration-color: ${(props) => props.accent};
        @media screen and (max-width: 500px) {
            text-align: center;
        }
    }
    & > div {
        padding: 0 10% 20px;
        text-align: right;
        
        @media screen and (max-width: 500px) {
            text-align: center;
        }
        
        h3 {
            margin-bottom: 2vh;
            text-decoration: underline;
            text-decoration-color: ${(props) => props.accent};
        }
        button {
            font-size: 1rem;
            font-family: "Ubuntu", sans-serif;
            cursor: pointer;
            color: white;
            padding: 6px 9px;
            box-shadow: 0 0 10px 1px black;
            margin: 5px;
            border: 1px solid black;
            text-transform: capitalize;
            &:hover {
                opacity: 0.8;
            }
        }
    }
`;

export const Button = styled.button`
    background-color: ${(props) => props.color};
    border: 1px solid ${(props) => props.color};
`;
