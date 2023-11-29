import { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client'

function App() {

  return (
    <>
      <BooksComponent />
    </>
  )
}

const GET_BOOKS = gql`
  query {
    allBooks {
      id
      name
      author{
        name
      }
    }
  }
`;

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

export default App

