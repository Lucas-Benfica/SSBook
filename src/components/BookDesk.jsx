import { IoMdHeart, IoMdShare } from "react-icons/io";
import { BodyDesk, BookDivTitle, BookImg, Description } from "../styles/BookPageStyles";
import { Home } from "../styles/HomeStyles";
import HeaderDesk from "./HeaderDesk";
import { GiSaveArrow } from "react-icons/gi";
import FooterDesk from "./FooterDesk";
import styled from "styled-components";


export default function BookDesk({ book }) {
    return (
        <HomeDesk>
            <HeaderDesk />
            <BodyDesk>
                <BookDivTitle>
                    <BookImg>
                        <img src={book.cover} />
                        <div>
                            <IoMdHeart />
                            <p>Favoritar</p>
                        </div>
                        <div>
                            <IoMdShare />
                            <p>Compartilhar</p>
                        </div>
                        <div>
                            <GiSaveArrow />
                            <p>Salvar em uma lista</p>
                        </div>
                    </BookImg>
                    <h1>{book.name}</h1>
                    <h2>{book.author.name}</h2>
                </BookDivTitle>
                <Description>
                    <div>
                        {book.description.split('\n\n').map((paragraph, index) => (
                            <>
                                <p key={index}>{paragraph}</p>
                                <br/>
                            </>
                        ))}
                    </div>
                    <h1>
                        Sobre o Autor
                    </h1>
                    <p>
                        Em breve mais informações sobre {book.author.name}
                    </p>
                </Description>
            </BodyDesk>

            <FooterDesk />
        </HomeDesk>
    )
}

export const HomeDesk = styled(Home)`
    @media (max-width: 480) {
        display: none;
    }
`