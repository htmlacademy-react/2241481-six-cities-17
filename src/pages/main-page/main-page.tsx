import { memo, useMemo } from 'react';
import Header from '../../components/common/header';
import CityTabs from '../../components/city-tabs/city-tabs';
import { useAppSelector } from '../../hooks';
import { MainPageContent } from './main-page-content';
import OffersEmpty from '../offer-page/offers-empty';
import Spinner from '../../components/spinner/spinner';
import { OfferPreviewType } from '../../types/offer-type';
import { selectIsOffersDataLoading, selectOffers } from '../../store/offers-slice/selectors';
import { selectCurrentCity } from '../../store/app-slice/selectors';
import { filterOffers } from '../../utils/utils';


function MainPage(): JSX.Element{
  const offers: OfferPreviewType[] = useAppSelector(selectOffers);
  const currentCity = useAppSelector(selectCurrentCity);
  const isOffersDataLoading = useAppSelector(selectIsOffersDataLoading);
  const filteredOffers = useMemo(()=> filterOffers(offers, currentCity), [offers, currentCity]);

  const mainClassName = `page__main page__main--index ${filteredOffers.length === 0 ? 'page__main--index-empty' : ''}`;

  return (
    <div className="page page--gray page--main">
      <Header showUserLogin />
      {isOffersDataLoading && <Spinner />}
      <main className={mainClassName}>
        <h1 className="visually-hidden">Cities</h1>
        <CityTabs currentCity={currentCity}/>
        {filteredOffers.length > 0 ?
          <MainPageContent
            offers={filteredOffers}
            currentCity={currentCity}
          /> :
          <OffersEmpty
            cityName={currentCity}
          />}
      </main>
    </div>
  );
}

const MemoizedMainPage = memo(MainPage);
export { MemoizedMainPage as MainPage };
