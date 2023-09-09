import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const App = () => {
  const url = 'https://course-api.com/react-tours-project';
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

  if (isLoading) {
    return <Loading />;
  }
  return (
    <main>
      <Tours tours={tours} />
    </main>
  );
};
export default App;
