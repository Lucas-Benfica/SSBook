import styled from "styled-components";
import { ArrowLeft, BookInfoContainer, HomeBook, StyledCiHeart, ThreeDots, TitleInfo } from "../styles/BookPageStyles";
import { Home } from "../styles/HomeStyles";
import Footer from "./Footer";

export default function BookPhone({ book }) {
    return (
        <HomePhone>
            <HomeBook bookCover={book.cover}>
                <ArrowLeft />
                <ThreeDots />
                <BookInfoContainer>
                    <StyledCiHeart />
                    <TitleInfo>
                        <h1>{book.name}</h1>
                        <h2>{book.author.name}</h2>
                        <div>
                            {book.description.split('\n\n').map((paragraph, index) => (
                                <>
                                    <p key={index}>{paragraph}</p>
                                    <br />
                                </>
                            ))}
                        </div>
                    </TitleInfo>
                    <Footer />
                </BookInfoContainer>
            </HomeBook>
        </HomePhone>
    )
}

export const HomePhone = styled(Home)`
    @media (min-width: 481px) {
        display: none;
    }
`