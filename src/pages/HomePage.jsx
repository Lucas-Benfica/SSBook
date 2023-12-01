import FavoriteAuthors from "../components/FavoriteAuthors";
import FavoriteBooks from "../components/FavoriteBooks";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LibraryBooks from "../components/LibraryBooks";
import LibraryOptions from "../components/LibraryOptions";
import Options from "../components/OptionsHeader";
import { Body, FavoriteBooksContainer, Home, LibraryContainer, OptionsBody, TitleDiv } from "../styles/HomeStyles";

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
                <LibraryContainer>
                    <TitleDiv>
                        <h1>Artistas Favoritos</h1>
                        <h2>ver todos</h2>
                    </TitleDiv>
                    <FavoriteAuthors />
                    <TitleDiv>
                        <h1>Biblioteca</h1>
                    </TitleDiv>
                    <LibraryOptions />
                    <LibraryBooks />
                </LibraryContainer>
            </Body>
            <Footer />
        </Home>
    )
}

