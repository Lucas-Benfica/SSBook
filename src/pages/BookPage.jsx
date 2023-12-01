import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import BookPhone from '../components/BookPagePhone';
import BookDesk from '../components/BookDesk';
import { useEffect, useState } from 'react';

export default function BookPage() {
  const { id } = useParams();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 480;

      if (newIsMobile !== isMobile) {
        setIsMobile(newIsMobile);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  const GET_BOOK = gql`
    query {
      book(id: ${Number(id)}) {
        name
        cover
        description
        author {
          name
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_BOOK);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.log('erro:', error);
  }

  return (
    <>
      {isMobile ? (
        <BookPhone book={data.book} />
      ) : (
        <BookDesk book={data.book} />
      )}
    </>
  );
}
