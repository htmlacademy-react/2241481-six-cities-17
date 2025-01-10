import { useState } from 'react';
import Header from '../../components/common/header';
import CityTabs from '../../components/city-tabs/city-tabs';
import { useAppSelector } from '../../hooks';
import MainPageContent from './main-page-content';
import OffersEmpty from '../offer/offers-empty';
import Spinner from '../../components/spinner/spinner';


function MainPage(): JSX.Element{
  const [activeOffer, setActiveOffer] = useState<string | null>(null);
  const handleActiveOfferChange = (id: string | null) => {
    setActiveOffer(id);
  };

  const offers = useAppSelector((state) => state.offers);
  const currentCity = useAppSelector((state) => state.currentCity);
  const isDataLoading = useAppSelector((state) => state.isDataLoading);

  return (
    <div className="page page--gray page--main">
      <Header isNavigationRequired />
      {isDataLoading ? <Spinner /> : ''}
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityTabs currentCity={currentCity}/>
        {offers.length > 0 ?
          <MainPageContent
            offers={offers}
            currentCity={currentCity}
            activeOfferId={activeOffer}
            handleActiveOfferChange={handleActiveOfferChange}
          /> :
          <OffersEmpty
            cityName={currentCity}
          />}
      </main>
    </div>
  );
}

export default MainPage;
