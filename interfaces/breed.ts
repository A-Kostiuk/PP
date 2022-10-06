interface Image {
  id: string;
  url: string;
}

export interface Breed {
  id: string;
  name: string;
  image: Image;
  temperament: string;
  origin: string;
  weight: { metric: string };
  life_span: string;
}
