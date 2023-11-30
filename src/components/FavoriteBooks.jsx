import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { styled } from "styled-components";

export default function FavoriteBooks() {

    const GET_FAVORITE_BOOKS = gql`
        query {
            favoriteBooks{
            id
            name
            author{
                name
            }
            cover
            }
        }
    `;
    const { loading, error, data } = useQuery(GET_FAVORITE_BOOKS);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        console.log("erro:", error);
    }

    if (data) {
        console.log("sata", data.favoriteBooks);
    }

    return (
        <ContainerFavoriteBooks>
            {
                data.favoriteBooks.map( book => {
                    return(
                        <CardFavoriteBook key={book.id}>
                            <img src={book.cover} />
                            <h1>{book.name}</h1>
                            <h2>{book.author.name}</h2>
                        </CardFavoriteBook>
                    )
                })
            }
        </ContainerFavoriteBooks>
    )
}

const ContainerFavoriteBooks = styled.div`
    width: 100%;
    overflow-x: auto;
    display: flex;

    @media (min-width: 480px) {
        overflow-x: auto;
    }
`

const CardFavoriteBook = styled.div`
    width: 136px;
    height: 262px;
    display: flex;
    flex-direction: column;
    margin-left: 20px;

    img{
        width: 136px;
        height: 198px;
        margin-bottom: 10px;
        border-radius: 20px;
    }
    h1{
        width: 136px;
        height: 36px;
        margin-bottom: 2px;
        font-size: 16px;
        font-weight: 700;
        line-height: 18px;
        color: #555555;
        overflow-x: hidden;
    }
    h2{
        width: 136px;
        height: 16px;
        font-size: 14px;
        font-weight: 400;
        line-height: 16.4px;
        color: #757575;
    }

    @media (min-width: 480px) {
        overflow-x: hidden;
    }
`



// Exemplos ->

const BooksComponent = () => {
    const { loading, error, data } = useQuery(GET_BOOKS);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div>
            <h2>Books</h2>
            <ul>
                {data &&
                    data.allBooks.map(book => (
                        <li key={book.id}>{`${book.name} by ${book.author.name}`}</li>
                    ))}
            </ul>
        </div>
    );
};