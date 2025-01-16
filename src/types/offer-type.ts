type LocationType = {
    latitude: number;
    longitude: number;
    zoom: number;
}

type CityType = {
    name: string;
    location: LocationType;
}

type HostType = {
    name: string;
    avatarUrl: string;
    isPro: boolean;
}

type OfferBaseType = {
    id: string;
    title: string;
    type: string;
    price: number;
    city: CityType;
    location: LocationType;
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
}

type OfferPreviewType = OfferBaseType & {
  previewImage: string;
}

type OfferType = OfferBaseType & {
  description: string;
	bedrooms: number;
	goods: string[];
  host: HostType;
  images: string[];
  maxAdults: number;
}

export type {
  OfferType,
  OfferPreviewType,
  HostType
};
