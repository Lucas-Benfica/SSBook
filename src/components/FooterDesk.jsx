import { FooterContainer } from "../styles/FooterStyles";
import LOGO from "../assets/logo.svg"

export default function FooterDesk() {

    return (
        <FooterContainer>
            <img src={LOGO} />
            <p>Todos os direitos reservados.
                Studio Sol Books © 2023 </p>
        </FooterContainer>
    );
}