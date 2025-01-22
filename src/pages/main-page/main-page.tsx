import { memo } from 'react';
import Header from '../../components/common/header';
import CityTabs from '../../components/city-tabs/city-tabs';
import { useAppSelector } from '../../hooks';
import { MainPageContent } from './main-page-content';
import OffersEmpty from '../offer-page/offers-empty';
import Spinner from '../../components/spinner/spinner';
import { OfferPreviewType } from '../../types/offer-type';
import { selectCurrentCity} from '../../types/store/selectors';
import { selectIsOffersDataLoading, selectOffers } from '../../store/offers-slice/selectors';


function MainPage(): JSX.Element{
  const offers: OfferPreviewType[] = useAppSelector(selectOffers);
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
