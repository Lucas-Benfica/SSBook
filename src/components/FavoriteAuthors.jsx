import { gql, useQuery } from "@apollo/client"
import { AuthorCard, AuthorsDiv } from "../styles/FavAuthorsStyles";

export default function FavoriteAuthors(){

    const GET_FAVORITE_AUTHORS = gql`
        query{
            favoriteAuthors{
                id
                name
                picture
                booksCount
            }
        }
    `;
    const { loading, error, data } = useQuery(GET_FAVORITE_AUTHORS);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        console.log("erro:", error);
    }


    return (
        <AuthorsDiv>
            {
                data.favoriteAuthors.map( authors => {
                    return(
                        <AuthorCard key={authors.id}>
                            <img src={authors.picture} />
                            <div>
                            <h1>{authors.name}</h1>
                            <h2>{authors.booksCount} livros</h2>
                            </div>
                        </AuthorCard>
                    )
                })
            }
        </AuthorsDiv>
    )
}