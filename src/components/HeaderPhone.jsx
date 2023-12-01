import { HeaderPhoneStyled, LogoDiv, Option, OptionsDiv } from "../styles/HeaderPhoneStyles";
import userIcon from "../assets/user.png"
import Logo from "./Logo";
import Options from "./OptionsHeader";
import { gql, useQuery } from "@apollo/client";

export default function HeaderPhone() {

    const GET_USER = gql`
        query {
            userPicture
        }
    `;
    const { error, data } = useQuery(GET_USER);

    if (error) {
        console.log("erro:", error);
    }

    return (
        <HeaderPhoneStyled>
            <LogoDiv>
                <Logo />
                {(data) ? <img src={data.userPicture} /> : <img src={userIcon} />}
            </LogoDiv>
            <OptionsDiv>
                <Options />
            </OptionsDiv>
        </HeaderPhoneStyled>
    )
}