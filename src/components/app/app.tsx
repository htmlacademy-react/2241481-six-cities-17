import MainPage from '../../pages/main/mainPage';

type OfferType = {
  id: string
  title: string
  type: string
  price: number
  city: {
    name: string
    location: {
      latitude: number
      longitude: number
      zoom: number
    }
  }
  location: {
    latitude: number
    longitude: number
    zoom: number
  }
  isFavorite: boolean
  isPremium: boolean
  rating: number
  previewImage: string
};

type AppProps = {
  offers: OfferType[]
}

function App({offers}: AppProps): JSX.Element{
  return (
    <MainPage offers={offers}/>
  );
}

export default App;
export type {OfferType};
