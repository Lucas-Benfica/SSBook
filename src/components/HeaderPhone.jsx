import { HeaderPhoneStyled, LogoDiv, Option, OptionsDiv } from "../styles/HeaderPhoneStyles";
import userIcon from "../assets/user.png"
import Logo from "./Logo";
import { useState } from "react";

export default function HeaderPhone(){
    const [isSelected, setIsSelected] = useState("myBooks");
    return (
        <HeaderPhoneStyled>
            <LogoDiv>
                <Logo />
                <img src={userIcon} />
            </LogoDiv>
            <OptionsDiv>
                <Option text="myBooks" selected={isSelected} onClick={() => setIsSelected("myBooks")}>
                    Meus livros
                    <div></div>
                </Option>
                <Option text="borrowed" selected={isSelected} onClick={() => setIsSelected("borrowed")}>
                    Emprestados
                    <div></div>
                </Option>
            </OptionsDiv>
        </HeaderPhoneStyled>
    )
}