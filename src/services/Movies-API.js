const fetchMovieData = async () => {
  const url = 'https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr';
  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': '0e86196495msh8ee08517b899577p1093fajsnbf3eae91bef4',
          'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
      }
  };
  try {
      const response = await fetch(url, options);
      const data = await response.json();

      console.log('Response data:', data); // Debugging statement

      if (data && data.d && Array.isArray(data.d)) {
          const list = data.d;

          list.map((item) => {
              const name = item.l;
              const poster = item.i && item.i.imageUrl ? item.i.imageUrl : '';
              const movie = `<li><img src="${poster}"/> <h2>${name}</h2></li>`;
              document.querySelector('.movies').innerHTML += movie; // Use += to append, not =+
          });
      } else {
          console.error('Invalid data format:', data);
      }
  } catch (error) {
      console.error('Error fetching movie:', error);
  }
};

export default fetchMovieData;
