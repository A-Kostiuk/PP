export interface Image {
  id: string;
  url: string;
}

export interface GalleryImage extends Image {
  isFavorite: boolean;
  favoriteId: number | null;
}

export interface VotingImage {
  value: number;
  image_id: string;
  image: Image;
}
