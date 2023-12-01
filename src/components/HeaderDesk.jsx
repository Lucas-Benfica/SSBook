import { Divider, HeaderDeskStyled, HeartIcon, InputBook, InputDiv, InputImg, Option, PlusIcon, UserInfo } from "../styles/HeaderDeskStyles";
import userIcon from "../assets/user.png"
import Logo from "./Logo";
import { useState } from "react";
import searchIcon from "../assets/searchIcon.svg"
import { gql, useQuery } from "@apollo/client";


export default function HeaderDesk() {

    const GET_USER = gql`
        query {
            userPicture
        }
    `;
    const { error, data } = useQuery(GET_USER);

    if (error) {
        console.log("erro:", error);
    }

    const [bookSearched, setBookSearched] = useState('');

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            console.log(bookSearched);
        }
    };

    const searchBook = () => {
        console.log(bookSearched);
    }

    return (
        <HeaderDeskStyled>
            <Logo />
            <InputDiv>
                <InputBook
                    type="text"
                    value={bookSearched}
                    onChange={(e) => setBookSearched(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Busque um livro"
                />
                <InputImg src={searchIcon} onClick={searchBook} />
            </InputDiv>
            <Option>
                <PlusIcon />
                Adicionar
            </Option>
            <Option>
                <HeartIcon />
                Favoritos
            </Option>
            <Divider></Divider>

            <UserInfo>
                {(data) ? <img src={data.userPicture} /> : <img src={userIcon} />}
                <p>UserName</p>
            </UserInfo>
        </HeaderDeskStyled>
    )
}