import axios from 'axios';
import { IPostFavorite, IPostVoting } from '../interfaces/the-cat-api';
import { Image, VotingImage } from '../interfaces/image';
import { FavoriteImage } from '../interfaces/favorite';
import { BreedResponse } from '../interfaces/breed';

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
  image: {
    fetchImage: () => {
      return api.get<Image[]>('/images/search');
    },
    uploadImage: (data: FormData) => {
      return api.post('/images/upload', data, {headers: {'Content-Type': 'multipart/form-data'}});
    },
  },
  voting: {
    postVoting: (data: IPostVoting) => {
      return api.post('/votes', data);
    },
    fetchVotingImages: () => {
      return api.get<VotingImage[]>('/votes');
    },
  },
  breeds: {
    fetchAllBreeds: () => {
      return api.get<BreedResponse[]>('/breeds');
    },
  },
  breed: {
    fetchBreed: (breedId: string | string[]) => {
      return api.get<BreedResponse>(`/breeds/${breedId}`);
    },
    fetchBreedImages: (breedId: string | string[]) => {
      return api.get(`/images/search?limit=5&breed_ids=${breedId}`);
    },
  },
  gallery: {
    fetchPictures: (limit: number | string, type: number | string, breed: number | string, order: number | string) => {
      if (breed === 'none') {
        return api.get<Image[]>(`/images/search?limit=${limit}&mime_types=${type}&order=${order}`);
      } else {
        return api.get<Image[]>(`/images/search?limit=${limit}&mime_types=${type}&order=${order}&breed_ids=${breed}`);
      }
    },
  },
  favorite: {
    fetchFavorites: () => {
      return api.get<FavoriteImage[]>('/favourites');
    },
    addToFavorites: (data: IPostFavorite) => {
      return api.post('/favourites', data);
    },
    removeFromFavorites: (id: number | string) => {
      return api.delete(`/favourites/${id}`);
    },
  },
};

export default TheCatApi;
