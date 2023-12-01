import { gql, useQuery } from "@apollo/client";
import { Book, ContainerBooks } from "../styles/LibBooksStyles";
import { useNavigate } from "react-router-dom";

export default function LibraryBooks () {

    const navigate = useNavigate();
    
    const GET_BOOKS = gql`
        query {
            allBooks{
            id
            name
            author{
                name
            }
            cover
            }
        }
    `;
    const { loading, error, data } = useQuery(GET_BOOKS);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        console.log("erro:", error);
    }
    
    return (
        <ContainerBooks>
            {
                data.allBooks.map( book => (
                    <Book key={book.id} onClick={ ()=> navigate(`/book/${book.id}`)}>
                        <img src={book.cover} />
                        <div>
                            <h1>{book.name}</h1>
                            <h2>{book.author.name}</h2>
                        </div>
                    </Book>
                ))
            }
        </ContainerBooks>
    )
}