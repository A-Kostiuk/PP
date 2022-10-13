import axios from 'axios';
import { IPostFavorite, IPostVoting } from '../interfaces/the-cat-api';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});


api.interceptors.request.use(config => {
  if (!config.headers) {
    config.headers = {};
  }
  config.headers['x-api-key'] = process.env.NEXT_PUBLIC_API_KEY!;
  return config;
});


const TheCatApi = {
  voting: {
    fetchVotingPicture: () => {
      return api.get('/images/search');
    },
    postVoting: (data: IPostVoting) => {
      return api.post('/votes', data);
    },
    postFavorite: (data: IPostFavorite) => {
      return api.post('/favourites', data);
    },
  },
  breeds: {
    fetchCurrentBreeds: (limit: number | string, page: number | string) => {
      return api.get(`/breeds?limit=${limit}&page=${page}`);
    },
    fetchAllBreeds: () => {
      return api.get('/breeds');
    },
  },
  breed: {
    fetchBreed: (breedId: string | string[]) => {
      return api.get(`/breeds/${breedId}`);
    },
    fetchBreedImages: (breedId: string | string[]) => {
      return api.get(`/images/search?limit=5&breed_ids=${breedId}`);
    },
  },

};

export default TheCatApi;
