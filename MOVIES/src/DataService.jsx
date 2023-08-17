import  { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

const DataService = () => {
  const [services, setServices] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://streaming-availability.p.rapidapi.com/services';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '0e86196495msh8ee08517b899577p1093fajsnbf3eae91bef4',
          'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com',
        },
      };
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result)
        setServices(result.result);

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {Object.entries(services).map(([movie, movies ])=> (
        <MovieCard key={movie} movie={movies} />
      ))}
    </div>
  );
};



  

export default DataService;
