import React, { useEffect, useState } from 'react';

const Tours = ({ url }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setTours(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
    };
    fetchTours();
  }, []);
  console.log(tours);
  return (
    <>
      {isLoading && <h1>Loading</h1>}
      <h1>Tours Loaded Successfully</h1>
      <ul>
        {tours &&
          tours.map((tour) => {
            return <li key={tour.id}>{tour.name}</li>;
          })}
      </ul>
    </>
  );
};

export default Tours;
