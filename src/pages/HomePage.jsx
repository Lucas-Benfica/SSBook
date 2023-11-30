import FavoriteBooks from "../components/FavoriteBooks";
import Header from "../components/Header";
import Options from "../components/OptionsHeader";
import { Body, FavoriteBooksContainer, Home, OptionsBody, TitleDiv } from "../styles/HomeStyles";

export default function HomePage() {

    return (
        <Home>
            <Header />
            <Body>
                <OptionsBody>
                    <Options />
                </OptionsBody>
                <FavoriteBooksContainer>
                    <TitleDiv>
                        <h1>Livros Favoritos</h1>
                        <h2>ver todos</h2>
                    </TitleDiv>
                    <FavoriteBooks />
                </FavoriteBooksContainer>
            </Body>
        </Home>
    )
}

