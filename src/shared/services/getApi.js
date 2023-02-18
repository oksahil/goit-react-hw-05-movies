import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
            api_key: '27a3692489226a6f77b57cb0bdb9ce9a',
            }
})

export const getMoviesList = async () => {
    const {data} = await instance.get(`trending/movie/day?`);
    return data.results;
}

export const getMovieDetailesId = async(id) => {
    const {data} = await instance.get(`/movie/${id}`);
  return data;
}  
    
export const getMovieCastId = async(id) => {
    const { data } = await instance.get(`/movie/${id}/credits`);
    return data.cast;
}  

export const getMovieReviewsId = async(id) => {
    const {data} = await instance.get(`/movie/${id}/reviews`);
  return data.results;
}  

export const searchMovies = async (query, page = 1) => {
    const { data } = await instance.get(`/search/movie`, {
        params: {
            query,
            page,
                }
    });
    return data.results;
}