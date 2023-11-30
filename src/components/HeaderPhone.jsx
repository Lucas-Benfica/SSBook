import { HeaderPhoneStyled, LogoDiv, Option, OptionsDiv } from "../styles/HeaderPhoneStyles";
import userIcon from "../assets/user.png"
import Logo from "./Logo";
import Options from "./OptionsHeader";

export default function HeaderPhone(){
    return (
        <HeaderPhoneStyled>
            <LogoDiv>
                <Logo />
                <img src={userIcon} />
            </LogoDiv>
            <OptionsDiv>
                <Options />
            </OptionsDiv>
        </HeaderPhoneStyled>
    )
}