import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import Tour from './Tour';

const Tours = ({ url }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState(null);

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  console.log(tours);

  return (
    <>
      {isLoading && <Loading />}
      <ul>
        {tours &&
          tours.map((tour) => {
            return <Tour key={tour.id} {...tour} />;
          })}
      </ul>
    </>
  );
};

export default Tours;
