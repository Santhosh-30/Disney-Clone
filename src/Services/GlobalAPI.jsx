import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = '7e77a5c7a1bc1e788e16e7b9f7d885a2';

const getTrendingMovies = axios.get(`${movieBaseUrl}/movie/top_rated?api_key=${api_key}`);
const movieByGenreBaseURL ='https://api.themoviedb.org/3/discover/movie'
const getMovieByGenreId =(id) => axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default { getTrendingMovies,getMovieByGenreId };