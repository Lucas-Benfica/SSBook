import styled from "styled-components";
import { ArrowLeft, BookInfoContainer, HomeBook, StyledCiHeart, ThreeDots, TitleInfo } from "../styles/BookPageStyles";
import { Home } from "../styles/HomeStyles";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

export default function BookPhone({ book }) {
    const navigate = useNavigate();
    return (
        <HomePhone>
            <HomeBook bookcover={book.cover}>
                <ArrowLeft onClick={ ()=> navigate("/")}/>
                <ThreeDots />
                <BookInfoContainer>
                    <StyledCiHeart />
                    <TitleInfo>
                        <h1>{book.name}</h1>
                        <h2>{book.author.name}</h2>
                        <div>
                            {book.description.split('\n\n').map((paragraph, index) => (
                                <div key={index}>
                                    <p>{paragraph}</p>
                                    <br />
                                </div>
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