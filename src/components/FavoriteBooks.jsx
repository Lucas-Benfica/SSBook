import { gql, useQuery } from "@apollo/client";
import { CardFavoriteBook, ContainerFavoriteBooks } from "../styles/FavBooksStyles";

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