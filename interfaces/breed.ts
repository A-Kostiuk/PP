import { SelectOption } from './select-option';

interface BreedImage {
  id: string;
  url: string;
}

export interface BreedRequest {
  id: string;
  name: string;
  image: BreedImage;
}

export interface BreedOption extends BreedRequest, SelectOption {
}

export interface Breed {
  images: BreedImage[];
  temperament: string;
  origin: string;
  weight: { metric: string };
  life_span: string;
  id: string;
  name: string;
}
