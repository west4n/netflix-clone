const API_KEY = "20a4b722c2cbe2f44835f6d3b8be5083";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=ru-RU`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&language=ru-RU&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=ru-RU`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&language=ru-RU&with_genres=28`, 
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&language=ru-RU&with_genres=35`, 
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&language=ru-RU&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&language=ru-RU&with_genres=10749`, 
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&language=ru-RU&with_genres=99`,
};

export default requests;

