import Header from "../components/Header";
import Options from "../components/OptionsHeader";
import { Body, FavoritesBooksContainer, Home, OptionsBody, TitleDiv } from "../styles/HomeStyles";

export default function HomePage() {

    return (
        <Home>
            <Header />
            <Body>
                <OptionsBody>
                    <Options />
                </OptionsBody>
                <FavoritesBooksContainer>
                    <TitleDiv>
                        <h1>Livros Favoritos</h1>
                        <h2>ver todos</h2>
                    </TitleDiv>
                </FavoritesBooksContainer>
            </Body>
        </Home>
    )
}

