type LocationType = {
    latitude: number;
    longitude: number;
    zoom: number;
  }

  type CityType = {
    name: string;
    location: LocationType;
  }

  type OfferType = {
      id: string;
      title: string;
      type: string;
      price: number;
      city: CityType;
      location: LocationType;
      isFavorite: boolean;
      isPremium: boolean;
      rating: number;
      previewImage: string;
  }

export default OfferType;
