import { useState } from 'react';
import Header from '../../components/common/header';
import CityTabs from '../../components/city-tabs/city-tabs';
import { useAppSelector } from '../../hooks';
import MainPageContent from './main-page-content';
import OffersEmpty from '../offer-page/offers-empty';
import Spinner from '../../components/spinner/spinner';
import OfferType from '../../types/offer-type';
import { selectCurrentCity, selectIsOffersDataLoading, selectOffers } from '../../types/store/selectors';


function MainPage(): JSX.Element{
  const [activeOffer, setActiveOffer] = useState<string | null>(null);
  const handleActiveOfferChange = (id: string | null) => {
    setActiveOffer(id);
  };

  const offers: OfferType[] = useAppSelector(selectOffers);
  const currentCity = useAppSelector(selectCurrentCity);
  const isOffersDataLoading = useAppSelector(selectIsOffersDataLoading);

  const mainClassName = `page__main page__main--index ${offers.length === 0 ? 'page__main--index-empty' : ''}`;

  return (
    <div className="page page--gray page--main">
      <Header showUserLogin />
      {isOffersDataLoading && <Spinner />}
      <main className={mainClassName}>
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
