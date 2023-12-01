import { useState } from "react"
import styled from "styled-components"

export default function LibraryOptions() {
    const [selected, setSelected] = useState("ALL");

    return (
        <ContainerButtons>
            <StyledButton option={"ALL"} selected={selected} onClick={() => setSelected("ALL")}>
                Todos
            </StyledButton>
            <StyledButton option={"ROMANCE"} selected={selected} onClick={() => setSelected("ROMANCE")}>
                Romance
            </StyledButton>
            <StyledButton option={"ADVENTURE"} selected={selected} onClick={() => setSelected("ADVENTURE")}>
                Aventura
            </StyledButton>
            <StyledButton option={"COMEDY"} selected={selected} onClick={() => setSelected("COMEDY")}>
                Comédia
            </StyledButton>
        </ContainerButtons>
    );
}

const ContainerButtons = styled.div`
    display: flex;
    width: 100%;
    gap: 8px;
    padding-left: 20px;
    
    @media (max-width: 480px) {
        overflow-x: auto;
    }
`

const StyledButton = styled.button`
    height: 32px;
    width: auto;
    padding: 6px 16px;
    border-radius: 50px;
    cursor: pointer;
    border: 1px solid #E0E0E0;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: ${(props) => props.selected === props.option ? "#FFFFFF" : "#757575"};
    background-color: ${(props) => props.selected === props.option ? "#A076F2" : "#FFFFFF"};
    font-family: 'Roboto', sans-serif;
`